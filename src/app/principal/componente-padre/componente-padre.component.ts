import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  vpadre="";

  nom="";
  dni="";
  est="";

  datitos = new Array;

  recibirMensaje1(men1:any){
    this.datitos = men1;
  }
  
}
