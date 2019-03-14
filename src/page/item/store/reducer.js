import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  List: [],
  sku_id: String
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.detail:
      return state.set('List', action.data)
    case constants.getSku_id:
      return state.set('sku_id', action.id)
    default: 
      return state
  }
}