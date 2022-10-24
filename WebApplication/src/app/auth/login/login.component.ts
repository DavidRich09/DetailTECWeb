import {Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthApiService} from "../auth-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})

/**
 * Login component, utilizado para el ingreso de usuarios y trabajadores. Componente inicial al iniciar la pagina.
 */

export class LoginComponent implements OnInit {

  role: any;
  user: any;
  password: any;

  constructor( private router: Router, private Api : AuthApiService) { }


  ngOnInit(): void {
  }

  /**
   * Funcion que se ejecuta al presionar el boton de ingresar, se encarga de verificar que el usuario y la contraseña sean correctos,
   * además de redireccionar al usuario a la pagina correspondiente segun el rol seleccionado.
   */
  onLogin(){
    if (this.user == null || this.password == null || this.user == null){

      alert("Complete los campos");

    } else {
      if (this.role == "Cliente") {
        this.Api.GetLoginUser(this.user).toPromise().then((data: any) => {
          console.log(data);
          if (data == null) {
            alert("Usuario no existe");
          } else {
            if (data.CPassword == this.password) {
              localStorage.setItem("user", this.user);
              localStorage.setItem("cedula", data.Cedula);
              localStorage.setItem("points", data.Puntos);
              console.log(data.Puntos);
              this.router.navigate(['/ClientView']);
            } else {
              alert("Contraseña incorrecta");
              console.log(data.CPassword);
              console.log(this.password);
            }
          }
        });
      } else {
        this.Api.GetLoginWorker(this.user).toPromise().then((data: any) => {
          console.log(data);
          if (data == null) {
            alert("Trabajador no existe");
          } else {
            if (data.TPassword == this.password) {
              localStorage.setItem("user", this.user);
              this.router.navigate(['/AdminView']);
            } else {
              alert("Contraseña incorrecta");
              console.log(data.TPassword);
              console.log(this.password);
            }
          }
        });
      }
    }
  }

}
