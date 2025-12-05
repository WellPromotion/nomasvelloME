import React from 'react'
import Carousel from 'react-grid-carousel'
import podgorica1 from '../../public/images/centri/podgoricaI/Podgorica-1.jpg'
import podgorica2 from '../../public/images/centri/podgoricaI/Podgorica-12.jpg'
import podgorica3 from '../../public/images/centri/podgoricaI/Podgorica-123.jpg'
// import banjaluka4 from '../../public/images/centri/banja-luka/BL4.jpg'
// import banjaluka5 from '../../public/images/centri/banja-luka/BL5.jpg'



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

export const PodgoricaIGallery = () => {
    return (
      

    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
        <Carousel.Item>
            <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={podgorica1} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={podgorica2} alt="" />
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="centarSlide">
                <a href="">
                <img className="sliderCentarImage" src={podgorica3} alt="" />
                </a>
            </div>
        </Carousel.Item>
        {/* ... */}
    </Carousel>

  )
}





