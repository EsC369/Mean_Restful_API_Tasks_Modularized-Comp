import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() tasks: object;
  
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllTasks()
  }

  // index route:----------------
  getAllTasks() {
    let observable = this._httpService.getAllTasks()

    observable.subscribe(data => {
      this.tasks = data["data"];
      //console.log("TASKS", data.data)    // Can work but not standard in angular/typescript
    })
  }
  // Delete Route:
  deleteTask(task) {
    this._router.navigate(["/api/tasks/" + task._id + "/delete"])
  }

  // Edit Route:
  editTask(task){
    this._router.navigate(['api/tasks/' + task._id + '/edit'])
  }

}
