import { Score } from './score';

export class Answer {
    id: number;
    trap: string;
    trap_title: string;
    answer: string;
    answer_title: string;
    score_info: [Score, string][];

    constructor() {
        this.score_info = [];
    }
}
