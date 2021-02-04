import React from 'react';
import { Link } from 'ice';

const baseUrl = localStorage.baseUrl

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <div><Link to={baseUrl + "/"}>Home</Link></div>
      <div><Link to={baseUrl + "/seller/list"}>sellerlist</Link></div>
    </div>
  );
};

export default About;
