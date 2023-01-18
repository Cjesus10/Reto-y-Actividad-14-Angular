import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo2',
  templateUrl: './componente-hijo2.component.html',
  styleUrls: ['./componente-hijo2.component.css']
})
export class ComponenteHijo2Component {
  nom = "";
  dni = "";
  est = "";

  datitos = new Array;
  
  @Output() envio = new EventEmitter<any>();
  

  GuardarDatos(){
    this.datitos = [{'Nombres':this.nom, 'Dni':this.dni, 'Estado':this.est}]
  }
 
  EnviarDatos1(){
    this.envio.emit(this.datitos);
  }
}
