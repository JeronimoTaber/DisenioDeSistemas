package com.example.main.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.main.DTO.PersonaDTO;
import com.example.main.Service.PersonaService;

@Controller
@RestController
@RequestMapping(path = "/persona")
public class PersonaController {
	private PersonaService PersonaService;

	public PersonaController(PersonaService personaService) {
		PersonaService = personaService;
	}
	
	//GET ONE
	@GetMapping(path = "/{id}")
	public PersonaDTO getOne(@PathVariable Integer id) {// se carga con la variable dada en el path
		return ResponseEntity.status(200).body(PersonaService.findbById(id)).getBody();
	}
	
	//GET ALL
	@GetMapping(path = "/")
	public List<PersonaDTO> getAll() {
		return ResponseEntity.status(200).body(PersonaService.findAll()).getBody();
	}
	
	//POST
	@PostMapping(path="/")
    public ResponseEntity post(@RequestBody PersonaDTO personadto) {
        
		PersonaDTO result = new PersonaDTO();
        
        try {
            result=PersonaService.save(personadto);
        }catch (Exception e) {
            
        }
        return ResponseEntity.status(201).body(result);
    }
	
	//PUT
	@PutMapping(path="/{id}")
	public ResponseEntity put(@RequestBody PersonaDTO personadto, @PathVariable Integer id) {
		PersonaDTO result = new PersonaDTO();
		try {
			result = PersonaService.update(personadto, id);
		} catch (Exception e) {
			// TODO: handle exception
		}
		//personaDTO.setId(result.getId());
		return ResponseEntity.status(201).body(result);
	}
	
	//DELETE
	@DeleteMapping(path = "/{id}")
	public ResponseEntity delete(@PathVariable Integer id) {
		Boolean result = PersonaService.delete(id);
		if(result) {
			return ResponseEntity.status(204).body("");
		}
		else {
			return ResponseEntity.status(204).body("No funcona");

		}
	}
}
