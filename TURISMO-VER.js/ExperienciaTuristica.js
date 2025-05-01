class ExperienciaTuristica {
    
    constructor(nombre, fecha, cupo, duracion, tarifaBase) {
      this.nombre = nombre;
      this.fecha = fecha;
      this.cupo = cupo;
      this.duracion = duracion;
      this.tarifaBase = tarifaBase;
    }
  
    hayDisponibilidadFecha(fecha) {
      return this.fecha.getTime() === fecha.getTime() && this.cupo > 0;
    }
  
    precioTotal() {
      return this.tarifaBase;
    }
  
    requiereGuia() {
      return false;
    }
  }
  