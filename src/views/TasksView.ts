import Task from '../models/Task';
import TaskController from '../controllers/TaskController'
import ISubscribe from '../interfaces/ISubscribe'

class TasksView {
  private element: HTMLElement
  private subscribers: Array<ISubscribe> = []

  constructor(selector: string) {
    this.element = document.querySelector(selector) as HTMLElement;
  }

  subscribe(subscriber: ISubscribe) {
    this.subscribers.push(subscriber)
  }

  publish(task: Task): void {
    this.subscribers.forEach((sub) => {
      sub.execute(task)
    })
  }

  render(model: Array<Task>) {
    this.element.innerHTML = this.getTemplate(model);
    this.element
      .querySelectorAll('.btn-delete')
      .forEach((button) => {
        button.addEventListener('click', (event) => {
          const target = event.target as HTMLElement
          const id = target.dataset.id as string
          const task = model.find((task) => task.id === id)
          if (task) {
            this.publish(task)
          }
        })
      })
  }

  getTemplate(model: Array<Task>): string {
    if (model.length === 0) {
      return `<p class="text-center">Não há tarefa cadastrada</p>`;
    }

    return `
      <ul>
        ${
          model.reduce((html, task) => html+`
            <li>
              <div class="flex flex-center">
                <div class="grow-1">
                  ${task.title}
                </div>

                <div class="actions">
                  <button data-id="${task.id}" class="btn-delete btn-small btn-danger">
                    Excluir
                  </button>

                  <button data-id="${task.id}" class="btn-edit btn-small">
                    Editar
                  </button>
                </div>
              </div>
            </li>
            `, '')
        }
      </ul>
    `;
  }
}

export default TasksView;
