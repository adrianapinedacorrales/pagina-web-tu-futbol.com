package com.tufutbolCol.ApitufutbolCol.Repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tufutbolCol.ApitufutbolCol.Modelos.PartidosModelo;

@Repository
public interface PartidoRepositorio extends MongoRepository<PartidosModelo, Long> {
    
}



