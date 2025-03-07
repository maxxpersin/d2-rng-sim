import { Component } from '@angular/core';
import { ItemCardComponent } from '../../shared/components/item-card/item-card.component';

@Component({
  selector: 'app-home',
  imports: [ItemCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
