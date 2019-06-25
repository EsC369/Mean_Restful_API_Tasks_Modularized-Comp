import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"
import {ActivatedRoute, Router, Params} from "@angular/router";


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  showTask :any;
  constructor(private _route: ActivatedRoute,private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.deleteTask();
  }

  // Delete Task route: --------------------
  deleteTask() {
    this._route.params.subscribe((params: Params) => {
    let observable = this._httpService.deleteTask(params["id"]);
    observable.subscribe(data => {
      this.showTask = {title: "", description: ""};
      console.log("Successfully Deleted!");

      // Redirect to Root:
      this._router.navigate(["/"]);
      // this.getAllTasks();
    });
  })
  }
}
