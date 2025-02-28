import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  constructor(private _httpClient: HttpClient) {
    this._httpClient.get<any>('weatherforecast').subscribe((res) => {
      console.log(res);
    });
  }
}
