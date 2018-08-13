import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AnswerServiceService } from '../answer-service.service';

import { Score } from '../score';
import { Answer } from '../answer';

@Component({
  selector: 'app-answer-details',
  templateUrl: './answer-details.component.html',
  styleUrls: ['./answer-details.component.css']
})
export class AnswerDetailsComponent implements OnInit {
  answer: Answer;
  score: Score;
  score_description: string;

  add() {
    this.answer.score_info.push(
      [this.score, this.score_description]);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private answerService: AnswerServiceService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.answerService.getBy(id)
      .subscribe(answer => this.answer = answer);
  }

}
