import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  enviar(){
    alert('futuramente iremos implementar no backend para o email ser enviado')
  }
}
