package com.tufutbol.tufutbol.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tufutbol.tufutbol.Modelos.UsuarioModelo;
import com.tufutbol.tufutbol.Servicios.UsuarioServicio;

@RestController
@RequestMapping("/usuario")
public class UsuarioControlador {
    @Autowired
    UsuarioServicio servicio;
    @PostMapping("/guardar")
    public UsuarioModelo guardarUsuario(@RequestBody UsuarioModelo usuario){
       return servicio.guardarUsuario(usuario);

    }
}
