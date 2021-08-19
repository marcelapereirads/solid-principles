import { InjectionToken } from '@angular/core';
import { MomentUtilService } from '../services/moment-util.service';

export const DATE_UTILS = new InjectionToken<MomentUtilService>('DATE_UTILS');
