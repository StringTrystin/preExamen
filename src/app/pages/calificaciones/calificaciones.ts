import { Component,signal } from '@angular/core';
import { AgregarCalificacion } from '../../components/agregar-calificacion/agregar-calificacion';
import { Menu  } from '../../components/menu/menu';
import { Calificacion } from '../../components/calificacion/calificacion';

@Component({
  selector: 'app-calificaciones',
  imports: [AgregarCalificacion,Menu,Calificacion],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.scss',
})
export class Calificaciones {
 indiceSeleccionado: number | null = null;
 calificacionEditar: any = null;

  calificaciones = signal<any[]>([]);

  guardar(nuevaCal: any) {
  const listaActual = this.calificaciones();

  if (this.indiceSeleccionado !== null) {
    listaActual[this.indiceSeleccionado] = nuevaCal;
    this.indiceSeleccionado = null;
  } else {
    listaActual.push(nuevaCal);
  }

  this.calificaciones.set([...listaActual]);
}

 eliminar(index: number) {
    let listaActual = this.calificaciones();
    listaActual.splice(index, 1);
    this.calificaciones.set([...listaActual]);
  }

 seleccionar(cal: any) {
  this.calificacionEditar = { ...cal };

  this.indiceSeleccionado = this.calificaciones()
    .findIndex(c => c.matricula === cal.matricula);
}
}
