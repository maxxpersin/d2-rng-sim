import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SettingsService } from './core/services/settings/settings.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  constructor(private _settingsService: SettingsService) {
    this._routeCheck();
    this._getManifest();
  }

  private _routeCheck(): void {
    this._settingsService.routeCheck().subscribe((res) => {
      console.log(res);
    });
  }

  private _getManifest(): void {
    this._settingsService.getManifest().subscribe((res) => {
      console.log(res);
    });
  }
}
