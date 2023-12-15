import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  titulo = 'Listado de empleados';
  constructor(private miServicio:ServicioEmpleadosService,private empleadosService:ServicioEmpleadosService){
    this.empleados=this.empleadosService.empleados
      }
      empleados:Empleado[]=[];
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroNombre, this.cuadroSalario);
  //  this.miServicio.muestraMensaje("hola caracola: "+ miEmpleado.apellido )
   this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
