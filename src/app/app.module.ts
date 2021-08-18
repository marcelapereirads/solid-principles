import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenClosedComponent } from './violated/open-closed/open-closed.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpenClosedPrincipleComponent } from './principles/open-closed-principle/open-closed-principle.component';
import { CompanyTypeComponent } from './principles/open-closed-principle/company-type/company-type.component';
import { MeiCompanyComponent } from './principles/open-closed-principle/mei-company/mei-company.component';
import { LiskovSubstitutionPrincipleComponent } from './principles/liskov-substitution-principle/liskov-substitution-principle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentComponent } from './principles/liskov-substitution-principle/rent/rent.component';
import {HttpClientModule} from '@angular/common/http';
import { SaleComponent } from './principles/liskov-substitution-principle/sale/sale.component';

const materialComponents = [

];

@NgModule({
  declarations: [
    AppComponent,
    // OpenClosedComponent,
    // OpenClosedPrincipleComponent,
    // MeiCompanyComponent,
    LiskovSubstitutionPrincipleComponent,
    RentComponent,
    SaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    FormBuilder,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
