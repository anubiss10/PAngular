import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[];

  // Añade una propiedad para almacenar el campo por el cual se está ordenando
  campoOrden: string;

  constructor(private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  // Función para cambiar el campo de ordenación
  cambiarCampoOrden(campo: string) {
    this.campoOrden = campo;
    // Lógica para ordenar los empleados según el campo seleccionado
    this.empleados = this.empleados.sort((a, b) => {
      if (a[campo] > b[campo]) {
        return 1;
      } else if (a[campo] < b[campo]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
