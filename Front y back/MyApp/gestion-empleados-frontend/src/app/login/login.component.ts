import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}
  login() {
    const isAuthenticated = this.authService.fakeLogin(this.username, this.password);
    if (isAuthenticated) {
      console.log('Inicio de sesión exitoso');
      alert("Inicio de sesión exitoso")
      this.router.navigate(['/lista-empleados']);
    } else {
      console.log('Inicio de sesión fallido');
    }
  }
}
