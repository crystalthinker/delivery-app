import {Routes} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {LoggedUserGuard} from './core/guards/logged-user.guard';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoggedUserGuard]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
