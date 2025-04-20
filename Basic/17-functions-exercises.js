/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function myFunc(n1, n2) {
    return n1 + n2
}
console.log(myFunc(1, 1));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function myFuncArray(myArray) {
    let mayor = myArray[0]
    myArray.forEach(element => {
        if (mayor < element) {
            mayor = element
        }
    });
    return mayor
}
let myArray = [1, 2, 3, 4, 9, 6, 7, 8]
console.log(myFuncArray(myArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function myFuncString(cadena) {
    let contador = 0
    for (let letra of cadena) {
        switch (letra) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                contador++
                break
        }
    }
    return contador
}
let cadena = "victor"
console.log(myFuncString(cadena));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let cadenas = ["victor", "lopez", "muñoz"]
function myFuncCadenas(miArray) {
    for (let i = 0; i < miArray.length; i++) {
        miArray[i] = miArray[i].toUpperCase();
    }
    return miArray
}
console.log(myFuncCadenas(cadenas));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function numeroPrimo(numero) {
    for (let i = numero - 1; i > 1; i--) {
        if (numero % i == 0) {
            return false
        }
    }
    return true
}

console.log(numeroPrimo(6));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let arrayUno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayDos = [2, 4, 6, 8, 10]
function arrayComunes(array1, array2) {
    let arrayAux = []
    for (let valor of array2) {
        if (array1.includes(valor)) {
            arrayAux.push(valor)
        }
    }
    return arrayAux
}
console.log(arrayComunes(arrayUno, arrayDos));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(array) {
    let suma = 0
    array.forEach(element => {
        if (element % 2 == 0) {
            suma += element
        }

    })
    return suma
}
console.log(sumaPares(arrayUno));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function cuadrado(array) {
    let arrayAux = []
    array.forEach(element => {
        arrayAux.push(element * element)

    })
    return arrayAux
}
console.log(cuadrado(arrayUno));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
//Ya lo hice

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
    let suma = 0
    for (let i = numero; i > 0; i--) {
        suma += i
    }
    return suma
}
console.log(factorial(3));
