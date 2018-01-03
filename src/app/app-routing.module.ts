import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
