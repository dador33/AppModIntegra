import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MATERIAL_MODULES } from '../../../material/material-exports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterModule,MATERIAL_MODULES,CommonModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public sideBarItems = [
    {label:'Listado',icon:'label',url:'./list'},
    {label:'Añadir',icon:'add',url:'./new-hero'},
    {label:'Buscar',icon:'search',url:'./search'},

  ]






}
