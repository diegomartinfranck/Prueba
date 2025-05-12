class Actividad{
  constructor(nombre,cupo){
    this.nombre=nombre;  
    this.cupo=cupo;
  }
  consultarCupo()
  {
    return this.cupo;
  }
  consultarNombre(){
    return this.nombre;
  }
}

export {Actividad};