// @flow

import { Map } from 'immutable';

import Storage from '../app/Storage';
import ItemActions from './ItemActions';
import ItemActionTypes from './ItemActionTypes';
import type { ItemType } from './ItemFactory';

const itemReducer = (state: Map<string, ItemType> = Storage.getList(), action: Object): Map<string, ItemType> => {
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM:
      return ItemActions.addItem(state, action);
    case ItemActionTypes.UPDATE_ITEM:
      return ItemActions.updateItem(state, action);
    case ItemActionTypes.REMOVE_ITEM:
      return ItemActions.removeItem(state, action);
    default:
      return state;
  }
}

export default itemReducer;
