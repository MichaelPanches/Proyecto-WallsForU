import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    BuscarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    BuscarComponent
  ]
})
export class GaleriaModule { }
