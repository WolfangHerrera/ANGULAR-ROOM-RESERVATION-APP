import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  registerUser(userData: any) {
    return this.httpClient.post(environment.apiUserRegiser, userData);
  }

  loginUser(userData: any) {
    return this.httpClient.post(environment.apiUserLogin, userData);
  }

  validateSession(userData: any) {
    return this.httpClient.post(environment.apiUserValidate, userData);
  }

  makeReservation(reservationData: any) {
    return this.httpClient.post(
      environment.apiReservationMake,
      reservationData
    );
  }

  getReservation(reservationData: any) {
    return this.httpClient.post(environment.apiReservationGet, reservationData);
  }

  cancelReservation(reservationData: any) {
    return this.httpClient.post(
      environment.apiReservationCancel,
      reservationData
    );
  }
}
