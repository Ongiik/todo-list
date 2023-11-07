class Task {
    constructor(title, desc, dueDate, completion, taskIndex) {

    }
}

//Initialize a task for a project
const createTask = (title, desc, dueDate, completion, taskIndex) => {
    taskItem = new Task(title, desc, dueDate, completion, taskIndex);
    return taskItem;
}

//Read/Get Task details function
const readTask = (task) => {
    return [task.title, task.desc, task.dueDate, task.completion, task.taskIndex];
}

//Task update functions
const updateTitle = (task, title) => {
    task.title = title;
    return task;
}

const updateDesc = (task, desc) => {
    task.desc = desc;
    return task;
}

const updateDue = (task, dueDate) => {
    task.dueDate = dueDate;
    return task;
}

const updateCompletion = (task, completion) => {
    task.completion = completion;
    return task;
}

const updateIndex = (task, taskIndex) => {
    task.taskIndex = taskIndex;
    return task;
}
//Remove task
const deleteTask = (taskItem) => {
    taskItem = null;
}

export { createTask, readTask, updateTitle, deleteTask }