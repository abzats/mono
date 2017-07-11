import { Component, OnInit } from '@angular/core';
import { AppGlobals } from "../../app.globals";

@Component({
  selector: 'app-home',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor(public globals: AppGlobals ) {}

  ngOnInit() {
    this.globals['form'] = 'in';
  }

}
