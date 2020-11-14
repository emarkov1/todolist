import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
interface ListArgs {}
Math.E;
class Todo {
  @tracked completed: boolean;
  id: number;
  title: string;
  constructor(id: number, title: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
export default class List extends Component<ListArgs> {
  @tracked todos: Todo[] = [new Todo(234, "dfg", false)];
  @action
  inputHandler(evt) {
    this.curValue = evt.target.value;
  }
  @tracked curValue: string = "";
  @action
  toggleCompleted(todo: any) {
    const newTodos = this.todos.filter((item: any) => item.id !== todo.id);
    todo.completed = !todo.completed;
    this.todos = [todo, ...newTodos];
  }
  @action
  addTodo() {
    const newTodo = new Todo(Date.now(), this.curValue, false);
    this.todos = [...this.todos, newTodo];
    this.curValue = "";
  }
}
