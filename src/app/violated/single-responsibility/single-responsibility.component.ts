import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  /* Comunicação com o serviço dentro da classe é problemático, pois caso mude algo na estrutura
  precisa ser alterado em todos os lugares */
  loadUsers() {
    this.http.get('https://reqres.in/api/users').subscribe((resp: any) => this.consultants = resp.data); //corrigir
  }

  /* Cada classe deveria ser responsável por apenas um assunto */
  setMessage(consultantName: string) {
    this.message = `Gostaria de entrar em contato com o consultor ${consultantName}.`;
  }

}
