import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenClosedPrincipleComponent } from './principles/open-closed-principle/open-closed-principle.component';
import { LiskovSubstitutionPrincipleComponent } from './principles/liskov-substitution-principle/liskov-substitution-principle.component';
import { InterfaceSegregationPrincipleComponent } from './principles/interface-segregation-principle/interface-segregation-principle.component';
import { InterfaceSegregationComponent } from './violated/interface-segregation/interface-segregation.component';
import { DependecyInversionPrincipleComponent } from './principles/dependecy-inversion-principle/dependecy-inversion-principle.component';
import { DependecyInversionComponent } from './violated/dependecy-inversion/dependecy-inversion.component';
import { OpenClosedComponent } from './violated/open-closed/open-closed.component';
import { LiskovSubstitutionComponent } from './violated/liskov-substitution/liskov-substitution.component';
import { SingleResponsibilityComponent } from './violated/single-responsibility/single-responsibility.component';
import { SingleResponsibilyPrincipleComponent } from './principles/single-responsibily-principle/single-responsibily-principle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'single-responsibility-principle', component: SingleResponsibilyPrincipleComponent },
  { path: 'single-responsibility-violated', component: SingleResponsibilityComponent },
  { path: 'open-closed-principle', component: OpenClosedPrincipleComponent },
  { path: 'open-closed-violated', component: OpenClosedComponent },
  { path: 'liskov-substitution-principle', component: LiskovSubstitutionPrincipleComponent },
  { path: 'liskov-substitution-violated', component: LiskovSubstitutionComponent },
  { path: 'interface-segregation-principle', component: InterfaceSegregationPrincipleComponent },
  { path: 'interface-segregation-violated', component: InterfaceSegregationComponent },
  { path: 'dependency-inversion-principle', component: DependecyInversionPrincipleComponent },
  { path: 'dependency-inversion-violated', component: DependecyInversionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
