import { Component, Input, Output, EventEmitter,signal } from '@angular/core';

@Component({
  selector: 'tr[app-calificacion]',
  imports: [],
  templateUrl: './calificacion.html',
  styleUrl: './calificacion.scss',
})
export class Calificacion {
  @Input() calificacion!: any;
  @Output() eliminarFila = new EventEmitter<void>();
  @Output() seleccionarFila = new EventEmitter<any>();
 esReprobado(valor: number): boolean {
  return valor < 7;
}
 seleccionar() {
    this.seleccionarFila.emit(this.calificacion);
}
 eliminar() {
    this.eliminarFila.emit();
}

}
