import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-app';
}
