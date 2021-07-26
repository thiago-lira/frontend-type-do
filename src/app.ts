import TaskController from "./controllers/TaskController";
import Task from "./models/Task";
import TasksView from "./views/TasksView";

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

taskController
  .listTasks()
  .then(() => {
    document
      .querySelectorAll('.btn-delete')
      .forEach((button) => {
        button.addEventListener('click', (event) => {
          const target = event.target as HTMLElement
          const id = target.dataset.id as string
          taskController.deleteTask(id)
        })
      })
  })

