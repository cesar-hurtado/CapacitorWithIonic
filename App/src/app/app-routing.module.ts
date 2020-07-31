import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { InformationPage } from './information/information.page';
import { PickupsListPage } from './pickups-list/pickups-list.page';

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
  },
  {
    path: 'pickups-list',
    component: PickupsListPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
