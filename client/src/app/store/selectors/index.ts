import { createSelector } from '@ngrx/store';

export interface Gear {
  allGear: any[];
  currentGear: any;
}

export interface AppState {
  gear: Gear;
}

export const selectGear = (state: AppState) => state.gear;
export const selectCurrentGear = createSelector(
  selectGear,
  (state: Gear) => state.currentGear
);
