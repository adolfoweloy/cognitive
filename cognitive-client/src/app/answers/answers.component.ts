import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer';
import { AnswerServiceService } from '../answer-service.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answers: Answer[];

  onRemove(answer: Answer) {
    this.answerService.remove(answer);
    this.getAnswers();
  }

  getAnswers(): void {
    this.answerService.getAnswers()
      .subscribe(answers => this.answers = answers);
  }

  constructor(private answerService: AnswerServiceService) { 
  }

  ngOnInit() {
    this.getAnswers();
  }

}
