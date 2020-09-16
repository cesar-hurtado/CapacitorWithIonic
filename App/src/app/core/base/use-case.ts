import { Observable } from 'rxjs';

export interface UseCase<Parameters, Response> {
    execute(params: Parameters): Observable<Response>;
}