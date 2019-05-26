import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

function NotFound(){
    return  (<div> <h2> Sorry, this page does not exist </h2> <Link to="/"> Back to the homepage </Link></div>);
}

export default NotFound;
