import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ITodo } from './interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  @ViewChild('editValue') input: ElementRef;
  @Output() editTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() removeTodoClick: EventEmitter<number> = new EventEmitter<number>();
  isEditmode: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  changeToEditMode() {
    this.isEditmode = true;
  }
  update() {
    const newVal = this.input.nativeElement.value;
    const updatedToDo: ITodo = {
      ...this.todo,
      title: newVal,
    };
    this.editTodo.emit(updatedToDo);
    this.isEditmode = false;
  }
  removeToDo(): void {
    this.removeTodoClick.emit(this.todo.id);
  }
}
