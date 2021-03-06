import { Component } from '@angular/core';
import { BusinessType } from '../../shared/enums/business-type';

@Component({
  selector: 'app-liskov-substitution-principle',
  templateUrl: './liskov-substitution-principle.component.html',
  styleUrls: ['./liskov-substitution-principle.component.scss']
})
export class LiskovSubstitutionPrincipleComponent {

  readonly RENT = BusinessType.rent;
  readonly SALE = BusinessType.sale;
  tabActive: BusinessType = this.RENT;

  changeTab(newTab: BusinessType) {
    this.tabActive = newTab;
  }
}
