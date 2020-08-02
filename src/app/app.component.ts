import { TodoModel, TodoItem } from './app.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = new TodoModel();
  isDisplay = false;

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
    }
  }
}
