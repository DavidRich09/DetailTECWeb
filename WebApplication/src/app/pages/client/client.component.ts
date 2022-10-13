import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  name: any;
  cellPhone: any;
  idNumber: any;
  mail : any;
  user : any;
  address : any;

  ListStringNumers = "";
  ListStringAddress = "";

  constructor() { }

  ngOnInit(): void {



  }

  AddNumber() {

    if(this.cellPhone == undefined || this.cellPhone == "") {
      alert("El campo numero es obligatorio");
    } else if(isNaN(this.cellPhone)) {
      alert("El campo numero debe ser numerico");
    }else if (this.cellPhone.length != 8) {
      alert("El numero debe tener 8 digitos");
    } else {
      this.ListStringNumers += this.cellPhone + " ";
      this.cellPhone = "";

    }

  }

  AddAddress() {

    if(this.address == undefined || this.address == "") {
      alert("El campo direccion es obligatorio");
    } else {
      this.ListStringAddress += this.address + "<br/>";
      this.address = "";


    }

  }
}
