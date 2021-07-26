class Task {
  constructor(
    public readonly title: string,
    private readonly _date = new Date(),
    public readonly done = false,
    public readonly id = ''
  ) {}

  get date() {
    return this._date.toLocaleString();
  }
}

export default Task;
