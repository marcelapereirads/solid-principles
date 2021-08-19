import { Injectable } from '@angular/core';
import { GenericService } from '../../../shared/generic.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private genericService: GenericService) { }

  getConsultantList(): Observable<any> {
    return this.genericService.getAll();
  }
}
