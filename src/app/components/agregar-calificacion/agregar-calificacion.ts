import { Component, signal,Input,Output,EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Calificacion } from '../calificacion/calificacion';

@Component({
  selector: 'app-agregar-calificacion',
  standalone: true,
  imports: [ReactiveFormsModule, Calificacion],
  templateUrl: './agregar-calificacion.html',
  styleUrl: './agregar-calificacion.scss',
})


export class AgregarCalificacion implements OnChanges {
 @Output() guardarCalificacion = new EventEmitter<any>();
 @Input() calificacion: any;
 
 formularioCalificaciones = new FormGroup({
    matricula: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    corte1: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    corte2: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    corte3: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
  });

  ngOnChanges(changes: SimpleChanges) {
  if (changes['calificacion'] && this.calificacion) {
    this.formularioCalificaciones.setValue({
      matricula: this.calificacion.matricula,
      nombre: this.calificacion.nombre,
      corte1: this.calificacion.corte1,
      corte2: this.calificacion.corte2,
      corte3: this.calificacion.corte3
    });
  }
}

  guardar() {
    if (this.formularioCalificaciones.invalid) {
      return;
    }

    const nuevaCal = this.formularioCalificaciones.value;

    this.guardarCalificacion.emit(nuevaCal);

    this.formularioCalificaciones.reset({
      corte1: 0,
      corte2: 0,
      corte3: 0
    });
  }

  nuevo() {
    this.formularioCalificaciones.reset({
      corte1: 0,
      corte2: 0,
      corte3: 0
    });
  }
}