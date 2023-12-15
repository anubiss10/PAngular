
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseURL="http://localhost:8081/api/v1/empleados";
  private agregarURL="http://localhost:8081/api/v1/agregar"
  constructor(private httpClient:HttpClient,) { }
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
  agregarEmpleado(empleado: any): Observable<any> {
    return this.httpClient.post(this.agregarURL, empleado);
  }
}
