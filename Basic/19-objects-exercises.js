/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "victor",
    edad: 27,
    genero: "masculino"
}

// 2. Accede y muestra su valor
console.log(persona)
console.log(persona.nombre)

// 3. Agrega una nueva propiedad
persona.profesion = "programador"
console.log(persona)

// 4. Elimina una de las 3 primeras propiedades
delete persona.genero
console.log(persona)

// 5. Agrega una función e invócala
persona.opositar = function () {
    console.log("he aprobado")
}
persona.opositar()

// 6. Itera las propiedades del objeto
for (let key in persona){
    console.log(`${key} -> ${persona[key]}`)
    
}
// 7. Crea un objeto anidado
persona.funcionario = {
    destino : "INAP",
    sueldo : 1400
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona.funcionario.destino)
console.log(persona.funcionario.sueldo)
// 9. Comprueba si los dos objetos creados son iguales
console.log(persona == persona.funcionario)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona.edad === persona.funcionario.sueldo)
