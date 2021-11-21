import React from 'react';
// import { Link } from 'react-router-dom';
import Directory from '../../components/directory/Directory';
import './homepage.scss';

const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
