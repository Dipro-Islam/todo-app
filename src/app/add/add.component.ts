import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todos: any[] = [];
  complete: any[] = [];
  editVar = null;

  todoFormControlt = new FormGroup({
    text: new FormControl(''),
    date: new FormControl(),
    select: new FormControl(''),


  });

  constructor(private dataService: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
    this.complete = this.dataService.getAllComplete();




    if (this.data) {
      console.log("This.model", this.data);
      this.todoFormControlt.controls.text.patchValue(this.data.todoObject.text);
      this.todoFormControlt.controls.date.patchValue(this.data.todoObject.date);
      this.todoFormControlt.controls.select.patchValue(this.data.todoObject.select);
      this.editVar = this.data.updateVar;
    }





  }

  onSubmit() {

    let form = this.todoFormControlt.value;
    let id = Math.random();
    if (this.editVar && this.editVar == "edit") {
      id = this.data.todoObject.id;

      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id == id) {
          this.todos[i].text = form.text;
          this.todos[i].date = form.date;
          this.todos[i].select = form.select;

        }
      }

      this.dataService.updatedTodo(this.todos);


    }
    else {
      let newTodo = {
        text: form.text,
        date: form.date,
        select: form.select,
        id: id
      }

      this.todos.push(newTodo)
      this.dataService.addTodo(this.todos)
      this.todos = this.dataService.getAllTodos();


    }

    this.dialogRef.close();

  }





}



















function MD_DIALOG_DATA(MD_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

