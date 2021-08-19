import { TeacherComponent } from './interface-segregation/teacher/teacher.component';
import { StudentComponent } from './interface-segregation/student/student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceSegregationComponent } from './interface-segregation/interface-segregation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InterfaceSegregationComponent,
    StudentComponent,
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ViolatedModule { }
