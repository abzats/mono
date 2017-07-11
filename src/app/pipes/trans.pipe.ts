import { Pipe, PipeTransform } from "@angular/core";
import { AppGlobals } from "../app.globals";
import * as data from '../translations';

/**
 * Translations pipe
 */

@Pipe({
  name: 'trans',
  pure: false
})
export class TransPipe implements PipeTransform {
  translations = data.translations;

  constructor (private globals: AppGlobals) {}

  transform(value: any): any {
    if (!value) return value;

    let currentLanguage = this.globals['language'];
    let result;

    if (this.displayKeys()) {
      result = value;
    } else {
      if ('string' === typeof value) {
        if (this.translations[value]) {
          result = this.translations[value][currentLanguage];
        } else {
          result = value;
        }
      } else if ('object' === typeof value)  {
        result = value[currentLanguage] || value;
      }
    }
    return result;
  }

  /**
   * Display trans_keys initial variable
   * @returns {boolean}
   */
  displayKeys() {
    let params = new URLSearchParams(window.location.search);
    return params.has('display_keys');
  }
}
