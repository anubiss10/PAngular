import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
templateUrl: './empleado.component.html',
 //template:"<p>unidad de empleado</p>",
styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent {
  nombre="Carlos";
  apellido="erina";
   edad=15;
  empresa="cesur games"

}
