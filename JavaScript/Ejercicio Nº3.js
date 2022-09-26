//3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea
// y un botón que al ser presionado agregue dicha tarea a una lista,
// cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.

let arrTarea = JSON.parse(localStorage.getItem('listaTarea')) || [];
let tarea = document.getElementById("tarea").value
let form = document.getElementById("form").value
form.addEventListener("submit", agregarTarea)

function agregarTarea(e) {
    e.preventDefault();
    arrTarea.push(tarea);
    crearTarea();
    localStorage.setItem("listaTarea", JSON.stringify(arrTarea));
    form.reset();
}

function crearTarea(tarea , indice) {
    form.innerHTML +=`<li class="list-group-item d-flex justify-content-between"><p class="m-0">${tarea}</p>
    <button class="btn btn-danger mx-2 mt-5 onclick ="eliminarTarea(${indice})"</button>
    `
}

function eliminarTarea(indice) {
    arrTarea.splice(indice, 1);
    listaTareas.innerHTML = "";
    arrTarea.forEach((tarea, posicion) => crearTarea(tarea, posicion));
}



