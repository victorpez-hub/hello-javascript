/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    toString() {
        return (`${this.name}\t${this.age}`)
    }
    static oficio() {
        console.log("Soy funcionario")
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let victor = new Person("Victor", 27)
console.log(victor.name)
console.log(victor.age)
console.log(victor.toString())

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático
Person.oficio()
// 6. Crea una clase que haga uso de herencia
class Funcionario extends Person {
    #destino
    constructor(name, age, destino) {
        super(name, age)
        this.#destino = destino
    }

    get destino() {
        return this.#destino
    }

    set destino(destino) {
        this.#destino = destino
    }

    toString() {
        return (`${this.name}\t${this.age}\t${this.#destino}`)
    }
}
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
// 10. Sobrescribe un método de una clase que utilice herencia 

let alejandro = new Funcionario("Alex", 31, "Griñon")
console.log(alejandro.toString())
alejandro.destino = "Policia Local"
console.log(alejandro.toString())
