import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { GearService } from '../../../core/services/gear/gear.service';
import { AddGear, SetCurrentGear } from '../../../store/actions/gear.actions';
@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  itemSearchForm: FormGroup = new FormGroup({
    itemName: new FormControl('', Validators.required),
  });

  constructor(private _store: Store, private _gearService: GearService) {}

  search(): void {
    if (this.itemSearchForm.invalid) {
      return;
    }

    this._gearService
      .searchItem(this.itemSearchForm.controls['itemName'].value)
      .subscribe((res) => {
        this._store.dispatch(AddGear({ gear: res }));
      });
  }
}
