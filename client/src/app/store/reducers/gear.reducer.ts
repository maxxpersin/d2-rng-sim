import { createReducer, on } from '@ngrx/store';
import {
  LoadGear,
  AddGear,
  RemoveGear,
  SetCurrentGear,
} from '../actions/gear.actions';
import { Gear } from '../app.state';

export const initialState: Gear = {
  gearList: [],
  currentGear: null,
};

export const gearReducer = createReducer(
  initialState,
  on(LoadGear, (state) => ({
    ...state,
  })),
  on(AddGear, (state, { gear }) => ({
    ...state,
    gearList: [...state.gearList, gear],
    currentGear: gear,
  })),
  on(RemoveGear, (state, { gearId }) => ({
    ...state,
    gearList: state.gearList.filter((gear: any) => gear.id !== gearId),
  })),
  on(SetCurrentGear, (state, { gear }) => ({
    ...state,
    currentGear: gear,
  }))
);
