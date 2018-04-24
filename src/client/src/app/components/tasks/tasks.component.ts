import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../services/tasks.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: String;

  constructor(private taskService: TasksService) { 
    this.taskService.getTasks().subscribe(tasks =>{
      this.tasks = tasks
    });
  }

  ngOnInit() {
  }

  addTask(event){
    event.preventDefault();
    const newTask: Task ={
      title: this.title,
      idDone: false
    };
    this.taskService.addTask(newTask).subscribe(task =>{
        this.tasks.push(task);
        console.log(this.tasks)
    });
  }

}
