//1. Crea una función que convierta grados celsius a grados fahrenheit.

// let grados = (celsius) => {
//     return (celsius * 9 / 5) + 32;
// }

// let gradosCelsius = 25;
// let gradosFahrenheit = grados(gradosCelsius);
// console.log(`${gradosCelsius} grados Celsius son ${gradosFahrenheit} grados Fahrenheit.`)




// 2. Crea una función que determine si un número es par o impar.

// let numero = (parImpar) => {
//     if(parImpar % 2 === 0) {
//         console.log("es par")
//     } else {
//         console.log("es impar")
//     }
// }

// let a = 18;
// let cifra = numero(a);




//3. Crea una función que determine si un número es primo o no.

// const primo = (numero) => {
//     if (numero <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//       if (numero % i === 0) {
//         return false;
//       }
//     }
//     return true;
// }

// let numero = 97;
// if (primo(numero)) {
//   console.log(numero + " es un número primo");
// } else {
//   console.log(numero + " no es un número primo");
// }




//4. Crea una función que reciba un número de dni como parámetro, y devuelva la letra del
//mismo. Si el dni tiene algún error debe comunicarlo. Recuerda que el array de letras de DNI
//es [TRWAGMYFPDXBNJZSQVHLCKE].

// let numero = (numeroDNI) => {
//     if (!(/^\d{8}$/.test(numeroDNI))){
//         return ("Introduce un número correcto")
//     }
//     let letra = "TRWAGMYFPDXBNJZSQVHLCKE".split("");
//     let indice = numeroDNI % 23;
//     return letra[indice];
// }

// let dni = "53259287"
// console.log("La letra del DNI " + dni + " es " + numero(dni));




//5. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva
//incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.

// let producto = (precio) => {
//     return (precio + (precio * 0.21))
// }

// let sinIVA = 16;
// console.log(producto(sinIVA))




//6. Crea una función que determine si una letra es una vocal o una consonante.

// let letra = (aeiou) => {
//     if(vocales.includes(aeiou)){
//         console.log("Es una vocal")
//     } else if(consonantes.includes(aeiou)) {
//         console.log("Es una consonate")
//     } else {
//         console.log("Introduce una letra")
//     }
// }

// let vocales = "aeiou";
// let consonantes = "bcdfghjklmnpqrstvwxyz";
// let caracter = "a"
// letra(caracter)




//7. Crea una función que, dada una frase, convierta las A en 4, las E en 3, las I en 1 y las O en 0.

// let frase = prompt("Dime una frase.")

// const conversor = () => {
//     texto = frase.replace(/a/g, 4 ).replace(/e/g, 3).replace(/i/g, 1).replace(/o/g, 0);
//     return texto
// }

// conversor()
// console.log(texto)




//8. Crea una función que, dada una frase, cuente la cantidad de una letra en la misma. Por
//ejemplo, dada la palabra “javascript” y la letra “a”, debería devolver un 2.

// let frase = prompt("Dime una frase.");
// let letra = "a";

// let contador = () => {
//     let cantidad = 0;
//     for(let i = 0; i < frase.length; i++){
//         if(frase[i] === letra) {
//             cantidad++;
//         }
//     }
//     return cantidad
// }

// contador(frase, letra)
// console.log(contador(frase, letra))




//9. Crea una función que, dado un array de números, devuelva el número más grande del mismo.

// const numeros = () => {
//     return Math.max(...array)
// }

// let array = [1,8,45,2,67,5,42,34];
// let numeroGrande = numeros(array)
// console.log(numeroGrande)




//10. Crea una función que, dado un array de números, devuelva la suma de todos los números que contiene.

// let array = [1,2,3,4,5,6,7,8,9,10];

// let suma = () => {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     return sum
// }

// suma(array)
// console.log(suma(array))




//11. Crea una función que, dados dos números A y B, obtenga el porcentaje(B) de un número(A).

// let a = 200;
// let b = 25;
// let resultado = 0;

// let numero = () => {
//     resultado = (a * b) / 100;
//     return resultado
// }

// numero(resultado)
// console.log(numero(resultado))