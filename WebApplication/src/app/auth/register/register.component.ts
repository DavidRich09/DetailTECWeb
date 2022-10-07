import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  id : any;
  name : any;
  user : any;
  email : any;
  password : any;

  constructor(private router : Router, private Api : ApiService ) { }

  ngOnInit(): void {
  }

  Register(){
    console.log(this.id);
  }

  Back(){
    this.router.navigate(['login']);
  }

}
