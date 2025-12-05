import React from 'react'
import Carousel from 'react-grid-carousel'
import brcko1 from '../../public/images/centri/podgoricaII/jedinica.jpg'
import brcko2 from '../../public/images/centri/podgoricaII/podgorica2.jpg'
 
  
 
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

export const PodgoricaIIGallery = () => {
    return (
      

    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={brcko1} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={brcko2} alt="" />
                </a>
            </div>
        </Carousel.Item>
        {/* ... */}
    </Carousel>

  )
}





