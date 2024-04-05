import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  userForm: FormGroup = new FormGroup({});
  user: string = '';
  password: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private readonly request: UserService
  ) {
    this.userForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      passwordUser: ['', Validators.required],
    });
  }

  onSubmitLogin() {
    this.user = this.userForm.value.user;
    this.password = this.userForm.value.passwordUser;
    if (this.user && this.password) {
      this.request.loginUser(this.user, this.password).subscribe((data) => {
        console.log(data);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please make sure you enter both your email and password!',
      });
    }
  }

  onSubmitRegister() {
    this.user = this.userForm.value.user;
    this.password = this.userForm.value.passwordUser;
    if (this.user && this.password) {
      console.log('HOLA');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please make sure you enter both your email and password!',
      });
    }
  }
}
