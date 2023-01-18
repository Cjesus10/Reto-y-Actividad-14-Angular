import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-hijo1',
  templateUrl: './componente-hijo1.component.html',
  styleUrls: ['./componente-hijo1.component.css']
})
export class ComponenteHijo1Component {

  @Input() vhijo = ""
}
