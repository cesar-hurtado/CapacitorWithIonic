import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, IonRouterOutlet } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  latitude: number;
  longitude: number;

  constructor(private menu: MenuController, private navCtrl: NavController, private routerOutlet: IonRouterOutlet, private geolocation: Geolocation) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.routerOutlet.swipeGesture = false;
    this.menu.enable(true, 'custom');
  }

  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
    this.menu.enable(false, 'custom');
  }

  openMenu() {
    this.menu.open('custom');
  }

  async goToLogin() {
    this.navCtrl.navigateBack('login');
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log('Coords', resp.coords);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
