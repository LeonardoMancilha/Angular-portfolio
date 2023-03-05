import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})

export class SobreComponent {
  name = new FormControl('');
  email = new FormControl('');
  updateName() {
    this.name.setValue('Leonardo Machado');
  }
  updateEmail() {
    this.email.setValue('leonardomachadomancilha@gmail.com');
  }
  constructor() { }

  ngOnInit() {
    
  }
}