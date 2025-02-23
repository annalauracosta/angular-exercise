import { Task } from '../../models/task';
import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  options: boolean[] = [true, false];
  id: number = 0;
  description: string = '';
  situation: boolean = false;
  constructor(private taskService: TaskService) {}

  createTask() {
    const newTask: Task = {
      id: this.id,
      description: this.description,
      situation: this.situation,
    };

    console.log('Nova Tarefa:', newTask);

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.description = '';
        this.situation = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
