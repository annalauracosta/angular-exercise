import { Description } from './../../../../node_modules/jackspeak/dist/commonjs/index.d';
import { Group } from './../../../../node_modules/regjsparser/parser.d';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formGroup: FormGroup;
  constructor(private taskService: TaskService, private fg: FormBuilder) {
    this.formGroup = this.fg.group({
      description: [null, [Validators.required]],
      situation: [false, [Validators.required]],
    });
  }

  createTask() {
    const newTask: Task = {
      id: this.id,
      description: this.formGroup.value.description,
      situation: this.formGroup.value.situation,
    };

    console.log('Nova Tarefa:', newTask);

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.formGroup.reset();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
