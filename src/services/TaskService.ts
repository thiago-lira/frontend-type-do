import axios from 'axios'
import Task from '../models/Task'

class TaskService {
  static delete(id: string) {
    return axios.delete(`/api/_doc/${id}/?refresh=wait_for`)
  }

  static save(task: Task) {
    return axios.post('/api/_doc/?refresh=wait_for', { task })
  }

  static update(id: number) {
    return axios.put(`/api/_doc/${id}`)
  }

  static getList() {
    return axios.get('/api/_search?from=0')
      .then(({ data: { hits: { hits, total } } }) => {
        return {
          total: total.value,
          tasks: hits.map((item: any) => {
            const { _id,  _source: { task: { _date, done, title } } } = item
            return new Task(title, _date, done, _id)
          })
        }
      })
  }
}

export default TaskService
