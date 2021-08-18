import { Component } from '@angular/core';
import { Alunos } from '../model/alunos';
import { MatTableDataSource } from '@angular/material/table';

const LISTA_ALUNOS: Alunos[] = [
  { nome: 'Bruno Rocha', idade: 39, email: 'bruno.roch@gmail.com', celular: '(21) 9876-5432', curso: 'Analise de Sistemas' },
  { nome: 'José Silva', idade: 50, email: 'jose@gmail.com', celular: '(21) 9999-8888', curso: 'Gamer' },
  { nome: 'Maria Joana', idade: 27, email: 'maria@gmail.com', celular: '(21) 9999-5555', curso: 'Direito' },
  { nome: 'Pedro Paulo', idade: 19, email: 'pedro@gmail.com', celular: '(21) 9999-2222', curso: 'Ciência de Dados' }
];

const USER_SCHEMA_ALUNOS = {
  "nome": "text",
  "idade": "number",
  "email": "text",
  "celular": "text",
  "curso": "text"
}

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {
  
  constructor() { }

  exibeAlunos:  boolean = true;

  displayedColumns: string[] = ['nome', 'idade', 'email', 'celular', 'curso'];
  dataSource = new MatTableDataSource(LISTA_ALUNOS);
  dataSchema = USER_SCHEMA_ALUNOS;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _btn: HTMLButtonElement;
  exibirAlunos(event: Event) {
    this._btn = (event.target as HTMLInputElement);
    if (this.exibeAlunos) {
        this.exibeAlunos = false;
        this._btn.firstChild.nodeValue = 'Exibir Alunos';
    } else {
      this.exibeAlunos = true;
      this._btn.firstChild.nodeValue = 'Ocultar Alunos';
    }      
  }

}
