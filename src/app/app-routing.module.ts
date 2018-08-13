import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswerDetailsComponent } from './answer-details/answer-details.component';
import { AnswerContainerComponent } from './answer-container/answer-container.component';

const routes: Routes = [
  { path: '', component: AnswerContainerComponent },
  { path: 'detail/:id', component: AnswerDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
