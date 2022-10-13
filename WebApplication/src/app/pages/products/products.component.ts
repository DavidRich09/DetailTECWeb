import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  name: any;
  brand: any;
  price: any;
  supplier: any;
  listSupplier: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  saveSupplier() {

    if(this.supplier == undefined || this.supplier == "") {
      alert("El campo proveedor es obligatorio");
    } else {
      this.listSupplier += this.supplier + ", ";
      this.supplier = "";

      console.log(this.listSupplier);
    }

  }

  send() {

      if(this.name == undefined || this.name == "" || this.brand == undefined || this.brand == "" || this.price == undefined || this.price == "") {
        alert("Todos los campos son obligatorios");
      } else if (isNaN(this.price)){
        alert("El precio debe ser un numero");
      } else if (this.listSupplier == "") {
        alert("Debe agregar al menos un proveedor");
      } else {
        //enviar datos al backend
      }

  }
}
