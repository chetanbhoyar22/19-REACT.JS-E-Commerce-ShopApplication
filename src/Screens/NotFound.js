import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function NotFound() {
    return (
        <div className="center">
            <h1>Error 404 - Not Found</h1>
            <br/>
            <Link to="/"><b>Click Here To Home Page</b></Link>
        </div>
    );
  }
export default NotFound;
