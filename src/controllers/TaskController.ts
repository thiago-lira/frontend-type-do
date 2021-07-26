import Task from '../models/Task'
import TasksView from '../views/TasksView'
import TaskService from '../services/TaskService'
import ISubscribe from '../interfaces/ISubscribe'

class TaskController implements ISubscribe {
  public readonly tasks: Task[] = []
  private view: TasksView

  constructor(view: TasksView) {
    this.view = view
    this.view.subscribe(this)
  }

  execute(task: Task) {
    this.deleteTask(task.id)
  }

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
