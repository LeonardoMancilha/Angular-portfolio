import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() titulo : string = '';
  @Input() imagemUrl : string = '';
  @Input() linkImagem : string = '';
  @Input() tituloProjeto : string = '';
  @Input() descricaoProjeto : string = '';
  @Input() paragrafoTecnologias : string = '';
  @Input() icone : string = '';
  @Input() redeSocial : string = '';

  @Output()valueContador = new EventEmitter();
  valueinitial = 0;
  valueChange(){
    this.valueinitial += 1;
    this.valueContador.emit(this.valueinitial);
  }
  corTexto():boolean {
    return true;
  }
  display(value:any) {
    this.valueContador = value;
  }
  constructor() { }

  ngOnInit() { }
}