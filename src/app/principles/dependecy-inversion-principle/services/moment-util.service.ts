import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DateUtils } from '../interface/date-utils.interface';

moment.locale('pt-br');

@Injectable({
  providedIn: 'root'
})
export class MomentUtilService implements DateUtils {

  constructor() { }

  now() {
    return moment();
  }

  formatDate(date: moment.Moment) {
    return date.format('LLLL');
  }
}
