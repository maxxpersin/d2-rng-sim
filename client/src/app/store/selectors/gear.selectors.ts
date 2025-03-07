import { AppState } from '../app.state';

export const selectGearList = (state: AppState) => state.gear.gearList;

export const selectCurrentGear = (state: AppState) => state.gear.currentGear;
