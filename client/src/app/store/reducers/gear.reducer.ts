import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface State {
  allGear: any[];
  currentGear: any;
}

export const initialState: State = {
  allGear: [],
  currentGear: null,
};

export const reducer = createReducer(
  initialState,
  on(actions.setCurrentItem, (state, item) => ({
    currentGear: item,
    allGear: [...state.allGear, item],
  }))
);
