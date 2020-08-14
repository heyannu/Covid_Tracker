import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Caraousel.css"
import one from '../../images/1.jpg'
import two from '../../images/2.jpg'
import three from '../../images/3.jpg'
import four from '../../images/4.jpg'
import five from '../../images/5.jpg'
import six from '../../images/6.jpg'

export default class Ccarousel extends React.Component {
  render() {
    return (
      <div className="div">

      <Carousel autoPlay>
        <div>
          <img className="img" alt="" src={one} />
        </div>
        <div>
          <img className="img" alt="" src={two}/>
        </div>
        <div>
          <img className="img" alt="" src={three}/>
        </div>
        <div>
          <img className="img" alt="" src={four}/>
        </div>
        <div>
          <img className="img" alt="" src={five}/>
        </div>
        <div>
          <img className="img" alt="" src={six}/>
        </div>
        
      </Carousel>
      </div>
    )
  }
}