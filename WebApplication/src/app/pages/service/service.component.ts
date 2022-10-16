import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  listProducts: any[];
  listStringProducts: string = "";
  name: any;
  cost: any;
  price: any;
  time: any;
  product: any;
  requiredStaff: any;
  points: any;


  constructor(private ApiAdmin: AdminapiService) {

    this.listProducts = ["Primer producto", "Segundo producto", "Tercer producto", "Cuarto producto", "Quinto producto", "Sexto producto", "Septimo producto", "Octavo producto", "Noveno producto", "Decimo producto"];

  }

  ngOnInit(): void {

    //Añadir los elementos de listProducts al select

    this.product = document.getElementById("serviceSelect");

    //Añadir los elementos de listProducts al select
    for (let i = 0; i < this.listProducts.length; i++) {
      let option = document.createElement("option");
      option.text = this.listProducts[i];
      this.product.add(option);
    }

  }

  saveProduct() {

    if(this.product == undefined || this.product == "") {
      alert("El campo producto es obligatorio");
    } else {
      this.listStringProducts += this.product + ", ";
      this.product = "";

      console.log(this.listStringProducts);
    }

  }

  send() {

    if(this.name == undefined || this.name == "" || this.cost == undefined || this.cost == "" || this.price == undefined || this.price == "" || this.time == undefined || this.time == "" || this.requiredStaff == undefined || this.requiredStaff == "" || this.points == undefined || this.points == "") {
      alert("Todos los campos son obligatorios");
    } else if (isNaN(this.cost) || isNaN(this.price || isNaN(this.points))){
      alert("El costo, precio y los puntos deben ser numeros");
    } else if (this.listStringProducts == "") {
      alert("Debe agregar al menos un producto");
    } else {
      //enviar datos al backend
    }


  }
}
