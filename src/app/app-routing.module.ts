import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Aluno
  {
    path: 'alunos',
    component: AlunosComponent
  },
  //Professor
  {
    path: 'professores',
    component: ProfessoresComponent
  },
  //Error 404
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
