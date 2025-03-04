import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SettingsService } from './core/services/settings/settings.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  constructor(
    private _settingsService: SettingsService,
    private _router: Router
  ) {
    this._routeCheck();
    this._getManifest();
  }

  private _routeCheck(): void {
    this._settingsService
      .routeCheck()
      .pipe(
        catchError(() => {
          this._router.navigate(['/error']);
          return [];
        })
      )
      .subscribe(() => {});
  }

  private _getManifest(): void {
    this._settingsService
      .getManifest()
      .pipe(
        catchError(() => {
          this._router.navigate(['/error']);
          return [];
        })
      )
      .subscribe(() => {});
  }
}
