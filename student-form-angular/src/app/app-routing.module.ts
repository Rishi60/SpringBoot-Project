import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'survey-details', component: SurveyDetailsComponent },
  { path: 'survey-form', component: SurveyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
