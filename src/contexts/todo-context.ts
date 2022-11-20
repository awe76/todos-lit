import { LitElement, html } from "lit";
import {customElement} from 'lit/decorators.js';
import { TodosController } from "../controllers/todos-controller";

@customElement('todo-context')
export class TodoContext extends LitElement {
    private todos = new TodosController(this);

    constructor() {
        super();
        this.addEventListener('add-todo', (e) => {
            const { detail } = e as CustomEvent<string>;
            this.todos.addTodo(detail);
        })
    }

    render() {
        return html`
            <todo-container .todos="${this.todos.items}"></todo-container>
        `;
    }
}