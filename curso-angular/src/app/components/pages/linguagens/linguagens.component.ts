import { Component } from '@angular/core';
import { LinguagemModel } from 'src/app/models/linguagem-model';

@Component({
  selector: 'app-linguagens',
  templateUrl: './linguagens.component.html',
  styleUrls: ['./linguagens.component.css']
})

export class LinguagensComponent {
  linguagens: LinguagemModel[] = [
    {
      nomeLinguagem: 'HTML e CSS',
      descricaoLinguagem: 'Tive o primeiro contato em 2019 no curso técnico. No começo tive muitas dificuldades já que eu não sabia nada sobre o assunto mas com o passar do curso pude melhorar os meus conhecimentos pesquisando minhas dúvidas no Google e é claro pedindo ajuda para os meus colegas e para os meus professores e hoje em dia posso notar uma grande diferença do quanto eu melhorei graças ao curso e a minha iniciativa de estudar fora do curso também.'
    },
    {
      nomeLinguagem: 'JavaScript',
      descricaoLinguagem: 'Não tive contato com JavaScript durante o curso técnico, mas quando eu decidi seguir no Front-end em 2020, procurei aprender em cursos da Digital Innovation One, CursoemVideo e também pela Documentação do W3Schools mas eu tive dificuldades com a linguagem e não conseguia aprender os conteúdos. Porém, em 2021 comprei o curso da Udemy e então aprendi a ter disciplina e então venho estudando e melhorando meus conhecimentos em JS.'
    },
    {
      nomeLinguagem: 'Bootstrap',
      descricaoLinguagem: 'Usei o Bootstrap no curso técnico a partir do segundo ano em um projeto Front-end e Back-end usando PHP, MySQL e Bootstrap sobre um Banco de Dados de Estacionamento, também usei em outros exercícios mais básicos e usei principalmente no meu TCC usando o CMS Joomla onde o tema do meu projeto era Doações de Livros.'
    },
    {
      nomeLinguagem: 'MySQL',
      descricaoLinguagem: 'Também tive contato no segundo ano do curso fazendo diversos exercícios sobre como consultar uma tabela, criação de tabelas, inserção de registros, alteração de registros, consultas com operadores, exclusão de registros etc. No final do semestre então tivemos o projeto FullStack e o TCC'
    },
    {
      nomeLinguagem: 'Python',
      descricaoLinguagem: 'Em 2020 no meio da pandemia pensei comigo o que eu gostaria de fazer para não ficar parado, visto isso, procurei por Python no YouTube e encontrei o curso do Gustavo Guanabara comecei a fazer o mesmo junto com meu irmão e foi um aprendizado muito divertido para mim e para ele, pois a cada desafio que tinhamos que fazer a gente discutia sobre como nós chegamos a resolução do problema e isso gerava um networking entre nós dois.'
    },
    {
      nomeLinguagem: 'PHP',
      descricaoLinguagem: 'No segundo ano do curso comecei a aprender o PHP. Comecei fazendo exercícios básicos e aos poucos o professor foi aprofundando na linguagem e passando desafios mais desafiadores mas consegui ter sucesso neles e ajudar alguns dos colegas do curso.'
    },
    {
      nomeLinguagem: 'C++',
      descricaoLinguagem: 'Lógica de Programação usando C++ foi o que eu tive no primeiro ano do curso, apanhei bastante no começo mas mesmo assim procurava entender todo o conteúdo passado e assim colocar a mão na massa, claro que, as dificuldades não foram acabaram e por causa disso pedia ajuda sempre que precisava, tentava resolver pesquisando a minha dificuldade no Google e quando não conseguia encontrar a solução então pedia ajuda ao pessoal.'
    },
    {
      nomeLinguagem: 'C#',
      descricaoLinguagem: 'Foi no terceiro ano que comecei a aprender C#.Net e o processo de aprendizado foi no começo com exercícios básicos e aos poucos subindo o nível de dificuldade e assim pude ter um conhecimento básico na linguagem'
    }
  ]
}
