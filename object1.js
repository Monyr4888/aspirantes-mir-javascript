const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    hobbies: ['programar', 'squash', 'piano'] 
    
  }
  pedro.estatura = 1.8;
  delete pedro.activo

  for (let key in pedro) {
    console.log(key + ": " + pedro[key]);
  }

  pedro.saluda = function() {
    return "Hola, me llamo " + this.nombre;
  };

 

console.log(pedro.edad);  //30
console.log(pedro.estatura);// imprime 1.8
console.log(pedro); //Elimina la propiedad con llave activoo
console.log(pedro.saluda());


