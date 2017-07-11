import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { AppGlobals } from "../../../app.globals";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  submitAttempt = false;

  constructor(private authServise: AuthService, private globals: AppGlobals) {}


  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(
        null,
        [
          Validators.required,
          Validators.email,
          Validators.min(5)
        ]),
      'password': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(/[A-Za-z\d]{6,10}/)
        ])
    });
  }

  /**
   * Onsubmit form action
   */
  onSubmit() {
    this.submitAttempt = true;

    if (this.signinForm.valid) {
      const email = this.signinForm.get('email').value;
      const password = this.signinForm.get('password').value;
      this.authServise.signInUser(email, password);
    }
  }

  /**
   * Switch forms
   */
  switchForm() {
    this.globals['form'] = 'up';
  }
}
