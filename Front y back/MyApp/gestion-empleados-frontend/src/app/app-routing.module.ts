import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { LoginComponent } from './login/login.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';
import { DeleteEmpleadoComponent } from './delete-empleado/delete-empleado.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lista-empleados', component: ListaEmpleadosComponent },
  { path: 'nuevo-empleado', component: NuevoEmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'delete-empleado', component: DeleteEmpleadoComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
