import { DestinyInventoryItemDefinition } from '../shared/models';

export interface Gear {
  gearList: DestinyInventoryItemDefinition[];
  currentGear: DestinyInventoryItemDefinition;
}

export interface AppState {
  gear: Gear;
}
