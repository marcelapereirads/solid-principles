import { Component } from '@angular/core';
import { BusinessType } from '../../shared/enums/business-type';

@Component({
  selector: 'app-liskov-substitution',
  templateUrl: './liskov-substitution.component.html',
  styleUrls: ['./liskov-substitution.component.scss']
})
export class LiskovSubstitutionComponent {

  readonly RENT = BusinessType.rent;
  readonly SALE = BusinessType.sale;
  tabActive: BusinessType = this.RENT;

  changeTab(newTab: BusinessType) {
    this.tabActive = newTab;
  }

}
