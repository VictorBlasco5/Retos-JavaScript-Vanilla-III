//1. Escribir un script que pida un valor entero y muestre en pantalla una lista de números
//desde el 0 al valor tecleado. Los números se separarán por comas.

// let valor = prompt("Dime un número");
// let lista = [];

// for(let i = 0; i <= valor; i++){
//     lista.push(i)
// }
// console.log(lista.join(","))




// 2. Hacer un programa que cuente de N en N hasta un número M proporcionado por el
// usuario. El usuario también ha de proporcionar N.

// let N = parseInt(prompt("Dime el primer número"));
// let M = parseInt(prompt("Dime el último número"));

// for(let i = N; i <= M; i++){
//     console.log(i)
// }




//3. Genera una lista con todos los números pares positivos por debajo del número tecleado por el usuario.

// let numero = parseInt(prompt("Dime un número."));

// for (let i = 0; i < numero; i++) {
//     numero %2 === 0;
//     if(i %2 === 0){
//         console.log(i);
//     }
// }




//4. Escribe la tabla de multiplicar de un número introducido por el usuario.

// let numero = parseInt(prompt("Dime un número"));

// for(let i = 1; i <= 10; i++) {
//     console.log(numero * i)
// }




// 5. Formar un triángulo de este estilo
// *
// **
// ***
// ****

// let numero = 4;
// let resultado = "";

// for(let i = 0; i < numero; i++){
//     resultado += "*";
//     console.log(resultado);   
// }




//6. Con la cantidad de líneas que indique el usuario.

// let numero = parseInt(prompt("Dime el numero de filas que quieres que contenga el triángulo"));
// let resultado = "";

// for(let i = 0; i < numero; i++){
//     resultado += "*";
//     console.log(resultado);
// }




//7. Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.

// let numero = parseInt(prompt("Dime un número."));
// let resultado = 0;

//     for (let i = 0; i <= numero; i++) {
//         resultado += i; 
//     }
// console.log(resultado)




//8. Saca por consola los números primos del 0 al número que introduzca un usuario por prompt.

// let num = 100

// for (let i = 2; i < num; i++) {
//     let prime = true
//     for (j = 2; j < i; j++) {
//         if (i % j === 0) {
//             prime = false
//             break
//         }
//     }
//     if (prime) {
//         console.log(i)
//     }
// }




//9. Dado un número entero, muestra una cuenta atrás desde el número tecleado hasta el 0.
// Modifica el programa para que el usuario introduzca dos números y se efectúe una cuenta
// atrás desde el primer número hasta el segundo. Modifícalo de nuevo para que el programa
// determine qué número es el mayor y cuente desde el mayor hasta el menor.

// let numero1 = parseInt(prompt("Dime el primer número."));
// let numero2 = parseInt(prompt("Dime el segundo número."));

// if(numero1 > numero2){
//     for(let i = 0; numero1 >= numero2 ; numero1--){
//         console.log(numero1)
//     }
// } else {
//     for(let i = 0; numero2 >= numero1 ; numero2--){
//         console.log(numero2)
//     }
// }




// 10. Pide al usuario cinco números, almacénalos en un array y muestra por consola el
// resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga
// todos los resultados.

// let numero1 = parseInt(prompt("Dime el primer número."));
// let numero2 = parseInt(prompt("Dime el segundo número."));
// let numero3 = parseInt(prompt("Dime el tercer número."));
// let numero4 = parseInt(prompt("Dime el cuerto número."));
// let numero5 = parseInt(prompt("Dime el quinto número."));
// let array = [numero1, numero2, numero3, numero4, numero5];

// console.log("El primer número multiplicado por 3 es" , numero1 * 3)
// console.log("El segundo número multiplicado por 3 es" , numero2 * 3)
// console.log("El tercer número multiplicado por 3 es" , numero3 * 3)
// console.log("El cuarto número multiplicado por 3 es" , numero4 * 3)
// console.log("El quinto número multiplicado por 3 es" , numero5 * 3)

// let arrayMultiplicado = [(numero1*3), (numero2*3), (numero3*3), (numero4*3), (numero5*3)];
// console.log(arrayMultiplicado)