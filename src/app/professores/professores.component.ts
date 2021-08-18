import { Component } from '@angular/core';
import { Professores } from '../model/professores';
import { MatTableDataSource } from '@angular/material/table';

const LISTA_PROFESSORES: Professores[] = [
  { nome: 'Tio Buffett', idade: 45, email: 'buffett@gmail.com', celular: '(21) 8888-1111', materia: 'Licenciatura' },
  { nome: 'Tio Jeff', idade: 50, email: 'jeff@gmail.com', celular: '(21) 8888-2222', materia: 'Educação Física' },
  { nome: 'Tia Trajano', idade: 47, email: 'magalu@gmail.com', celular: '(21) 8888-3333', materia: 'Inglês' },
  { nome: 'Tio Bill', idade: 55, email: 'gates@msn.com', celular: '(21) 8888-4444', materia: 'Português' }
];

const USER_SCHEMA_PROFESSORES = {
  "nome": "text",
  "idade": "number",
  "email": "text",
  "celular": "text",
  "materia": "text"
}
@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {

  constructor() { }

  exibeProfessores:  boolean = true;

  displayedColumns: string[] = ['nome', 'idade', 'email', 'celular', 'materia'];
  dataSource = new MatTableDataSource(LISTA_PROFESSORES);
  dataSchema = USER_SCHEMA_PROFESSORES;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _btn: HTMLButtonElement;
  exibirProfessores(event: Event) {
    this._btn = (event.target as HTMLInputElement);
    if (this.exibeProfessores) {
        this.exibeProfessores = false;
        this._btn.firstChild.nodeValue = 'Exibir Professores';
    } else {
      this.exibeProfessores = true;
      this._btn.firstChild.nodeValue = 'Ocultar Professores';
    }      
  }

}
