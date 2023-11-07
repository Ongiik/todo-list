import { Project } from "./projects.js";

const defaultProject = new Project("test", "this is a description", 0);

console.log("test");

console.log(defaultProject.readProject());

defaultProject.updateTitle("title")

console.log(defaultProject.readProject());

defaultProject.deleteProject();

console.log(defaultProject.readProject());