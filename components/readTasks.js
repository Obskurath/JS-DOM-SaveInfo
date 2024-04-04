import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTask = () => {
    const list = document.querySelector('[data-list]');

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const dates = uniqueDates(taskList);
    console.log(dates)

    dates.forEach(date => {
        console.log(date);
    });

    taskList.forEach((task) => {
        list.appendChild(dateElement(task.dateFormatted))
        list.appendChild(createTask(task));
    });
};