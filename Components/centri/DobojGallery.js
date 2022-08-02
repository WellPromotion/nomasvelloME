import React from 'react'
import Carousel from 'react-grid-carousel'
import doboj1 from '../../public/images/centri/doboj/gracanica_centar_01.jpg'
import doboj2 from '../../public/images/centri/doboj/gracanica_centar_02.jpg'
import doboj3 from '../../public/images/centri/doboj/gracanica_centar_03.jpg'
import doboj4 from '../../public/images/centri/doboj/gracanica_centar_04.jpg'
import doboj5 from '../../public/images/centri/doboj/gracanica_centar_05.jpg'
import doboj6 from '../../public/images/centri/doboj/gracanica_centar_06.jpg'




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

export const DobojGallery = () => {
    return (
      

    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={doboj1} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={doboj2} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={doboj3} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={doboj4} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={doboj5} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={doboj6} alt="" />
                </a>
            </div>
        </Carousel.Item>
        {/* ... */}
    </Carousel>

  )
}





