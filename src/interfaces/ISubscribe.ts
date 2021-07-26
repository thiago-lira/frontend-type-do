import Task from '../models/Task'

interface ISubscribe {
  // TODO: Avoid dependency of implementation
  execute(task: Task): void
}

export default ISubscribe
