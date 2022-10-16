import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  name: any;
  lastName: any;
  id: any;
  dateBorn: any;
  dateStart: any;
  age: any;
  password: any;
  rol: any;
  payment: any;

  constructor(private ApiAdmin: AdminapiService) { }

  ngOnInit(): void {
  }

  send() {

    if(this.name == undefined || this.name == "" || this.lastName == undefined || this.lastName == "" || this.id == undefined || this.id == "" || this.dateBorn == undefined || this.dateBorn == "" || this.dateStart == undefined || this.dateStart == "" || this.age == undefined || this.age == "" || this.password == undefined || this.password == "" || this.rol == undefined || this.rol == "" || this.payment == undefined || this.payment == "") {
      alert("Todos los campos son obligatorios");
    } else if (this.id.length != 9) {
      alert("La cédula debe tener 9 dígitos");
    } else if (isNaN(this.id)){
      alert("El id debe ser un numero");
    } else if (isNaN(this.age)){
      alert("La edad debe ser un numero");
    } else {
      //enviar datos al backend
    }

  }


}
