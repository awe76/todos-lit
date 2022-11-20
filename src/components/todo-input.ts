import { LitElement, html, PropertyValueMap } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement('todo-input')
export class TodoInput extends LitElement {
    @query('input')
    private input!: HTMLInputElement;

    private handleChange() {
        const title = this.input.value;
        this.dispatchEvent(new CustomEvent('add-todo', {
            detail: title,
            bubbles: true,
            composed: true
        }))
        this.input.value = '';
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        this.input.focus();
    }

    render() {
        return html`
            <label>
                To do:
                <input @change="${this.handleChange}" />
            </label>
        `
    }
}