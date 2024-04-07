import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReservationComponent } from './reservation/reservation.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate: [authGuard],
  },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
