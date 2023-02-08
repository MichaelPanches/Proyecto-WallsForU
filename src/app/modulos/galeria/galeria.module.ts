import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BuscarComponent,
    ListarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GaleriaModule { }
