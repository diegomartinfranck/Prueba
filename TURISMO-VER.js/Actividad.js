class Actividad extends ExperienciaTuristica {
    constructor(nombre, cupo) {
      super(nombre, null, cupo, 0, 0);
    }
  
    hayDisponibilidadFecha(fecha) {
      return this.cupo > 0;
    }
  
    requiereGuia() {
      return false;
    }
  
    precioTotal() {
      return this.tarifaBase;
    }
  }
  