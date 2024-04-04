import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const addTask = (e) => {
  const list = document.querySelector('[data-list]');
  const task = createTask(e)
  list.appendChild(task);


}

const createTask = (evento) => {
  evento.preventDefault();
  const calendar =  document.querySelector("[data-form-date]");
  const date = calendar.value;
  const dateFormatted = moment(date).format("DD/MM/YYYY");
  console.log(dateFormatted);
  
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks
  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  const dateElement = document.createElement('span')
  dateElement.innerHTML = dateFormatted
  console.log(dateElement)

  task.appendChild(taskContent);
  task.appendChild(dateElement)
  task.appendChild(deleteIcon());
  return task;
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
