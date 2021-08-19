import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceSegregationPrincipleComponent } from './interface-segregation-principle/interface-segregation-principle.component';
import { StudentComponent } from './interface-segregation-principle/student/student.component';
import { TeacherComponent } from './interface-segregation-principle/teacher/teacher.component';
import { SharedModule } from '../shared/shared.module';
import { DependecyInversionPrincipleComponent } from './dependecy-inversion-principle/dependecy-inversion-principle.component';
import { CardComponent } from './open-closed-principle/card/card.component';
import { OpenClosedPrincipleComponent } from './open-closed-principle/open-closed-principle.component';
import { SingleResponsibilyPrincipleComponent } from './single-responsibily-principle/single-responsibily-principle.component';

@NgModule({
  declarations: [
    InterfaceSegregationPrincipleComponent,
    StudentComponent,
    TeacherComponent,
    //DependecyInversionPrincipleComponent,
    CardComponent,
    OpenClosedPrincipleComponent,
    SingleResponsibilyPrincipleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PrinciplesModule { }
