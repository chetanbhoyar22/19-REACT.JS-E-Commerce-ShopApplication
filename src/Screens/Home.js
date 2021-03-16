import React from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import Image_Slider from '../Components/Image_Slider';
import My_Cart_Component from '../Components/My_Cart_Component';
import productImage1 from '../Images/shoes.jpg';
import productImage2 from '../Images/camera.jpg';
import productImage3 from '../Images/black_shoes.jpg';
import productImage4 from '../Images/big_headphone.jpg';
import productImage5 from '../Images/ear_birds.jpg';
import productImage6 from '../Images/laddies_watch.jpg';
import productImage7 from '../Images/ladies_sanddles.jpg';
import productImage8 from '../Images/white_watch.jpg';
import productImage9 from '../Images/red_juice.jpg';

import '../App.css';

function Home()
{
    return(<div>
        <Navbar_Component />
        <Image_Slider />

        <h1 className="text-center heading">Products{window.location.pathname}</h1>


        <div className="row">

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage1} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="This is men's shoes (Red)"/>
                </div>

                <div className="col-lg-3">
                       <My_Cart_Component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="This is large camera"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage3} product_name="Urban Fashion Sneakers For Men(Black)" product_price="₹1,880" product_description="This is black shape"/>
                </div>

                <div className="col-lg-3">
                       <My_Cart_Component product_image={productImage4} product_name="Samsung Headphone" product_price="₹6,999" product_description="This is professional headphones"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage5} product_name="MI Ear Birds" product_price="₹5,863" product_description="This is 2 layer headphones"/>
                </div>

                <div className="col-lg-3">

                       <My_Cart_Component product_image={productImage6} product_name="Sonata Laddies Watch" product_price="₹1,699" product_description="This is laddies watch"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage7} product_name="Spy Laddies Shanddle" product_price="862" product_description="This is laddies shanddle"/>
                </div>

                <div className="col-lg-3">
                       <My_Cart_Component product_image={productImage8} product_name="Bly White Laddies Watch" product_price="₹6,999" product_description="This is laddies fancy watch (white)"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage9} product_name="Red Apple Juice" product_price="₹360" product_description="This is pure apple juice"/>
                </div>

                <div className="col-lg-3">
                            <My_Cart_Component product_image={productImage3} product_name="Urban Fashion Sneakers For Men(Black)" product_price="₹1,880" product_description="This is black shape"/>
                </div>

                <div className="col-lg-3">
                       <My_Cart_Component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="This is large camera"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage1} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="This is men's shoes (Red)"/>
                </div>

                <div className="col-lg-3">
                       <My_Cart_Component product_image={productImage4} product_name="Samsung Headphone" product_price="₹6,999" product_description="This is professional headphones"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage5} product_name="MI Ear Birds" product_price="₹5,863" product_description="This is 2 layer headphones"/>
                </div>

                <div className="col-lg-3">

                       <My_Cart_Component product_image={productImage6} product_name="Sonata Laddies Watch" product_price="₹1,699" product_description="This is laddies watch"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage7} product_name="Spy Laddies Shanddle" product_price="862" product_description="This is laddies shanddle"/>
                </div>

                <div className="col-lg-3">
                       <My_Cart_Component product_image={productImage8} product_name="Bly White Laddies Watch" product_price="₹6,999" product_description="This is laddies fancy watch (white)"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage9} product_name="Red Apple Juice" product_price="₹360" product_description="This is pure apple juice"/>
                </div>

                <div className="col-lg-3">
                         <My_Cart_Component product_image={productImage5} product_name="MI Ear Birds" product_price="₹5,863" product_description="This is 2 layer headphones"/>
                </div>

                <div className="col-lg-3">

                       <My_Cart_Component product_image={productImage6} product_name="Sonata Laddies Watch" product_price="₹1,699" product_description="This is laddies watch"/>
                </div>


              
        </div>
    </div>);
}

export default Home;
