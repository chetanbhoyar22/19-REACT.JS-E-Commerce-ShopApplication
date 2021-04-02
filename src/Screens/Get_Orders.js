import React,{ useState, useEffect} from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import {getAllorders} from './API';

const Get_Orders = () => {

  //Display Orders Though Node.js
    const [orders,SetOrders] = useState();

    const preload = () =>
     {
       
        getAllorders().then(data =>
        {
          if(data.error) 
          {
            console.log(data.error);
          } 
          else 
          {
            SetOrders(data);
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
            <h2 className="center">Orders List</h2><br/>
              {/* <ul>
            {categories.map((category, index) => {
                            return (<li>{order.name}</li>
                            );
                             })}
            </ul>  */}


             <table className="table table-bordered">
                             <thead>
                                 <th className="center1">Sr. No.</th>
                                 <th className="center1">Name</th>
                                 <th className="center1">Count</th>
                                 <th className="center1">Price</th>
                                 <th className="center1">Amount</th>
                                 <th className="center1">Address</th>
                             </thead>

                             <tbody>
                             {orders.map((category, index) => {                           //Display orders using loop
                            return (<tr>
                                <td className="center1"><b>{index+1}</b></td>
                                <td className="center1"><b>{category.name}</b></td>
                                <td className="center1"><b>{category.count}</b></td>
                                <td className="center1"><b>{category.price}</b></td>
                                <td className="center1"><b>{category.amount}</b></td>
                                <td className="center1"><b>{category.address}</b></td>
                                </tr>
                            );
                             })}
                             </tbody>
                    </table> 
        </div>
    );
}

export default Get_Orders;