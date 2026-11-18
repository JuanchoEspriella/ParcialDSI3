package co.edu.unbosque.parcialFinal.dto;

import java.util.List;

public class SinsoListaDTO {
	
	
	private int count;
	
	private List<SimpsonDTO> results;
	
	public SinsoListaDTO() {
		// TODO Auto-generated constructor stub
	}

	public SinsoListaDTO(int count, List<SimpsonDTO> results) {
		super();
		this.count = count;
		this.results = results;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<SimpsonDTO> getResults() {
		return results;
	}

	public void setResult(List<SimpsonDTO> results) {
		this.results = results;
	}
	
	
	

}
