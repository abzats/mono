import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AppGlobals } from "../../../../app.globals";
import {BannersService} from "../../../../services/banners.service";

@Injectable()
export class ContactService {

  token: string;

  constructor(private globals: AppGlobals, private banners: BannersService) { }

  statusMessage = {
    'success': {
      'en': 'Message was sent',
      'ru': 'Сообщение отправленно'
    },
    'fail': {
      'en': 'Message was not sent',
      'ru': 'Сообщение не отправленно'
    }
  };


  /**
   * Send message action
   * @param message
   */
  sendMessage(message: string) {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref().child("messages").child(userId).set(message)
      .then(() => {
        this.banners.showBanner(this.statusMessage['success'][this.globals['language']], true);

      })
      .catch((error) => {
        this.banners.showBanner(this.statusMessage['fail'][this.globals['language']], false);
      });
  }
}

