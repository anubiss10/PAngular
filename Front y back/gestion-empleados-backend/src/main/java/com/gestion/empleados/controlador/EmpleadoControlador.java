package com.gestion.empleados.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.empleados.modelo.Empleado;
import com.gestion.empleados.repositorio.EmpleadoRepositorio;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins="http://localhost:4200/")
public class EmpleadoControlador {

	@Autowired
	private EmpleadoRepositorio repositorio;

	@GetMapping("/empleados")
	public List<Empleado> listarTodosLosEmpleados() {
		return repositorio.findAll();
	}
	@PostMapping("/agregar")
	public ResponseEntity<Empleado> agregarEmpleado(@RequestBody Empleado empleado) {
	    try {
	        Empleado empleadoGuardado = repositorio.save(empleado);
	        return new ResponseEntity<>(empleadoGuardado, HttpStatus.CREATED);
	    } catch (Exception e) {
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	@RestController
@RequestMapping("/delete")
public class EmpleadoController {

    @Autowired
    private EmpleadoRepositorio empleadoRepository;

    @DeleteMapping("/{id}")
    public void borrarEmpleado(@PathVariable Long id) {
        empleadoRepository.deleteById(id);
    }}
	}