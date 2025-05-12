import {Cliente} from './Cliente.js'
import{Reserva} from './Reserva.js'
import {ExperienciaTuristica} from './ExperienciaTuristica.js'
import { Actividad } from './Actividad.js'
import { ExcursionGuiada } from './ExcursionGuiada.js'
import { PaqueteAventura } from './PaqueteAventura.js'

/*let nuevoCliente=new Cliente("Juan", "4449000");
let nuevoPaquete =new ExperienciaTuristica("Excursion", new Date("2025-06-25") , 10, 1, 10000)
let nuevaReserva=new Reserva(nuevoCliente, 5, 10,new Date("2025-01-30")); 
console.log(nuevoCliente);
console.log(nuevoPaquete);
console.log(nuevoPaquete.lugaresOcupados());
nuevoPaquete.reservar(nuevoCliente,5,10);
console.log(nuevoPaquete);
console.log(nuevoPaquete.lugaresOcupados());
console.log(nuevaReserva.estaVencida());*/
let actividad1=new Actividad("Cabalgata",10);
let actividad2=new Actividad("Trecking",25);
let actividades=[];
actividades.push(actividad1);
actividades.push(actividad2);
let experiencia = new PaqueteAventura("Aventura Natural",new Date("2025-07-20"),50,2,30000,10,5,actividades);
console.log(experiencia);