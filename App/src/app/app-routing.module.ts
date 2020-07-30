import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { InformationPage } from './information/information.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'information',
    component: InformationPage
  },
  {
    path: 'login',
    component: LoginPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
