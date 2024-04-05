import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { tap, timer } from 'rxjs';

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
    private readonly formBuilder: FormBuilder,
    private readonly request: UserService,
    private readonly router: Router
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
      this.request
        .loginUser(this.user, this.password)
        .subscribe((data: any) => {
          if (data && data.status) {
            this.router.navigate(['/reservation']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'OOPS...',
              text: 'VERIFY IF THE USERNAME AND PASSWORD ARE CORRECT.',
            });
          }
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'OOPS...',
        text: 'PLEASE MAKE SURE YOU ENTER BOTH YOUR EMAIL AND PASSWORD!',
      });
    }
  }

  onSubmitRegister() {
    this.user = this.userForm.value.user;
    this.password = this.userForm.value.passwordUser;
    if (this.user && this.password) {
      this.request
        .registerUser(this.user, this.password)
        .subscribe((data: any) => {
          if (data) {
            if (data.status) {
              Swal.fire({
                title: 'GOOD JOB!',
                text: 'YOU HAVE REGISTERED SUCCESSFULLY.',
                icon: 'success',
                timer: 3000,
              });
              timer(3000).subscribe(() => {
                this.router.navigate(['/reservation']);
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'OOPS...',
                text: 'VERIFY IF THE USERNAME AND PASSWORD ARE CORRECT.',
              });
            }
          }
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'OOPS...',
        text: 'PLEASE MAKE SURE YOU ENTER BOTH YOUR EMAIL AND PASSWORD!',
      });
    }
  }
}
