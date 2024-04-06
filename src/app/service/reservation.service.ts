import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private readonly httpClient: HttpClient) {}

  makeReservation(date: any, time: any, user: any) {
    const reservationData = {
      date: date,
      time: time,
      user: user,
    };
    return this.httpClient.post(
      environment.apiReservationMake,
      reservationData
    );
  }

  getReservation(user: any) {
    const userData = { user: user };
    return this.httpClient.post(environment.apiReservationGet, userData);
  }

  cancelReservation(date: any, time: any, user: any) {
    const reservationData = {
      date: date,
      time: time,
      user: user,
    };
    return this.httpClient.put(
      environment.apiReservationCancel,
      reservationData
    );
  }
}
