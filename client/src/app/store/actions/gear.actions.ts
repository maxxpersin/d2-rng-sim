import { createAction, props } from '@ngrx/store';

export const LoadGear = createAction('[Gear] Load Gear');

export const AddGear = createAction('[Gear] Add Gear', props<{ gear: any }>());

export const RemoveGear = createAction(
  '[Gear] Remove Gear',
  props<{ gearId: number }>()
);

export const SetCurrentGear = createAction(
  '[Gear] Set Current Gear',
  props<{ gear: any }>()
);
