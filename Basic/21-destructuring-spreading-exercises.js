/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [valor1, valor2] = myArray
console.log(valor1)
console.log(valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let myArray1 = [1, 2]
let [valor3, valor4, valor5 = 88] = myArray1
console.log(valor3)
console.log(valor4)
console.log(valor5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
    nombre: "victor",
    edad: 27,
    genero: "masculino"
}
let { nombre, edad } = persona
console.log(nombre)
console.log(edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let { nombre: nombreVic, edad: edadVic } = persona
console.log(nombreVic)
console.log(edadVic)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
persona.funcionario = {
    destino: "INAP",
    sueldo: 1400
}
let { funcionario: { destino, sueldo } } = persona
console.log(destino)
console.log(sueldo)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2 = [...myArray, ...myArray1]
console.log(myArray2)

// 7. Usa propagación para crear una copia de un array
let myArray3 = [...myArray]
console.log(myArray2)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let organismo = {
    institucion : "INAP",
    localidad : "Madrid"
}

let combinacion = {...persona,...organismo}
console.log(combinacion)

// 9. Usa propagación para crear una copia de un objeto
let copia = [persona]
console.log(copia)

// 10. Combina desestructuración y propagación