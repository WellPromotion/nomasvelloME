import React from 'react'
import Carousel from 'react-grid-carousel'
import tuzla1 from '../../public/images/centri/tuzla/tuzla1.jpg'
import tuzla2 from '../../public/images/centri/tuzla/tuzla2.jpg'
import tuzla3 from '../../public/images/centri/tuzla/tuzla3.jpg'
import tuzla4 from '../../public/images/centri/tuzla/tuzla4.jpg'
import tuzla5 from '../../public/images/centri/tuzla/tuzla5.jpg'



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

export const TuzlaGallery = () => {
    return (
      

    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={tuzla1} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={tuzla2} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={tuzla3} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={tuzla4} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={tuzla5} alt="" />
                </a>
            </div>
        </Carousel.Item>
        
        {/* ... */}
    </Carousel>

  )
}





