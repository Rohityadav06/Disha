import { Component } from '@angular/core';
import { NavController, Popover } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BuslocationupdateProvider } from '../../providers/buslocationupdate/buslocationupdate';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  lat: any;
  lng: any;
  busNumber:number
   locisubscribe
    
    
  
  currentStatus:string="STOP";
  constructor(private updateBusloci:BuslocationupdateProvider,public navCtrl: NavController,public geo: Geolocation){}
  ngOnChange(){
    this.lat=this.lat;
    this.lng=this.lng
  }
  
  onClickStart(busNumber:number):any{
 if(busNumber == undefined){
   alert("Please enter your bus number")
 }
 else{
    var Confirm = confirm("Do you want to start?")
   if(Confirm==true){
    var busLocationObj = { lat:this.lat,
      lng:this.lng,
    busNo:busNumber}
    console.log(busLocationObj)
   this.locisubscribe= this.updateBusloci.busLocationUpdate(busLocationObj).subscribe(
    (pos)=>{ this.currentStatus="START";
           console.log(pos); 
  },
    (err:HttpErrorResponse)=>{
      console.log("ERROR");
    }
  )
   
  
  console.log(busNumber)
}
 }
  }
onClickStop(){
  confirm("Do you want to stop?")
  this.currentStatus="STOP"
  this.locisubscribe.unsubscribe();
}

  

ionViewDidLoad(){
  this.geo.getCurrentPosition().then(
    pos=>{
      this.lat= pos.coords.latitude;
      this.lng= pos.coords.longitude;
    
    }
  ).catch(err=>console.error);
  }


 
  }
    
  
 

