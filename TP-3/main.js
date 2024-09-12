let a = 5;
let b = 10;
let c = a + b;
console.log("La suma de a y b es: " + c);


let name = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + name + "!");

let d = 14;
let e = 10;
let f = 7;

let max = Math.max(a, b, c);
console.log("El mayor de los tres números es: " + max);

let numeroIngresado = prompt("Ingresa un número y te diré si es par o impar");

if (numeroIngresado % 2 === 0) {
  console.log("El número " + numeroIngresado + " es par");
} else {
  console.log("El número " + numeroIngresado + " es impar");
}

let num = 10;
while (num >= 0) {
  console.log(num);
  num--;
}

let numero;
do {
  numero = prompt("Ingresa un número mayor a 100:");
} while (numero <= 100);

console.log("El número ingresado es: " + numero);

function esPar(num) {
  return num % 2 === 0;
}

// Prueba
console.log(esPar(4)); // true
console.log(esPar(7)); // false

function convertirCelsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

// Prueba
console.log(convertirCelsiusAFahrenheit(25)); // 77

function convertirCelsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

// Prueba
console.log(convertirCelsiusAFahrenheit(25)); // 77

let persona = {
  nombre: "Martin",
  edad: 30,
  ciudad: "San Juan",
  cambiarCiudad(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};

// Cambiar la ciudad y mostrar el objeto actualizado
persona.cambiarCiudad("Mendoza");
console.log(persona);

let libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  año: 2000,
  esAntiguo() {
    let añoActual = new Date().getFullYear();
    return (añoActual - this.año) > 10;
  }
};

// Mostrar si el libro es antiguo o reciente
if (libro.esAntiguo()) {
  console.log("El libro es antiguo");
} else {
  console.log("El libro es reciente");
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplicados = [];

for (let i = 0; i < numeros.length; i++) {
  multiplicados.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array multiplicado:", multiplicados);

let pares = [];

for (let i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

console.log(pares);

  
function cambiarColor() {
  let parrafos = document.querySelectorAll("p");
  parrafos.forEach(p => p.style.color = "blue");
}
function mostrarTexto() {
  let texto = document.getElementById("inputTexto").value;
  alert(texto);
}
let elementos = document.querySelectorAll("li");
elementos.forEach(elemento => {
  elemento.addEventListener("click", function() {
    console.log(this.textContent);
  });
});
function deshabilitar() {
  let input = document.getElementById("campoTexto");
  input.disabled = true;
}

function habilitar() {
  let input = document.getElementById("campoTexto");
  input.disabled = false;
}
function guardarCorreo(event) {
  event.preventDefault();
  let correo = document.getElementById("email").value;
  localStorage.setItem("correo", correo);
  mostrarCorreo();
}

function mostrarCorreo() {
  let correoGuardado = localStorage.getItem("correo");
  if (correoGuardado) {
    document.getElementById("resultado").textContent = "Correo: " + correoGuardado;
  }
}

function eliminarCorreo() {
  localStorage.removeItem("correo");
  document.getElementById("resultado").textContent = "";
}

window.onload = mostrarCorreo;