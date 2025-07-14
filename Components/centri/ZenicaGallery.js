import React from 'react'
import Carousel from 'react-grid-carousel'
import zenica1 from '../../public/images/centri/zenica/zenica1.jpg'
import zenica2 from '../../public/images/centri/zenica/zenica2.jpg'
import zenica3 from '../../public/images/centri/zenica/zenica3.jpg'
import zenica4 from '../../public/images/centri/zenica/zenica4.jpg'
import zenica5 from '../../public/images/centri/zenica/zenica5.jpg'
import zenica6 from '../../public/images/centri/zenica/zenica6.jpg'
import zenica7 from '../../public/images/centri/zenica/zenica7.jpg'
import zenica8 from '../../public/images/centri/zenica/zenica8.jpg'
import zenica9 from '../../public/images/centri/zenica/zenica9.jpg'

import zenicaa from '../../public/images/centri/zenica/centarZenica1.jpg'
import zenicab from '../../public/images/centri/zenica/centarZenica2.jpg'



// your custom dot component with prop `isActive`
const MyDot1 = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '10px' : '8px',
        width: isActive ? '10px' : '8px',
        // background: '#2EC5CE',
        background: isActive ? '#9EBB31' : 'white',
        // border: isActive ? '3px solid #43B5B5' : 'none',
      }}
    ></span>
  )

export const ZenicaGallery = () => {
    return (
      

    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenicaa} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenicab} alt="" />
                </a>
            </div>
        </Carousel.Item>
        {/* <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenica3} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenica4} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenica5} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenica6} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenica7} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenica8} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={zenica9} alt="" />
                </a>
            </div>
        </Carousel.Item> */}
        {/* ... */}
    </Carousel>

  )
}





