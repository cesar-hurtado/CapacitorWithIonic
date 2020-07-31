import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var Capacitor;
const { CountdownPlugin } = Capacitor.Plugins;

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  latitude: number;
  longitude: number;

  constructor(private menu: MenuController, private navCtrl: NavController, private routerOutlet: IonRouterOutlet, private geolocation: Geolocation, private platform: Platform) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.enableSwipeGesture(false);
  }

  ionViewWillLeave() {
    this.enableSwipeGesture(true);
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

  async openCountdown() {
    if (this.platform.is('ios')) {
      await CountdownPlugin.initCountdown({ initNumber: 10 });
    }
  }

  async goToPickupsList() {
    this.navCtrl.navigateForward('pickups-list');
  } 

  private async enableSwipeGesture(enable: boolean) {
    this.routerOutlet.swipeGesture = enable;
    this.menu.enable(!enable, 'custom');
  }

}
