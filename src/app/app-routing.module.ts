import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'reservation',
        component: ReservationComponent,
      },
      { path: 'user', component: UserComponent },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      {
        path: '**',
        redirectTo: 'user',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
