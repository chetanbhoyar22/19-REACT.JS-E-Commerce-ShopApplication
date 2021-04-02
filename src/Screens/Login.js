import React,{useState} from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {Function_LoginAPI} from './API';


function Login() {
    const [myvalues,setValues] = useState(
        {
            email:'',
            password:'',
            error :false,
            errorMSG:'',
            success:false
        }
    );

    const {email,password,error,errorMSG,success} = myvalues;

    //Dynamic Input Values Change
    const handleChange = inputtype_name => e =>
   {
    setValues( { ...myvalues,[inputtype_name]: e.target.value } );
   };

   //After Enter Data Successful Msg
   const SuccessDiv = () =>
    {
        return(
        <div className="row">
        <div className="col-lg-4"></div>
            <div className="col-lg-4 datamsg">

                <div className="alert alert-success">
                    Welcome, Login Sucessfully !
                </div>
            </div>
        </div>
     );
    }

  //After Enter Data Error Msg
  const Errordiv = () =>{
        return(<div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 datamsg">

                <div className="alert alert-danger">
                    Error In Login : {errorMSG}
                </div>
            </div>
            </div>
        );
    }

    //Condition
    const MyMsgDiv = () =>
    {
        if(error === true)
        {
            return  Errordiv();
        }
        else if(success === true)
        {
            return SuccessDiv();
        }
    }

    const [datafromBackend, updatedatafromBackendadd] = useState();

    //Using API.js (React Through Login User)
    const onSubmit = event =>
   {
    event.preventDefault();

    setValues({ ...myvalues, error: false });

    //console.log("email :"+email);
    //console.log("password :"+password);

    Function_LoginAPI({email, password })
      .then(data => {

        if (data.error)
        {
            setValues({ ...myvalues, error: true, errorMSG:data.error, success: false });
        }
        else if (data.err)
        {
            setValues({ ...myvalues, error: true, errorMSG:data.err, success: false });
        }
        else
        {
        setValues({ ...myvalues, success: true });
        updatedatafromBackendadd(data);
        console.log(data);
        setValues({...myvalues,
            email: "",
            password: "",
            error: false,
            success: true
        });
        }
      })

  };
    return (
      <div>
          <Navbar_Component />
          <br/>
          {MyMsgDiv()}
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
                         <h1 className="text-center">Login {/*{window.location.pathname} */}</h1> 

                        <div className="form-group">
                            <label>Email <span className="text-danger">*</span></label>
                            <input type="email" onChange={handleChange("email")} required value={email} placeholder="Enter Your Email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Password <span className="text-danger">*</span></label>
                            <input type="password" onChange={handleChange("password")} required value={password} placeholder="Enter Your Password" className="form-control"/>
                        </div>
                        <br/>

                        <div className="form-group">
                        <button onClick={onSubmit} className="mx-auto btn-lg d-block btn btn-success">
                                Login
                             </button>
                        </div>

                        <div className="form-group text-center">
                            <h4>OR</h4>
                        </div>

                        <div className="form-group">
                        <Link to="/register"> <button className="mx-auto btn-lg d-block btn btn-danger">
                                Register
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-4 "></div>
                    {/* <p>
                     <br/> <br/>
                        <h3 className="center">Entered Values -</h3>
                            <ul>
                                <li><h4>User Email : {email}</h4></li>
                                <li><h4>User Password : {password}</h4></li>
                                <li><h4> Data From Backend :   {JSON.stringify(updatedatafromBackendadd)}</h4></li>
                            </ul>
                    </p>  */}
                </div>
            </div>
  );
  }
  export default Login;


