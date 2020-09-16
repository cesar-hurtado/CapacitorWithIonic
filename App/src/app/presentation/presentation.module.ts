import { NgModule } from '@angular/core';
import { LoginPage } from './login/login.page';
import { InformationPage } from './information/information.page';
import { PickupsListPage } from './pickups-list/pickups-list.page';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ReactiveFormsModule, IonicModule, BrowserModule],
    declarations: [
        LoginPage, InformationPage, PickupsListPage
    ],
    exports: [
        LoginPage, InformationPage, PickupsListPage
    ],
    providers: [
    ]
  })
export class PresentationModule {}