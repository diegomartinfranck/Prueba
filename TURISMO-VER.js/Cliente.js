class Cliente {
    
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  consultarDatos() {
    return `Nombre: ${this.nombre}, Teléfono: ${this.telefono}`;
  }
  
}
