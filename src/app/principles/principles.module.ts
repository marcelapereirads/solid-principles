import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceSegregationPrincipleComponent } from './interface-segregation-principle/interface-segregation-principle.component';
import { StudentComponent } from './interface-segregation-principle/student/student.component';
import { TeacherComponent } from './interface-segregation-principle/teacher/teacher.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InterfaceSegregationPrincipleComponent,
    StudentComponent,
    TeacherComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PrinciplesModule { }
