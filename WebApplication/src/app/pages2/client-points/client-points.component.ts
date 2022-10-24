import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-points',
  templateUrl: './client-points.component.html',
  styleUrls: []
})

/**
 * Componente que permite observar los puntos del cliente, con las variables points y user que se obtienen del localStorage
 * asignado desde el login del cliente.
 */

export class ClientPointsComponent implements OnInit {

  points = localStorage.getItem("points");
  user = localStorage.getItem("user");

  constructor() { }

  ngOnInit(): void {
  }

}
