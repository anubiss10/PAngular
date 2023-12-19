import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css'],
})
export class NuevoEmpleadoComponent {
  nuevoEmpleado: any = {}; 

  constructor(private empleadoService: EmpleadoService) {}

  agregarEmpleado(): void {
    this.empleadoService.agregarEmpleado(this.nuevoEmpleado).subscribe(
      (response) => {
        console.log('Empleado agregado con éxito:', response);
        alert('Empleado agregado correctamente');

      },
      (error) => {
        console.error('Error al agregar empleado:', error);
            alert('Debes iniciar sesión para realizar esta acción');

      }
    );
  }
}
