
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL="http://localhost:8080/api/v1/empleados";

  constructor(private httpClient:HttpClient) { }
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
}
