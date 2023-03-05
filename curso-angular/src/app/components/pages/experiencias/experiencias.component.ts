import { Component, EventEmitter, OnChanges, Output } from '@angular/core';
import { CardModel } from 'src/app/models/card-model';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  cards: CardModel[] = [
    {
      titulo:"Projetos",
      tituloProjeto:"Formulário de Pesquisa",
      descricaoProjeto:"Meu primeiro projeto em HTML e CSS sobre um formulário de pesquisa. A partir dele eu pude evoluir bastante.",
      paragrafoTecnologias:"Tecnologias usadas no projeto: HTML e CSS.",
      imagemUrl:"https://leonardomancilha.github.io/assets/img/project1.png",
      linkImagem:"https://leonardomancilha.github.io/Form-research/",
      icone:"https://leonardomancilha.github.io/assets/img/link.png",
      redeSocial:"https://github.com/LeonardoMancilha/Form-research"
    },
    {
      titulo:"Projetos",
      tituloProjeto:"Landing Page",
      descricaoProjeto:"Projeto realizado em HTML e CSS sobre uma Landing Page feito pelo FrontendMentor.",
      paragrafoTecnologias:"Tecnologias usadas no projeto: HTML e CSS.",
      imagemUrl:"https://leonardomancilha.github.io/assets/img/project2.png",
      linkImagem:"https://leonardomancilha.github.io/Landing-Page/",
      icone:"https://leonardomancilha.github.io/assets/img/link.png",
      redeSocial:"https://github.com/LeonardoMancilha/Landing-Page"
    },
    {
      titulo:"Projetos",
      tituloProjeto:"Modo escuro",
      descricaoProjeto:"Projeto realizado em HTML, CSS e JavaScript do modo escuro.",
      paragrafoTecnologias:"Tecnologias usadas no projeto: HTML e CSS.",
      imagemUrl:"https://leonardomancilha.github.io/assets/img/project3.png",
      linkImagem:"https://leonardomancilha.github.io/Dark-mode/",
      icone:"https://leonardomancilha.github.io/assets/img/link.png",
      redeSocial:"https://github.com/LeonardoMancilha/Dark-mode"
    },
    {
      titulo:"Projetos",
      tituloProjeto:"Criador de Tarefas",
      descricaoProjeto:"Projeto realizado em HTML, CSS e JavaScript de criação de tarefas.",
      paragrafoTecnologias:"Tecnologias usadas no projeto: HTML e CSS.",
      imagemUrl:"https://leonardomancilha.github.io/assets/img/project4.png",
      linkImagem:"https://leonardomancilha.github.io/Create-Tasks/",
      icone:"https://leonardomancilha.github.io/assets/img/link.png",
      redeSocial:"https://github.com/LeonardoMancilha/Create-Tasks"
    }
];
}