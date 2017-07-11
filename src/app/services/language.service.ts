import { Injectable } from "@angular/core";
import { AppGlobals } from "../app.globals";
import { CookieService } from "ngx-cookie";

@Injectable ()
export class LanguageService {
  constructor (private cookies: CookieService, private globals: AppGlobals) { }

  currentLanguage: string;

  /**
   * Init function
   */
  init() {
    this.currentLanguage = this.get() || 'en';
    this.globals['language'] = this.currentLanguage;
  }

  /**
   * Switch language varriable
   * @param value
   */
  switchLanguage(value: string) {
    this.currentLanguage = value;
    this.globals['language'] = this.currentLanguage;
    this.put(value);
  }

  /**
   * Get 'Language' cookie
   * @returns {string}
   */
  get() {
    let currentLanguage = this.cookies.get('mono_l');
    return currentLanguage;
  }

  /**
   * Set 'Language' cookie
   * @param value
   */
  put(value: string) {
    this.cookies.put('mono_l', value, 365);
  }

}
