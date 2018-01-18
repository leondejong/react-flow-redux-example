// @flow

import { fromJS, Map } from 'immutable';

import ItemFactory from '../item/ItemFactory';
import type { ItemType } from '../item/ItemFactory';

const listKey: string = 'item-list';

class Storage {
  static getList(): Map<string, ItemType> {
    let data: Object = JSON.parse(String(localStorage.getItem(listKey)));
    let state: Map<string, ItemType> = fromJS(data, (key, value) => {
      return key === '' ? value.toMap() : ItemFactory(value);
    });
    return state ? state.sortBy(item => item.name) : Map();
  }

  static setList(items: Map<string, ItemType>): void {
    localStorage.setItem(listKey, JSON.stringify(items.toJS()));
  }

  static removeList(): void {
    localStorage.removeItem(listKey);
  }

  static generateId(): string {
    return Math.random().toString(36).substr(2, 8);
  }
}

export default Storage;
