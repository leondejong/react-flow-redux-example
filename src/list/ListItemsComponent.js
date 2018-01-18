// @flow

import React from 'react';

import { Map } from 'immutable';

import Item from '../item/ItemComponent';
import type { ItemType } from '../item/ItemFactory';

type Props = {
  items: Map<string, ItemType>,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class ListItems extends React.Component<Props> {
  render(): ?React$Element<any> {
    return (
      <ul className="list__items">{
        [...this.props.items.values()].map((item) =>
          <li className="list__item" key={ item.id }>
            <Item
              item={ item }
              updateItem={ this.props.updateItem }
              removeItem={ this.props.removeItem } />
          </li>
        )
      }</ul>
    );
  }
}

export default ListItems;
