import { Component, Input, OnInit, Pipe } from '@angular/core';

import { MATERIAL_MODULES } from '../../../material/material-exports';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Integracion } from '../../interfaces/integracion.interface';


@Component({
  selector: 'heroes-hero-card',
  standalone: true,
  imports: [MATERIAL_MODULES,RouterModule,CommonModule],
  templateUrl: './card.component.html',

})
export class CardComponent implements OnInit {

  @Input()
  public integracion!: Integracion;

  ngOnInit(): void {
    if (!this.integracion)throw new Error('Method not implemented.');
  }


}
