import { Injectable } from '@angular/core';
import { Answer } from './answer';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {
  answers: Answer[] = [
    {
      id: 1,
      trap_title: "Filtro mental:",
      trap: "você chega a conclusões "
        + "após manter o foco nos detalhes negativos e "
        + "deixa de fora de seu filtro os detalhes positovos",
      answer_title: "Expandir o seu foco:",
      answer: "Pergunte a si mesmo \"O que eu não estou "
      + "considerando?\". Se você estiver focando apenas o "
      + "que está dando errado, pergunte a si mesmo: O que "
      + "está indo bem? ou o que está aconteceudo e que eu "
      + "estou de acordo?",
      score_info: []
    }
  ];

  add(answer: Answer): void {
    var lastId = 1;
    
    if (this.answers.length > 0) {
      let ids = this.answers.map(a => a.id).sort((a, b) => b - a);
      lastId = ids[0] + 1;
    }

    answer.id = lastId;
    this.answers.push(answer);
  }

  remove(answer: Answer): void {
    this.answers = this.answers.filter(a => a.id != answer.id);
  }

  getBy(id: number): Observable<Answer> {
    let ans = this.answers.filter(a => a.id == id);
    return of(ans[0]);
  }

  getAnswers(): Observable<Answer[]> {
    return of(this.answers);
  }

  constructor() { }
}
