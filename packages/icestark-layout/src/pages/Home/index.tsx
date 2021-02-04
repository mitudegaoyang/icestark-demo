import React from 'react';
import { Link } from 'ice';

const baseUrl = localStorage.baseUrl

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <div><Link to={baseUrl + "/about"}>About</Link></div>
      <div><Link to={baseUrl + "/seller"}>seller</Link></div>
    </div>
  );
};

export default Home;
