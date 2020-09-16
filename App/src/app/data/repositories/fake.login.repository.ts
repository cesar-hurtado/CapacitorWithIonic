import { LoginRepository } from 'src/app/core/repositories/login.repository';
import { Observable, from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

export class FakeLoginRepository implements LoginRepository {

    login(user: string, params: string): Observable<boolean> {
        const fakeResponse = [true];
        return from(fakeResponse).pipe(delay(1000));
    }

}