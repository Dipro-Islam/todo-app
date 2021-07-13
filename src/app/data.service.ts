import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: any[] = [];
  complete: any[] = [];
  constructor() { }


  getAllTodos() {
    this.todos = JSON.parse(<string>localStorage.getItem('todos'));
    return this.todos ? this.todos : [];
  }

  getAllComplete() {
    this.complete = JSON.parse(<string>localStorage.getItem('complete'));
    return this.complete ? this.complete : [];
  }



  addTodo(todos: any) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deletTodo(todos: any) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(todos: any) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Complete section

  addCompleteTodo(complete: any) {

    localStorage.setItem('complete', JSON.stringify(complete));
  }

  completeDelet(complete: any) {
    localStorage.setItem('todos', JSON.stringify(complete));
  }

  deletTodoComplete(complete: any) {
    localStorage.setItem('complete', JSON.stringify(complete));
  }

}