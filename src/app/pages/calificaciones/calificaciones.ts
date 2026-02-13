import { Component } from '@angular/core';
import { AgregarCalificacion } from '../../components/agregar-calificacion/agregar-calificacion';
import { Menu  } from '../../components/menu/menu';
@Component({
  selector: 'app-calificaciones',
  imports: [AgregarCalificacion,Menu],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.scss',
  
})
export class Calificaciones {

}
