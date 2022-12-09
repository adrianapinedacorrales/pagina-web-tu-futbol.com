package com.tufutbolCol.ApitufutbolCol.Servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tufutbolCol.ApitufutbolCol.Modelos.UsuariosModelo;
import com.tufutbolCol.ApitufutbolCol.Repositorios.UsuarioRepositorio;

@Service
public class UsuarioServicio {
    
    @Autowired
    UsuarioRepositorio repositorio;

    //creamos un servicio para guardar en bd

    public UsuariosModelo guardarUsuario(UsuariosModelo usuario){
        return repositorio.save(usuario);
        

    }

    //consultar usuarios

    public ArrayList<UsuariosModelo> consultarUsuarios(){
        return (ArrayList<UsuariosModelo>) repositorio.findAll();
    }

    //logear  usuarios

    public ArrayList<UsuariosModelo> logearUsuarios(){
        return (ArrayList<UsuariosModelo>) repositorio.findAll();
    }



    //endpoint consultar por la cedula

    public Optional<UsuariosModelo> buscarPorDocumento(Long documento){
        return repositorio.findById(documento);
    }


    
    public boolean eliminaUsuario(Long documento){
        if(repositorio.existsById(documento)){
            repositorio.deleteById(documento);
            return true;
        }else{
            return false;
        }
    }

      public ArrayList<UsuariosModelo> buscarPorApellido(String apellido){
        return repositorio.findByApellido(apellido);
    }

}
