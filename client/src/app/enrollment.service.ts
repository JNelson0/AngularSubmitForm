import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class EnrollmentService {
    url = 'http://localhost:8080/enroll';
    constructor(private http: HttpClient) {}
    enroll(user: FormGroup) {
        return this.http
            .post<any>(this.url, user)
            .pipe(catchError(this.handleError));
    }
    handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}
