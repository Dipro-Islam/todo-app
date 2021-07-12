import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todos: any[] = [];
  complete: any[] = [];


  todoFormControlt = new FormGroup({
    text: new FormControl(''),
    date: new FormControl(),
    select: new FormControl(''),


  });


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
    this.complete = this.dataService.getAllComplete();

  }

  onSubmit() {
    let form = this.todoFormControlt.value;
    let id = Math.random();

    let newTodo = {
      text: form.text,
      date: form.date,
      select: form.select,
      id: id
    }
    this.todos.push(newTodo)
    this.dataService.addTodo(this.todos)

  }





}



















