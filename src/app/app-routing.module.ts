import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'reservation', component: ReservationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
