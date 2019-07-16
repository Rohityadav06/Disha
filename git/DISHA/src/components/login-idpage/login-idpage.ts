import { Component } from '@angular/core';

/**
 * Generated class for the LoginIdpageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-idpage',
  templateUrl: 'login-idpage.html'
})
export class LoginIdpageComponent {

  text: string;

  constructor() {
    console.log('Hello LoginIdpageComponent Component');
    this.text = 'Hello World';
  }

}
