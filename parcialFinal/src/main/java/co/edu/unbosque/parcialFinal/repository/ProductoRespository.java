package co.edu.unbosque.parcialFinal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.edu.unbosque.parcialFinal.model.Producto;

public interface ProductoRespository extends JpaRepository<Producto, Long>{
	
	public long count();

	public Optional<Producto> findByNombre(String nombre);
	
	

}
