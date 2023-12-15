import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable()

export class ServicioEmpleadosService {
    
   empleados:Empleado[]=[


    new Empleado("juan","diaz","presidente",7500),
    new Empleado("juan","diaz","presidente",7500),
    new Empleado("juan","diaz","presidente",7500),
    new Empleado("juan","diaz","presidente",7500),

  ];
  constructor() { }
agregarEmpleadoServicio(empleado:Empleado){
  this.empleados.push(empleado);

}
  muestraMensaje(mensaje:string){
    alert(mensaje);
    

  }
}
