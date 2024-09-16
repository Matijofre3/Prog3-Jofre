"use strict";
console.log("Ejercicio 2: corriendo desde typescript");
let texto = "Hola, TypeScript!";
let numero = 123;
let booleano = true;
let fecha = new Date(2024, 8, 9);
document.getElementById('texto').innerText = texto;
document.getElementById('numero').innerText = numero.toString();
document.getElementById('booleano').innerText = booleano.toString();
document.getElementById('fecha').innerText = fecha.toLocaleDateString();
function convertirNumeroACadena(num) {
    return num.toString();
}
let resultado = convertirNumeroACadena(642);
document.getElementById('numeroConvertido').innerText = resultado;
function sumarArray(numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
let numerosArray = [4, 8, 9];
document.getElementById('sumaArray').innerText = sumarArray(numerosArray).toString();
let estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Ingles"
};
document.getElementById('nombreEstudiante').innerText = estudiante.nombre;
document.getElementById('edadEstudiante').innerText = estudiante.edad.toString();
document.getElementById('cursoEstudiante').innerText = estudiante.curso;
let miDireccion = {
    calle: "Av. Emilio Civit",
    ciudad: "Mendoza",
    codigoPostal: "5500"
};
document.getElementById('direccion').innerText = `Calle: ${miDireccion.calle}, Ciudad: ${miDireccion.ciudad}, CP: ${miDireccion.codigoPostal}`;
let usuario = {
    nombre: "Lucia",
    correo: "lucia@example.com",
    saludar: function () {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
document.getElementById('saludo').innerText = usuario.saludar();
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
let persona = new Persona("Martin", 30);
document.getElementById('presentacion').innerText = persona.presentarse();
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
let cajaDeTexto = new Caja("Mensaje secreto");
let cajaDeNumero = new Caja(42);
document.getElementById('cajaDeTexto').innerText = cajaDeTexto.obtenerValor();
document.getElementById('cajaDeNumero').innerText = cajaDeNumero.obtenerValor().toString();
function identidad(valor) {
    return valor;
}
let identidadNumero = identidad(123);
let identidadTexto = identidad("texto");
document.getElementById('identidadNumero').innerText = identidadNumero.toString();
document.getElementById('identidadTexto').innerText = identidadTexto;
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
let colorFavorito = Color.Azul;
document.getElementById('colorFavorito').innerText = colorFavorito;
