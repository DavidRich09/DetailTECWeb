import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  url:string = "http://localhost:9968/";

  constructor(private http: HttpClient) { }

  public PostWorker(body:any){

    let urlTrue = this.url + "Admin/PostWorker";

    return this.http.post(urlTrue, body);

  }

  public PostOffice(body:any){

    let urlTrue = this.url + "Admin/PostOffice";

    return this.http.post(urlTrue, body);

  }

  public PostSupplier(body:any){

    let urlTrue = this.url + "Admin/PostSupplier";

    return this.http.post(urlTrue, body);

  }

  public PostProduct(body:any){

    let urlTrue = this.url + "Admin/PostProduct";

    return this.http.post(urlTrue, body);

  }

  public PostService(body:any){

    let urlTrue = this.url + "Admin/PostService";

    return this.http.post(urlTrue, body);

  }

  public PostClient(body:any){

    let urlTrue = this.url + "Admin/PostClient";

    return this.http.post(urlTrue, body);

  }


}
