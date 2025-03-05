import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class GearService {
  private _gearApiRoute: string = `${ApiRoutes.api}/${ApiRoutes.gear}`;

  constructor(private _http: HttpClient) {}

  searchItem(itemName: string): Observable<any> {
    return this._http.get<any>(`${this._gearApiRoute}?itemName=${itemName}`);
  }
}
