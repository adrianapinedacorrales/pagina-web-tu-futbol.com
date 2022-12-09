package com.tufutbolCol.ApitufutbolCol.Servicios;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tufutbolCol.ApitufutbolCol.Modelos.PartidosModelo;
import com.tufutbolCol.ApitufutbolCol.Repositorios.PartidoRepositorio;

@Service
public class PartidosServicio {
 
    @Autowired
    PartidoRepositorio repositorio;

        //creamos un servicio para guardar en bd

        public PartidosModelo guardarPartidos(PartidosModelo partido){
            return repositorio.save(partido);
            
        }

        public ArrayList<PartidosModelo> consultarPartidos(){
            return (ArrayList<PartidosModelo>) repositorio.findAll();
        }


        public boolean eliminaPartido(Long codigo){
            if(repositorio.existsById(codigo)){
                repositorio.deleteById(codigo);
                return true;
            }else{
                return false;
            }
        }
    

    

}
