import {statusTask, deleteTask} from './elementsFunctions.js'

const checkTask = (event) => {
    const checkIcon = document.createElement('i');
    checkIcon.classList.add("far", "fa-check-square", "icon");
    checkIcon.addEventListener('click', statusTask);
    return checkIcon;
};

const checkDeleteTask = (event) => {
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    deleteIcon.addEventListener('click', deleteTask);
    return deleteIcon;
};

export {checkTask, checkDeleteTask};