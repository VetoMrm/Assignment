import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ComingsoonComponent } from './modules/exam/comingsoon/comingsoon.component';
import { CreateexamComponent } from './modules/exam/quizexam/createexam/createexam.component';
import { DraftexamComponent } from './modules/exam/quizexam/draftexam/draftexam.component';
import { MyexamsComponent } from './modules/exam/quizexam/myexams/myexams.component';
import { ScheduleexamComponent } from './modules/exam/quizexam/scheduleexam/scheduleexam.component';


const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "comingsoon", component: ComingsoonComponent },
      { path: "createExam", component: CreateexamComponent },
      { path: "draftExam", component: DraftexamComponent },
      { path: "myExam", component: MyexamsComponent },
      { path: "scheduleExam", component: ScheduleexamComponent }
    ],   
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
