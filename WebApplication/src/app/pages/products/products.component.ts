import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listSupplier: any;
  listSupplierString : string = "";
  name: any;
  brand: any;
  price: any;
  supplier: any;
  StringIDSupplier : string = "";


  constructor(private ApiAdmin: AdminapiService) {}

  ngOnInit(): void {

    this.addSupplier();

  }

  saveSupplier() {

    if(this.supplier == undefined || this.supplier == "") {
      alert("El campo proveedor es obligatorio");
    } else {
      this.listSupplierString += this.supplier + ", ";
      this.supplier = "";
    }

  }


  addSupplier() {

    (async () => {

      this.ApiAdmin.GetSuppliersNames().subscribe((data) => {

        let json = JSON.parse(JSON.stringify(data));
        this.listSupplier = json["data"];

        for (let i = 0; i < this.listSupplier.length; i++) {
          this.listSupplier[i] = this.listSupplier[i]["nombre"] + " - " + this.listSupplier[i]["cedJuridica"];
        }

      });

      //agreagar espera
      await new Promise(resolve => setTimeout(resolve, 500));

      this.supplier = document.getElementById("supplierSelect");

      //Añadir los elementos de listSupplier al select
      for (let i = 0; i < this.listSupplier.length; i++) {
        let option = document.createElement("option");
        option.text = this.listSupplier[i];
        this.supplier.add(option);
      }

    })();

  }

  send() {

      if(this.name == undefined || this.name == "" || this.brand == undefined || this.brand == "" || this.price == undefined || this.price == "") {
        this.showWarning("Todos los campos son obligatorios");
      } else if (isNaN(this.price)){
        this.showWarning("El precio debe ser un numero");
      } else if (this.listSupplierString == "") {
        this.showWarning("Debe agregar al menos un proveedor");
      } else {
        this.sendData();
      }

  }

  sendData(){
    (async () => {
      this.sendProduct();
      await new Promise(resolve => setTimeout(resolve, 500));
      this.sendSupplierProduct();
    })();
  }

  sendSupplierProduct() {

    let listSupplierAux = this.listSupplierString.split(", ");
    listSupplierAux.pop();

    let listJsonSupplier = [];

    for (let i = 0; i < listSupplierAux.length; i++) {

      let supplierAux = listSupplierAux[i].split(" - ");
      let supplier = {
        nombre: this.name,
        cedProveedor: supplierAux[1],
        marca: this.brand
      }

      listJsonSupplier.push(supplier);

    }

    this.ApiAdmin.PostSupplierProduct(listJsonSupplier).subscribe((data) => {
      console.log(data);
    });


  }

  sendProduct() {

    this.ApiAdmin.PostProduct(

      {
        nombre: this.name,
        marca: this.brand,
        costo: this.price
      }

    ).subscribe((data) => {

      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: '¨Producto guardado con éxito',

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
