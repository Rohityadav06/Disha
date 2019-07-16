import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject'
import {BehaviorSubject} from 'rxjs/BehaviorSubject' 
/*
  Generated class for the SubjectProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable( )
export class SharedProvider {  
  private subject = new Subject<any>();
  private loadingMask= new Subject();
  private toHomePage = new Subject<any>();
  private alertMsg = new Subject<any>();
  private toastMsg = new Subject<any>();
  private toRegistrationPage = new Subject<any>();
  private toPage = new Subject<any>();
  private toShopListPage = new Subject<any>();


  constructor() {
  }





 

  getLoginData():Observable<any>{
    return this.toHomePage.asObservable();
  }

  setPage(data){
    this.toPage.next(data)
  }

  getPage():Observable<any>{
    return this.toPage.asObservable();
  }




}
