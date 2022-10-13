import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  name: any;
  provincia: any;
  canton: any;
  distrito: any;
  celNumber: any;
  dateOpen: any;
  manager: any;
  dateStart: any;

  constructor() { }

  ngOnInit(): void {
  }

  send() {
    if(this.name == undefined || this.name == "" || this.provincia == undefined || this.provincia == "" || this.canton == undefined || this.canton == "" || this.distrito == undefined || this.distrito == "" || this.celNumber == undefined || this.celNumber == "" || this.dateOpen == undefined || this.dateOpen == "" || this.manager == undefined || this.manager == "" || this.dateStart == undefined || this.dateStart == "") {
      alert("Todos los campos son obligatorios");
    } else if (!isNaN(this.celNumber)){
      alert("El numero de celular debe ser un numero");
    } else if (this.celNumber.length != 8) {
      alert("El numero de celular debe tener 8 dígitos");
    } else {
      //enviar datos al backend
    }


  }
}
