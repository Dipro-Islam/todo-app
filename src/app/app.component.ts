import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-app';

  constructor(public dialog: MatDialog) { }

  popForm() {
    let dialogRef = this.dialog.open(AddComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    })
  }
}