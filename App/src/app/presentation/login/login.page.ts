import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { TimerPlugin } from 'src/providers/timer.capacitor.plugin';
import { LoginUsecase } from 'src/app/core/usecases/login.usecase';
import { LoginRequestEntity } from 'src/app/core/entities/login-request.entity';
import { WrongParamsException } from 'src/app/core/exceptions/wrong-param.exception';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  passwordType = 'password';
  passwordIcon = 'eye-off';
  loading: HTMLIonLoadingElement

  constructor(private loadingController: LoadingController, private navCtrl: NavController, private platform: Platform, private loginUseCase: LoginUsecase) { }

  ngOnInit() {
    this.createLoading();
    this.createForm();
  }

  async login() {
    const formValue = this.form.value;
    const params = new LoginRequestEntity(formValue.email, formValue.password);
    if (this.platform.is('ios')) {
      const plugin = new TimerPlugin();
      plugin.echo('Hola');
    }
    await this.presentLoading();
    this.loginUseCase.execute(params).subscribe(async (value: boolean) => {
      console.log('value', value);
      await this.closeLoading();
      this.navCtrl.navigateForward('/information');
    }, async (error) => {
      console.log(error);
      await this.closeLoading();
    });
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  private async createLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
  }

  private createForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    })
  }

  private async presentLoading() {
    await this.loading.present();
  }

  private async closeLoading() {
    await this.loading.dismiss();
  }

}
