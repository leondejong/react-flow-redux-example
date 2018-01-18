// @flow

import { Map } from 'immutable';

import Storage from '../app/Storage';
import ItemFactory from './ItemFactory';
import type { ItemType } from './ItemFactory';

class ItemActions {
  addItem(state: Map<string, ItemType>, action: Object): Map<string, ItemType> {
    if (!action.name) return state;
    const id: string = Storage.generateId();
    state = state.set(
      id, ItemFactory({
        id, name: action.name
      })
    );
    state = state.sortBy(item => item.name);
    return state;
  }

  updateItem(state: Map<string, ItemType>, action: Object): Map<string, ItemType> {
    state = state.setIn([action.id, 'name'], action.name);
    state = state.sortBy(item => item.name);
    return state;
  }

  removeItem(state: Map<string, ItemType>, action: Object): Map<string, ItemType> {
    state = state.delete(action.id);
    return state;
  }
}

export default new ItemActions();
