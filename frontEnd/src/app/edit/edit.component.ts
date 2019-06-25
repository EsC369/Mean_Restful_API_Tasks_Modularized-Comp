import { Component, OnInit } from '@angular/core';
import { HttpService} from "../http.service"
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  showTask: any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.updateTask();
  }
  
   // Update Task Route:-------------------
   updateTask() {
    this._route.params.subscribe((params: Params) => {

    let observable = this._httpService.updateTask(params["id"]);
    observable.subscribe(data => {
      this.showTask = {title: "", description: ""};
      console.log("Successfully updated!");

      // Rediret to root:
      this._router.navigate(["/"]);
      // this.getAllTasks();
    });
  });
  }
}
