import { combineReducers } from 'redux-immutable'
import { reducer as ShopReducer } from '../page/shop/store'
import { reducer as HeaderReducer } from '../common/header/store'
import { reducer as ItemReducer } from '../page/item/store'
import { reducer as CheckoutReducer  } from '../page/checkout/store'

const reducer = combineReducers({
  Shop: ShopReducer,
  Header: HeaderReducer,
  Item: ItemReducer,
  Checkout: CheckoutReducer
})
export default reducer