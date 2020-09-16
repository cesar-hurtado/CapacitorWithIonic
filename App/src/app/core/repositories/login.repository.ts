import { Observable } from 'rxjs';

export abstract class LoginRepository {
    abstract login(user: string, params: string): Observable<boolean>;
  }