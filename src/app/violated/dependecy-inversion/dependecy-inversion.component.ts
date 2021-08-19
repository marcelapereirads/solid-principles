import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dependecy-inversion',
  templateUrl: './dependecy-inversion.component.html',
})
export class DependecyInversionComponent {

  now = moment().format('LLLL');
}
