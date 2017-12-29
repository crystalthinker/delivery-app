import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app-routing.module';
import {HomeModule} from './modules/home/home.module';
import {CoreModule} from './core/core.module';
import {LoginModule} from './modules/login/login.module';
import {LoggedUserGaurd} from './core/gaurds/logged-user.gaurd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    HomeModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [LoggedUserGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
