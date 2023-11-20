//////////////////////////////////////////////////primer test////////////////////////////


// const numeroSecreto = 42;

// let intento;
// let intentos = 0;

// intento = parseInt(prompt("Adivina el número secreto:"));

// while (intento !== numeroSecreto) {

//   intentos++;

//   if (intento < numeroSecreto){

//    alert("te quedaste corto mi bro.");
  
// } else if (intento > numeroSecreto){

//     alert("te pasaste mi bro.");
  
//   }
//   intento = parseInt(prompt("Adivina el número secreto:"));
// }

// alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);




//////////////////////////////////////////////////Segundo test////////////////////////////

// const numeroSecreto = 42;

// let intento;
// let intentos = 0;

// intento = parseInt(prompt("Adivina el número secreto:"));

// while (intento !== numeroSecreto) {

//   intentos++;

//   if (intento < numeroSecreto){

//    alert("te quedaste corto mi bro.");
  
// } else if (intento > numeroSecreto){

//     alert("te pasaste mi bro.");
  
//   }
//   intento = parseInt(prompt("Adivina el número secreto:"));
// }

// alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);




////////////////////////////////////////////////// Codigo final ////////////////////////////


// function adivinaNumeroSecreto() {
//   const numeroSecreto = 42;
//   let intento;
//   let intentos = 1;

//   intento = parseInt(prompt("Adivina el número secreto:"));

//   while (intento !== numeroSecreto) {
//     intentos++;

//     if (intento < numeroSecreto){
//       alert("te quedaste corto mi bro.");
//     } else if (intento > numeroSecreto){
//       alert("te pasaste mi bro.");
//     }
//     intento = parseInt(prompt("Adivina el número secreto:"));
//   }

//   alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);
// }

// adivinaNumeroSecreto();

////////////////////////////////////////////////////////////////// segundo test añadiendo array
// function adivinaNumeroSecreto() {
//   const numeroSecreto = 42;
//   let intento;
//   let intentos = 1;
//   let numerosAdivinados = [];

//   intento = parseInt(prompt("Adivina el número secreto:"));
//   numerosAdivinados.push(intento);

//   while (intento !== numeroSecreto) {
//     intentos++;

//     if (intento < numeroSecreto){
//       alert("te quedaste corto mi bro.");
//     } else if (intento > numeroSecreto){
//       alert("te pasaste mi bro.");
//     }
//     intento = parseInt(prompt("Adivina el número secreto:"));
//     numerosAdivinados.push(intento);
//     console.log("Números adivinados hasta ahora: " + numerosAdivinados.join(", "));
//   }

//   alert(`Felicidades, adivinaste el número en ${intentos} intentos!`);
// }

// adivinaNumeroSecreto();


////////////////////////////////////////////////////////////////// tercer test añadiendo arrays y filtrado

let usuarios = [
  { nombre:"Daniel",
    apellido:"Villajuan"
  },
  {
    nombre:"Marcos",
    apellido:"Gonzalez"
  },
  {
    nombre:"Juan",
    apellido:"Perez"
    },
    {
      nombre:"Luisa",
      apellido:"Rodriguez"
    },
    {
      nombre:"Fede",
      apellido:"fracchia",
    }
  ];

function ingresarUsuario() {
  let nombre = prompt('Ingresa el nombre del usuario:');
  let apellido = prompt('Ingresa el apellido del usuario:');
  usuarios.push({nombre: nombre, apellido: apellido});
  alert(`Usuario ${nombre} ${apellido} ha sido agregado.`);
  
}console.log(usuarios);

function buscarUsuario() {
  let nombre = prompt('Ingresa el nombre del usuario a buscar:');
  let apellido = prompt("Ingresa el apellido del usuario a buscar:");
  let usuarioEncontrado = usuarios.find(usuario => usuario.nombre === nombre && usuario.apellido === apellido);
  
  if (usuarioEncontrado) {
    alert(`Usuario encontrado: ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`);
  } else {
    alert('Usuario no encontrado.');
  }
}

function filtrarUsuarios() {
  let apellido = prompt('Ingresa el apellido para filtrar usuarios:');
  let usuariosFiltrados = usuarios.filter(usuario => usuario.apellido === apellido);
  
  if (usuariosFiltrados.length > 0) {
    alert('Usuarios filtrados:');
    usuariosFiltrados.forEach(usuario => console.log(`${usuario.nombre} ${usuario.apellido}`));
  } else {
    alert('No se encontraron usuarios con ese apellido.');
  }
}

ingresarUsuario();
buscarUsuario();
filtrarUsuarios()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//en este trozo de codigo quise hacer opciones para que el usuario elija que quiere hacer y no se tengan que ejecutar las funciones una despues de la otra aunque sea un ejemplo
//pero no puedo ponerle una estructura switch porque sino la funcion se llama fuera de su entorno y no me la deja arrancar
// asi que me lo dejare ppara el dom o eventos xd
//esta porcion de codigo funciona bien pero si se ejecuta la variable ${usuarios} no va a almacenar nada nuevo, y solo podes buscar los objetos viejos dentro del array

// let opcion = prompt('Elige una opción: \n1. Ingresar usuario \n2. Buscar usuario \n3. Filtrar usuarios');

// switch(opcion) {
//   case '1':
//     ingresarUsuario();
//     break;
//   case '2':
//     buscarUsuario();
//     break;
//   case '3':
//     filtrarUsuarios();
//     break;
//   default:
//     alert("Opción no válida");
// }
