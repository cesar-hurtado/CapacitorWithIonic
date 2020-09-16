import { LoginRepository } from './core/repositories/login.repository';
import { FakeLoginRepository } from './data/repositories/fake.login.repository';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [
        { provide: LoginRepository, useClass: FakeLoginRepository },
    ],
})
export class ConfigModule { }