package co.edu.unbosque.parcialFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.parcialFinal.model.Producto;
import co.edu.unbosque.parcialFinal.service.ProductoService;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {
	
	
	@Autowired
	private ProductoService ps;
	
	
	
	@PostMapping("/crear")
	public ResponseEntity<Producto> crear(@RequestBody Producto pE){
		
		return ResponseEntity.ok(ps.guardarProducto(pE));
		
	}
	
	
	@GetMapping("/getall")
	public ResponseEntity<List<Producto>> listar(){
		
		
		return ResponseEntity.ok(ps.obtenerTodo());
	}
	

}
