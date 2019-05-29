// Liv

import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function Failed(){
    return  (<div> <h2> Failed! </h2> <br></br> <p>You either did not put in a valid Andover email or your email is already taken.  </p> <br></br>
      <Link to="/"> Back to the homepage. </Link></div>);
}

export default Failed;
