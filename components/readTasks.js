export const readTask = () => {
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(taskList)
}