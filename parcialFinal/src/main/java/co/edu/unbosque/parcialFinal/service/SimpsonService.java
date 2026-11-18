package co.edu.unbosque.parcialFinal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import co.edu.unbosque.parcialFinal.dto.SimpsonDTO;


@Service
public class SimpsonService {
	
	@Value("${external.sinson.base}")
	private String baseUrl;
	
	
	
	
	
	public List<SimpsonDTO> obtenersinsons() {
		
		
		return ExternalHTTPRequestHandler.doGetAndConvertToDtoList(baseUrl+"/characters");
		
	}

}
