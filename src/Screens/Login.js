import React from 'react';
import {Button} from 'react-bootstrap';
import Navbar_Component from '../Components/Navbar_Component';

function Login() {
    return (
      <div>
          <Navbar_Component />
                <div className="regi_div">
                    <h1 className="text-center">Login Section</h1><br/>
               <div className="form-group">
                    <label><b>Email<span className='text-danger'>*</span></b></label>
                    <input type="email" className="form-control" placeholder="Enter Your Email Address" />

                </div>
                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" />

                </div>
                <div className="form-group">
                    <Button className="mx-auto d-block" variant="primary">Login</Button> 
                </div>
          </div>
       
      </div>
    );
  }
  export default Login;
  
  
  