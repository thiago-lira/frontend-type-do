import TaskController from "./controllers/TaskController.js";
import Task from "./models/Task.js";
import TasksView from "./views/TasksView.js";

const taskForm = document.querySelector('#input-task-form') as HTMLFormElement;
const tasksView = new TasksView('#tasks-view')
const taskController = new TaskController(tasksView);

taskForm.addEventListener('submit', (event) => {
  const title = document.querySelector('#task-title') as HTMLInputElement;
  const task = new Task(title.value);

  taskController.saveTask(task);

  title.value = '';
  event.preventDefault();
});
