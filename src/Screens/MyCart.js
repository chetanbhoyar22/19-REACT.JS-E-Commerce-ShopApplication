import React from 'react'
import Navbar_component from '../Components/Navbar_Component';
import {Table,Button} from 'react-bootstrap';
import productImage from '../Images/shoes.jpg';
import productImage2 from '../Images/camera.jpg';

export default function Mycart() {
    return (
        <div>
            <Navbar_component />
            <h1 className="text-center avoffer">My Cart{window.location.pathname}</h1><br/>

            <Table striped bordered hover>
            
            <thead>
                    <tr>
                    <th>SR. NO.</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>QTY</th>
                    <th>MRP</th>
                    <th>Total Price</th>
                    </tr>
            </thead>
            

            <tbody>
                <tr>
                    <th>1</th>
                    <th>Urban Fashion Sneakers For Men(Red)</th>
                    <th><img width="200px" height="200px" src={productImage} /></th>
                    <th>1</th>
                    <th>₹1,860</th>
                    <th>₹1,860</th>
                </tr>
            </tbody>
            </Table>
            <button  className="btn btn-lg btn-success float-right place_order_btn">Place Order </button>   
        </div>
    )
}