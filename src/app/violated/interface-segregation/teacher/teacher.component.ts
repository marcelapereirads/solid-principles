import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonInterface } from './../interfaces/person.interface';
import { Person } from '../../../shared/interfaces/person';
import { GenericService } from '../../../shared/generic.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent implements OnInit, PersonInterface {

  readonly minWage = 1500;
  formGroup!: FormGroup;
  formSent = false;
  wageInvalid = false;

  get formValues(): Person {
    return this.formGroup.value;
  }


  get wageIsValid() {
    return !this.formGroup.get('wage')?.hasError('min');
  }

  constructor(
    private formBuilder: FormBuilder,
    private genericService: GenericService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      documentNumber: [''],
      wage: [null, [Validators.required, Validators.min(this.minWage)]]
    });
  }

  save() {
    this.wageIsValid ?
      this.genericService.post(this.formValues).subscribe(() => {
        this.formSent = true;
        this.wageInvalid = false;
      }) :
      this.wageInvalid = true;
  }
}
