package com.tufutbolCol.ApitufutbolCol.Modelos;

import org.springframework.data.annotation.Id;

public class EquiposModelo {
    @Id
    private Long codigo;
    private String nombre;
    private String annoFundado;
    private String logo;
    public Long getCodigo() {
        return codigo;
    }
    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getAnnoFundado() {
        return annoFundado;
    }
    public void setAnnoFundado(String annoFundado) {
        this.annoFundado = annoFundado;
    }
    public String getLogo() {
        return logo;
    }
    public void setLogo(String logo) {
        this.logo = logo;
    }

    
}
