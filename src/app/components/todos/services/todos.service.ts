import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { ITodo } from '../../todo/interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: ITodo[] = [];
  private todosSubject: BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>(
    []
  );
  constructor(private httpService: HttpService) {}
  loadTodos(): void {
    this.httpService
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos) => {
        this.todos = todos;
        this.todosSubject.next(todos);
      });
  }
  getTodos(): Observable<ITodo[]> {
    return this.todosSubject.asObservable();
  }
  addTodo(todo: ITodo): void {
    this.todos.unshift(todo);
    this.todosSubject.next(this.todos);
  }
  editTodo(todo: ITodo): void {
    const indexToUpdate = this.todos.findIndex((item) => item.id === todo.id);
    this.todos[indexToUpdate] = todo;
    this.todosSubject.next(this.todos);
  }
  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todosSubject.next(this.todos);
  }
}
