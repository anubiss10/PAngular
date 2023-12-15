import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.model';
@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {
  constructor(private router:Router,private miServicio:ServicioEmpleadosService,private empleadosService:ServicioEmpleadosService){

  }
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroNombre, this.cuadroSalario);
  //  this.miServicio.muestraMensaje("hola caracola: "+ miEmpleado.apellido )
   this.empleadosService.agregarEmpleadoServicio(miEmpleado);
   this.router.navigate([''])

  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
volverHome(){
this.router.navigate([''])
}
}
