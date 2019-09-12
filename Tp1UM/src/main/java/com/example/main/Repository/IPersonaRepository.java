package com.example.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.main.Entity.Persona;


public interface IPersonaRepository extends JpaRepository<Persona, Integer>  {

}
