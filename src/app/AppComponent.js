// @flow

import React from 'react';
import { Store, createStore, Unsubscribe } from 'redux';
import { Provider } from 'react-redux';

import { Map } from 'immutable';

import Storage from './Storage';
import rootReducer from './Reducers';
import Layout from '../layout/LayoutComponent';
import type { ItemType } from '../item/ItemFactory';

type Props = {
  items: Map<string, ItemType>,
  addItem: (name: string) => void,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

let store: Store = createStore(rootReducer);

const unsubscribe: Unsubscribe = store.subscribe(() => {
  Storage.setList(store.getState().items);
});

class App extends React.Component<Props> {
  componentWillUnmount() {
    unsubscribe();
  }

  render(): ?React$Element<any> {
    return (
      <Provider store={ store }>
        <Layout />
      </Provider>
    );
  }
}

export default App;
