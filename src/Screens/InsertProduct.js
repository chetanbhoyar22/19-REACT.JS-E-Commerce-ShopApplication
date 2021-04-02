import React,{useState}from 'react';
import Navbar_component from '../Components/Navbar_Component';
import {Function_InsertProduct} from './API';
import   '../App.css';

//Using API.js (React Insert Product)
export default function InsertProduct() {

    const [myvalues,setValues] = useState(
        {
            name:'',
            description:'',
            price:'',
            category:'',
            stock:'',
            sold:'',
            error:false,
            errorMSG:'',
            success:false
        }
    );


    const { name, description, price, category, stock, sold, error, errorMSG, success} = myvalues;  

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
                Product Inserted Sucessfully !
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
    //onSubmit data will be stored on mangoDB (Insert Product)
    const onSubmit = event =>
    {

     event.preventDefault();
     
     setValues({ ...myvalues, error: false });

     Function_InsertProduct({ name, description, price ,category, stock, sold})
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
                  setValues({...myvalues, name: "", description: "", price: "", category:"", stock:"", sold:"", error: false,
                  success: true});
         }
       })
     
   };

    return (
        <div>
            <Navbar_component/>
            

            <div className="row bg-secondary">

                <div className="col-lg-12  text-white" >
                    <div className="myproduct_insert_div">
                    <h1 className="text-center"> Admin - Insert Product Information</h1>

                    <br/>
                    {myMsgDiv()}    

                <div className="form-group">
                            <label>Product Name <span className="text-danger">*</span> </label>
                            <input placeholder="Enter Product Name" required value={name} onChange={handleChange("name")} type="text" className="form-control"/>

                </div>
                
                <div className="form-group">
                            <label>Product Description <span className="text-danger">*</span> </label>


                            <textarea className="form-control" placeholder="Enter Product Description" required value={description} onChange={handleChange("description")} rows="5"></textarea>

                </div>
                <div className="form-group">
                            <label>Product Price <span className="text-danger">*</span> </label>
                            <input placeholder="Enter Product Name" required value={price} onChange={handleChange("price")} type="number" step="any"  className="form-control"/>

                </div>

                <div className="form-group">
                            <label>Product Category <span className="text-danger">*</span> </label>
                            <input placeholder="Enter Product Category ID" required value={category} onChange={handleChange("category")} type="text" className="form-control"/>

                </div>

                <div className="form-group">
                            <label>Product Stock <span className="text-danger">*</span> </label>
                            <input placeholder="Enter Number Of Product Stock" required value={stock} onChange={handleChange("stock")} type="number" className="form-control"/>

                </div>

                <div className="form-group">
                            <label>Product Sold <span className="text-danger">*</span> </label>
                            <input placeholder="Enter Number Of Product Sold" required value={sold} onChange={handleChange("sold")} type="number" className="form-control"/>

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
                    <li>Product Description : {myvalues.description} </li>
                    <li>Product Price : {myvalues.price} </li>
                    <li>Product Category : {myvalues.category} </li>
                    <li>Product Stock: {myvalues.stock} </li>
                    <li>Product Sold : {myvalues.sold} </li>
                </ul>
            </p> */}

            </div>
        </div>  
    </div>
</div>
)
}