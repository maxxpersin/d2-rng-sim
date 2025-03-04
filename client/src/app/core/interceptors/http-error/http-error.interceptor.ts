import {
  HttpErrorResponse,
  HttpEventType,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastrService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status > 299) {
        toastService.error(error.statusText, error.status.toString());
      }
      return throwError(() => new Error(error.message));
    })
  );
};
