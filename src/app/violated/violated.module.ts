import { CardComponent } from './open-closed/card/card.component';
import { TeacherComponent } from './interface-segregation/teacher/teacher.component';
import { StudentComponent } from './interface-segregation/student/student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceSegregationComponent } from './interface-segregation/interface-segregation.component';
import { SharedModule } from '../shared/shared.module';
import { DependecyInversionComponent } from './dependecy-inversion/dependecy-inversion.component';
import { OpenClosedComponent } from './open-closed/open-closed.component';
import { LiskovSubstitutionComponent } from './liskov-substitution/liskov-substitution.component';
import { RentComponent } from './liskov-substitution/rent/rent.component';
import { SaleComponent } from './liskov-substitution/sale/sale.component';
import { SingleResponsibilityComponent } from './single-responsibility/single-responsibility.component';

@NgModule({
  declarations: [
    InterfaceSegregationComponent,
    StudentComponent,
    TeacherComponent,
    ////////////////////
    //DependecyInversionComponent,
    OpenClosedComponent,
    CardComponent,
    LiskovSubstitutionComponent,
    RentComponent,
    SaleComponent,
    SingleResponsibilityComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ViolatedModule { }
