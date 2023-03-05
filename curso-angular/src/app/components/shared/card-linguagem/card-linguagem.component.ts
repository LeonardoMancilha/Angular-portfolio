import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-linguagem',
  templateUrl: './card-linguagem.component.html',
  styleUrls: ['./card-linguagem.component.css']
})
export class CardLinguagemComponent implements OnInit {
  @Input() nomeLinguagem: string = '';
  @Input() descricaoLinguagem: string = '';

  constructor() { }

  ngOnInit() {
  }

}
