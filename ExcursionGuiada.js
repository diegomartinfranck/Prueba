import {ExperienciaTuristica} from './ExperienciaTuristica.js'
class ExcursionGuiada extends ExperienciaTuristica {  
    constructor(nombre, fecha, cupo, duracion, tarifaBase) {
      super(nombre, fecha, cupo, duracion, tarifaBase);      
    }
      
    requiereGuia() {
      return true; // Siempre requiere guía
    }
    asignarGuia(guia){
      this.guia=guia;
    }

    sePuedeReservar(){
      return this.guia!=null && super.sePuedeReservar();
    }   
    reservar(cliente,cantidad,plazoLimite){
      if (this.sePuedeReservar())
        super.reservar(cliente,cantidad,plazoLimite);
    } 
    
  }
  export {ExcursionGuiada};
  