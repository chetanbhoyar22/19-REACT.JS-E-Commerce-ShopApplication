import React from 'react';
import Navbar_Component from '../Components/Navbar_Component';
import Image_Slider from '../Components/Image_Slider';
import './Style.css';


function Home() {
  return (
    <div>
      <Navbar_Component />
      <Image_Slider />
    </div>
  )
}
export default Home;
