import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { CursosComponent } from './components/pages/cursos/cursos.component';
import { ExperienciasComponent } from './components/pages/experiencias/experiencias.component';
import { LinguagensComponent } from './components/pages/linguagens/linguagens.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'experiencia', component: ExperienciasComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'linguagens', component: LinguagensComponent},
  {path: 'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
