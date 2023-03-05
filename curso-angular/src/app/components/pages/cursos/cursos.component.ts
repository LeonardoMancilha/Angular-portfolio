import { Component } from '@angular/core';
import { CursoModel } from 'src/app/models/curso-model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: CursoModel[] = [
    {
      titulo: 'Cursos',
      nomeCurso: 'Informática para Internet',
      descricaoCurso: 'Aqui foi o meu início no mundo da Programação. Iniciei o curso em 2019 e finalizei em 2021 pela ETEC Paulino Botelho. Esse curso deu a oportunidade de vivenciar situações reais em um dia de trabalho dentro de uma empresa, sendo visíveis o trabalho em equipe, os desafios e problemas que podemos evidenciar, entre tantas coisas.'
    },
    {
      titulo: 'Cursos',
      nomeCurso: 'HTML e CSS',
      descricaoCurso: 'O curso está em andamento pelo CursoemVideo, durante o curso procuro colocar em prática o que aprendi através dos meus projetos pessoais. Atualmente finalizei o Módulo 4 e estou no aguardo para a liberação do Módulo 5 que é o último módulo então estou para finalizar o curso.'
    },
    {
      titulo: 'Cursos',
      nomeCurso: 'JavaScript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns',
      descricaoCurso: 'Curso FullStack em andamento pela Udemy, atualmente estou vendo JavaScript Avançado mais especificamente Orientação a Objetos e adiante irei aprender JavaScript Assíncrono, Módulos, API Rest, React, TypeScript e entre outras tecnologias.'
    },
    {
      titulo: 'Cursos',
      nomeCurso: 'Banco PAN Java Developer',
      descricaoCurso: 'Comecei a fazer o BootCamp no mês passado com o objetivo de aprender Java visando a importância dela no mercado de trabalho e principalmente por aprofundar em Lógica de Programação, Estrutura de Dados e Algoritmos porque elas são a base da Programação e aprender essa base nelas significa resolver problemas de forma eficiente.'
    },
    {
      titulo: 'Cursos',
      nomeCurso: 'Caminho da Fluência - Inglês',
      descricaoCurso: 'Desde 2020 venho estudando Inglês por conta própria, praticando a conversação e agora comecei a fazer um curso online para melhorar meus conhecimentos no idioma e ter um professor ao meu lado para me ajudar. Em 2021 fiz o teste de Inglês do Cambridge University Press and Assessment English e meu nível dado foi B1 e graças aos meus estudos hoje eu consigo manter uma conversação em Inglês.'
    }
  ]
}
