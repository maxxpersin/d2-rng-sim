import { createAction, props } from '@ngrx/store';

export const getCurrentItem = createAction('[Gear] Get Current Item');

export const setCurrentItem = createAction(
  '[Gear] Set Current Item',
  props<{ item: any }>()
);
