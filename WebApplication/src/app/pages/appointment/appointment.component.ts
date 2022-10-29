import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {AdminapiService} from "../adminapi.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  listOffice: any;
  listService: any;

  officeSelect: any;
  serviceSelect: any;
  idNumber: any;
  placa: any;
  date: any;

  constructor(private ApiAdmin: AdminapiService) {


  }

  ngOnInit(): void {

    this.addListOffice();
    this.addListService();

  }

  /**
   * Funcion que pide los datos de las oficinas al API y las guarda en la variable listOffice para luego mostrarlas en el select
   */

  addListOffice() {

    (async () => {

      this.ApiAdmin.GetNamesOffice().subscribe((data) => {

        let json = JSON.parse(JSON.stringify(data));
        this.listOffice = json["data"];
      });

      await new Promise(r => setTimeout(r, 1000));

      this.officeSelect = document.getElementById("officeSelect");

      //Añadir los elementos de listOffice al select
      for (let i = 0; i < this.listOffice.length; i++) {
        let option = document.createElement("option");
        option.text = this.listOffice[i];
        this.officeSelect.add(option);
      }

    })();


  }

  /**
   * Funcion que pide los datos de los servicios al API y las guarda en la variable listOffice para luego mostrarlas en el select
   */

  addListService() {

    (async () => {

      this.ApiAdmin.GetNamesService().subscribe((data) => {

          let json = JSON.parse(JSON.stringify(data));
          this.listService = json["data"];
      });

      await new Promise(r => setTimeout(r, 1000));

      this.serviceSelect = document.getElementById("serviceSelect");

      for (let i = 0; i < this.listService.length; i++) {
        let option = document.createElement("option");
        option.text = this.listService[i];
        this.serviceSelect.add(option);
      }

    })();

  }

  /**
   * Funcion que verifica si los datos ingresados son validos
   */

  onSave() {

    if(this.idNumber == undefined || this.idNumber == "") {
      this.showWarning("El campo numero de identificacion es obligatorio");
    } else if(isNaN(this.idNumber)) {
      this.showWarning("El campo numero de identificacion debe ser numerico");
    } else if(this.placa == undefined || this.placa == "") {
      this.showWarning("El campo placa es obligatorio");
    } else if(this.date == undefined || this.date == "") {
      this.showWarning("El campo fecha es obligatorio");
    } else if (this.idNumber.length != 9) {
      this.showWarning("El numero de identificacion debe tener 9 digitos");
    } else {
      this.SendData();
    }

  }

  /**
   * Funcion que muestra un mensaje de alerta
   * @param message Mensaje que se mostrara en la alerta
   */

  showWarning(message: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Los campos no son válidos',
      text: message,
    })
  }

  /**
   * Envia los datos al API
   */

  SendData() {

    this.ApiAdmin.PostAppointment(

      {
        placaVehiculo: this.placa,
        fecha: this.date,
        tipoLavado: this.serviceSelect,
        sucursal: this.officeSelect,
        cedEmpleado: 0,
        cedCliente: this.idNumber,
      }

    ).subscribe((data) => {

      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: '¨Cita guardado con éxito',

      })
    });

  }



}
