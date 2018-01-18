// @flow

import Storage from '../app/Storage';
import ItemActionTypes from './ItemActionTypes';

export const addItem = (name: string): Object => {
  return {
    type: ItemActionTypes.ADD_ITEM,
    id: Storage.generateId(),
    name,
  }
}

export const updateItem = (id: string, name: string): Object => {
  return {
    type: ItemActionTypes.UPDATE_ITEM,
    id,
    name,
  }
}

export const removeItem = (id: string): Object => {
  return {
    type: ItemActionTypes.REMOVE_ITEM,
    id,
  }
}
