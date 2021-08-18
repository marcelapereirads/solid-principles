import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewLead } from 'src/app/shared/interfaces/lead';
import { GenericService } from '../../../shared/generic.service';

@Directive({
  selector: 'app-new-lead'
})
export abstract class NewLeadComponent {
  @Input() form!: FormGroup;
  formSent = false;

  constructor(protected genericService: GenericService) { }

  abstract get sellerComission(): number;

  submitLead(paramsForm: NewLead) {
    const params = { comission: this.sellerComission, ...paramsForm};
    this.genericService.post(params).subscribe(() => this.formSent = true);
  }
}
