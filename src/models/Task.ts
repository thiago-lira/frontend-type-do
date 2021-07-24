class Task {
  private readonly _date = new Date();
  public readonly done = false;

  constructor(
    public readonly title: string
  ) {}

  get date() {
    return this._date.toLocaleString();
  }
}

export default Task;
