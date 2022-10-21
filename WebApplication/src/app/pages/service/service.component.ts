import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  listProducts: any;
  listStringProducts: string = "";
  name: any;
  cost: any;
  price: any;
  time: any;
  product: any;
  requiredStaff: any;
  points: any;


  constructor(private ApiAdmin: AdminapiService) {

  }


  ngOnInit(): void {

    this.addProduct();

  }

  addProduct() {

    (async () => {

      this.ApiAdmin.GetProductsNames().subscribe((data) => {

        let json = JSON.parse(JSON.stringify(data));
        this.listProducts = json["data"];

        for (let i = 0; i < this.listProducts.length; i++) {
          this.listProducts[i] = this.listProducts[i]["nombre"] + "-" + this.listProducts[i]["marca"];
        }

      });

      await new Promise(r => setTimeout(r, 1000));

      //Añadir los elementos de listProducts al select

      this.product = document.getElementById("serviceSelect");

      //Añadir los elementos de listProducts al select
      for (let i = 0; i < this.listProducts.length; i++) {
        let option = document.createElement("option");
        option.text = this.listProducts[i];
        this.product.add(option);
      }

    })();

  }

  saveProduct() {

    if(this.product == undefined || this.product == "") {
      alert("El campo producto es obligatorio");
    } else {
      this.listStringProducts += this.product + ", ";
      this.product = "";

    }

  }

  send() {

    if(this.name == undefined || this.name == "" || this.cost == undefined || this.cost == "" || this.price == undefined || this.price == "" || this.time == undefined || this.time == "" || this.requiredStaff == undefined || this.requiredStaff == "" || this.points == undefined || this.points == "") {
      this.showWarning("Todos los campos son obligatorios");
    } else if (isNaN(this.cost) || isNaN(this.price || isNaN(this.points))){
      this.showWarning("El costo, precio y los puntos deben ser numeros");
    } else if (this.listStringProducts == "") {
      this.showWarning("Debe agregar al menos un producto");
    } else {
      this.sendData();
    }

  }

  sendData(){

    (async () => {

      this.sendService();
      await new Promise(r => setTimeout(r, 5000));
      this.sendProducts();

    })();

  }

  sendService() {

    this.ApiAdmin.PostService({

      tipoLavado: this.name,
      duracion: this.time,
      costo: this.cost,
      precio: this.price,
      puntosOtorga: this.points,
      puntosRedimir: this.points,

    }).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: '¨Lavado guardado con éxito',
      })
    });


  }

  sendProducts() {

    let listProducts = this.listStringProducts.split(", ");
    listProducts.pop();
    //create json list
    let listJsonProducts = [];

    //for each product
    for (let i = 0; i < listProducts.length; i++) {

        let product = listProducts[i].split("-");

        let jsonProduct = {
          nombre: product[0],
          marca: product[1],
          tipoLavado : this.name,
          cantidad: 1
        };

        listJsonProducts.push(jsonProduct);

    }

    this.ApiAdmin.PostProductSale(listJsonProducts).subscribe((data) => {
      console.log(data);
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
