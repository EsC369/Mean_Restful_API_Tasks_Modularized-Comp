import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service"
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router) { }
  newTask = { title: "", description: "" };
  ngOnInit() {
  }
  

   // Create New Task Route:---------------
  createTask() { 
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
    this.newTask = { title: "", description: "" }
    
    // Reroute to root:
    this._router.navigate(["/"]);
    });
  }

}
