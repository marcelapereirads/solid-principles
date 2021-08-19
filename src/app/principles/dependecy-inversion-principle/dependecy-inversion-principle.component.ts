import { Component, ContentChild, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MomentUtilService } from './services/moment-util.service';
import { DATE_UTILS } from './tokens/moment.token';
import { DateUtils } from './interface/date-utils.interface';

@Component({
  selector: 'app-dependecy-inversion-principle',
  templateUrl: './dependecy-inversion-principle.component.html',
  providers: [
    {provide: DATE_UTILS, useClass: MomentUtilService}
  ],
})
export class DependecyInversionPrincipleComponent implements OnInit {

  now!: any;

  constructor(
    @Inject(DATE_UTILS) public dateHelper: MomentUtilService
  ) { }

  ngOnInit(): void {
    this.now = this.dateHelper.formatDate(this.dateHelper.now());
  }
}
