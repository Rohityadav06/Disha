import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: HttpClient) {

  }
  postBusNo(busNo:number):Observable<any> {

    return this.http.get("http://localhost:8080/fetch/?busNo="+busNo+""); 
  }

}
