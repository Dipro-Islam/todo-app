import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from './data.service';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeletComponent } from './dialog-delet/dialog-delet.component';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    DialogDeletComponent
  ],
  entryComponents: [DialogDeletComponent, AddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
