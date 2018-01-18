// @flow

import { Record } from 'immutable';
import type { RecordFactory, RecordOf } from 'immutable';

export type ItemProps = { id: string, name: string };
export type ItemType = RecordOf<ItemProps>;

const ItemFactory: RecordFactory<ItemProps> = Record({
  id: '',
  name: '',
});

export default ItemFactory;
