import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-points',
  templateUrl: './client-points.component.html',
  styleUrls: []
})
export class ClientPointsComponent implements OnInit {

  points = localStorage.getItem("points");
  user = localStorage.getItem("user");

  constructor() { }

  ngOnInit(): void {
  }

}
