import { Component, OnInit, Signal, effect } from '@angular/core';
import { DestinyInventoryItemDefinition } from '../../models';
import { GearService } from '../../../core/services/gear/gear.service';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { selectCurrentGear } from '../../../store/selectors/gear.selectors';

@Component({
  selector: 'app-item-card',
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent implements OnInit {
  itemSignal: Signal<DestinyInventoryItemDefinition>;

  constructor(
    private _store: Store<AppState>,
    private _gearService: GearService
  ) {
    effect(() => {
      if (!this.itemSignal()?.perks) {
        return;
      }
      this._gearService
        .getPerks(this.itemSignal().index, this.itemSignal().perks[0].perkHash)
        .subscribe((res) => {
          console.log(res);
        });
    });
  }

  ngOnInit(): void {
    this._getCurrentItem();
  }

  private _getCurrentItem(): void {
    this.itemSignal = this._store.selectSignal(selectCurrentGear);
  }
}
