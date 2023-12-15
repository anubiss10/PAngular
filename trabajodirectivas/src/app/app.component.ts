import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "jej god";
  registrado = false;
  nombre = "";
  apellido = "";
  entradas: { titulo: string }[] = [];
cargo:string="";
  constructor() {
    this.entradas = [
      { titulo: "loco" },
      { titulo: "loco" },
      { titulo: "loco" },
      { titulo: "loco" },
    ];
  }

  registrarUsuario() {
    this.mensaje = "Usuario registrado";
    this.registrado = true;
  }
}
