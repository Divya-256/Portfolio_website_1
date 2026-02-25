
from dotenv import load_dotenv
import os
from pypdf import PdfReader
import gradio as gr
from openai import OpenAI

# Load environment variables
load_dotenv(override=True)
openrouter_api_key = os.getenv('OPENROUTER_API_KEY')

if not openrouter_api_key:
    print("WARNING: OPENROUTER_API_KEY not found in environment variables.")

# Initialize OpenRouter client (OpenAI-compatible)
client = None
try:
    client = OpenAI(
        base_url="https://openrouter.ai/api/v1",
        api_key=openrouter_api_key,
    )
    print("✅ OpenRouter client initialized")
except Exception as e:
    print(f"Error configuring OpenRouter: {e}")

# Load Knowledge Base
profile_text = ""
summary = ""
resume_text = ""

# Read Profile (Primary - most comprehensive)
try:
    with open("me/profile.md", "r", encoding="utf-8") as f:
        profile_text = f.read()
    print("✅ Loaded profile.md")
except FileNotFoundError:
    print("⚠️ profile.md not found.")

# Read Summary (Secondary)
try:
    with open("me/summary.txt", "r", encoding="utf-8") as f:
        summary = f.read()
    print("✅ Loaded summary.txt")
except FileNotFoundError:
    print("ℹ️ summary.txt not found.")

# Read PDF (Supplementary)
try:
    reader = PdfReader("me/Resume.pdf")
    for page in reader.pages:
        text = page.extract_text()
        if text:
            resume_text += text
    print("✅ Loaded Resume.pdf")
except Exception:
    print("ℹ️ Resume.pdf not found or could not be read. Proceeding without it.")


name = "Divyasree M"
system_prompt = f"""You are {name}'s Digital Twin — an AI assistant that answers questions about her career, skills, projects, and background.

CRITICAL RULES:
1. Answer ONLY using the information provided in the context below. Do NOT use your own training knowledge about companies, technologies, or people.
2. If a detail is not explicitly stated in the context, say "I don't have that specific detail in my profile" — do NOT infer or guess.
3. Do NOT embellish, add extra facts, or make up metrics not present in the context.
4. Answer in first person ("I built...", "My role was...") for a Digital Twin experience.
5. Be professional, engaging, and concise.
6. Company names, project descriptions, and technologies must be taken EXACTLY from the context — never from your own knowledge.

## PRIMARY PROFILE (Use this as the single source of truth):
{profile_text}

## Additional Summary:
{summary}

## Resume (PDF):
{resume_text}
"""

def chat_function(message, history):
    if not client:
        return "Error: OPENROUTER_API_KEY is missing or client is not configured."

    # Build messages list (OpenAI-compatible format)
    messages = [{"role": "system", "content": system_prompt}]

    # Add conversation history
    for turn in history:
        if isinstance(turn, dict):
            messages.append({"role": turn.get("role", "user"), "content": turn.get("content", "")})
        elif isinstance(turn, (list, tuple)) and len(turn) == 2:
            messages.append({"role": "user", "content": turn[0]})
            if turn[1]:
                messages.append({"role": "assistant", "content": turn[1]})

    # Add current user message
    messages.append({"role": "user", "content": message})

    # Try models in order, fall back if rate limited or unavailable
    models_to_try = [
        "meta-llama/llama-3.3-70b-instruct:free",
        "openai/gpt-oss-120b:free",
        "qwen/qwen3-next-80b-a3b-instruct:free",
        "nvidia/nemotron-nano-12b-v2-vl:free",
        "qwen/qwen3-coder:free",
    ]

    for model_id in models_to_try:
        try:
            response = client.chat.completions.create(
                model=model_id,
                messages=messages,
                max_tokens=2048,
            )
            return response.choices[0].message.content
        except Exception as e:
            err = str(e)
            if "429" in err or "404" in err or "rate limit" in err.lower() or "no endpoints" in err.lower():
                continue
    return "I'm currently experiencing high demand. Please try again in a moment!"

def simple_chat(message: str) -> str:
    """Simple single-turn chat endpoint for the Gradio JS client."""
    return chat_function(message, [])

EXAMPLE_QUESTIONS = [
    "Tell me about yourself",
    "What is your tech stack?",
    "What awards have you won?",
    "Tell me about your experience at Tarento",
]

custom_css = """
.gradio-container { width: 100% !important; max-width: 860px !important; margin: 0 auto !important; }
footer { display: none !important; }
#output-md { 
    max-height: 400px; 
    overflow-y: auto; 
    padding: 1rem; 
    border-radius: 8px; 
    border: 1px solid var(--border-color-primary, #e5e7eb); 
    font-size: 0.97rem; 
    line-height: 1.7; 
}
#copy-btn-row { display: flex; justify-content: flex-end; margin-top: 4px; }
#copy-btn-row button { font-size: 0.8rem; padding: 4px 12px; border-radius: 6px; border: 1px solid var(--border-color-primary, #d1d5db); background: var(--button-secondary-background-fill, white); cursor: pointer; }
#copy-btn-row button:hover { background: var(--button-secondary-background-fill-hover, #f3f4f6); }
"""

with gr.Blocks(css=custom_css, title=f"{name}'s Digital Twin") as demo:
    last_response = gr.State("")

    # Header
    gr.HTML(f"""
        <div style="text-align:center; padding: 1.2rem 0 0.5rem 0;">
            <h1 style="font-size:1.8rem; font-weight:700; margin-bottom:0.3rem;">🤖 {name}'s Digital Twin</h1>
            <p style="color:#6b7280; font-size:0.95rem;">Ask me anything about her career, projects, and skills.</p>
        </div>
    """)

    # Input area
    input_box = gr.Textbox(
        label="Your Question",
        placeholder="tell me about yourself",
        lines=3,
    )

    with gr.Row():
        submit_btn = gr.Button("Ask →", variant="primary", scale=3)
        clear_btn = gr.ClearButton([input_box], value="Clear", scale=1)

    # Example questions
    gr.HTML("<p style='font-size:0.82rem; color:#9ca3af; margin: 0.5rem 0 0.25rem 0;'>💡 Try asking:</p>")
    gr.Examples(
        examples=[[q] for q in EXAMPLE_QUESTIONS],
        inputs=[input_box],
        label="",
    )

    # Output area
    gr.HTML("<p style='font-size:0.85rem; font-weight:600; margin: 1rem 0 0.3rem 0;'>Response</p>")
    output_md = gr.Markdown(elem_id="output-md", value="*Your answer will appear here...*")

    # Wire up submit
    def handle_submit(message):
        response = simple_chat(message)
        return response, response

    submit_btn.click(fn=handle_submit, inputs=[input_box], outputs=[output_md, last_response])
    input_box.submit(fn=handle_submit, inputs=[input_box], outputs=[output_md, last_response])

if __name__ == "__main__":
    demo.launch()
