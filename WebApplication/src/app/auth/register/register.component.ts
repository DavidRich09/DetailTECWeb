import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import {AuthApiService} from "../auth-api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  name: any;
  cellPhone: any;
  idNumber: any;
  mail : any;
  user : any;
  cpassword: any;
  address : any;

  ListStringNumers = "";
  ListStringAddress = "";

  constructor(private router : Router, private AuthApi : AuthApiService) { }

  ngOnInit(): void {
  }

  Register(){
    console.log(this.user);
    this.Send();
  }

  Back(){
    this.router.navigate(['login']);
  }

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

  AddAddress() {

    if(this.address == undefined || this.address == "") {
      alert("El campo direccion es obligatorio");
    } else {
      this.ListStringAddress += this.address + "<br/>";
      this.address = "";
    }

  }

  Send() {

    if (this.name == undefined || this.name == "" || this.idNumber == undefined || this.idNumber == "" || this.mail == undefined || this.mail == "" || this.user == undefined || this.user == "" || this.cpassword == "") {
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

  SendData(){

    (async () => {

      await this.SendClient();
      await this.SendClientNumber();
      await this.SendDirClient();

    })();

  }

  SendClient() {

    this.AuthApi.PostClient(

      {
        cedula: this.idNumber,
        nombre: this.name,
        correo: this.mail,
        usuario: this.user,
        cPassword: this.cpassword,
        puntos: 0,
        puntosRedimidos: 0,
      }

    ).subscribe((data) => {

      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: '¨Registrado con éxito',

      })

    });

  }

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

    this.AuthApi.PostNumbersClients(JsonListNumbers).subscribe((data) => {
      console.log(data);
    });

  }

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

    this.AuthApi.PostDirsClients(JsonListAddress).subscribe((data) => {
      console.log(data);
    });


  }

}
