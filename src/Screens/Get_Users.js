import React,{ useState, useEffect} from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import {getAllusers} from './API';

const Get_Users = () => {

    //Display Users Though Node.js
    const [users,SetUsers] = useState();

    const preload = () =>
     {
       
        getAllusers().then(data =>
        {
          if(data.error) 
          {
            console.log(data.error);
          } 
          else 
          {
            SetUsers(data);
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
            <h2 className="center">Users List</h2><br/>
              {/* <ul>
            {categories.map((category, index) => {
                            return (<li>{user.name}</li>
                            );
                             })}
            </ul>  */}


             <table className="table table-bordered">
                             <thead>
                                 <th className="center1">Sr. No.</th>
                                 <th className="center1">Name</th>
                                 <th className="center1">Email</th>
                                 <th className="center1">Password</th>
                                 <th className="center1">Mobile</th>
                                 <th className="center1">Address</th>
                             </thead>

                             <tbody>
                             {users.map((user, index) => {                          //Display users using loop
                            return (<tr>
                                <td className="center1"><b>{index+1}</b></td>
                                <td className="center1"><b>{user.name}</b></td>
                                <td className="center1"><b>{user.email}</b></td>
                                <td className="center1"><b>{user.password}</b></td>
                                <td className="center1"><b>{user.mobile}</b></td>
                                <td className="center1"><b>{user.address}</b></td>
                                </tr>
                            );
                             })}
                             </tbody>
                    </table> 
        </div>
    );
}

export default Get_Users;