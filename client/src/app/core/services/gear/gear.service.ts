import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../../shared/enums';
import { DestinyInventoryItemDefinition } from '../../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class GearService {
  private _gearApiRoute: string = `${ApiRoutes.api}/${ApiRoutes.gear}`;

  constructor(private _http: HttpClient) {}

  searchItem(itemName: string): Observable<any> {
    return this._http.get<DestinyInventoryItemDefinition>(
      `${this._gearApiRoute}?itemName=${itemName}`
    );
  }

  getPerks(index: number, perkHash: number): Observable<any> {
    return this._http.get<any>(
      `${this._gearApiRoute}/${index}/perks/${perkHash}`
    );
  }
}
