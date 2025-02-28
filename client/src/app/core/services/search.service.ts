import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  searchItem(itemName: string): Observable<any> {
    return this._http.get<any>(
      `${ApiRoutes.api}/${ApiRoutes.items}?itemName=${itemName}`
    );
  }
}
