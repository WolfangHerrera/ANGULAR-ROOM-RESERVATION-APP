import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { format, addDays } from 'date-fns';
import Swal from 'sweetalert2';

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
  isHandleSelectionEnabled = true;
  selectedValue: string | any;
  hoursRange: number[] = Array.from(
    { length: 22 - 6 },
    (_, index) => index + 6
  );
  isLoading = false;
  user = '';
  dataUserReservation: Reservation[] = [];
  dataReservationsTomorrow: Reservation[] = [];
  dataReservationsAfterTomorrow: Reservation[] = [];
  tomorrow = new Date();
  tomorrowFormatted: any;
  dayAfterTomorrow = new Date();
  dayAfterTomorrowFormatted: any;
  constructor(private readonly request: ReservationService) {
    this.tomorrow = addDays(new Date(), 1);
    this.tomorrowFormatted = format(
      this.tomorrow,
      'MMMM d, yyyy'
    ).toUpperCase();
    this.dayAfterTomorrow = addDays(new Date(), 2);
    this.dayAfterTomorrowFormatted = format(
      this.dayAfterTomorrow,
      'MMMM d, yyyy'
    ).toUpperCase();
    this.user = localStorage.getItem('user') || '';
    if (this.user) {
      this.request.getReservation(this.user).subscribe((data: any) => {
        this.dataUserReservation = data[0];
        this.dataReservationsTomorrow = data[1];
        this.dataReservationsAfterTomorrow = data[2];
        this.isLoading = true;
      });
    }
  }

  ngOnInit(): void {
    this.selectedValue = this.tomorrowFormatted;
  }

  cancelReservation(itemReservation: Reservation) {
    Swal.fire({
      title: 'ARE YOU SURE?',
      text: "YOU WON'T BE ABLE TO REVER THIS!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'YES, CANCEL IT!',
      cancelButtonText: "NO, I'M NOT",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'CANCELED!',
          text: 'YOUR RESERVATION HAS BEEN DELETED.',
          icon: 'success',
        });
        this.request
          .cancelReservation(
            itemReservation.date,
            itemReservation.time,
            this.user
          )
          .subscribe(() => {
            window.location.reload();
          });
      }
    });
  }

  handleSelectionChange(event: any) {
    this.selectedValue = event.target.value;
  }

  isHourReserved(hour: number): boolean {
    if (this.selectedValue === this.tomorrowFormatted) {
      return this.dataReservationsTomorrow.some(
        (item) => parseInt(item.time) === hour
      );
    } else {
      return this.dataReservationsAfterTomorrow.some(
        (item) => parseInt(item.time) === hour
      );
    }
  }
}
