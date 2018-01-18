// @flow

import React from 'react';

import { Map } from 'immutable';

import ListItems from './ListItemsComponent';
import ItemSave from '../item/ItemSaveComponent';
import type { ItemType } from '../item/ItemFactory';

import './list.css';

type Props = {
  items: Map<string, ItemType>,
  addItem: (name: string) => void,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class List extends React.Component<Props> {
  render(): ?React$Element<any> {
    return (
      <section className="list">
        <ListItems
          items={ this.props.items }
          updateItem={ this.props.updateItem }
          removeItem={ this.props.removeItem } />
        <ItemSave
          addItem={ this.props.addItem } />
      </section>
    );
  }
}

export default List;
