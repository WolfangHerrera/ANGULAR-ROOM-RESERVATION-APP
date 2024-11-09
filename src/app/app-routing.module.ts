import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { ReservationComponent } from './core/reservation/reservation.component';
import { UserComponent } from './core/user/user.component';

const routes: Routes = [
  {
    path: 'reservation',
    component: ReservationComponent,
    // canActivate: [authGuard],
  },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'reservation', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
