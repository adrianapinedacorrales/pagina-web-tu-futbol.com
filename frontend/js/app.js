const app=Vue.createApp({
    data(){
        return{
            menu:0
        
            
        }
    },
    methods:{


    }
})

app.component("guardar-usuario", {

    data(){
        return{
            documento:"",
            nombre:"",
            correo:"",
            telefono:"",
            contrasena:""

        };
    },
    template:`
    
    <div class="row">
        <div class="col-3">
            <div class="container">
    
            </div>
    
    
        </div>
        <div class="col-6">
            <div id="tablas">
                <h3 class="text-center text-info" >Usuarios</h3>
                <form v-on:submit.prevent="guardarUsuario">
                <div class="text-center">
                    <table>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Documento</span></td>
                            </div>
                           <td> <input type="text" v-model="documento" ></td>
                        </div>
                        
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Nombres</span></td>
                            </div>
                            <td><input type="text" v-model="nombre" ></td>
                        </div>
                       
                    </tr>
                   
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Correo</span></td>
                            </div>
                           <td> <input type="text" v-model="correo" ></td>
                        </div>
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Telefono</span></td>
                            </div>
                           <td> <input type="text" v-model="telefono" ></td>
                        </div>
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Contraseña</span></td>
                            </div>
                            <td><input type="text" v-model="contrasena" ></td>
                        </div>
                </tr>
                </table>
            </div>
                <p class="text-center"><input class="btn btn-primary" type="submit"  value="Guardar Usuario"  ></p>
                
            </form>
            </div>
    
           
        </div>
        <div class="col-3">
    
        </div>
    
    </div>
    
    

    `
    ,

    methods:{

        guardarUsuario(){
            const enpoint="http://localhost:9011/usuarios/guardar";
            const opciones={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({

                    documento:this.documento,
                    nombre:this.nombre.toUpperCase(),
                    correo:this.correo.toLowerCase(),
                    telefono:this.telefono,
                    contrasena:this.contrasena,
                    
                })
            };
            fetch(enpoint,opciones).then(async response =>{
                alertify.success("usuario Guardado")
                this.consultarUsuarios();
                this.documento="",
                this.nombre="",
                this.contrasena="",
                this.correo="",
                this.telefono=""
               
                
            })
        },

    }


})


app.component("guardar-equipo", {

    data(){
        return{
            codigo:"",
            nombre:"",
            annoFundado:"",
          

        };
    },
    template:`
    
    <div class="row">
        <div class="col-3">
            <div class="container">
    
            </div>
    
    
        </div>
        <div class="col-6">
            <div id="tablas">
                <h3 class="text-center text-info" >Equipos</h3>
                <form v-on:submit.prevent="guardarEquipo">
                <div class="text-center">
                    <table>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Codigo</span></td>
                            </div>
                           <td> <input type="text" v-model="codigo" ></td>
                        </div>
                        
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Nombre Equipo</span></td>
                            </div>
                            <td><input type="text" v-model="nombre" ></td>
                        </div>
                       
                    </tr>
                    <tr>
                    <div class="input-group">
                        <div class="input-group-prepend">
                          <td><span class="input-group-text" id="">Año Fundado</span></td>
                        </div>
                        <td><input type="text" v-model="annoFundado" ></td>
                    </div>
                   
                </tr>
                    
                </table>
            </div>
                <p class="text-center"><input class="btn btn-primary" type="submit"  value="Guardar Equipo"  ></p>
                
            </form>
            </div>
    
           
        </div>
        <div class="col-3">
    
        </div>
    
    </div>
    
    

    `
    ,

    methods:{

        guardarEquipo(){
            const enpoint="http://localhost:9011/equipos/guardar";
            const opciones={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({

                    codigo:this.codigo,
                    nombre:this.nombre.toUpperCase(),
                    annoFundado:this.annoFundado
                    
                    
                })
            };
            fetch(enpoint,opciones).then(async response =>{
                alertify.success("Equipo Guardado")
                // this.consultarEquipos();
                this.codigo="",
                this.nombre="",
                this.annoFundado=""
              
               
                
            })
        },

    }


})

app.component("guardar-partido", {

    data(){
        return{
            codigo:"",
            fechaEncuentro:"",
            horaEncuentro:"",
            equipoLocal:"",
            equipoVisitante:"",
            lugarPartido:"",
            golesVisitante:"",
            golesLocal:""
          

        };
    },
    template:`
    
    <div class="row">
        <div class="col-3">
            <div class="container">
    
            </div>
    
    
        </div>
        <div class="col-6">
            <div id="tablas">
                <h3 class="text-center text-info" >Partido</h3>
                <form v-on:submit.prevent="guardarPartido">
                <div class="text-center">
                    <table>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Codigo</span></td>
                            </div>
                           <td> <input type="text" v-model="codigo" ></td>
                        </div>
                        
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                              <td><span class="input-group-text" id="">Fecha Encuentro</span></td>
                            </div>
                            <td><input type="text" v-model="fechaEncuentro" ></td>
                        </div>
                       
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <td><span class="input-group-text" id="">Hora de Encuentro</span></td>
                            </div>
                            <td><input type="text" v-model="horaEncuentro" ></td>
                        </div>
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <td><span class="input-group-text" id="">Equipo Local</span></td>
                            </div>
                            <td><input type="text" v-model="equipoLocal" ></td>
                        </div>
                    </tr>
                    
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <td><span class="input-group-text" id="">Equipo Visitante</span></td>
                            </div>
                            <td><input type="text" v-model="equipoVisitante" ></td>
                        </div>
                    </tr>

                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <td><span class="input-group-text" id="">Lugar Encuentro</span></td>
                            </div>
                            <td><input type="text" v-model="lugarPartido" ></td>
                        </div>
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <td><span class="input-group-text" id="">Goles Visitante</span></td>
                            </div>
                            <td><input type="text" v-model="golesVisitante" ></td>
                        </div>
                    </tr>
                    <tr>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <td><span class="input-group-text" id="">Goles Local</span></td>
                            </div>
                            <td><input type="text" v-model="golesLocal" ></td>
                        </div>
                    </tr>
                </table>
            </div>
                <p class="text-center"><input class="btn btn-primary" type="submit"  value="Guardar Partido"  ></p>
                
            </form>
            </div>
    
           
        </div>
        <div class="col-3">
    
        </div>
    
    </div>
    
    

    `
    ,

    methods:{

        guardarPartido(){
            const enpoint="http://localhost:9011/partidos/guardar";
            const opciones={
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({

                    codigo:this.codigo,
                    fechaEncuentro:this.fechaEncuentro,
                    equipoLocal:this.equipoLocal,
                    equipoVisitante:this.equipoVisitante,
                    lugarPartido:this.lugarPartido,
                    golesVisitante:this.golesVisitante,
                    golesLocal:this.golesLocal
                    
                })
            };
            fetch(enpoint,opciones).then(async response =>{
                alertify.success("Partido Guardado")
                // this.consultarEquipos();
                this.codigo="",
                this.fechaEncuentro="",
                this.horaEncuentro="",
                this.equipoLocal="",
                this.equipoVisitante="",
                this.lugarPartido="",
                this.golesVisitante="",
                this.golesLocal=""
                
              
               
                
            })
        },

    }


})



app.component("consultar-usuarios",{

    data(){
        return{
            buscaApellido:"",
            usuarios:[],
        };
    },

    template: `
    <div>
    <h3>CONSULTAR USUARIOS </h3>
    <input class="btn btn-success"  type="button" value="VER USUARIO" v-on:click="consultarUsuarios"><br>

    <table class="table table-bordered">
        <thead>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Telefono</th>
            
        </thead>
        <tbody>
            <tr v-for="usuario in usuarios">
                <th>{{usuario.documento}}</th>
                <th>{{usuario.nombre}}</th>
                <th>{{usuario.correo}}</th>
                <th>{{usuario.telefono}}</th>
                
            </tr>
        </tbody>

    </table>
    </div>
    </div>
    `,
    methods:{

        buscarApellido()      {
            const enpoint="http://localhost:9011/usuarios/buscarxapellido/"+this.buscaApellido;
            const opciones={method:"GET"}

            fetch(enpoint,opciones).then(async response=>{
                this.usuarios=await response.json();
            } )
        },


        consultarUsuarios(){
            const enpoint="http://localhost:9011/usuarios/consultar";
            
            const opciones={method:"GET"}

            fetch(enpoint,opciones).then(async response=>{
                this.usuarios=await response.json();
            } )
        },

    }

})


app.component("eliminar-usuario",{

    data(){
        return{
            borrarDoc:"",
        };
    },

    template: `
    <div>
    <h3>Eliminar Usuario</h3>
    <label> Num Documento </label> <input type="text" v-model="borrarDoc">
    <input type="button" class="btn btn-danger" value="ELIMINAR" v-on:click="eliminaUsuario">
    </div>
    
    `,
    methods:{

        eliminaUsuario(){
            
            const enpoint="http://localhost:9011/usuarios/eliminar/"+this.borrarDoc;
            const opciones={method:"DELETE"};

            alertify.confirm("Confirmación","Desea eliminar el usuarios",
            function(){

            
            fetch(enpoint,opciones).then(async response=>{
                var respuesta=await response.json();
                if(respuesta){
                    alertify.success('Usuario eliminado');
                    
                    this.borrarDoc="";
                } else {
                    alertify.error('El usuario no se encuentra');
                }
            })

            
        },
         function(){
        alertify.error('Cancelado');
        });
        this.consultarUsuarios();
        },

    }

})


app.component("eliminar-equipo",{

    data(){
        return{
            borrarCod:"",
        };
    },

    template: `
    <div>
    <h3>Eliminar Equipo</h3>
    <label> Codigo del Equipo </label> <input type="text" v-model="borrarCod">
    <input type="button" class="btn btn-danger" value="ELIMINAR" v-on:click="eliminaEquipo">
    </div>
    
    `,
    methods:{

        eliminaEquipo(){
            
            const enpoint="http://localhost:9011/equipos/eliminar/"+this.borrarCod;
            const opciones={method:"DELETE"};

            alertify.confirm("Confirmación","Desea eliminar el Equipo",
            function(){

            
            fetch(enpoint,opciones).then(async response=>{
                var respuesta=await response.json();
                if(respuesta){
                    alertify.success('Equipo eliminado');
                    
                    this.borrarCod="";
                } else {
                    alertify.error('El Equipo no se encuentra');
                }
            })

            
        },
         function(){
        alertify.error('Cancelado');
        });
        // this.consultarUsuarios();
        },

    }

})



app.component("consultar-documento",{

    data(){
        return{
            usuario:{},
            buscaDoc:"",

        };
    },

    template: `
    
    <div>
    <h3>Consultar por documento</h3>
    <label>Nro Documento</label> <input type="text" v-model="buscaDoc">
    <input type="button" class="btn btn-success" value="Buscar Doc"  v-on:click="buscarDoc">
    
    <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Documento</th>
        <th scope="col">Nombre</th>
        <th scope="col">Correo</th>
        <th scope="col">Telefono</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{{usuario.documento}}</td>
        <td>{{usuario.nombre}}</td>
        <td>{{usuario.correo}}</td>
        <td>{{usuario.telefono}}</td>
      </tr>
      
    </tbody>
  </table>


    </div>
    
    `,
    methods:{

        buscarDoc(){
            const enpoint="http://localhost:9011/usuarios/consultardocumento/"+this.buscaDoc;
            const opciones={method:"GET"};

            fetch(enpoint,opciones).then(async response=>{
                this.usuario=await response.json();
                this.buscaDoc="";
            } )
        }, 

    }

})






app.component("login-usuarios",{

    data(){
        return{
            buscaUsuarios:"",
            usuarios:[],
            
        };
    },

    template: `
    <div>
    <div class="container">
    <div class="row my-5">
        <div class="col-3"></div>
        <div class="col-6 text-center">
            <img src="./img/loginfutbol.jpg" height="150" class="rounded-circle">
            <form name="frm">
                <div class="row mb-3 my-5" >
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Correo</label>
                  <div class="col-sm-10">
                    <input type="email" name="correo" class="form-control" id="inputEmail3">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Contraseña</label>
                  <div class="col-sm-10">
                    <input type="password" name="contrasena" class="form-control" id="inputPassword3">
                  </div>
                </div>
                
                
                <button type="button" class="btn btn-primary" v-on:click="logearUsuarios">Acceder</button>
              </form>
              <div class="col-3"></div>
        </div>
    </div>
</div>
    </div>
    `,
    methods:{

        logearUsuarios()
              
        {
            console.log("logueando....")
            let correo = document.frm.correo.value
            let contrasena = document.frm.contrasena.value
            console.log(correo+' , '+ contrasena);
            let usuario = {
              'correo':correo,
              'contrasena':contrasena
           
            }
            let opciones = {
              method : "GET",
              body:JSON.stringify(usuario),
              headers:{
                'Content-Type': 'application/json'
              }
            }
    
            fetch("http://localhost:9011/usuarios/login", opciones)
            .then(response =>response.json())
            .then(data =>{console.log(data)
              
              if(data.msj == "ok"){
                document.location = "panel.html"
                
              } else {
                alert("datos de acceo incorrecto")
              }
            
            })
            
    
          }

    }

})






app.mount("#aplicacion");