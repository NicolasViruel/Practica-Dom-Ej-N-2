/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
en ese momento se crea un número aleatorio que el usuario deberá adivinar,
la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar,
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico,
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

let minimo = 1
let maximo = 10
let numero_aleatorio = Math.floor(Math.random()* (maximo - minimo) + minimo) // Numero aleatorio
console.log(numero_aleatorio)
let ficha = 5
let intentos = 0
let starGame = prompt("Bienvenido, Ingrese su nombre para comenzar el juego") //Start game


function controlar_ficha() {
    return ficha > 0
}

function extraer_dato(element) {
    let numero = element.value
    console.log(numero)

    if (numero < minimo || numero > maximo) {
        alert ("Debe ingresar un numero entre " + minimo + " y " + maximo)
        return
    }
    if (!controlar_ficha()) {
        alert("No tiene mas intentos")
        return 
    }
    ficha--
    intentos++
    
    if (numero == numero_aleatorio) {
        alert(" FELICIDADES " + starGame + " GANASTE!!! acertaste el Numero Magico en " + intentos + " intentos " )
    }else{
        que_tan_lejos_esta(numero)
    }  
}

function que_tan_lejos_esta(numero2) {

    if (numero2 > numero_aleatorio) {
        alert("El numero que ingreso es mas alto")
    }else{
        alert("El numero que ingreso es mas bajo")
    }
}


