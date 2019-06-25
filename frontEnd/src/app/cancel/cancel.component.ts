import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  showTask: any;
  constructor() { }

  ngOnInit() {
    this.cancelEdit();
  }

   // Cancel/Reset Route:---------------
   cancelEdit() {
    this.showTask = {title: "", description: ""}
  }

}
