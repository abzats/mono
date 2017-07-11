import { Component, OnInit } from '@angular/core';
import { routes } from "../../../app.module";
import { LanguageService } from "../../../services/language.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  routes = routes;

  constructor (private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.init();
  }
}
