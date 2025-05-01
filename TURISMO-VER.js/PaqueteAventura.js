class PaqueteAventura extends ExperienciaTuristica {
    
    constructor(listaExperienciasTuristicas) {
      super("Paquete Aventura", null, 0, 0, 0);
      this.listaExperienciasTuristicas = listaExperienciasTuristicas;
    }
  
    hayDisponibilidadFecha(fecha) {
      return this.listaExperienciasTuristicas.every(exp => exp.hayDisponibilidadFecha(fecha));
    }
  
    requiereGuia() {
      return this.listaExperienciasTuristicas.some(exp => exp.requiereGuia());
    }
  
    precioTotal() {
      return this.listaExperienciasTuristicas.reduce((total, exp) => total + exp.precioTotal(), 0);
    }
  }
  