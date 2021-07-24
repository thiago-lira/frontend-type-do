import Task from "../models/Task";

class TasksView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector) as HTMLElement;
  }

  render(model: Task[]) {
    this.element.innerHTML = this.getTemplate(model);
  }

  getTemplate(model: Task[]): string {
    if (model.length === 0) {
      return ``;
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
                  <button class="btn-small btn-danger">
                    Excluir
                  </button>

                  <button class="btn-small">
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
