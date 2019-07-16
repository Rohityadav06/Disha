import { Component } from '@angular/core';
import { LocationProvider } from '../../providers/location/location';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 

{
  locationSubVar;
  currentLocation=[];
  errmsg;
 constructor(private locationService:LocationProvider,private ts:ToastController) {
  
   
 }


 searchLocationOfBus(busno:number){

this.locationSubVar =
this.locationService.postBusNo(busno).subscribe(
  (positiveResult)=>{

    this.currentLocation = positiveResult;
    console.log(this.currentLocation);
    var lat=positiveResult[0].lat
     var lng = positiveResult[0].lng;
  
     debugger;
    let url="http://maps.google.com/maps?q="+lat+","+lng+"";
   window.open(url,'_blank', 'location=yes')
  //  var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    

},
(err:HttpErrorResponse)=>{
console.log(Error);
if(err instanceof Error){
 
 this.errmsg="Kindly check your internet connection"
}
else{
  this.errmsg="No Response from Server"
}
this.presentToast();
  



})

 }
 async presentToast() {
  const toast = await this.ts.create({
    message: this.errmsg,
    duration: 3000,
    
  });
  toast.present();
}



}
























// {
// userBusNo;
//   constructor(private locationCompo:LocationComponent) { }

//   searchLocationOfBus(userBusNumber:Number):any{
 
// this.userBusNo=userBusNumber;
//      this.locationCompo.busLocation(this.userBusNo);
//     console.log(this.userBusNo);
//   }
// }
