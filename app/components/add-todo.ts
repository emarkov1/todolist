import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
interface AddTodoArgs {}

export default class AddTodo extends Component<AddTodoArgs> {
  @tracked
  curValue: string = "";
}
