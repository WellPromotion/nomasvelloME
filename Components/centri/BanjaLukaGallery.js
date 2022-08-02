import React from 'react'
import Carousel from 'react-grid-carousel'
import banjaluka1 from '../../public/images/centri/banja-luka/BL1.jpg'
import banjaluka2 from '../../public/images/centri/banja-luka/BL2.jpg'
import banjaluka3 from '../../public/images/centri/banja-luka/BL3.jpg'
import banjaluka4 from '../../public/images/centri/banja-luka/BL4.jpg'
import banjaluka5 from '../../public/images/centri/banja-luka/BL5.jpg'



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

export const BanjaLukaGallery = () => {
    return (
      

    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={banjaluka1} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={banjaluka2} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={banjaluka3} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={banjaluka4} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={banjaluka5} alt="" />
                </a>
            </div>
        </Carousel.Item>
        {/* ... */}
    </Carousel>

  )
}





