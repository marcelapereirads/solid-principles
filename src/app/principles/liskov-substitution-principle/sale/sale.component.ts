import { Component, OnInit } from '@angular/core';
import { NewLeadComponent } from '../new-lead/new-lead.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from '../../../shared/generic.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent extends NewLeadComponent implements OnInit {

  formGroup!: FormGroup;

  get priceValue() {
    return this.formGroup.get('price')?.value;
  }

  get sellerComission() {
    const comissionValue = 0.05;
    return this.priceValue * comissionValue;
  }

  constructor(
    protected genericService: GenericService,
    private formBuilder: FormBuilder,
  ) {
    super(genericService);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      propertyType: ['', Validators.required],
      description: [''],
      price: [null, Validators.required],
      acceptFinancing: [false],
      phone: ['', Validators.required],
    });
  }

  save() {
    this.submitLead(this.formGroup.value);
  }

}
