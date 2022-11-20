import { ReactiveController, ReactiveControllerHost } from "lit";

export interface Todo {
    id: number;
    title: string;
    done: boolean;
}

export class TodosController implements ReactiveController {
    private host: ReactiveControllerHost;
    private id = 1;
    items: Todo[] = [];

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }

    hostConnected() {
    }

    addTodo(title: string) {
        this.items = [...this.items, {
            id: this.id++,
            title,
            done: false
        }];

        this.host.requestUpdate();
    }
}