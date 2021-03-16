import React from 'react';
import {Button} from 'react-bootstrap';
import Navbar_Component from '../Components/Navbar_Component';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";


function Login() {
    return (
      <div>
          <Navbar_Component />
                {/* <div className="regi_div">
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
          </div> */}

          {/* BLOCK 2 */}

          <div className="row">
                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center">Login{window.location.pathname}</h1>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" required placeholder="Enter Your Email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password" required placeholder="Enter Your Password" className="form-control"/>
                        </div>
                        <br/>

                        <div className="form-group">
                        <Link to=" "  className="mx-auto btn-lg d-block btn btn-success">
                                Login
                            </Link>
                        </div>

                        <div className="form-group text-center">
                            <h4>OR</h4>
                        </div>
                        
                        <div className="form-group">
                            <Link to="/register"  className="mx-auto btn-lg d-block btn btn-danger">
                                Register
                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-4 "></div>
                </div>
            </div>
  );
  }
  export default Login;
  
  
  