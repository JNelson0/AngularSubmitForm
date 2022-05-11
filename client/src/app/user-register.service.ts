import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
    providedIn: 'root',
})
export class UserRegisterService {
    url = 'http://localhost:8080';

    constructor(private http: HttpClient) {}
    register(user: FormGroup) {
        return this.http
            .post<any>(`${this.url}/user`, user)
            .pipe(catchError((error) => this.handleError(error)));
    }

    getUsers() {
        return this.http
            .get(`${this.url}/users`)
            .pipe(catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError(() => error);
    }
}
