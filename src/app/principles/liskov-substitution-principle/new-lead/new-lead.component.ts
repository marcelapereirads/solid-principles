import { Directive } from '@angular/core';
import { NewLead } from 'src/app/shared/interfaces/lead';
import { GenericService } from '../../../shared/generic.service';

@Directive({})
export abstract class NewLeadComponent {
  formSent = false;

  constructor(protected genericService: GenericService) { }

  abstract get sellerComission(): number;

  submitLead(paramsForm: NewLead) {
    const params = { comission: this.sellerComission, ...paramsForm};
    this.genericService.post(params).subscribe(() => this.formSent = true);
  }
}
