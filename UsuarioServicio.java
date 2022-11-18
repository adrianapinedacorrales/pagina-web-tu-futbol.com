package com.tufutbol.tufutbol.Servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tufutbol.tufutbol.Modelos.UsuarioModelo;
import com.tufutbol.tufutbol.Repositorio.UsuarioRepositorio;

@Service
public class UsuarioServicio {
    @Autowired
    UsuarioRepositorio repositorio;

    public UsuarioModelo guardarUsuario(UsuarioModelo usuario){
        return repositorio.save(usuario);
    }

}
