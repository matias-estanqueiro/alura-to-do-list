const statusTask = (event) => {
    const selectedCheck = event.target;
    selectedCheck.classList.toggle("fas");
    selectedCheck.classList.toggle("far");
    selectedCheck.classList.toggle("completeIcon");
};

const deleteTask = (event) => {
    const parentElement = event.target.parentElement;
    parentElement.remove();
};

export {statusTask, deleteTask};