import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _settingsApiRoute: string = `${ApiRoutes.api}/${ApiRoutes.settings}`;
  constructor(private _http: HttpClient) {}

  public routeCheck(): Observable<any> {
    return this._http.get<any>(`${this._settingsApiRoute}/routecheck`);
  }

  public getManifest(): Observable<any> {
    return this._http.get<any>(`${this._settingsApiRoute}/manifest`);
  }
}
