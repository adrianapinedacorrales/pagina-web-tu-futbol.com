package com.tufutbolCol.ApitufutbolCol.Servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tufutbolCol.ApitufutbolCol.Modelos.EquiposModelo;
import com.tufutbolCol.ApitufutbolCol.Repositorios.EquiposRepositorio;

@Service
public class EquiposServicio {
  
       
    @Autowired
  EquiposRepositorio repositorio;

    //creamos un servicio para guardar en bd

    public EquiposModelo guardarEquipos(EquiposModelo equipo){
        return repositorio.save(equipo);
        
    }

    
    public ArrayList<EquiposModelo> consultarEquipos(){
        return (ArrayList<EquiposModelo>) repositorio.findAll();
    }

    //endpoint consultar por la cedula

    public Optional<EquiposModelo> buscarPorCodigo(Long codigo){
        return repositorio.findById(codigo);


    }

    public boolean eliminaEquipo(Long codigo){
        if(repositorio.existsById(codigo)){
            repositorio.deleteById(codigo);
            return true;
        }else{
            return false;
        }
    } 



}
