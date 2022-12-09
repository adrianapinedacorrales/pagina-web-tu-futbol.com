package com.tufutbolCol.ApitufutbolCol.Controladores;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tufutbolCol.ApitufutbolCol.Modelos.PartidosModelo;
import com.tufutbolCol.ApitufutbolCol.Servicios.PartidosServicio;

@RestController
@RequestMapping("/partidos")
@CrossOrigin("*")
public class PartidoControlador {
    @Autowired
    PartidosServicio servicio;

    //http://localhost:9011/partidos/guardar
      @PostMapping("/guardar")
      public PartidosModelo guardarPartidos(@RequestBody PartidosModelo partido){
          return servicio.guardarPartidos(partido);
      }
  

    //http://localhost:9011/partidos/consultar
    @GetMapping("/consultar")
    public ArrayList<PartidosModelo> consultarPartidos(){
        return servicio.consultarPartidos();
    }

  //http://localhost:9011/partidos/eliminar

  @DeleteMapping("/eliminar/{codigo}")
  public Boolean eliminar(@PathVariable("codigo") Long codigo){
      return servicio.eliminaPartido(codigo);
  }



}
