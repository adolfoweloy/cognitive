import { TestBed, inject } from '@angular/core/testing';

import { AnswerServiceService } from './answer-service.service';

describe('AnswerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerServiceService]
    });
  });

  it('should be created', inject([AnswerServiceService], (service: AnswerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
