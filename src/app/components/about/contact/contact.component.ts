import { Component } from '@angular/core';
import { AppGlobals } from "../../../app.globals";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(public globals: AppGlobals) { }

}
