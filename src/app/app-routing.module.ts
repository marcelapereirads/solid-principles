import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenClosedPrincipleComponent } from './principles/open-closed-principle/open-closed-principle.component';
import { LiskovSubstitutionPrincipleComponent } from './principles/liskov-substitution-principle/liskov-substitution-principle.component';
import { InterfaceSegregationPrincipleComponent } from './principles/interface-segregation-principle/interface-segregation-principle.component';

const routes: Routes = [
  //{ path: 'open-closed-principle', component: OpenClosedPrincipleComponent },
  { path: 'liskov-substitution-principle', component: LiskovSubstitutionPrincipleComponent },
  { path: 'interface-segregation-principle', component: InterfaceSegregationPrincipleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
