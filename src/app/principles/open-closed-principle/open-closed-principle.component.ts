import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-open-closed-principle',
  templateUrl: './open-closed-principle.component.html',
})
export class OpenClosedPrincipleComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get companyTypeValue(): string {
    return this.form.get('companyType')?.value;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      companyType: [''],
      annualBilling: ['']
    });
  }
}
