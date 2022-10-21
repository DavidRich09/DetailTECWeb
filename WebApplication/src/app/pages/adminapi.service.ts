import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  url:string = "https://localhost:44376/";

  constructor(private http: HttpClient) { }

  public PostWorker(body:any){

    let urlTrue = this.url + "Trabajadors/saveWorker";

    return this.http.post(urlTrue, body);

  }

  public PostOffice(body:any){

    let urlTrue = this.url + "Sucursal/saveOffice";

    return this.http.post(urlTrue, body);

  }

  public GetNamesOffice(){

    let urlTrue = this.url + "Sucursal/getNamesOffices";

    return this.http.get(urlTrue);

  }


  public PostSupplier(body:any){

    let urlTrue = this.url + "Proveedor/saveSupplier";

    return this.http.post(urlTrue, body);

  }

  public GetSuppliersNames(){

    let urlTrue = this.url + "Proveedor/getSupplerisNames";

    return this.http.get(urlTrue);

  }

  public PostProduct(body:any){

    let urlTrue = this.url + "Producto/saveProduct";

    return this.http.post(urlTrue, body);

  }

  public GetProductsNames(){

    let urlTrue = this.url + "Producto/GetNamesProducts";

    return this.http.get(urlTrue);

  }

  public GetIdSupplier(){

    let urlTrue = this.url + "Proveedor/getSupplerisId";

    return this.http.get(urlTrue);

  }

  public PostSupplierProduct(body:any){

    let urlTrue = this.url + "ProvedorProducto/saveProvedorProductoList";

    console.log(body);

    return this.http.post(urlTrue, body);

  }

  public PostService(body:any){

    let urlTrue = this.url + "Wash/saveWash";

    return this.http.post(urlTrue, body);

  }

  public GetNamesService(){

    let urlTrue = this.url + "Wash/getNamesWash";

    return this.http.get(urlTrue);

  }


  public PostClient(body:any){

    let urlTrue = this.url + "Cliente/saveClient";

    return this.http.post(urlTrue, body);

  }

  public PostNumbersClients(body:any){

    let urlTrue = this.url + "Cliente/saveClienteTelList";

    console.log(body);

    return this.http.post(urlTrue, body);
  }

  public PostDirsClients(body:any){

    let urlTrue = this.url + "Cliente/saveClienteDirList";

    console.log(body);

    return this.http.post(urlTrue, body);
  }

  public PostProductSale(body:any){

    console.log(body);

    let urlTrue = this.url + "LavadoProducto/saveLavadoProductoList";

    return this.http.post(urlTrue, body);

  }

  public PostAppointment(body:any){

    let urlTrue = this.url + "CitumContoller/saveAppointment";

    return this.http.post(urlTrue, body);

  }


}
