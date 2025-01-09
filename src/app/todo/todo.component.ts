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
  tasks: { name: string; checked: boolean}[] = []; //empty list to hold the tasks

  task_var: string = ''; // task_var is the variable that will hold the task that the user inputs

  completedTasks: { name: string; checked: boolean}[] = []; //empty list to hold the completed tasks
 
  addTask() {
    if (this.task_var != '') {
      this.tasks.push({ name: this.task_var, checked: false}); //push the task into the list
      this.task_var = ''; //clear the input field
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); //delete the task from the list
  }
  
  markCompleted(index: number) {
    if (this.tasks[index].checked === true) {
      this.tasks[index].checked = false;      
    } else
      this.tasks[index].checked = true;
      const completedTask = this.tasks[index];
      this.completedTasks.push(completedTask);
      this.tasks.splice(index, 1);

    console.log(this.completedTasks);
  }

  markIncompleted(index: number) {
    this.completedTasks[index].checked = false;
    const incompleteTasks = this.completedTasks[index];
    this.tasks.push(incompleteTasks);
    this.completedTasks.splice(index, 1);

    console.log(this.tasks);
  }
  


}
