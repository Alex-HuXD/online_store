import { Component } from 'react';

import './directory.scss';
import { sections } from '../../resources/directory.data';
import MeneItem from '../menu-item/MenuItem';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sections,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
          <MeneItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
