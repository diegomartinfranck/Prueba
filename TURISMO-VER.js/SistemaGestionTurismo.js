class SistemaGestionTurismo {
    
    constructor() {
      this.listaReservas = new Map(); // Reserva -> pagada (boolean)
      this.listaEspera = [];
      this.descuentoGrupo = 0.1;
      this.cantidadMinimaGrupo = 5;
      this.listaGuias = [];
    }
  
    agregarReserva(reserva, cantidad) {
      this.listaReservas.set(reserva, false);
    }
  
    cancelarReserva(reserva) {
      this.listaReservas.delete(reserva);
    }
  
    saldoPendiente() {
      let total = 0;
      for (let [reserva, pagada] of this.listaReservas) {
        if (!pagada) total += this.calcularPago(reserva);
      }
      return total;
    }
  
    realizarPago(reserva) {
      if (this.listaReservas.has(reserva)) {
        this.listaReservas.set(reserva, true);
      }
    }
  
    calcularPago(reserva) {
      let costo = reserva.calcularCostoReserva();
      if (this.esGrupo(reserva)) {
        costo *= (1 - this.descuentoGrupo);
      }
      return costo;
    }
  
    esGrupo(reserva) {
      return reserva.cantidad >= this.cantidadMinimaGrupo;
    }
  }
  
  
  