class Cliente{
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
      }
    
      consultarDatos() {
        return {
          nombre: this.nombre,
          email: this.email,
        };
      }   
      consultarEmail(){
        return email;
      } 
}

export {Cliente};
