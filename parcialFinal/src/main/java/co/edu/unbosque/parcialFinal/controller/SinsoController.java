package co.edu.unbosque.parcialFinal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.edu.unbosque.parcialFinal.service.SimpsonService;

@RestController
@RequestMapping("/lossinso")
@CrossOrigin(origins = "http://localhost:4200")
public class SinsoController {
	
	
	@Autowired
	private SimpsonService ss;
	
	
	
	
	
	@GetMapping()
	public ResponseEntity mostrar() {
		return ResponseEntity.ok(ss.obtenersinsons());
	}

}
