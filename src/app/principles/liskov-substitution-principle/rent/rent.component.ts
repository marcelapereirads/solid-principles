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

  get sellerComission() {
    const comissionValue = 0.10;
    return this.priceValue * comissionValue;
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
}
