package com.tufutbolCol.ApitufutbolCol.Repositorios;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tufutbolCol.ApitufutbolCol.Modelos.UsuariosModelo;

@Repository
public interface UsuarioRepositorio extends MongoRepository<UsuariosModelo,Long> {
    ArrayList<UsuariosModelo> findByApellido(String apellido);
}
