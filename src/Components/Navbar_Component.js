import React, { useState, useEffect } from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {getAllcategories} from '../Screens/API';


function Navbar_Component()
{
    const [categories, setCategories] = useState([]);

    const preload = () => {
        getAllcategories().then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            setCategories(data);
          }
        });
      };
    
      useEffect(() => {
        preload();
      }, []);

    const MyActiveClass = (path) =>
    {
        if(window.location.pathname === path)
        {
            return "bg-danger";
        }
        else
        {
            return "text-black";
        }
    }

    return(<div>
        <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Shopping App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                            <Link className={"nav-link " + MyActiveClass("/")}  to="/">Home </Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((category, index) => {
                            return (   
                            <NavDropdown.Item href=""> {category.name}</NavDropdown.Item>
                            );
                             })}
                           
                            </NavDropdown>
                            <Link className={"nav-link " + MyActiveClass("/MyCart")}  to="/MyCart">My_Cart </Link>
                            <Link className={"nav-link " + MyActiveClass("/Register")}  to="/Register">Register </Link>
                            <Link className={"nav-link " + MyActiveClass("/Login")}  to="/Login">Login </Link>
                            <Link className={"nav-link " + MyActiveClass("/Contact")}  to="/Contact">Contact us </Link>
                            <Link className={"nav-link " + MyActiveClass("/InsertCategory")}  to="/InsertCategory">Insert_Caregory </Link>
                            <Link className={"nav-link " + MyActiveClass("/InsertProduct")}  to="/InsertProduct">Insert_Product </Link>
                            <Link className={"nav-link " + MyActiveClass("/Get_Users")}  to="/Get_Users">Get_Users </Link>
                            <Link className={"nav-link " + MyActiveClass("/Get_Categories")}  to="/Get_Categories">Get_Categories </Link>
                            <Link className={"nav-link " + MyActiveClass("/Get_Orders")}  to="/Get_Orders">Get_Orders </Link>

                            


                </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>);

}

export default Navbar_Component;