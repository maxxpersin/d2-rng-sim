import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { AppState, selectCurrentGear } from '../../store/selectors';
import { getCurrentItem } from '../../store/actions';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._getCurrentItem();
  }

  private _getCurrentItem(): void {
    // TODO fix this shit

    this._store.select(getCurrentItem).subscribe((gear) => {
      console.log(gear);
    });
    // this._store
    //   .pipe(
    //     map((state: AppState) => selectCurrentGear(state)),
    //     filter((gear) => gear?.currentGear !== null)
    //   )
    //   .subscribe((gear) => {
    //     console.log(gear);
    //   });
  }
}
