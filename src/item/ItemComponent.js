// @flow

import React from 'react';

import ItemSave from './ItemSaveComponent';
import ItemRemove from './ItemRemoveComponent';
import type { ItemType } from './ItemFactory';

type Props = {
  item: ItemType,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class Item extends React.Component<Props> {
  render(): ?React$Element<any> {
    return (
      <div className="item">
        <ItemSave
          id={ this.props.item.id }
          name={ this.props.item.name }
          updateItem={ this.props.updateItem } />
        <ItemRemove
          id={ this.props.item.id }
          removeItem={ this.props.removeItem } />
      </div>
    );
  }
}

export default Item;
