import { Component, OnInit } from '@angular/core';
import { HttpService} from "../http.service"
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  showTask: any
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneTask();
  }

   // Get One Task Route:--------------
   getOneTask() {
     // Subscribe to params ID:
    this._route.params.subscribe((params: Params) => {
      let observable = this._httpService.getOneTask(params["id"]);
      // Subscribe to data:
      observable.subscribe(data => {
      this.showTask = data['data'];
      console.log("Show one Task", this.showTask);

      // Rediret to root:
      this._router.navigate(["/"]);
    });
    })
  }

}
