import {ExperienciaTuristica} from './ExperienciaTuristica.js'
class PaqueteAventura extends ExperienciaTuristica {
  
    constructor(nombre, fecha, cupo, duracion, tarifaBase, descuentoGrupo,cantidadMinimaGrupo,listaActividades) {
      super(nombre, fecha, cupo, duracion, tarifaBase,descuentoGrupo,cantidadMinimaGrupo);
      this.listaActividades = listaActividades;      
      let cantidadMinima=this.cupoMinimo();
      if (cantidadMinima !=0)
        super.cambiarCupo(cantidadMinima);
    }
      
    requiereGuia() {
      return false;
    }
    cupoMinimo(){
      let cantidad=0;
      if (this.listaActividades.length>0)
      {
        cantidad=this.listaActividades[0];
        this.listaActividades.forEach((actividad) => {                
        if (actividad.consultarCupo()<cantidad)
          cantidad=actividad.consultarCupo();      
    });
    }         
    return cantidad;
    }
       
  }
  export{PaqueteAventura};