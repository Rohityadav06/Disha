import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared';

/**
 * Generated class for the WelcomeslidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcomeslides',
  templateUrl: 'welcomeslides.html',
})
export class WelcomeslidesPage {


  constructor(private sharedProvider:SharedProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeslidesPage');
  }
  slides = [
    {
      title: "Now never get late for bus!",
      description: "The <b>app provides you</b> best way to locate your bus with exact time",
      image: "assets/imgs/bus.gif",
    },
    {
      title: "How it work?",
      description: "<b>The Disha app</b> gives you high and secure location details for bus with new technology tracking system  ",
      image: "assets/imgs/bus2.gif",
    },
    {
      title: "With advance location system",
      description: "this advance tecnology</b> allows user to get highly accurate location and it make this app better than all others , so be with us ",
      image: "assets/imgs/bus3.gif",
    }
  ];

   onContinue():void{  this.sharedProvider.setPage({ "page": "tabs"});

  }
}
