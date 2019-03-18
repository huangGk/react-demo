import React, { Component } from 'react';
import HeaderNav from './common/header';
import './reset.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loading';
import { Provider } from 'react-redux';
import store from './store';

const Shop = Loadable({
  loader: () => import('./page/shop'),
  loading: Loading
});
const Item = Loadable({
  loader: () => import('./page/item'),
  loading: Loading
});

const Cart = Loadable({
  loader: () => import('./page/cart'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <HeaderNav />
              <Route path="/" exact component={Shop} />
              <Route path="/item/:id" component={Item} />
              <Route path="/cart" component={Cart} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
