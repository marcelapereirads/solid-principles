import { Component, OnInit } from '@angular/core';
import { NewLeadComponent } from '../new-lead/new-lead.component';
import { GenericService } from '../../../shared/generic.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
})
export class RentComponent extends NewLeadComponent implements OnInit {

  formGroup!: FormGroup;

  get priceValue() {
    return this.formGroup.get('price')?.value;
  }

  constructor(
    protected genericService: GenericService,
    private formBuilder: FormBuilder,
  ) {
    super(genericService);
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      propertyType: ['', Validators.required],
      description: [''],
      price: [null, Validators.required],
      phone: ['', Validators.required],
    });
  }

  save() {
    this.submitLead(this.formGroup.value);
  }

  getSellerComission(propertyValue: number): number {
    if (propertyValue <= 0) {
      throw new Error('INVALID VALUE');
    }

    const comissionValue = 0.10;
    return propertyValue * comissionValue;
  }
}
