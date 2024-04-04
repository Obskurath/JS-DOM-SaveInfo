export default (date) => {
    const createDateElement = document.createElement('li');
    createDateElement.classList.add('date');
    createDateElement.innerHTML = date
    return createDateElement;
};