import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeletComponent } from '../dialog-delet/dialog-delet.component';
import { AddComponent } from '../add/add.component'
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: any[] = [];
  complete: any[] = [];
  deletConfirm: string = '';

  editFormControlt = new FormGroup({
    text: new FormControl(''),
    date: new FormControl(),
    select: new FormControl(''),


  });




  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
    this.complete = this.dataService.getAllComplete();
  }

  onDoneBtn(todo: any) {

    let newCompleteTodo = {
      text: todo.text,
      id: todo.id,
      date: todo.date

    }
    this.complete.push(newCompleteTodo);
    console.log(this.complete);

    this.dataService.addCompleteTodo(this.complete);


    //  console.log(todo);

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == todo.id) {
        this.todos.splice(i, 1);
      }
    }
    this.dataService.completeDelet(this.todos);

  }






  onDelet(Id: string) {
    let dialogRef = this.dialog.open(DialogDeletComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.deletConfirm = result;
      if (this.deletConfirm == "true") {
        console.log(this.deletConfirm);
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id == Id) {
            this.todos.splice(i, 1);
            this.dataService.deletTodo(this.todos);
          }
        }
      }

    });
  }

  onDeletComplete(Id: string) {




    for (let i = 0; i < this.complete.length; i++) {
      this.complete.splice(i, 1);
      this.dataService.deletTodoComplete(this.complete);

    }
  }

  onEdit(todo: any) {
    let dialogRef = this.dialog.open(AddComponent, {
      data: {
        todoObject: todo,
        updateVar: 'edit'
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    })

  }




}


  // updateTodo(editId: any) {


  //for (let i = 0; i < this.todos.length; i++) {
  //   if (this.todos[i].id == this.editId) {
  //       this.todos[i].text = this.text;
  //     }
  //   }
  //   this.appState = 'default';
  //   this.dataService.updatedTodo(this.todos);

  // }



