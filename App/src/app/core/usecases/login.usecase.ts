import { UseCase } from '../base/use-case';
import { Observable, throwError } from 'rxjs';
import { LoginRepository } from '../repositories/login.repository';
import { LoginRequestEntity } from '../entities/login-request.entity';
import { WrongParamsException } from '../exceptions/wrong-param.exception';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginUsecase implements UseCase<LoginRequestEntity, boolean> {
    constructor(private loginRepository: LoginRepository) { }

    execute(params: LoginRequestEntity): Observable<boolean> {
        if (!params.user || params.password === '1234') {
            return throwError(new WrongParamsException())
        } else {
            return this.loginRepository.login(params.user, params.password);
        }

    }
}