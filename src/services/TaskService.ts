import axios from 'axios'
import Task from '../models/Task'

class TaskService {
  static delete(id: string) {
    return axios.delete(`/api/${id}/?refresh=wait_for`)
  }

  static save(task: Task) {
    return axios.post('/api/?refresh=wait_for', task)
  }

  static update(id: number) {
    return axios.put(`/api/${id}`)
  }

  static getList({ from = 0 } = {}) {
    return axios.get(`/api/_search?from=${from}`)
      .then(({ data: { hits: { hits, total } } }) => {
        return {
          total: total.value,
          tasks: hits.map((item: any) => {
            const { _id,  _source: { _date, done, title } } = item
            return new Task(title, _date, done, _id)
          })
        }
      })
  }
}

export default TaskService
