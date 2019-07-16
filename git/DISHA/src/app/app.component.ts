import { Component,ViewChild} from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Tabs, Nav, Platform,  } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomeslidesPage } from '../pages/welcomeslides/welcomeslides';
import { SharedProvider } from '../providers/shared';
import { HomePage } from '../pages/home/home';
import { Subject } from 'rxjs/Subject';
import { UsertypepageComponent } from '../components/usertypepage/usertypepage';
import { ContactPage } from '../pages/contact/contact';
import { LocationComponent } from '../components/location/location';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = UsertypepageComponent;
   pages: Array<{title: string, component: any}>;
   destroyed = new Subject();


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sharedProvider: SharedProvider)
   {

    this.pages = [
      { title: 'Home', component: HomePage }];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.sharedProvider.getPage().takeUntil(this.destroyed).subscribe(data => {
      this.pageNavigate(data);
    });
  }
  

  pageNavigate(data){
  
    if(data.page == "tabs"){
    this.nav.setRoot(TabsPage);
     }
     else if(data.page == "homePage"){
this.nav.setRoot(HomePage);
     }
     else if(data.page == "busDriverPage"){
      this.nav.setRoot(ContactPage);
           }
  }



   

  }



 


