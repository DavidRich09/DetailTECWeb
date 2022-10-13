import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  name: any;
  idCompany: any;
  address: any;
  mail: any;
  number: any;

  constructor() { }

  ngOnInit(): void {
  }

  send() {
    if(this.name == undefined || this.name == "" || this.idCompany == undefined || this.idCompany == "" || this.address == undefined || this.address == "" || this.mail == undefined || this.mail == "" || this.number == undefined || this.number == "") {
      alert("Todos los campos son obligatorios");
    } else if (!isNaN(this.number)){
      alert("El numero de celular debe ser un numero");
    } else if (this.number.length != 8) {
      alert("El numero de celular debe tener 8 dígitos");
    } else if (this.mail.indexOf("@") == -1 || this.mail.indexOf(".") == -1){
      alert("El correo debe ser valido");
    } else {
      //enviar datos al backend
    }

  }
}
