import { Injectable } from '@angular/core';
import { AppGlobals } from "../app.globals";

@Injectable()
export class BannersService {

  constructor(private globals: AppGlobals) { }

  /**
   * Show banner message
   */
  showBanner(message, status: boolean) {
    if ('undefined' !== typeof message && '' !== message) {
      this.globals['bannerStatus'] = status;
      this.globals['bannerMessage'] = message;
      setTimeout(() => {
        this.globals['bannerMessage'] = '';
      }, 3000);
    }
  }
}
