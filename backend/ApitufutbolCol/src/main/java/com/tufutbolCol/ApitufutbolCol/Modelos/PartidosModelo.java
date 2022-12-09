package com.tufutbolCol.ApitufutbolCol.Modelos;

import java.sql.Date;
import java.sql.Time;

import org.springframework.data.annotation.Id;


public class PartidosModelo {
    private Long codigo;
    private Date fechaEncuentro;
    private Time horaEncuentro;
    private Integer equipoLocal;
    private Integer equipoVisitante;
    private String lugarPartido;
    private Integer golesVisitante;
    private Integer golesLocal;
    
    @Id
    public Long getCodigo() {
        return codigo;
    }
    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }
    public Date getFechaEncuentro() {
        return fechaEncuentro;
    }
    public void setFechaEncuentro(Date fechaEncuentro) {
        this.fechaEncuentro = fechaEncuentro;
    }
    public Time getHoraEncuentro() {
        return horaEncuentro;
    }
    public void setHoraEncuentro(Time horaEncuentro) {
        this.horaEncuentro = horaEncuentro;
    }
    public Integer getEquipoLocal() {
        return equipoLocal;
    }
    public void setEquipoLocal(Integer equipoLocal) {
        this.equipoLocal = equipoLocal;
    }
    public Integer getEquipoVisitante() {
        return equipoVisitante;
    }
    public void setEquipoVisitante(Integer equipoVisitante) {
        this.equipoVisitante = equipoVisitante;
    }
    public String getLugarPartido() {
        return lugarPartido;
    }
    public void setLugarPartido(String lugarPartido) {
        this.lugarPartido = lugarPartido;
    }
    public Integer getGolesVisitante() {
        return golesVisitante;
    }
    public void setGolesVisitante(Integer golesVisitante) {
        this.golesVisitante = golesVisitante;
    }
    public Integer getGolesLocal() {
        return golesLocal;
    }
    public void setGolesLocal(Integer golesLocal) {
        this.golesLocal = golesLocal;
    }

    
}
