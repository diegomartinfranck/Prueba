import {Cliente} from './Cliente.js'
class ClienteEnEspera {
    constructor(cliente, cantidadLugares){
        this.cliente=cliente;
        this.cantidadLugares=this.cantidadLugares;
    }
    consultarCantidadLugares(){
        return this.cantidadLugares;
    }
    consultarCliente(){
        return this.cliente;
    }

}
export {Cliente};