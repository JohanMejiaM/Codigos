import { Task } from "./task.js";

const inputTask = document.querySelector(".input_task");
const btnCreate = document.querySelector(".btn_create");
const listTask = document.querySelector(".container_list_task")

//Vamos a crear un arreglo vacio
const arrayTasks = [];

// !!Nota: Cuando una funcion no tiene nombre se llama funcion anonima¡¡ 
btnCreate.onclick = function() {
    const taskText = inputTask.value;

    //Ahora vamos a validar que el taskText no este vacio
    if(taskText === "") {
        alert("Debe completar la caja de texto");
        return;
    }

    const task = new Task (taskText, new Date(), 1);
    arrayTasks.push(task);

    listTask.innerHTML += task.render();
    
    inputTask.value =""
};

function destroy() {
    console.log("zzzz");
}
