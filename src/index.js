import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Screens/Home';
import ProductInformation from './Screens/ProductInformation';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Contact from './Screens/Contact';
import NotFound from './Screens/NotFound';
import MyCart from './Screens/MyCart';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routing = (<BrowserRouter>
       
        <Switch>
                <Route exact path="/"  component={Home} />
                <Route path="/ProductInformation"  component={ProductInformation} />
                <Route path="/Register"  component={Register} />
                <Route path="/Login"  component={Login} />
                <Route path="/Contact" component={Contact} />
                <Route path="/MyCart" component={MyCart} />
                <Route component={NotFound} ></Route>
          
        </Switch>

  
  </BrowserRouter>
)



ReactDOM.render(routing,document.getElementById('root'));

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
