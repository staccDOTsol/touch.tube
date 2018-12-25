import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser,platform: Platform) {
platform.ready().then(() => {

const browser = this.iab.create('https://touch.tube', '_self');

   browser.show();
        let errorSub = browser.on('loaderror').subscribe(event => {
            console.log('loaderror', event)
})
})
  
}
}
