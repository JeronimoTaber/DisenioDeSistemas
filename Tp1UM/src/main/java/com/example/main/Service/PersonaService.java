package com.example.main.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.main.DTO.PersonaDTO;
import com.example.main.Entity.Persona;
import com.example.main.Repository.IPersonaRepository;

@Service
public class PersonaService {
	
	@Autowired
	private IPersonaRepository IPersonaRepository;
	
	public PersonaService(IPersonaRepository iPersonaRepository) {
		IPersonaRepository = iPersonaRepository;
	}
	
	public PersonaDTO findbById(Integer id) {
		Optional<Persona> bd = IPersonaRepository.findById(id);
		PersonaDTO personaDTO = new PersonaDTO();
		try {
			Persona persona = bd.get();
			personaDTO.setId(persona.getId());
			personaDTO.setNombre(persona.getNombre());
			personaDTO.setApellido(persona.getApellido());
			personaDTO.setEdad(persona.getEdad());
			return personaDTO;
		} catch (Exception e) {
			return personaDTO;
		}
	}
	
	public List<PersonaDTO> findAll() {		
        List<PersonaDTO> lista = new ArrayList<>();
        for(Persona i: IPersonaRepository.findAll()) {
        	PersonaDTO temp= new PersonaDTO();
            temp.setId(i.getId());
            temp.setNombre(i.getNombre());
			temp.setApellido(i.getApellido());
			temp.setEdad(i.getEdad());
            lista.add(temp);        
        }
        return lista;
    }
	
	public PersonaDTO save(PersonaDTO PersonaDTO) {
		Persona persona = new Persona();
		persona.setNombre(PersonaDTO.getNombre());
		persona.setApellido(PersonaDTO.getApellido());
		persona.setEdad(PersonaDTO.getEdad());
		try {
			IPersonaRepository.save(persona);
		}
		catch (Exception e) {
			// TODO: handle exception
		}
		PersonaDTO.setId(persona.getId());
		return PersonaDTO;
	}

	
	public PersonaDTO update(PersonaDTO PersonaDTO, Integer Id) {	
		//personaDTO.setID(persona.getId());
		Optional<Persona> pOptional = IPersonaRepository.findById(Id);
		Persona temp = new Persona();
		try {
			temp = pOptional.get();
			temp.setNombre(PersonaDTO.getNombre());
			temp.setApellido(PersonaDTO.getApellido());
			temp.setEdad(PersonaDTO.getEdad());
			PersonaDTO.setId(temp.getId());
			IPersonaRepository.save(temp);
		} catch (Exception e) {
			System.out.println("no existe");
		}
		return PersonaDTO;
	}

	public Boolean delete(Integer id) {
		Optional<Persona> temp =IPersonaRepository.findById(id);
		try {
			IPersonaRepository.delete(temp.get());
			return true;
		}
		catch (Exception e) {
			return false;
		}		
	}
	
}
