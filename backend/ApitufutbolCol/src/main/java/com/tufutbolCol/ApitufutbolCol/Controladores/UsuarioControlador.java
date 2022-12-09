package com.tufutbolCol.ApitufutbolCol.Controladores;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tufutbolCol.ApitufutbolCol.Modelos.UsuariosModelo;
import com.tufutbolCol.ApitufutbolCol.Servicios.UsuarioServicio;


@RestController
//http://localhost:9011/usuarios
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioControlador {

    @Autowired
    UsuarioServicio servicio;

    //http://localhost:9011/usuarios/guardar
    
    @PostMapping("/guardar")
        public UsuariosModelo guardarUsuario(@RequestBody UsuariosModelo usuario){
        return servicio.guardarUsuario(usuario);
    }


    //http://localhost:9011/usuarios/consultar
    
    @GetMapping("/consultar")
    public ArrayList<UsuariosModelo> consultarUsuario(){
        return servicio.consultarUsuarios();
    }

   //http://localhost:9011/usuarios/login
   
   @GetMapping("/login")
   public ArrayList<UsuariosModelo> logearUsuario(){
       return servicio.logearUsuarios();
   }
  

    //http://localhost:9011/usuarios/consultardocumento
    
    @GetMapping("/consultardocumento/{documento}")
    public Optional<UsuariosModelo> consultaDocumento(@PathVariable("documento")Long documento){
        return servicio.buscarPorDocumento(documento);
    }


    //http://localhost:9011/usuarios/eliminar

    
    @DeleteMapping("/eliminar/{documento}")
    public Boolean eliminar(@PathVariable("documento") Long documento){
        return servicio.eliminaUsuario(documento);
    }

    //http://localhost:9011/usuarios/buscarxapellido

    
    @GetMapping("/buscarxapellido/{apellido}")
    public ArrayList<UsuariosModelo> consultaApellido(@PathVariable("apellido")String apellido){
        return servicio.buscarPorApellido(apellido);
    }



}
