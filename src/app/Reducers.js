// @flow

import { combineReducers, AnyAction } from 'redux';
import ItemReducer from '../item/ItemReducer';

const rootReducer: (state: any, action: AnyAction) => any = combineReducers({
  items: ItemReducer,
});

export default rootReducer;
