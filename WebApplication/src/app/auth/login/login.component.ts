import {Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {

  role: any;
  id: any;
  password: any;

  constructor( private router: Router, private Api : ApiService) { }


  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.id);
  }



}
