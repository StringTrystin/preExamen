import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Calificacion } from '../calificacion/calificacion';

@Component({
  selector: 'app-agregar-calificacion',
  standalone: true,
  imports: [ReactiveFormsModule, Calificacion],
  templateUrl: './agregar-calificacion.html',
  styleUrl: './agregar-calificacion.scss',
})


export class AgregarCalificacion {
  indiceSeleccionado: number | null = null;
  formularioCalificaciones = new FormGroup({
    matricula: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    corte1: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    corte2: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    corte3: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
  });
  

  calificaciones = signal<any[]>([]);

  guardar() {
  if (this.formularioCalificaciones.invalid) {
    return;
  }

  const nuevaCal = this.formularioCalificaciones.value;

  let listaActual = this.calificaciones();

  if (this.indiceSeleccionado !== null) {
    listaActual[this.indiceSeleccionado] = nuevaCal;
    this.indiceSeleccionado = null;
  } else {
    listaActual.push(nuevaCal);
  }

  this.calificaciones.set([...listaActual]);

  this.formularioCalificaciones.reset({
    corte1: 0,
    corte2: 0,
    corte3: 0
  });
  }

  eliminar(index: number) {
    let listaActual = this.calificaciones();
    listaActual.splice(index, 1);
    this.calificaciones.set([...listaActual]);
  }

  nuevo() {
    this.formularioCalificaciones.reset({
      corte1: 0,
      corte2: 0,
      corte3: 0
    });
  }
  seleccionar(cal: any) {
  this.formularioCalificaciones.setValue({
    matricula: cal.matricula,
    nombre: cal.nombre,
    corte1: cal.corte1,
    corte2: cal.corte2,
    corte3: cal.corte3
  });

  this.indiceSeleccionado = this.calificaciones()
    .findIndex(c => c.matricula === cal.matricula);
}
}