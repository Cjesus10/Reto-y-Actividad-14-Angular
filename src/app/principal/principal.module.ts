import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteHijo1Component } from './componente-hijo1/componente-hijo1.component';
import { ComponenteHijo2Component } from './componente-hijo2/componente-hijo2.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponenteHijo1Component,
    ComponenteHijo2Component,
    ComponentePadreComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponenteHijo1Component,
    ComponenteHijo2Component,
    ComponentePadreComponent
  ]
})
export class PrincipalModule { }
