import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";
import Swal from 'sweetalert2';

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
      this.showWarning("Todos los campos son obligatorios");
    } else if (this.id.length != 9) {
      this.showWarning('La cedula debe tener 9 digitos');
    } else if (isNaN(this.id)){
      this.showWarning('La cédula debe ser un número');
    } else if (isNaN(this.age)){
      this.showWarning('La edad debe ser un numero');
    } else {

      this.saveWorker();

    }

  }

  saveWorker() {
    this.ApiAdmin.PostWorker(
      {
        cedula: this.id,
        nombre: this.name,
        apellidos: this.lastName,
        tPassword: this.password,
        tPago:  this.payment,
        rol: this.rol,
        nacimiento: this.dateBorn,
        edad: this.age,
        ingreso: this.dateStart
      }

    ).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: 'Trabajador guardado con éxito',

      })
    });
  }


  showWarning(message: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Los campos no son válidos',
      text: message,
    })
  }


}
