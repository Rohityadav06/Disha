import { Component } from '@angular/core';
import { SharedProvider } from '../../providers/shared';
import { HomePage } from '../../pages/home/home';


/**
 * Generated class for the UsertypepageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'usertypepage',
  templateUrl: 'usertypepage.html'
})
export class UsertypepageComponent {

  text: string;

  constructor(private shareProvider:SharedProvider) {
    console.log('Hello UsertypepageComponent Component');
    this.text = 'Hello World';
  }
onClickPassenger(){
  this.shareProvider.setPage({"page":"homePage"})
}
 
onClickBusDriver(){
  //for bus driver app
  this.shareProvider.setPage({"page":"busDriverPage"})
}

}
