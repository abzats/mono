import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AppGlobals } from "./app.globals";
import { AuthService } from "./components/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config = {
    apiKey: "AIzaSyCeLQzExYnRpqPbckJT_FV7G0vtmQtJXGc",
    authDomain: "mono-app-aa73a.firebaseapp.com",
    databaseURL: "https://mono-app-aa73a.firebaseio.com",
    projectId: "mono-app-aa73a",
    storageBucket: "mono-app-aa73a.appspot.com",
    messagingSenderId: "696704163240"
  };

  constructor (public globals: AppGlobals, private authServise: AuthService) {}

  ngOnInit () {
    firebase.initializeApp(this.config);
    this.authServise.isAuthenticated();
  }
}
