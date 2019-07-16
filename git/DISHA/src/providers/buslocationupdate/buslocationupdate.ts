import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BuslocationupdateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BuslocationupdateProvider {

  constructor(public http: HttpClient) {
   
  }
   
  busLocationUpdate(updateLocation:any){
    debugger;
    return this.http.post("http://localhost:8080/update",updateLocation)
  }

}
