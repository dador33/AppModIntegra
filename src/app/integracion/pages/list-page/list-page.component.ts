import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '../../../material/material-exports';
import { CardComponent } from '../../components/card/card.component';
import { Integracion } from '../../interfaces/integracion.interface';
import { IntegracionesService } from '../../services/integracion.service';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CommonModule, MATERIAL_MODULES, CardComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  public integraciones: Integracion[] = [];
  public groupedIntegraciones: { [key: string]: Integracion[] } = {};
  public objectKeys = Object.keys; // Exposing Object.keys to the template

  constructor(private integracionServices: IntegracionesService) { }

  ngOnInit(): void {
    this.integracionServices.getIntegraciones()
      .subscribe(integraciones => {
        this.integraciones = integraciones;
        this.groupIntegracionesByTipoServicio();
      });
  }

  private groupIntegracionesByTipoServicio() {
    this.groupedIntegraciones = this.integraciones.reduce((acc: { [key: string]: Integracion[] }, integracion) => {
      const key = integracion.r_TipoServicio;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(integracion);
      return acc;
    }, {});
  }
}
