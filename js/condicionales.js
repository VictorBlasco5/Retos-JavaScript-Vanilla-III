//1. Pedir dos números y decir si son múltiplos o no.

// var numero1 = parseInt(prompt("Ingrese el primer número:"));
// var numero2 = parseInt(prompt("Ingrese el segundo número:"));

// if (numero1 % numero2 === 0) {
//     console.log(numero1 + " es múltiplo de " + numero2);
// } else if (numero2 % numero1 === 0) {
//     console.log(numero2 + " es múltiplo de " + numero1);
// } else {
//     console.log("Los números no son múltiplos entre sí.");
// }




//2. Pedir dos números y decir cual es el mayor.

// let numero1 = prompt("Dime el primer número.")
// let numero2 = prompt("Dime el segundo número.")

// if( numero1 > numero2) {
//     console.log(`${numero1} es mayor que ${numero2}`)
// } else if (numero1 < numero2) {
//     console.log(`${numero1} es menor que ${numero2}`)
// } else {
//     numero1 === numero2
//     console.log("Son iguales")
// }




//3. Pedir un número y decir si es un número negativo, si es positivo o cero.

// let numero = parseInt(prompt("Dime un numero"));

// switch (Math.sign(numero)){
// case +1:
//     console.log("Es positivo");
//     break;
// case -1:
//     console.log("Es negativo");
//     break;
// case 0:
//     console.log("El número es 0");
//     break;
// default:
//     console.log("El valor ingresado no es un número.");
// }




//4. Pedir un string y determinar si tiene cinco caracteres o más.

// let string= prompt("Dime una palabra");

// if(string.length >= 5) {
//     console.log("Tiene 5 o mas")
// } else {
//     console.log("Tiene 4 o menos")
// }




//5. Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres
//números y determinar si el promedio es mayor que cinco.

// let numero1 = parseInt(prompt("Dime el primer número entre 1 y 10"));
// let numero2 = parseInt(prompt("Dime el segundo número entre 1 y 10"));
// let numero3 = parseInt(prompt("Dime el tercer número entre 1 y 10"));

// let resultado = (numero1 + numero2 + numero3) / 3;
// if(resultado.toFixed(2) > 5){
//     console.log(`${resultado.toFixed(2)} es mayor de 5`)
// }else {
//     console.log(`${resultado.toFixed(2)} es menor de 5`)
// }




//6. Pedir una cadena de texto y comprobar que todas sus letras estén en minúsculas.

// let texto = prompt("Escribe algo");
// console.log((texto).toLowerCase());




//7. Crear un número aleatorio entre el 1 y 20 y comprobar si es par o impar. Mostrar además el número.

// let numero = Math.round((Math.random() * 19) +1);
// if(numero %2 === 0){
//     console.log(`${numero} es par.`)
// } else{
//     console.log(`${numero} es impar.`)
// }




//8. Crea un programa que lea tres notas de un alumno, calcule la media e indique si ha aprobado o no.

// let nota1 = parseInt(prompt("Dime la primera nota"));
// let nota2 = parseInt(prompt("Dime la segunda nota"));
// let nota3 = parseInt(prompt("Dime la tercera nota"));
// let media = ((nota1 + nota2 + nota3) / 3);

// if(media.toFixed(2) >= 5){
//     console.log(`${media.toFixed(2)}, has aprobado.`)
// }else {
//     console.log(`${media.toFixed(2)}, has suspendido.`)
// }




//9. Crea un programa para una tienda de coches: si el coche a la venta es un Ford Fiesta, el
//descuento es de un 5 %. Si el coche a la venta es un Ford Focus, el descuento es del 10 %.
//El usuario introduce marca y modelo y el programa saca el descuento correspondiente por
//pantalla.

// let marca = prompt("Dime la marca y el modelo del coche.");

// if(marca === "ford fiesta") {
//     console.log("Tienes un 5% de descuento.")
// } else if (marca === "ford focus") {
//     console.log("Tienes un 10% de descuento.")
// } else {
//     console.log("No disponemos de ese modelo")
// }




//10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el
//código responda cuántos días tiene ese mes.

// let dia = parseFloat(prompt("Dime el número del mes que quieras saber."));
// switch(dia){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Tiene 31 días")
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Tiene 30 días");
//     break;
//     case 2:
//         console.log("Tiene 29 días");
//     break;
//     default:
//         console.log("Introduce un mes válido.")
// }




// 11. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y
// realice las siguientes operaciones:
// a) Si el diámetro es superior a 1.4 metros debe mostrarse el mensaje “La rueda es para un
// vehículo grande”. Si es menor o igual a 1.4 metros pero mayor que 0.8 debe mostrarse el
// mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las
// condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un
// vehículo pequeño”.
// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor o
// igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje
// “El grosor para esta rueda es inferior al recomendado”

// let diametro = prompt("Dime el diametro de la rueda");
// let grosor = prompt("Dime el grosor de la rueda en metros");

// if((diametro > 1.4) && (grosor < 0.4)){
//     console.log("El grosor para esta rueda es inferior al recomendado")
// } else if ((diametro <= 1.4) && (diametro > 0.8) && (grosor < 0.25)) {
//     console.log("El grosor para esta rueda es inferior al recomendado")
// } else if (diametro > 1.4) {
//     console.log("La rueda es para un vehículo grande");
// } else if ((diametro <= 1.4) && (diametro > 0.8) && (grosor >= 0.25)) {
//     console.log("La rueda es para un vehículo mediano")
// } else {
//     diametro <= 0.8;
//     console.log("La rueda es para un vehículo pequeño")
// }




// 12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y
// los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados
// por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a
// pagar, teniendo en cuenta las siguientes consideraciones: si el vehículo es “coche”, el precio
// por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5.

// let vehiculo = prompt("Dime el tipo de vehículo.");
// let kms = prompt("Dime la cantidad de kilómetros recorridos.");

// if(vehiculo === "coche"){
//     console.log(kms * 0.10 + " euros")
// } else if (vehiculo === "moto") {
//     console.log(kms * 0.20 + " euros")
// } else{
//     vehiculo === "autobus"
//     console.log(kms * 0.50 + " euros")
// }