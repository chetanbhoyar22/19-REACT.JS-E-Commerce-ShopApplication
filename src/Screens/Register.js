import React from 'react';
import {Button} from 'react-bootstrap';
import Navbar_Component from '../Components/Navbar_Component';
import './Style.css';

function Register() {
    return (
      <div>
           <Navbar_Component />
              <div className="regi_div">
                  <h1 className="text-center">Registration Section</h1><br/>
                  <div className="form-group">
                    <label><b>Name<span className='text-danger'>*</span></b></label>
                    <input type="text" className="form-control" placeholder="Enter Your Full Name" />

                </div>
                <div className="form-group">
                    <label><b>Email<span className='text-danger'>*</span></b></label>
                    <input type="email" className="form-control" placeholder="Enter Your Email Address" />

                </div>
                <div className="form-group">
                    <label><b>Password<span className='text-danger'>*</span></b></label>
                    <input type="password" className="form-control" placeholder="Enter Your Password" />

                </div>
                <div className="form-group">
                    <label><b>Mobile Number<span className='text-danger'>*</span></b></label>
                    <input type="number" className="form-control" placeholder="Enter Your 10 Digit Mobile Number" />

                </div>
                <div className="form-group">
                    <label><b>Date of Birth<span className='text-danger'>*</span></b></label>
                    <input type="date" className="form-control" />

                </div>

                <div className="form-group">
                    <label><b>Select City<span className='text-danger'>*</span></b></label>
                    <br />
                        <select class="form-control">
                            <option>Select City</option>
                            <option>Aurangabad</option>
                            <option>Mumbai</option>
                            <option>Nagpur</option>
                            <option>Pune</option>
                        </select>
                </div>
                    <br />

                <div className="form-group">
                    <Button className="mx-auto d-block" variant="danger">Register</Button>
                </div>
          </div>
       
      </div>
    );
  }
  
  export default Register;
  