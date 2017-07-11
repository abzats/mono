import { Component } from '@angular/core';
import {LanguageService} from "../../../../services/language.service";
import {AppGlobals} from "../../../../app.globals";

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent {

  constructor(private languageService: LanguageService, public globals: AppGlobals) { }

  /**
   * Change language on click
   * @param value
   */
  switchLanguage(value: string) {
    this.languageService.switchLanguage(value);
  }

}
