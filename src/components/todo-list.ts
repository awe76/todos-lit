import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Todo } from "../controllers/todos-controller";

@customElement('todo-list')
export class TodoList extends LitElement {
    @property({type: Array})
    todos: Todo[] = [];

    render() {
        return html`
            <ul>
                ${this.todos.map(todo => html`<li>${todo.title}</li>`)}
            </ul>
        `
    }
}