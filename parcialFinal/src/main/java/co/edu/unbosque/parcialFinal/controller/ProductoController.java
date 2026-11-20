package co.edu.unbosque.parcialFinal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;

import co.edu.unbosque.parcialFinal.dto.ProductoDTO;
import co.edu.unbosque.parcialFinal.service.ProductoService;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

	@Autowired
	private ProductoService ps;

	@PostMapping("/crear")
	public ResponseEntity<ProductoDTO> crear(@RequestBody ProductoDTO pE) {

		return ResponseEntity.ok(ps.guardarProducto(pE));

	}

	@GetMapping("/getall")
	public ResponseEntity<List<ProductoDTO>> listar() {

		return ResponseEntity.ok(ps.obtenerTodo());
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<String> actualizarPorId(@PathVariable long id, @RequestBody ProductoDTO producto) {
		int codigo = ps.updateById(id, producto);
		if (codigo == 0) {
			return ResponseEntity.ok("Actualizado bien");
		} else if (codigo == 1) {
			return new ResponseEntity<String>("Esta en uso", HttpStatus.IM_USED);
		} else if (codigo == 2) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

	@PutMapping("/comprar/{id}/{cantidad}")
	public ResponseEntity<String> comprar(@PathVariable long id, @PathVariable int cantidad) {
		int codigo = ps.comprarById(id, cantidad);
		if (codigo == 0) {
			return ResponseEntity.ok("Actualizado bien");
		} else if (codigo == 1) {
			return new ResponseEntity<String>("Valor negativo", HttpStatus.BAD_REQUEST);
		} else if (codigo == 2) {
			return new ResponseEntity<String>("Producto no encontrado", HttpStatus.NOT_FOUND);
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> eliminar(@PathVariable long id) {
		int codigo = ps.deleteById(id);
		
		if(codigo == 0) {
			return ResponseEntity.ok("eliminado ta bien");
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<String> manejarIllegalArgumentException(Exception e) {
		return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
	}

}
