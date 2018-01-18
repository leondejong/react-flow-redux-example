// @flow

import { connect } from 'react-redux';

import { addItem, updateItem, removeItem } from '../item/ItemActionCreators';
import List from '../list/ListComponent';

const mapStateToProps = (state: Object): Object => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = (dispatch: Function): Object => {
  return {
    addItem: (name: string): void => {
      dispatch(addItem(name));
    },
    updateItem: (id: string, name: string): void => {
      dispatch(updateItem(id, name));
    },
    removeItem: (id: string): void => {
      dispatch(removeItem(id));
    },
  }
}

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
