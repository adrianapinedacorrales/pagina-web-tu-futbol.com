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

import com.tufutbolCol.ApitufutbolCol.Modelos.EquiposModelo;
import com.tufutbolCol.ApitufutbolCol.Servicios.EquiposServicio;

@RestController
@RequestMapping("/equipos")
@CrossOrigin("*")
public class EquipoControlador {
    
    @Autowired
    EquiposServicio servicio;

    //http://localhost:9011/equipos/guardar
    @PostMapping("/guardar")
    public EquiposModelo guardarEquipos(@RequestBody EquiposModelo equipo){
        return servicio.guardarEquipos(equipo);
    }


    //http://localhost:9011/equipos/consultar
    @GetMapping("/consultar")
    public ArrayList<EquiposModelo> consultarEquipo(){
        return servicio.consultarEquipos();
    }


    //http://localhost:9011/equipos/equipo
    @GetMapping("/consultarcodigo/{codigo}")
    public Optional<EquiposModelo> consultacodigo(@PathVariable("codigo")Long codigo){
        return servicio.buscarPorCodigo(codigo);
    }


    //http://localhost:9011/equipos/eliminar

    @DeleteMapping("/eliminar/{codigo}")
    public Boolean eliminar(@PathVariable("codigo") Long codigo){
        return servicio.eliminaEquipo(codigo);
    }
}
