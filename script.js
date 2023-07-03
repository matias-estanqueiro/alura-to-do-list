import {checkTask, checkDeleteTask} from './components/elementsCreate.js';

const btnAdd = document.querySelector('[data-form-button]');
const inputTask = document.querySelector('[data-form-input]');
const listTask = document.querySelector('[data-task-list]');

const createTask = (event) => {
    event.preventDefault();
    
    const taskCard = document.createElement('li');
    const contentTaskCard = document.createElement('div');
    const titleTaskCard = document.createElement('span');
    const inputTask_value = inputTask.value;

    if (!inputTask_value){
        Swal.fire({
            width: '80%',
            title: 'Empty Task!',
            text: 'Cannot add an empty task',
            icon: 'error',
            confirmButtonText: 'Accept'
          })
        return;
    }
    
    taskCard.classList.add("card");
    titleTaskCard.classList.add("task");

    listTask.appendChild(taskCard);
    taskCard.appendChild(contentTaskCard);
    taskCard.appendChild(checkDeleteTask());
    contentTaskCard.appendChild(checkTask());
    contentTaskCard.appendChild(titleTaskCard);
    contentTaskCard.classList.add("width");


    titleTaskCard.innerText = inputTask_value;
    inputTask.value = "";
};

btnAdd.addEventListener('click', createTask);



// Existen otros métodos que podemos utilizar para manipular nodos:
// insertBefore(padre, hijo): Coloca un nodo antes del otro
// replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
// removeChild(elemento): Remueve un nodo del árbol