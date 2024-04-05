import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  registerUser(user: any, password: any) {
    const userData = {
      user: user,
      password: password,
    };
    return this.httpClient.post(environment.apiUserRegiser, userData);
  }

  loginUser(user: any, password: any) {
    const userData = {
      user: user,
      password: password,
    };
    return this.httpClient.post(environment.apiUserLogin, userData);
  }

  validateSession(userData: any) {
    return this.httpClient.post(environment.apiUserValidate, userData);
  }
}
