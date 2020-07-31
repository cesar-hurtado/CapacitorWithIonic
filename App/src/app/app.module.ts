import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './login/login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { InformationPage } from './information/information.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PickupsListPage } from './pickups-list/pickups-list.page';

@NgModule({
  declarations: [AppComponent, LoginPage, InformationPage, PickupsListPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(
    {mode:'ios'}
  ), AppRoutingModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
