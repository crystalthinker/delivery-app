import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app-routing.module';
import {HomeModule} from './modules/home/home.module';
import {CoreModule} from './core/core.module';
import {LoginModule} from './modules/login/login.module';
import {LoggedUserGuard} from './core/guards/logged-user.guard';
import {RoleGuard} from './core/guards/role.guard';
import {DeliveryboyRoleGuard} from './core/guards/deliveryboy-role.guard';

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
  providers: [LoggedUserGuard, RoleGuard, DeliveryboyRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
