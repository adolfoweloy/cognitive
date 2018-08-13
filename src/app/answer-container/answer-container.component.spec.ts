import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerContainerComponent } from './answer-container.component';

describe('AnswerContainerComponent', () => {
  let component: AnswerContainerComponent;
  let fixture: ComponentFixture<AnswerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
