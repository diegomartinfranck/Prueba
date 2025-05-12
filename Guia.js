class Guia {
    constructor(nombre) {
      this.nombre = nombre;
      this.asignado = false;
    }
  
    estaAsignado() {
      return this.asignado;
    }
    asignar(){
      this.asignado=true;
    }
    liberar(){
      this.asignado=false;
    }
    consultarNombre(){
      return this.nombre;
    }


  }

  export {Guia};
