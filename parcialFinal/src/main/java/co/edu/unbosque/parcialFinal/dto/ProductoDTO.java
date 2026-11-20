package co.edu.unbosque.parcialFinal.dto;

import co.edu.unbosque.parcialFinal.model.enums.Tipo;

public class ProductoDTO {
	
	private long id;
	private String nombre;
	private double precio;
	private int stock;
	private boolean disponible;
	private String urlImagen;
	private Tipo tipo;
	
	public ProductoDTO() {
		// TODO Auto-generated constructor stub
	}

	public ProductoDTO(long id, String nombre, long precio, int stock, boolean disponible, String urlImagen,
			Tipo tipo) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
		this.disponible = disponible;
		this.urlImagen = urlImagen;
		this.tipo = tipo;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public boolean isDisponible() {
		return disponible;
	}

	public void setDisponible(boolean disponible) {
		this.disponible = disponible;
	}

	public String getUrlImagen() {
		return urlImagen;
	}

	public void setUrlImagen(String urlImagen) {
		this.urlImagen = urlImagen;
	}

	public Tipo getTipo() {
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	@Override
	public String toString() {
		return "ProductoDTO [id=" + id + ", nombre=" + nombre + ", precio=" + precio + ", stock=" + stock
				+ ", disponible=" + disponible + ", urlImagen=" + urlImagen + ", tipo=" + tipo + "]";
	}
	

}
