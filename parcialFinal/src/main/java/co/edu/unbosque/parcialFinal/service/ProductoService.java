package co.edu.unbosque.parcialFinal.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unbosque.parcialFinal.model.Producto;
import co.edu.unbosque.parcialFinal.repository.ProductoRespository;

@Service
public class ProductoService {

	@Autowired
	private ProductoRespository productoReposileche;
	
	
	
	public Producto guardarProducto(Producto p) {
		
		if(p.getPrecio() < 0 ) {
			throw new IllegalArgumentException("El precio debe ser positivo");
		}
		
		return productoReposileche.save(p);
		
	}
	
	public List<Producto> obtenerTodo(){
		return productoReposileche.findAll();
	}
	
	
}
