import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { BannersService } from "../../services/banners.service";
import { AppGlobals } from "../../app.globals";

@Injectable()
export class AuthService {

  token: string;

  constructor(private banner: BannersService, private globals: AppGlobals, private router: Router) { }

  message = {
    'up': {
      'en': 'Succesfull registred',
      'ru': 'Успешная регистрация'
    },
    'in': {
      'en': 'Succesfull logged in',
      'ru': 'Успешный вход'
    }
  };

  /**
   * Signin action
   * @param email
   * @param password
   * @param data
   */
  signUpUser(email: string, password: string, data: object) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        firebase.database().ref().child("user")
          .child(user.uid)
          .set(data);
        this.banner.showBanner(this.message['up'][this.globals['language']], true);
        this.getToken();
        this.router.navigate(['about']);
      })
      .catch(
        (error) => this.banner.showBanner(error, false)
      );
  }

  /**
   * Signup action
   * @param email
   * @param password
   */
  signInUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          this.banner.showBanner(this.message['in'][this.globals['language']], true);
          this.getToken();
          this.router.navigate(['about']);
        },
        (error) => {
          this.banner.showBanner(error, false);
        }
      )
      .catch (
        (error) => this.banner.showBanner(error, false)
      );
  }

  /**
   * Logout action
   */
  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.globals['isUser'] = false;
  }

  /**
   * Get tokken
   * @returns {string}
   */
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  /**
   * Check if you are logged in
   * @returns {boolean}
   */
  isAuthenticated() {
    if (this.token != null) {
      this.globals['isUser'] = true;
    } else {
      firebase.auth().onAuthStateChanged((user) => {
        if (null !== user) {
          this.globals['isUser'] = true;
        } else {
          this.globals['isUser'] = false;
        }
      });
    }
  }
}
