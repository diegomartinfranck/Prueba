class ExcursionGuiada extends ExperienciaTuristica {
    
    constructor(nombre, fecha, cupo, duracion, tarifaBase, guia) {
      super(nombre, fecha, cupo, duracion, tarifaBase);
      this.guia = guia;
    }
  
    requiereGuia() {
      return true;
    }
  
    hayDisponibilidadFecha(fecha) {
      return this.hayDisponibilidadFecha(fecha) && this.guia.estaAsignado();
    }
  
    precioTotal() {
      return this.tarifaBase;
    }
  }
  