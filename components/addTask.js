import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (e) => {
    e.preventDefault();

    /* Query Selectors */
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector("[data-form-date]");

    /* Values */
    const value = input.value;
    const date = calendar.value;
    const dateFormatted = moment(date).format("DD/MM/YYYY");

    if (value === '' || date === '') {
        alert('Ingrese una tarea válida o una fecha válida')
        return;
    };

    input.value = '';
    calendar.value = '';

    const taskObj = {
        value,
        dateFormatted
    };

    /* JSON */
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    const task = createTask(taskObj);
    list.appendChild(task);
};



export const createTask = ({ value, dateFormatted }) => {
    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span');
    dateElement.innerHTML = dateFormatted;

    task.appendChild(taskContent);
    task.appendChild(dateElement)
    task.appendChild(deleteIcon());
    return task;
};
