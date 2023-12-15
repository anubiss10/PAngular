import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const appRouter: Routes = [
 
  { path: 'lista-empleados', component: ListaEmpleadosComponent },
  { path: 'nuevo-empleado', component: NuevoEmpleadoComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouter)

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
