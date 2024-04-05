import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private readonly httpClient: HttpClient) {}

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
