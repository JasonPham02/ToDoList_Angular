import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
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
