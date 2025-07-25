import React from 'react'
import Carousel from 'react-grid-carousel'
import sarajevo1 from '../../public/images/centri/sarajevo-iii/novigrad_centar_01.jpg'
import sarajevo2 from '../../public/images/centri/sarajevo-iii/novigrad_centar_02.jpg'
import sarajevo3 from '../../public/images/centri/sarajevo-iii/novigrad_centar_03.jpg'
import sarajevo4 from '../../public/images/centri/sarajevo-iii/novigrad_centar_04.jpg'
import sarajevoa from '../../public/images/centri/sarajevo-iii/100-a.jpg'
import sarajevob from '../../public/images/centri/sarajevo-iii/101-b.jpg'


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

export const SarajevoIIIGallery = () => {
    return (
      

      <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
         <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={sarajevoa} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={sarajevob} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={sarajevo1} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={sarajevo2} alt="" />
                </a>
            </div>
        </Carousel.Item>
       
        {/* ... */}
    </Carousel>

  )
}





