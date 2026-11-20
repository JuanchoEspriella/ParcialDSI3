package co.edu.unbosque.parcialFinal.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.unbosque.parcialFinal.dto.ProductoDTO;
import co.edu.unbosque.parcialFinal.model.Producto;
import co.edu.unbosque.parcialFinal.repository.ProductoRespository;


@Service
public class ProductoService {

	@Autowired
	private ProductoRespository productoReposileche;
	
	public ProductoDTO guardarProducto(ProductoDTO pE) {
		
		Producto p = new Producto();
		p.setPrecio(p.getPrecio());
		p.setDisponible(pE.isDisponible());
		p.setNombre(pE.getNombre());
		p.setStock(pE.getStock());
		p.setTipo(pE.getTipo());
		p.setUrl(pE.getUrlImagen());
		
		if(p.getPrecio() < 0 ) {
			throw new IllegalArgumentException("El precio debe ser positivo");
		}
		
		productoReposileche.save(p);
		
		pE.setId(p.getId());
		return pE;
		
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
	
	public List<ProductoDTO> obtenerTodo(){
		List<Producto> lista = productoReposileche.findAll();
		List<ProductoDTO> listaDTO = new ArrayList<>();
		lista.forEach((Producto p) -> {
			ProductoDTO dto = new ProductoDTO();
			dto.setId(p.getId());
			dto.setDisponible(p.isDisponible());
			dto.setNombre(p.getNombre());
			dto.setPrecio(p.getPrecio());
			dto.setStock(p.getStock());
			dto.setTipo(p.getTipo());
			dto.setUrlImagen(p.getUrl());
			
			listaDTO.add(dto);
		});
		
		return listaDTO;
	}
	
	public int updateById(Long id, ProductoDTO newData) {
	    Optional<Producto> found = productoReposileche.findById(id);
	    Optional<Producto> newFound = productoReposileche.findByNombre(newData.getNombre());

	    if (found.isPresent() && !newFound.isPresent()) {
	      Producto temp = found.get();
	      temp.setPrecio(newData.getPrecio());
	      temp.setNombre(newData.getNombre());
	      temp.setStock(newData.getStock());
	      temp.setDisponible(newData.isDisponible());
	      temp.setUrl(newData.getUrlImagen());
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
