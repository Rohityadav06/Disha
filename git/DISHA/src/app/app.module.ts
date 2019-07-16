import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomeslidesPage } from '../pages/welcomeslides/welcomeslides';
import { Geolocation } from '@ionic-native/geolocation';
import { SharedProvider } from '../providers/shared';
import { LocationProvider } from '../providers/location/location';
import { LocationComponent } from '../components/location/location';
import { UsertypepageComponent } from '../components/usertypepage/usertypepage';
import { HttpModule } from '@angular/http';
import { BuslocationupdateProvider } from '../providers/buslocationupdate/buslocationupdate';
import { HttpClientModule } from '@angular/common/http';
import { Toast } from '@ionic-native/toast/ngx';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomeslidesPage,
    LocationComponent,
    UsertypepageComponent
    
  
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule ,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomeslidesPage,
    LocationComponent,
    UsertypepageComponent,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    SharedProvider,
    LocationProvider,
    Toast
,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BuslocationupdateProvider,
    
  ]
})
export class AppModule {}
