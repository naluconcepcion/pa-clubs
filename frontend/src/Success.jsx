// Liv

import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function Success(){
    return  (<div> <h2> Success! </h2> <br></br> <p>You successfully signed up </p> <br></br>
      <Link to="/dashboard"> Click here to access your dashboard. </Link></div>);
}

export default Success;
