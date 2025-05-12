import {Reserva} from './Reserva.js'
class ExperienciaTuristica {

  constructor(nombre, fecha, cupo, duracion, tarifaBase,descuentoGrupo,cantidadMinimaGrupo) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.cupo = cupo;
    this.duracion = duracion;
    this.tarifaBase = tarifaBase; 
    this.decuentoGrupo=descuentoGrupo;
    this.cantidadMinimaGrupo=cantidadMinimaGrupo;   
    this.reservas=[];
    this.reservas.push()
  }
  sePuedeReservar(){
    return this.lugaresDisponibles()>0;
  }
  lugaresDisponibles(){      
    return this.cupo-this.lugaresOcupados();
  }

  precioTotal(email) {
    let cantidad=this.reservas.consultarIntegrantesReserva(email);
    return this.consultarPrecio(cantidad);
  }
  
  requiereGuia() {
    return false; // Por defecto, no requiere guía
  }
  reservar(cliente,cantidad,plazoLimite){       
      this.reservas.push(new Reserva(cliente,cantidad,plazoLimite,new Date(Date.now())));      
  } 
  buscarReseva(email)
  { let reservaBuscada;
    this.reservas.forEach((reserva) => {                
        if (reserva.consultarEmailCliente()===email)
          reservaBuscada=reserva     
    });      
    return reservaBuscada;
  }
  consultarIntegrantesReserva(email){
    let reserva=this.buscarReseva(email);
    let cantidad=reserva.consultarCantidadIntegrantes();              
    return cantidad;
  }
  pagarReserva(email){
    let reserva=this.buscarReseva(email);  
    reserva.pagarReserva();
  }
  reservasVencidas()
  {
    let reservasVencidas=[];
    let eliminar=[];
    this.reservas.forEach((reserva,indice) => {                
        if (reserva.estaVencida())
        {
         reservasVencidas.push(reserva); 
         eliminar.push(indice);   
        }
    });      
    eliminarReservasVencidas(eliminar);
    return reservasVencidas;
  }
  totalReservasVencidas(){
    let total=0;
    this.reservas.forEach((reserva) => {                
        if (reserva.estaVencida())
          total+=this.precioTotal(reserva.consultarIntegrantesReserva);
    });      
    return total;
  }
  eliminarReservasVencidas(eliminar){
    let offset = 0;
      eliminar.forEach(indice => {
          this.reservas.splice(indice - offset, 1); // Ajustar el índice para eliminar
          offset++;
      });
    }
  cambiarCupo(cupo){
    this.cupo=cupo;
  }
  consultarPrecio(){
    return this.tarifaBase
  }
  consultarPrecio(cantidad){
    if (cantidad>=this.cantidadMinimaGrupo)
      return this.tarifaBase*(1-this.decuentoGrupo)*cantidad;
    return this.tarifaBase;
  }
  lugaresOcupados(){    
    let total=0;
    this.reservas.forEach((reserva) => {                
        total+=reserva.consultarCantidadIntegrantes();                
      });      
      return total;         
  }
}
export {ExperienciaTuristica};
