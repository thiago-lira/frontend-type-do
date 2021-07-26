import Task from '../models/Task'
import TasksView from '../views/TasksView'
import TaskService from '../services/TaskService'

class TaskController {
  public readonly tasks: Task[] = []

  constructor(private view: TasksView) {}

  saveTask(task: Task) {
    TaskService
      .save(task)
      .then(() => {
        this.listTasks()
      })
  }

  deleteTask(id: string) {
    return TaskService
      .delete(id)
      .then(() => { 
        this.listTasks()
      })
  }

  listTasks() {
    return TaskService
      .getList()
      .then((data: any) => { 
        this.view.render(data.tasks)
      })
  }
}

export default TaskController;
