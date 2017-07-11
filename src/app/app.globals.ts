import { Injectable } from "@angular/core";
@Injectable()
export class AppGlobals {
  isUser: boolean = false;
  form: string = '';
  bannerMessage: string = '';
  bannerStatus: boolean = false;
  language = 'en';
}
