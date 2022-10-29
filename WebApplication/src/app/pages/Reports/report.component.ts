import { Component, OnInit } from '@angular/core';
import {AdminapiService} from "../adminapi.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-workers',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  constructor(private ApiAdmin: AdminapiService) { }

  ngOnInit(): void {

  }

  /**
   * Envia la instruccion para generar los reportes
   */

  Asistente() {
    this.ApiAdmin.Asistente().subscribe((data) => {
      console.log(data);
    });
  }


}
