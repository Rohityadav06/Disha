import { Component } from '@angular/core';

/**
 * Generated class for the CreateIdpageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'create-idpage',
  templateUrl: 'create-idpage.html'
})
export class CreateIdpageComponent {

  text: string;

  constructor() {
    console.log('Hello CreateIdpageComponent Component');
    this.text = 'Hello World';
  }

}
