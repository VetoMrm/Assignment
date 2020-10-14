import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import {
  MatSidenavModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSort,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
} from "@angular/material";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { CreateexamComponent, Question, QuestionList } from 'src/app/modules/exam/quizexam/createexam/createexam.component';
import { ComingsoonComponent } from 'src/app/modules/exam/comingsoon/comingsoon.component';
import { DraftexamComponent } from 'src/app/modules/exam/quizexam/draftexam/draftexam.component';
import { MyexamsComponent } from 'src/app/modules/exam/quizexam/myexams/myexams.component';
import { ScheduleexamComponent } from 'src/app/modules/exam/quizexam/scheduleexam/scheduleexam.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

@NgModule({
  declarations: [DefaultComponent,ComingsoonComponent,CreateexamComponent,QuestionList,Question,DraftexamComponent,MyexamsComponent,ScheduleexamComponent,DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDividerModule
  ],
  entryComponents: [Question,QuestionList]
})
export class DefaultModule {}
