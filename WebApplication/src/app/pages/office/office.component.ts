import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";
import Swal from "sweetalert2";

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

  constructor(private ApiAdmin: AdminapiService) { }

  ngOnInit(): void {
  }

  /**
   * Verifica que los datos sean validos
   */

  send() {
    if(this.name == undefined || this.name == "" || this.provincia == undefined || this.provincia == "" || this.canton == undefined || this.canton == "" || this.distrito == undefined || this.distrito == "" || this.celNumber == undefined || this.celNumber == "" || this.dateOpen == undefined || this.dateOpen == "" || this.manager == undefined || this.manager == "" || this.dateStart == undefined || this.dateStart == "") {
      this.showWarning("Todos los campos son obligatorios");
    } else if (isNaN(this.celNumber || isNaN(this.manager))){
      this.showWarning('El numero de celular y el manager debe ser un numero');
    } else if (this.celNumber.length != 8) {
      this.showWarning('El numero de celular debe tener 8 dígitos');
    } else if (this.manager.length != 9) {
      this.showWarning('La cedula debe tener 9 digitos');
    } else {
      this.saveOffice();
    }

  }

  /**
   * Envia los datos al servicio
   */

  saveOffice() {

    this.ApiAdmin.PostOffice(

      {
        nombre: this.name,
        provincia: this.provincia,
        canton: this.canton,
        distrito: this.distrito,
        telefono: this.celNumber,
        inicioGerente: this.dateStart,
        apertura: this.dateOpen,
        cedGerente: this.manager
      }

    ).subscribe((data) => {

      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: '¨Sucursal guardado con éxito',

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
