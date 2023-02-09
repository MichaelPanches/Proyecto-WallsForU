import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BuscarComponent
  ]
})
export class GaleriaModule { }
