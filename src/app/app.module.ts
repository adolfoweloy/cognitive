import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { FormsModule } from '@angular/forms';
import { AnswerFormComponent } from './answer-form/answer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
