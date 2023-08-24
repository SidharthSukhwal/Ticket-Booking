import React from 'react';
import Navbar from './Navbar';
import "./home.css"

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    
    <div className="infobox" >
    <div className="container text-center mt-5">
    <h1>Welcome to Ticket Book </h1><br />
    <h5>Please log in or register to access our services.</h5>

    
    <div className="mt-3 ">
    <div className="login p-5 d-lg-block">
    <Link to="/Login"><button className="btn btn-outline-primary btn-lg ">Login</button></Link>
    </div>
    </div>
    </div>
    </div>
  
    </>
  );
}

export default Home;
