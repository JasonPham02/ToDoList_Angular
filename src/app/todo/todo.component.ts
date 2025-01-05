import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  lists: string[] = []; //empty list to hold the tasks
  task_var: string = ''; // task_var is the variable that will hold the task that the user inputs

  addTask() {
    if (this.task_var != '') {
      this.lists.push(this.task_var); //push the task into the list
      this.task_var = ''; //clear the input field
    }
    console.log(this.lists);
  }

  deleteTask(index: number) {
    this.lists.splice(index, 1); //delete the task from the list
  }
  


}
