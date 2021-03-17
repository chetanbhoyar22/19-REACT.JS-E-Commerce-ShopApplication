import React,{useState} from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";


function Register() {
    //***Dynamic Input Values Change
    //array use state 
    const [myvalues,setValues] = useState({
        name:'',
        email:'',
        password:'',
        mobile:'',
        address:'',
        error:false,
        success:false
    }
);

    const { name, email, password, mobile, address, error, success } = myvalues;  //Variable pass to array 

    const handleChange = inputtype_name => e => 
        {
                setValues( { ...myvalues,[inputtype_name]: e.target.value } );  //...myvalues - UPDATE

        };//Dynamic Input Values Change***

    return (
      <div>
           <Navbar_Component />
              {/* <div className="regi_div">
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
          </div> */}

          

            {/* BLOCK 2 */}
            <div className="row">

                    <div className="col-lg-4 "></div>
                    
                    <div className="col-lg-4 my_register_div ">
                        <h1 className="text-center">Register{window.location.pathname}</h1>

                        <div className="form-group">
                            <label >Name <span className="text-danger">*</span></label>
                            <input type="name" required onChange={handleChange("name")} placeholder="Enter Your Name" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" required onChange={handleChange("email")} placeholder="Enter Your Email" className="form-control"/>
                        </div>
                        
                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password" required onChange={handleChange("password")} placeholder="Enter Your Password" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Mobile <span className="text-danger">*</span></label>
                            <input type="number" required onChange={handleChange("mobile")} placeholder="Enter Your Mobile" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Address <span className="text-danger">*</span></label>
                            <input type="text" required onChange={handleChange("address")} placeholder="Enter Your Address" className="form-control"/>
                        </div>
                        <br/>

                        <div className="form-group">
                             <Link to=" "  className="mx-auto btn-lg d-block btn btn-danger">
                                Register
                             </Link>
                        </div>
                        
                        <div className="form-group text-center">
                            <h4>OR</h4>
                        </div>

                        <div className="form-group">
                        <Link to="/login"  className="mx-auto btn-lg d-block btn btn-success">
                                Login
                            </Link>
                        </div>
                        
                    </div>
                     <div className="col-lg-4 "></div>
                            <ul>
                                <li><h4>User Name : {myvalues.name}</h4></li>
                                <li><h4>User Email : {myvalues.email}</h4></li>
                                <li><h4>User Password : {myvalues.password}</h4></li>
                                <li><h4>User Mobile : {myvalues.mobile}</h4></li>
                                <li><h4>User Address : {myvalues.address}</h4></li>
                            </ul> 
                </div>
            </div>
    );
  }
  
  export default Register;
  