export class Chapter {
    text: Paragraph[];
    title: string;
}

export interface Paragraph {
    sentence: Sentence[];
}

export interface Sentence {
    id: number;
    text: string;
}