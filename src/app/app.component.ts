import { Component } from '@angular/core';
import { ITodo } from './components/todo/interfaces/todo.interface';
import { TodosService } from './components/todos/services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  constructor() {}
}
