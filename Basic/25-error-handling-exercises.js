/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/
console.clear()
// let myObject
// // 1. Captura una excepción utilizando try-catch
// try {
//     console.log(myObject.email)
// } catch (error) {
//     console.log("Se produce un error: ", error.message)

// } finally {
//     console.log("fin ejecucion")
// }
// 2. Captura una excepción utilizando try-catch y finally

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada
class ErrorPersonalizada extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}
function funcion(a, b) {
    if (a == b) {
        throw new ErrorPersonalizada("Son iguales", a, b)
    }else if(a<b){
        
    } 
    
    else {
        return a + b
    }
}

try {
    console.log(funcion(1, 1))
} catch (error) {
    console.log("Error numerico: ", error.message)
    error.printNumbers()
}

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10