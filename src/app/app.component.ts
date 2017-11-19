import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAZtP5_3_7Emxs5reUQIeTqMYLiNBCk7YE',
      authDomain: 'shopping-list-d8c53.firebaseapp.com'
    });
  }

}
