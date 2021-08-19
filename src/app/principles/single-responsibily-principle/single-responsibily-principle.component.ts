import { Component, OnInit } from '@angular/core';
import { ConsultantService } from './services/consultant.service';
import { Consultant } from '../../shared/interfaces/consultant';
import { WhatsappService } from './services/whatsapp.service';

@Component({
  selector: 'app-single-responsibily-principle',
  templateUrl: './single-responsibily-principle.component.html',
})
export class SingleResponsibilyPrincipleComponent implements OnInit {

  consultants!: Consultant[];
  message = '';

  constructor(
    private consultantService: ConsultantService,
    private whatsappService: WhatsappService
    ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.consultantService.getConsultantList().subscribe(resp => this.consultants = resp.data);
  }

  contact(consultantName: string) {
    this.message = this.whatsappService.getMessage(consultantName);
  }
}
