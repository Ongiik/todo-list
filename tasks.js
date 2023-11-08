class Task {
    constructor(title, desc, dueDate, completion, taskIndex) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.completion = completion;
        this.taskIndex = taskIndex;
    }

    //Read/Get Task details function
    readTask = () => {
        return [this.title, this.desc, this.dueDate, this.completion, this.taskIndex];
    }

    //Task update functions!
    updateTitle = (title) => {
        this.title = title;
    }

    updateDesc = (desc) => {
        this.desc = desc;
    }

    updateDue = (dueDate) => {
        this.dueDate = dueDate
    }

    updateCompletion = (completion) => {
        this.completion = completion
    }

    updateIndex = (taskIndex) => {
        this.taskIndex = taskIndex;
    }
    //Remove task
    deleteTask = () => {
        this.title = null;
        this.desc = null;
        this.dueDate = null;
        this.completion = null;
        this.taskIndex = null;
    }
}

export { Task }