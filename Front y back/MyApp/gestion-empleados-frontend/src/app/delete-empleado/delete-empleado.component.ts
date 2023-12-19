// borrar-empleado.component.ts
import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-borrar-empleado',
  templateUrl: './delete-empleado.component.html',
  providers: [AuthService] 
})
export class DeleteEmpleadoComponent implements OnInit {
  empleadoId: number;
  empleados: Empleado[];

  constructor(
    private empleadoService: EmpleadoService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.obtenerListaEmpleados();
  }

  borrarEmpleado(id?: number) {
    if (this.authService.isAuthenticated()) {
      const idToDelete = id || this.empleadoId;

      if (idToDelete) {
        this.empleadoService.borrarEmpleado(idToDelete).subscribe(
          () => {
            console.log('Empleado borrado con éxito');
            this.obtenerListaEmpleados();
          },
          (error) => {
            console.error('Error al borrar el empleado', error);
          }
        );
      } else {
        console.error('ID de empleado nulo o no válido');
      }
    } else {
      alert('Debes iniciar sesión para realizar esta acción');
    }
  }

  obtenerListaEmpleados() {
    this.empleadoService.obtenerListaEmpleados().subscribe(
      (empleados) => {
        this.empleados = empleados;
      },
      (error) => {
        console.error('Error al obtener la lista de empleados', error);
      }
    );
  }
}
