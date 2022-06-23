import React from 'react'
import Carousel from 'react-grid-carousel'
import mostarImage from '../../public/images/centri/mostar/mostar-poslovnica.png'


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

export const MostarGallery = () => {
    return (
      

    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={mostarImage} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={mostarImage} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={mostarImage} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={mostarImage} alt="" />
                </a>
            </div>
        </Carousel.Item>
        {/* ... */}
    </Carousel>

  )
}





