/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log(suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = ["victor", "lopez", "muñoz"]
for (let valor of myArray) {
    console.log(valor);
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "HolaComoEstasa"
const vocales = "aeiouáéíóú";
let cantidadVocales = 0
for (let letra of cadena.toLowerCase()) {
    if (vocales.includes(letra)) {
        cantidadVocales++;
    }
}
console.log(cantidadVocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let producto = 1
for (let n of numeros) {
    producto *= n
}
console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let contador = 1
let i = 5
do {
    console.log(`${i} x ${contador} = ${i * contador}`);
    contador++
} while (contador <= 10)

// 8. Usa un bucle para invertir una cadena de texto
let cadena2 = "cadena de texto"
let cadenaaux = ""

for (let i = cadena2.length - 1; i >= 0; i--) {
    cadenaaux += cadena2[i]
}
console.log(`${cadena2} -> ${cadenaaux}`);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1]
for (let i = 0; i < 10; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1])
}
console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
numeros = [1,2,3,4,5,6,7,8,9,10,11,12]
let numerosMayores = []
for(let n of numeros){
    if(n>=10){
        numerosMayores.push(n)
    }
}
console.log(numerosMayores);
