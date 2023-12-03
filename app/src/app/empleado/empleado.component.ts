import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>unidad de empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent {
  nombre = "Carlos";
  apellido = "erina";
  edad = 15;
  empresa = "eviden";




  // getEdad() {
  //   return this.edad;
  // }
  // llamaEmpresa(value:String){

  // }
  habilitacionCuadro = true;
  usuRegistrado = false;

  getRegistro() {
    this.usuRegistrado = false;
  }

  setusuarioRegistrado(event: Event) {
    // alert("El usuario se acaba de registrar")
    // this.textodeRegistro = "El usuario se acaba de registrar"
    if((<HTMLInputElement>event.target).value=="si"){
      this.textodeRegistro="el usuario se acaba de registrar"
    }
    else{
      this.textodeRegistro="el usuario no se acaba de registrar"
    }
  }
  textodeRegistro = "no hay nadie registrado";

}
