import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../shared/generic.service';
import { Consultant } from '../../shared/interfaces/consultant';

@Component({
  selector: 'app-single-responsibility',
  templateUrl: './single-responsibility.component.html',
})
export class SingleResponsibilityComponent implements OnInit {

  consultants!: Consultant[];
  message = '';

  constructor(private genericService: GenericService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.genericService.getAll().subscribe(resp => this.consultants = resp.data);
  }

  sendMessage(consultantName: string) {
    this.message = `Gostaria de entrar em contato com o consultor ${consultantName}.`;
  }

}
