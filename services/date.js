export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach(task => {
        if (!unique.includes(task.dateFormatted)) unique.push(task.dateFormatted);
    });

    return unique;
};