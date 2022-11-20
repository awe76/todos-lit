import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Todo } from "../controllers/todos-controller";

@customElement('todo-container')
export class TodoContainer extends LitElement {
    @property({type: Array})
    todos: Todo[] = [];

    render() {
        return html`
            <todo-input></todo-input>
            <todo-list .todos="${this.todos}"></todo-list>
        `
    }
}