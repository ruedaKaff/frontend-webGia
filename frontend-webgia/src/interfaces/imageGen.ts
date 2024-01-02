
export interface ImageGen {
    prompt: string;
    negativePrompt?: string;
    steps?: number;
    guidance?: number;
    width?: number;
    height?: number;

}