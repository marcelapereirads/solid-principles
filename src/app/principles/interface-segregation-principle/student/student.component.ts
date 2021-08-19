import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../../shared/interfaces/person';
import { GenericService } from '../../../shared/generic.service';
import { PersonInterface } from '../interfaces/person.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit, PersonInterface {

  formGroup!: FormGroup;
  formSent = false;

  get formValues(): Person {
    return this.formGroup.value;
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
      registrationNumber: ['', Validators.required]
    });
  }

  save() {
    this.genericService.post(this.formValues).subscribe(() => this.formSent = true);
  }
}
