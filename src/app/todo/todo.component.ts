import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-todo',
  imports: [AppComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  list: string[] = []; //empty list to hold the tasks
  task_var: string = ''; // task_var is the variable that will hold the task that the user inputs

  addTask() {
    if (this.task_var != '') {
      this.list.push(this.task_var); //push the task into the list
      this.task_var = ''; //clear the input field
    }
  }

  
}
