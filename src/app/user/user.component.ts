import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userForm: FormGroup = new FormGroup({});
  email: string = '';
  password: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      emailUser: ['', [Validators.required, Validators.email]],
      passwordUser: ['', Validators.required],
    });
  }

  onSubmit() {
    this.email = this.userForm.value.emailUser;
    this.password = this.userForm.value.passwordUser;
  }
}
