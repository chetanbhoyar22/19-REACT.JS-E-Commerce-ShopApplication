import {Carousel} from 'react-bootstrap';
import Img1 from '../Images/1.jpg';
import Img2 from '../Images/2.jpg';
import Img3 from '../Images/3.jpg';

function Image_slider()
{
    return(<div>
        <Carousel>
  <Carousel.Item>
    <img
     height="750"
      className="d-block w-100"
      src={Img1}
      alt="First slide"
    />
    {<Carousel.Caption>
      <h3>Snow Falls View</h3>
      <p>The Nature Creation</p>
    </Carousel.Caption>}
  </Carousel.Item>
  <Carousel.Item>
    <img
     height="750"
      className="d-block w-100"
      src={Img2}
      alt="Second slide"
    />
    { <Carousel.Caption>
      <h3>Desktop View</h3>
      <p>Daily Use of Computer & Laptop</p>
    </Carousel.Caption> }
  </Carousel.Item>
  <Carousel.Item>
    <img
     height="750"
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />

    { <Carousel.Caption>
      <h3>Work Hard</h3>
      <p>Hard Working Person Get Successful</p>
    </Carousel.Caption> }
  </Carousel.Item>
</Carousel>

    </div>);
}

export default Image_slider;