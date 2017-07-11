import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private contactService: ContactService ) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'message': new FormControl(null, [Validators.required])
    });
  }

  /**
   * Onsubmit form action
   */
  onSubmit() {
    if (this.contactForm.valid) {
      const message = this.contactForm.get('message').value;
      this.contactService.sendMessage(message);
      this.contactForm.reset();
    }
  }
}
