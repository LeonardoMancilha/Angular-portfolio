import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciasComponent } from './components/pages/experiencias/experiencias.component';
import { CursosComponent } from './components/pages/cursos/cursos.component';
import { LinguagensComponent } from './components/pages/linguagens/linguagens.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/shared/card/card.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CardCursoComponent } from './components/shared/card-curso/card-curso.component';
import {ReactiveFormsModule } from '@angular/forms';
import { CardLinguagemComponent } from './components/shared/card-linguagem/card-linguagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciasComponent,
    CursosComponent,
    LinguagensComponent,
    CardComponent,
    SobreComponent,
    CursosComponent,
    CardCursoComponent,
    CardLinguagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardComponent,
    CardCursoComponent,
    CardLinguagemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
