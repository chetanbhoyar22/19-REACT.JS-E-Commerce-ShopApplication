import Navbar_component from '../Components/Navbar_Component';
import productImage1 from '../Images/shoes.jpg';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faTags } from '@fortawesome/free-solid-svg-icons';

function ProductInformation()
{
    const element = <FontAwesomeIcon icon={faTags} />
    return(
        <div>
            <Navbar_component />
            <div className="row">
                <div className="col-lg-6  text-center productInfoDiv">
                    <div className="row">
                       <div className="col-lg-12">
                         <img className="mx-auto d-block productImage" src={productImage1} /> 
                            </div>
                                    <div className="col-lg-12">
                                    <FontAwesomeIcon icon={['fab', 'apple']} />
                                    <FontAwesomeIcon icon={['fab', 'microsoft']} />
                                    <FontAwesomeIcon icon={['fab', 'google']} />

                                    <FontAwesomeIcon icon="check-square" />
                                    <br/>
                                    <button className="addTocartButton"><i class="fa fa-shopping-cart" aria-hidden="true"><b> GO TO CART</b></i></button>{" "} 
                                    <button className="buyNowButton"><i class="fa fa-bolt" aria-hidden="true"><b> BUY NOW</b></i></button>
                                    </div> 

                            </div>
                        </div>


                        <div className="col-lg-6 secondDivProduct  productInfoDiv margin">       
                            <h1>Urban Fashion Sneakers For Men(Red)</h1>
                              <p>
                                <h6>Special price</h6>
                                
                                <h4>₹1,860 </h4>  <span> <del><b>₹2,090</b></del>  </span>  <span className="text-success"> <b><i class="fa fa-heart" aria-hidden="true"></i> 43% off</b></span>    <span className="text-danger"><b> Hurry, Only 1 left!</b> </span>  

                                <h4 className="avoffer">Available offers</h4>
                                    <span className="text-success"><i class="fa fa-tag" aria-hidden="true"></i></span> Special PriceGet extra 28% off (price inclusive of discount) <Link to="/"><b>T&C</b></Link><br/>
                                    <span className="text-success"><i class="fa fa-tag" aria-hidden="true"></i></span> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card. <Link to="/"><b>T&C</b></Link><br/>
                                    <span className="text-success"><i class="fa fa-tag" aria-hidden="true"></i></span> Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply. <Link to="/"><b>T&C</b></Link><br/>
                                    {/* {element} <FontAwesomeIcon icon={["fal", "coffee"]}/>*/} <span className="text-success"><i class="fa fa-tag" aria-hidden="true"></i></span> EMI starting from ₹284/month.<Link to="/"><b> View Plans</b></Link> 
                            </p>
                            <span className="text-success"><i class="fa fa-truck" aria-hidden="true"></i> </span><b>Delivery to</b><br/>
                            <input type="text" placeholder="Enter delivery pincode" maxlength="6"></input>{" "}
                            <button className="btn-sm btn-success"><b>Check</b></button>
                        </div>
                     </div>
                 </div>
    );
}
export default ProductInformation;