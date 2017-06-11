import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'new-todo-input',
 template: `
    <div>
      <input [(ngModel)]="newtodo" type="text" placeholder="Add a todo" (keyup.enter)="saveTodo()">
      <button id="btnAdd" (click)="saveTodo()">Add</button>
    </div>
  `
})

export class NewTodoInput {
  @Output() create = new EventEmitter();
  saveTodo(){
    this.create.emit({text: this.newtodo});
    this.newtodo = '';
  }
}