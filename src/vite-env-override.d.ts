declare module "*.HEIC" {
    const value: string;
    export default value;
}

declare module "*.heic" {
    const value: string;
    export default value;
}

declare module "aos" {
    const AOS: {
        init(options?: any): void;
        refresh(): void;
    };
    export default AOS;
}

declare module "*.mp4" {
    const src: string;
    export default src;
}
