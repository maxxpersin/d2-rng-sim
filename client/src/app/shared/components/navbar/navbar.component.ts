import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GearService } from '../../../core/services/gear/gear.service';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  itemSearchForm: FormGroup = new FormGroup({
    itemName: new FormControl(''),
  });

  constructor(private _gearService: GearService) {}

  search(): void {
    this._gearService
      .searchItem(this.itemSearchForm.controls['itemName'].value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
