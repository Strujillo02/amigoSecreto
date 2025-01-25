// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let cadena = "";

function sorteo() {
  return Math.floor(Math.random() * amigos.length);
}

function agregarAmigo() {
  let sorteo = Math.floor(Math.random() * amigos.length);

  let nombre = document.getElementById("amigo").value;
  if (nombre == "" || nombre == " ") {
    alert("Debe ingresar un nombre");
  } else {
    amigos.push(nombre);

    let elemento = document.getElementById("listaAmigos");
    cadena = nombre + "<br>" + cadena;
    elemento.innerHTML = cadena;
    document.getElementById("amigo").value = "";
    
  }
 
}

function sortearAmigo() {
  let mostrar = document.getElementById("resultado");
  mostrar.innerHTML = `el ganador fue  ${amigos[sorteo()]}`;
}
