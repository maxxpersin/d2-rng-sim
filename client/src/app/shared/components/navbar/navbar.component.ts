import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../../core/services/search.service';

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

  constructor(private _searchService: SearchService) {}

  search(): void {
    this._searchService
      .searchItem(this.itemSearchForm.controls['itemName'].value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
