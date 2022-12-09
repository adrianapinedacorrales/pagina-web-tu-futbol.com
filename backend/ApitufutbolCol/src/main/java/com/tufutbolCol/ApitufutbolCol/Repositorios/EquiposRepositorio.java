package com.tufutbolCol.ApitufutbolCol.Repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tufutbolCol.ApitufutbolCol.Modelos.EquiposModelo;

@Repository
public interface EquiposRepositorio extends MongoRepository<EquiposModelo,Long>{
    
}



