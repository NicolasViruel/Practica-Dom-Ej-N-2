/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada
y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona,
permitiendo ingresar las propiedades mediante un formulario,
también agregar los botones “mostrar generación”, es “mayor de edad”
e indicar en un alert el resultado de la función correspondiente.

*/

class Persona {
  constructor(nombre, edad, DNI, Sexo, peso, altura, anio_nacimiento) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.DNI = DNI),
      (this.Sexo = Sexo),
      (this.peso = peso),
      (this.altura = altura),
      (this.anio_nacimiento = anio_nacimiento);
  }
  mostrar_generacion() {
    if (this.anio_nacimiento > 1993 && this.anio_nacimiento < 2011) {
      return alert(
        this.nombre +
          " es de la Generacion Z " +
          "\n" +
          " Su rasgo caracteristico es la Irreverencia " +
          "\n" +
          "Expansion masiva de internet"
      );
    } else if (this.anio_nacimiento > 1980 && this.anio_nacimiento < 1993) {
      return alert(
        this.nombre +
          " es de la Generacion Y (Millenias)" +
          "\n" +
          " Su rasgo caracteristico es la Frustuacion " +
          "\n" +
          "Inicio de la digitalizacion"
      );
    } else if (this.anio_nacimiento > 1968 && this.anio_nacimiento < 1979) {
      return alert(
        this.nombre +
          " es de la Generacion X" +
          "\n" +
          " Su rasgo caracteristico es la Obsesion por el exito " +
          "\n" +
          "Crisis del 73 y transicion española"
      );
    } else if (this.anio_nacimiento > 1948 && this.anio_nacimiento < 1967) {
      return alert(
        this.nombre +
          " es de la Generacion Baby Boom" +
          "\n" +
          " Su rasgo caracteristico es la Ambicion " +
          "\n" +
          "Paz y explosion demografica"
      );
      
    } else if (this.anio_nacimiento > 1929 && this.anio_nacimiento < 1947){
        return alert(
            this.nombre +
              " es de la Generacion Silent" +
              "\n" +
              " Su rasgo caracteristico es la Austeridad " +
              "\n" +
              "Conflictos belicos"
          )
    }
  }

  es_mayor_edad() {
    if (this.edad > 18) {
      return alert(this.nombre + "Es mayor de edad.");
    } else return alert("Disculpe, Usted es menor de edad.");
  }
  mostrar_datos() {
    return alert(
      "Su nombre es :" +
        this.nombre +
        "\n" +
        "Su edad es :" +
        this.edad +
        "\n" +
        "DNI : " +
        this.DNI +
        "\n" +
        "\n" +
        "Peso: " +
        this.peso +
        "KG" +
        "\n" +
        "Altura: " +
        this.altura +
        "\n" +
        "Nacimiento: " +
        this.anio_nacimiento
    );
  }
}
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let DNI = document.getElementById("DNI");
let Sexo = document.getElementById("Sexo");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let anio_nacimiento = document.getElementById("anio_nacimiento");
// let contenedor = document.getElementById("contenedor")
// creo array donde voy a guardar los datos de las personas (Json.parse convierte a dato inicial y verifica si ya hay algo guardado en el localStorage)
let arrPersona = JSON.parse(localStorage.getItem('listaPersona')) || [];

//creo una Arrow Function
const handleSubmit = (e) => {
  e.preventDefault();
  const nuevaPersona = new Persona(
    nombre.value,
    edad.value,
    DNI.value,
    Sexo.value,
    peso.value,
    altura.value,
    anio_nacimiento.value
  );
  console.log(nuevaPersona);
  (nuevaPersona.mostrar_generacion());
  // //Guardo primero en nuestro array
  arrPersona.push(nuevaPersona);
  console.log(arrPersona);
  (nuevaPersona.es_mayor_edad());
  (nuevaPersona.mostrar_datos());
 //Para guardar en localStorage, Stringify es un metodo de JSON lo que hace es convertirlo a JSON
  localStorage.setItem("listaPersona", JSON.stringify(arrPersona));
  //Para resetear el Formulario (este caso utilizo la variable Form) JSON.stringify convierte lo que que pasas por parametro a formato JSON.
  form.reset();
 };


//ahora la etiqueta form escucha el evento(Tener cuidado con los Listener por que escuchan todos los eventos Submit)
form.addEventListener("submit", handleSubmit);


// function guardar() {
//   let nombre = document.getElementById("nombre").value;
//   let edad = document.getElementById("edad").value;
//   let DNI = document.getElementById("DNI").value;
//   let Sexo = document.getElementById("Sexo").value;
//   let peso = document.getElementById("peso").value;
//   let altura = document.getElementById("altura").value;
//   let anio_nacimiento = document.getElementById("anio_nacimiento").value;
//   let form = document.getElementById("form").value;
//   let persona = new Persona (nombre , edad, DNI , Sexo , peso, altura , anio_nacimiento , form)
//   arrPersona.push(persona);
//   console.log(persona);
//   //Guardo en el localStorage la nueva que voy a guardar ya pusheada en mi array.
//   localStorage.setItem("listaPersona", JSON.stringify(arrPersona));
//   pintaCard()
// }



// const crearPersona = (persona)=>{
//     index = arrPersona.length
//     form.innerHTML += `
//                 <div class="my-3">
//                     <label for="nombre"class="font-weight-bold">Nombre:${persona.nombre}</label><br>
//                 </div>
//                 <div class="my-3">
//                     <label for="edad"class="font-weight-bold">Edad: ${persona.edad}</label><br>
//                 </div>
//                 <div class="my-3">
//                     <label for="DNI"class="font-weight-bold">DNI: ${persona.DNI}</label><br>
//                 </div>
//                 <div class="my-3">
//                     <label for="Sexo"class="font-weight-bold">Sexo: ${persona.Sexo}</label><br>
//                 </div>
//                 <div class="my-3">
//                     <label for="peso"class="font-weight-bold">Peso: ${persona.peso}</label><br>
//                 </div>
//                 <div class="my-3">
//                     <label for="altura"class="font-weight-bold">Altura: ${persona.altura}</label><br>
//                 </div>
//                 <div class="my-3">
//                     <label for="anio_nacimiento" class="font-weight-bold">Fecha Nac ${persona.anio_nacimiento}</label><br>
                    
//                 </div> 
//                 <button type="button" class="btn btn-danger mt-3 my-3" id="btn${index}">Mostrar Generacion</button>
//                 -----------------------------------------------------`;
//                 let button = document.getElementById("btn" + index)

//                 button.addEventListener("click", () =>
//                     verGeneracion(index)
//     );
// };

// function verGeneracion(index) {

//     Persona(arrPersona[index]).mostrar_generacion()    
// }

// function pintaCard() {
//     //mientras tengas hijos (haschildNodes) me devuelve un booleano si tiene hijos o no
//     while (contenedor.hasChildNodes()) {
//         contenedor.removeChild(contenedor.firstChild)
//         //elimino el primer hijo del contenedor
//     }
//     for (let index = 0; index < arrPersona.length; index++) {
//         const element = arrPersona[index];
//         crearPersona(element)
//     }
    
// }

// pintaCard()

