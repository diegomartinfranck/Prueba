import {Cliente} from './Cliente.js'
class Reserva {
    constructor(cliente, cantidad, plazoLimite,fecha) {
      this.cliente = cliente;      
      this.cantidad = cantidad;
      this.plazoLimite = plazoLimite;
      this.fecha=fecha;
      this.pagada=false;
    }
    calcularCostoReserva(){

    }
    esGrupal() {
      return this.cantidad > 1;
    }
  
    consultarCantidadIntegrantes() {
      return this.cantidad;
    }
    consultarEmailCliente(){
      return this.cliente.consultarEmail();
    }
    estaVencida(){
      const hoy= new Date(Date.now());
      hoy.setMinutes(0);
      hoy.setSeconds(0);
      hoy.setMilliseconds(0);      
      const nueva=new Date(this.fecha.valueOf());      
      nueva.setDate(nueva.getDate()+this.plazoLimite);     
      return nueva<hoy;
    }
    estaPagada(){
      return this.pagada;
    }
    pagarReserva(){
      this.pagada=true;
    }


  }
  export {Reserva}
  