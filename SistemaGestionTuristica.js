import { Cliente } from "./Cliente.js"
import {Guia} from "./Guia.js"
import {ClienteEnEspera} from "./ClienteEnEspera.js"
import { ExcursionGuiada } from "./ExcursionGuiada,js"
import { ExperienciaTuristica } from "./ExperienciaTuristica.js"
import { PaqueteAventura } from "./PaqueteAventura.js"

class SistemaGestionTurismo {
    constructor() {
      this.listaExperiencias = new Map(); // {reserva: pagada}
      this.listaEspera = new Map();
      this.listaGuias = [];
    }
    crearExperiencia(nombre,fecha,cupo,duracion,tarifaBase,cantidadMinimaGrupo, descuentoGrupo,actividades){
        let nuevoPaquete=new PaqueteAventura(nombre,fecha,cupo,duracion,tarifaBase,descuentoGrupo,cantidadMinimaGrupo,actividades);
        this.listaExperiencias.set(fecha,nuevoPaquete);
    }
    crearExperiencia(nombre,fecha,cupo,duracion,tarifaBase,cantidadMinimaGrupo, descuentoGrupo){
        let nuevaExcursion=new ExcursionGuiada(nombre,fecha,cupo,duracion,tarifaBase);
        this.asignarGuia(nuevaExcursion)
        this.listaExperiencias.set(fecha,nuevaExcursion);
    }
    asignarGuia(excursion){
      this.listaGuias.forEach((guia)=> {
          if (!guia.estaAsignado())
          {
            excursion.asignarGuia(guia);
            guia.asignar();
          }
      });

    }
    hayDisponibilidad(fecha){
      return this.listaExperiencias.has(fecha);
    }
    agregarListaEspera(fecha,nombre, email,cantidad)
    {   let cliente=new Cliente(nombre,email); 
        if (!(listaEspera.has(fecha)))         
          this.listaEspera.set(fecha,new ClienteEnEspera(Cliente, cantidad));        
        else
        {
          let lista=this.listaEspera.get(fecha);
          lista.push(new ClienteEnEspera(cliente,cantidad));
          this.listaEspera.set(fecha,lista);
        }
     }
    precioExperiencia(fecha, cantidad){
       return this.listaEspera.get(fecha).consultarPrecioExperiencia(cantidad); 
    }
    consultarPrecioExperiencia(fecha){
      return this.listaEspera.get(fecha).consultarPrecioExperiencia(); 
    }
    reservar(fecha, nombreCliente, email, lugares,limitePago){
        let experiencia=this.listaExperiencias(fecha);
        experiencia.reservar(new Cliente(nombreCliente,email),lugares,limitePago);
    }
    reservar(experiencia, cliente, lugares,limitePago){      
      experiencia.reservar(cliente,lugares,limitePago);
  }
    cancelarReserva(fecha, email){
      let experiencia=this.listaExperiencias(fecha);
      disponible=experiencia.cancelarReserva(fecha);
      return disponible;
    }
    pagarReserva(fecha,email){
      let experiencia=this.listaExperiencias(fecha);
      experiencia.pagarReserva(email);
    }
    saldoPendienteExperienciaTuristica(fecha){
      let experiencia=this.listaExperiencias(fecha);
      let saldo=experiencia.totalReservasVencidas();
      return saldo;
    }
    cancelarReservasVencidas(fecha)
    { let experiencia=this.listaExperiencias(fecha); 
      let listaVencidas=experiencia.reservasVencidas();         
      reasignarReservasVencidas(fecha,experiencia,listaVencidas);
    }
    reasignarReservasVencidas(fecha,experiencia,listaVencidas){      
      if (listaEspera.has(fecha))
        listaVencidas.array.forEach(reserva => {
            let clienteEspera=buscarEnListaEspera(fecha,reserva.consultarCantidadIntegrantes());
            this.reservar(experiencia,clienteEspera.consultarCliente(),clienteEspera.consultarCantidadLugares(),10);
        });
    }
    buscarEnListaEspera(fecha,cantidad){
      let clienteAsignado;  
      let pos;
      if (this.listaEspera.has(fecha))
        {
          lista=this.listaEspera.get(fecha);
          lista.forEach((cliente,indice) => {                
            if (cliente.consultarCantidadLugares()<=cantidad)
              clienteAsignado=cliente;   
              pos=indice;
          }); 
          this.eliminarDeListaEspera(fecha,lista,pos);
        } 
        return clienteAsignado;
    }
    eliminarDeListaEspera(fecha,lista,pos){
        lista.splice(pos,1);
        this.listaEspera.set(fecha,lista);
    }

    
}