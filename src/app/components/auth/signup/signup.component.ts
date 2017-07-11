import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import {AppGlobals} from "../../../app.globals";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  genders = [
    {'type': 'male',
      'trans': 'home.form.gender.male'
    },
    {
      'type': 'female',
      'trans': 'home.form.gender.female'
    }];
  preferences = [
    {
      'type': 'mac',
      'trans': 'Mac'
    },
    {
      'type': 'pc',
      'trans': 'PC'
    }];

  signupForm: FormGroup;
  addAdditionalInfo: boolean = false;
  submitAttempt = false;

  constructor(private authServise: AuthService, private globals: AppGlobals) {}


  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null,
        [
          Validators.required,
          Validators.min(3),
          Validators.max(10),
          Validators.pattern(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/)
        ]),
      'email': new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ]),
      'password': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(/[A-Za-z\d]{6,10}/)
        ]),
      'gender': new FormControl('male'),
      'preferences': new FormGroup({
        'mac': new FormControl(false),
        'pc': new FormControl(false, this.isBadPreferences),
      }),
      'info': new FormControl()
    });
  }

  /**
   * Onsubmit form action
   */
  onSubmit() {
    this.submitAttempt = true;

    if (this.signupForm.valid) {
      const email = this.signupForm.get('email').value;
      const password = this.signupForm.get('password').value;
      const data = {
        'username': this.signupForm.get('username').value,
        'email': this.signupForm.get('email').value,
        'gender': this.signupForm.get('gender').value,
        'preferences': {
          'mac': this.signupForm.get('preferences.mac').value,
          'pc': this.signupForm.get('preferences.pc').value,
        },
        'info': this.signupForm.get('info').value
      };

      this.authServise.signUpUser(email, password, data);
    }
  }

  /**
   * Show a textarea field on click
   */
  addAdditionalInfoAction() {
    //this.signupForm['info'] = new FormControl();
    this.addAdditionalInfo = true;
  }

  /**
   * Show error if 'PC' was checked
   * @param control
   * @returns {any}
   */
  isBadPreferences(control: FormControl): {[s: string]: boolean} {
    if (control.value !== false) {
      return {'isBadPreferences': true};
    }
    return null;
  }

  /**
   * Switch forms
   */
  switchForm() {
    this.globals['form'] = 'in';
  }
}
