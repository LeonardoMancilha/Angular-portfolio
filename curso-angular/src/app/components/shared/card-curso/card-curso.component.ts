import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() nomeCurso: string = '';
  @Input() descricaoCurso: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
