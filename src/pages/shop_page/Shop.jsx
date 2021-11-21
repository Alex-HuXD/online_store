import { Component } from 'react';
import { SHOP_DATA } from '../../resources/shop_data';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
}
