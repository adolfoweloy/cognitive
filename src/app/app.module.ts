import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { FormsModule } from '@angular/forms';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { AnswerDetailsComponent } from './answer-details/answer-details.component';
import { AnswerContainerComponent } from './answer-container/answer-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    AnswerFormComponent,
    AnswerDetailsComponent,
    AnswerContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
