import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  loadedFeature = 'blog';

  ngOnInit(){

    firebase.initializeApp({
      apiKey: 'AIzaSyC0qsDBU7CYJsILXKghFZT-UJJgWl2HWlI',
      authDomain: 'ng-final-app.firebaseapp.com'
    });
  }


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

