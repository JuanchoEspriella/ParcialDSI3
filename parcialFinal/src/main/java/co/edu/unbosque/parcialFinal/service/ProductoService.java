package co.edu.unbosque.parcialFinal.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unbosque.parcialFinal.model.Producto;
import co.edu.unbosque.parcialFinal.repository.ProductoRespository;
import co.edu.unbosque.springfirstapp.dto.NoticiaDTO;
import co.edu.unbosque.springfirstapp.model.Noticia;

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
	
	public int deleteById(Long id) {
		 Optional<Producto> found = productoReposileche.findById(id);
		    if (found.isPresent()) {
		    	productoReposileche.delete(found.get());
		      return 0;
		    } else {
		      return 1;
		    }
		  }
	
	public List<Producto> obtenerTodo(){
		return productoReposileche.findAll();
	}
	
	@Override
	public int updateById(Long id, ProductoDTO newData) {
	    Optional<Producto> found = productoReposileche.findById(id);
	    Optional<Producto> newFound = productoReposileche.findByNombre(newData.getNombre());

	    if (found.isPresent() && !newFound.isPresent()) {
	      Producto temp = found.get();
	      temp.setNombre(newData.getNombre());
	      temp.setStock(newData.getStock());
	      temp.setDisponible(newData.isDisponible());
	      temp.setUrl(newData.getUrl());
	      if (newData.getTipo() != null) {
	          temp.setTipo(newData.getTipo());
	        }
	      productoReposileche.save(temp);
	      return 0;
	    }
	    if (found.isPresent() && newFound.isPresent()) {
	      return 1;
	    }
	    if (!found.isPresent()) {
	      return 2;
	    } else {
	      return 3;
	    }
	    
	}
	
	public int comprarById(Long id, int cantidad) {
	    Optional<Producto> found = productoReposileche.findById(id);

	    if (found.isPresent()) {
	      Producto temp = found.get();
	      int sida = temp.getStock()-cantidad;
	      if(sida>=0) {
	    	  temp.setStock(sida);
	    	  
	      }
	      if(sida<0) {
	    	  return 1;
	      }
	      if(sida==0) {
	      temp.setDisponible(false);
	      }
	      
	      productoReposileche.save(temp);
	      return 0;
	    }
	    if (!found.isPresent()) {
	      return 2;
	    } else {
	      return 3;
	    }
	    
	}
	

}
