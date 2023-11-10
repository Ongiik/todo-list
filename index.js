import { Project } from "./projects.js";
import { Task } from "./tasks.js";

const defaultProject = new Project("test", "this is a description", 0);

console.log("test");

console.log(defaultProject.readProject());

defaultProject.updateTitle("title")

console.log(defaultProject.readProject());

defaultProject.deleteProject();

console.log(defaultProject.readProject());

const testTask = new Task("test", "this is a description", "11/09", true, "0")

testTask.readTask();