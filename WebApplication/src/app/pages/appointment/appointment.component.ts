import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  listOffice: any[];
  listService: any[];

  officeSelect: any;
  serviceSelect: any;
  idNumber: any;
  placa: any;
  date: any;

  constructor() {

    this.listOffice = ["Primer sede", "Segunda sede", "Tercera sede", "Cuarta sede", "Quinta sede", "Sexta sede", "Septima sede", "Octava sede", "Novena sede", "Decima sede"];
    this.listService = ["Hola"]

  }

  ngOnInit(): void {

    //Añadir los elementos de listOffice al select

    this.officeSelect = document.getElementById("officeSelect");
    this.serviceSelect = document.getElementById("serviceSelect");

    //Añadir los elementos de listOffice al select
    for (let i = 0; i < this.listOffice.length; i++) {
      let option = document.createElement("option");
      option.text = this.listOffice[i];
      this.officeSelect.add(option);
    }

    //Añadir los elementos de listService al select
    for (let i = 0; i < this.listService.length; i++) {
      let option = document.createElement("option");
      option.text = this.listService[i];
      this.serviceSelect.add(option);
    }

  }

  onSave() {

    if(this.idNumber == undefined || this.idNumber == "") {
      alert("El campo numero de identificacion es obligatorio");
    } else if(isNaN(this.idNumber)) {
      alert("El campo numero de identificacion debe ser numerico");
    } else if(this.placa == undefined || this.placa == "") {
      alert("El campo placa es obligatorio");
    } else if(this.date == undefined || this.date == "") {
      alert("El campo fecha es obligatorio");
    } else if (this.idNumber.length != 9) {
      alert("El numero de identificacion debe tener 9 digitos");
    } else {
      alert("Datos guardados correctamente");
    }


  }
}
