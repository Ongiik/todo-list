class Project {
    constructor(title, description, projectIndex) {
    this.title = title,
    this.description = description,
    this.projectIndex = projectIndex
    }
    
    readProject = () => {
        return [this.title, this.description, this.projectIndex];
    }
    
    updateTitle = (title) => {
        this.title = title;
    }
    
    updateDesc = (description) => {
        this.description = description;
    }
    
    updateIndex = (projectIndex) => {
        this.projectIndex = projectIndex;
    }
    
    deleteProject = () => {
        this.title = null;
        this.description = null;
        this.projectIndex = null;
    }
}


export { Project }
