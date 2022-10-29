import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";
import Swal from "sweetalert2";


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

  constructor(private ApiAdmin: AdminapiService) { }

  ngOnInit(): void {

  }

  /**
   * Añade un numero al string de numeros
   */


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

  /**
   * Añade un numero al string de direcciones
   */

  AddAddress() {

    if(this.address == undefined || this.address == "") {
      alert("El campo direccion es obligatorio");
    } else {
      this.ListStringAddress += this.address + "<br/>";
      this.address = "";
    }

  }

  /**
   * Verifia que los datos esten bien
   */

  Send() {

    if (this.name == undefined || this.name == "" || this.idNumber == undefined || this.idNumber == "" || this.mail == undefined || this.mail == "" || this.user == undefined || this.user == "") {
      alert("Todos los campos son obligatorios");
    } else if (isNaN(this.idNumber)) {
      alert("La cedula debe ser numerica");
    } else if (this.idNumber.length != 9) {
      alert("La cedula debe tener 9 digitos");
    } else if (this.mail.indexOf("@") == -1 || this.mail.indexOf(".") == -1) {
      alert("El correo debe ser valido");
    } else if (this.ListStringNumers == "") {
      alert("Debe agregar al menos un numero de contacto");
    } else if (this.ListStringAddress == "") {
      alert("Debe agregar al menos una direccion");
    } else {
      this.SendData();
    }

  }

  /**
   * Envia los datos al servidor
   */

  SendData(){

    (async () => {

        this.SendClient();
        await new Promise(r => setTimeout(r, 2000));
        this.SendClientNumber();
        await new Promise(r => setTimeout(r, 2000));
        this.SendDirClient();

    })();

  }

  /**
   * Envia los datos del cliente al servidor
   */

  SendClient() {

      this.ApiAdmin.PostClient(

        {
          cedula: this.idNumber,
          nombre: this.name,
          correo: this.mail,
          usuario: this.user,
          cPassword: "",
          puntos: 0,
          puntosRedimidos: 0,
        }

      ).subscribe((data) => {

        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Guardado',
          text: '¨Cliente guardado con éxito',

        })

      });

  }

  /**
   * Envia los numeros del cliente al servidor
   */

  SendClientNumber(){
    let ListNumbers = this.ListStringNumers.split(" ");
    ListNumbers.pop();
    let JsonListNumbers = [];

    for (let i = 0; i < ListNumbers.length; i++) {
      let JsonNumber = {
        telefono: ListNumbers[i],
        cedCliente: this.idNumber
      }
      JsonListNumbers.push(JsonNumber);
    }

    this.ApiAdmin.PostNumbersClients(JsonListNumbers).subscribe((data) => {
      console.log(data);
    });

  }

  /**
   * Envia las direcciones del cliente al servidor
   */

  SendDirClient(){

    let ListAddress = this.ListStringAddress.split("<br/>");
    ListAddress.pop();
    let JsonListAddress = [];

    for (let i = 0; i < ListAddress.length; i++) {
      let JsonAddress = {
        direccion: ListAddress[i],
        cedCliente: this.idNumber
      }
      JsonListAddress.push(JsonAddress);
    }

    this.ApiAdmin.PostDirsClients(JsonListAddress).subscribe((data) => {
      console.log(data);
    });


  }

  /**
   * Llama al metodo para agregar los clientes del Excel a la base de datos
   * @constructor
   */
  CallExcelImport() {
    this.ApiAdmin.CallExcel().subscribe((data) => {
      console.log(data);
    });
  }

}
