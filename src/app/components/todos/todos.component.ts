import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../todo/interfaces/todo.interface';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Observable<ITodo[]>;
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.loadTodos();
    this.todos = this.todosService.getTodos();
  }
  addTodo(todoTitle: string) {
    const todo: ITodo = {
      id: 232323,
      title: todoTitle,
      completed: false,
      userId: 543543,
    };
    this.todosService.addTodo(todo);
  }
  editTodo(todo: ITodo): void {
    this.todosService.editTodo(todo);
  }
  remove(number: number): void {
    this.todosService.removeTodo(number);
  }
}
