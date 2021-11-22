import { Component } from 'react';
import { SHOP_DATA } from '../../resources/shop_data';

import Preview from '../../components/preview/Preview';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => {
          return <Preview key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
