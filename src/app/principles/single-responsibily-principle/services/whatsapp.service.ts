import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  getMessage(consultantName: string) {
    return `Gostaria de entrar em contato com o consultor ${consultantName}.`;
  }
}
