import React,{ useState, useEffect} from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import {getAllcategories} from './API';

const Get_Categories = () => {

    //Display Categories Though Node.js
    const [categories,SetCategories] = useState();

    const preload = () =>
     {
       
        getAllcategories().then(data =>
        {
          if(data.error) 
          {
            console.log(data.error);
          } 
          else 
          {
            SetCategories(data);
          }
        });
      
    };
    

    useEffect(() => 
    {
        preload();
    },[]);

    return (
        <div>
            <Navbar_Component />
            <h2 className="center">Categories List</h2><br/>
              {/* <ul>
            {categories.map((category, index) => {
                            return (<li>{category.name}</li>
                            );
                             })}
            </ul>  */}


             <table className="table table-bordered">
                             <thead>
                                 <th className="center1">Sr. No.</th>
                                 <th className="center1">Cateogry Name</th>
                             </thead>

                             <tbody>
                             {categories.map((category, index) => {              //Display category using loop
                            return (<tr>
                                <td className="center1"><b>{index+1}</b></td>
                                <td className="center1"><b>{category.name}</b></td>
                                </tr>
                            );
                             })}
                             </tbody>
                    </table> 
        </div>
    );
}

export default Get_Categories;