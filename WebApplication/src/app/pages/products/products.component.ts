import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listSupplier: any[];
  listSupplierString : string = "";
  name: any;
  brand: any;
  price: any;
  supplier: any;

  constructor(private ApiAdmin: AdminapiService) {

    this.listSupplier = ["proovedor 1", "proovedor 2", "proovedor 3", "proovedor 4", "proovedor 5", "proovedor 6", "proovedor 7", "proovedor 8", "proovedor 9", "proovedor 10"];

  }

  ngOnInit(): void {

    //Añadir los elementos de listSupplier al select

    this.supplier = document.getElementById("supplierSelect");

    //Añadir los elementos de listSupplier al select
    for (let i = 0; i < this.listSupplier.length; i++) {
      let option = document.createElement("option");
      option.text = this.listSupplier[i];
      this.supplier.add(option);
    }


  }

  saveSupplier() {

    if(this.supplier == undefined || this.supplier == "") {
      alert("El campo proveedor es obligatorio");
    } else {
      this.listSupplierString += this.supplier + ", ";
      this.supplier = "";

      console.log(this.listSupplierString);
    }

  }

  send() {

      if(this.name == undefined || this.name == "" || this.brand == undefined || this.brand == "" || this.price == undefined || this.price == "") {
        alert("Todos los campos son obligatorios");
      } else if (isNaN(this.price)){
        alert("El precio debe ser un numero");
      } else if (this.listSupplierString == "") {
        alert("Debe agregar al menos un proveedor");
      } else {
        //enviar datos al backend
      }

  }
}
