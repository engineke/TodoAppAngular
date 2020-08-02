import { TodoModel, TodoItem } from './app.model';
import { Component } from '@angular/core';
import { MatSnackBarModule, MatSnackBar, MatSnackBarContainer } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new TodoModel();
  isDisplay = false;

  constructor(private _snackBar: MatSnackBar){
  }

  getUserName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay)
      return this.model.items;

    return this.model.items.filter(x => x.action == false);
  }

  addItem(value) {    
    if (value != null && value.trim() != '') {
      this.model.items.push(new TodoItem(value, false));
      this._snackBar.open("Todo item added.", "OK", {
        duration: 2000
      });
    }
  }

  isChecked(checked) {
    let message = "done";

    if (!checked)
      message = "undone";

    this._snackBar.open("Todo is item " + message + ".", "OK", {
      duration: 2000
    });
  }
}
