import { Component, OnInit } from '@angular/core';
import { AnswerServiceService } from '../answer-service.service';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
  answer: Answer;

  onSave() {  
    this.answerService.add(this.answer);
    this.answer = new Answer();
  }

  constructor(private answerService: AnswerServiceService) { }

  ngOnInit() {
    this.answer = new Answer();
  }

}
