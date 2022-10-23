import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  url:string = "https://localhost:44376/";

  constructor(private http: HttpClient) { }

  public GetLoginUser(usuario : string){
    let urlTrue = this.url + "Cliente/getClient/" + usuario;

    return this.http.get(urlTrue);
  }

  public GetLoginWorker(usuario : string){
    let urlTrue = this.url + "Trabajadors/getWorker/" + usuario;

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
}
