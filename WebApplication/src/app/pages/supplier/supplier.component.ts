import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";
import Swal from "sweetalert2";

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

  constructor(private ApiAdmin: AdminapiService) { }

  ngOnInit(): void {
  }

  /**
   * Valida que todos los campos sean alidos
   */

  send() {
    if(this.name == undefined || this.name == "" || this.idCompany == undefined || this.idCompany == "" || this.address == undefined || this.address == "" || this.mail == undefined || this.mail == "" || this.number == undefined || this.number == "") {
      this.showWarning("Todos los campos son obligatorios");
    } else if (isNaN(this.number)){
      this.showWarning("La cédula jurídica debe ser un numero");
    } else if (this.number.length != 8) {
      this.showWarning("El numero de celular debe tener 8 dígitos");
    } else if (this.mail.indexOf("@") == -1 || this.mail.indexOf(".") == -1){
      this.showWarning("El correo debe ser valido");
    } else {
      this.save();
    }

  }

  /**
   * Envia los datos al servidor para guardarlos
   */

  save() {

    this.ApiAdmin.PostSupplier(

      {
        cedJuridica: this.idCompany,
        nombre: this.name,
        contacto: this.number,
        correo: this.mail,
        direccion: this.address
      }

    ).subscribe((data) => {

      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: '¨Proveedor guardado con éxito',

      })

    });


  }

  showWarning(message: string) {

    Swal.fire({
      icon: 'warning',
      title: 'Los campos no son válidos',
      text: message
    })

  }

}
