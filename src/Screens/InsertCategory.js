import React,{useState}from 'react';
import Navbar_component from '../Components/Navbar_Component';
import {Function_InsertCategory} from './API';
import   '../App.css';

//Using API.js (React Insert Category)
export default function InsertCategory() {

    const [myvalues,setValues] = useState(
        {
            name:'',
            error:false,
            errorMSG:'',
            success:false
        }
    );


    const { name, error, errorMSG, success} = myvalues;  

    //Dynamic Input Values Change
    const handleChange = input_type_name => e => 
    {

            setValues({...myvalues,[input_type_name]:e.target.value})
    }

    //After Enter Data Successful Msg
    const mySuccessDiv = () =>
    {
      return(<div className="row">
    
        <div className="col-lg-4"></div>
        <div  className="col-lg-4">
    
              <div className="alert alert-success">
                Category Inserted Sucessfully !
              </div>
        </div>
      </div>);
    }

    //After Enter Data Error Msg
    const myErrorDiv = () =>
  {
    return(<div className="row">

        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="alert alert-danger">
            Error In Insertion : {errorMSG}
          </div>
        </div>

    </div>);
  
  }

//Condition
const myMsgDiv = () =>
  {
    if(error === true)
    {
       return myErrorDiv();
    }
    else if(success === true)
    {

      return mySuccessDiv();
    }

  }

  //onSubmit data will be stored on mangoDB (Insert Category)
    const onSubmit = event =>
    {

     event.preventDefault();
     

     Function_InsertCategory({ name })
       .then(data => 
          {
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
                  console.log(data);
                  setValues({...myvalues, name: "", error: false, success: true });
         }
       })
     
   };

    return (
        <div>
            <Navbar_component/>

            <div className="row bg-success">

                <div className="col-lg-12  text-white" >
                    <div className="mycategory_insert_div">
                    <h1 className="text-center"> Admin - Insert Category Information</h1>

                    <br/>
                    {myMsgDiv()}    

                <div className="form-group">
                            <label>Category Name <span className="text-danger">*</span> </label>
                            <input placeholder="Enter Category Name" required value={name} onChange={handleChange("name")} type="text" className="form-control"/>

                </div>

                <div className="form-group">
                            <button onClick={onSubmit} className="btn btn-lg btn-danger">
                                Submit
                            </button>
                </div>


            {/* <p>
                <h3>Entered Values -</h3>
                <ul>
                    <li>Product Name : {myvalues.name} </li>
                </ul>
            </p> */}

            </div>
        </div>  
    </div>
</div>
)
}