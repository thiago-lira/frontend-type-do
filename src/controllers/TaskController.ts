import Task from "../models/Task";
import TasksView from "../views/TasksView";

class TaskController {
  public readonly tasks: Task[] = []

  constructor(private view: TasksView) {}

  saveTask(task: Task) {
    this.tasks.push(task);
    this.view.render(this.tasks)
  }
}

export default TaskController;
