class Reserva {
    
    constructor(cliente, experienciaTuristica, plazoLimite, cantidad) {
      this.cliente = cliente;
      this.experienciaTuristica = experienciaTuristica;
      this.plazoLimite = plazoLimite;
      this.cantidad = cantidad;
    }
  
    hayDisponibilidad(fecha) {
      return this.experienciaTuristica.hayDisponibilidadFecha(fecha);
    }
  
    calcularCostoReserva() {
      return this.experienciaTuristica.precioTotal() * this.cantidad;
    }
  
    esGrupal() {
      return this.cantidad > 1;
    }
  
    consultarCantidadIntegrantes() {
      return this.cantidad;
    }
  }
  