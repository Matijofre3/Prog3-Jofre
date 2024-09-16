console.log("Ejercicio 2: corriendo desde typescript")

let texto: string = "Hola, TypeScript!";
let numero: number = 123;
let booleano: boolean = true;
let fecha: Date = new Date(2024, 8, 9);

document.getElementById('texto')!.innerText = texto;
document.getElementById('numero')!.innerText = numero.toString();
document.getElementById('booleano')!.innerText = booleano.toString();
document.getElementById('fecha')!.innerText = fecha.toLocaleDateString();


function convertirNumeroACadena(num: number): string {
    return num.toString();
}

let resultado = convertirNumeroACadena(642);
document.getElementById('numeroConvertido')!.innerText = resultado;



function sumarArray(numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}

let numerosArray: number[] = [4, 8, 9];

document.getElementById('sumaArray')!.innerText = sumarArray(numerosArray).toString();



let estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Ingles"
};

document.getElementById('nombreEstudiante')!.innerText = estudiante.nombre;
document.getElementById('edadEstudiante')!.innerText = estudiante.edad.toString();
document.getElementById('cursoEstudiante')!.innerText = estudiante.curso;



type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: string;
};

let miDireccion: Direccion = {
    calle: "Av. Emilio Civit",
    ciudad: "Mendoza",
    codigoPostal: "5500"
};

document.getElementById('direccion')!.innerText = `Calle: ${miDireccion.calle}, Ciudad: ${miDireccion.ciudad}, CP: ${miDireccion.codigoPostal}`;



interface Usuario {
    nombre: string;
    correo: string;
    saludar: () => string;
}

let usuario: Usuario = {
    nombre: "Lucia",
    correo: "lucia@example.com",
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};

document.getElementById('saludo')!.innerText = usuario.saludar();



class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}



let persona = new Persona("Martin", 30);
document.getElementById('presentacion')!.innerText = persona.presentarse();



class Caja<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    obtenerValor(): T {
        return this.valor;
    }
}

let cajaDeTexto = new Caja<string>("Mensaje secreto");
let cajaDeNumero = new Caja<number>(42);

document.getElementById('cajaDeTexto')!.innerText = cajaDeTexto.obtenerValor();
document.getElementById('cajaDeNumero')!.innerText = cajaDeNumero.obtenerValor().toString();



function identidad<T>(valor: T): T {
    return valor;
}

let identidadNumero = identidad<number>(123);
let identidadTexto = identidad<string>("texto");

document.getElementById('identidadNumero')!.innerText = identidadNumero.toString();
document.getElementById('identidadTexto')!.innerText = identidadTexto;



enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
document.getElementById('colorFavorito')!.innerText = colorFavorito;
