package co.edu.unbosque.parcialFinal.service;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import co.edu.unbosque.parcialFinal.dto.SimpsonDTO;
import co.edu.unbosque.parcialFinal.dto.SinsoListaDTO;


@Service
public class SimpsonService {
	
	@Value("${external.sinson.base}")
	private String baseUrl;
	
	
	
	
	
	public SimpsonDTO obtenersinsons() {
		
		
		String id = String.valueOf(ThreadLocalRandom.current().nextInt(1, 100));
		
		return  ExternalHTTPRequestHandler.doGetAndConvertToDto(baseUrl + "/" + id , SimpsonDTO.class);
		
	}

}
