import { Directive } from '@angular/core';
import { NewLead } from 'src/app/shared/interfaces/lead';
import { GenericService } from '../../../shared/generic.service';

@Directive({})
export class NewLeadComponent {
  formSent = false;

  constructor(protected genericService: GenericService) { }

  getSellerComission(propertyValue: number): number{
    return propertyValue * 0.05;
  };

  submitLead(paramsForm: NewLead) {
    const params = { comission: this.getSellerComission(paramsForm.price), ...paramsForm};
    this.genericService.post(params).subscribe(() => this.formSent = true);
  }
}
