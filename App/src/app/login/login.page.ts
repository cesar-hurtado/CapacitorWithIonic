import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { TimerPlugin } from 'src/providers/timer.capacitor.plugin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(private loadingController: LoadingController, private navCtrl: NavController, private platform: Platform) { }

  ngOnInit() {
    this.createForm();
  }

  async login() {
    if (this.platform.is('ios')) {
      const plugin = new TimerPlugin();
      plugin.echo('Hola');
    }
    await this.presentLoading();
    this.navCtrl.navigateForward('/information');
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  private createForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    })
  }

  private async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();
    await loading.onDidDismiss();
  }

}
