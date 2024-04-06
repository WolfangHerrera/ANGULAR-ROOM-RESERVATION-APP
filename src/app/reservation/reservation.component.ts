import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';

interface Reservation {
  date: string;
  id: string;
  status: string;
  time: string;
  user: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  user = '';
  dataUserReservation: Reservation[] = [];
  dataReservations = [];
  constructor(private readonly request: ReservationService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user') || '';
    if (this.user) {
      this.request.getReservation(this.user).subscribe((data: any) => {
        this.dataUserReservation = data[0];
        this.dataReservations = data[1];
      });
    }
  }
}
