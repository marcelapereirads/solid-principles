export interface Person {
  name: string;
  documentNumber?: string;
}

export interface Student extends Person {
  registrationNumber: number;
}

export interface Teacher extends Person {
  wage: number;
}
