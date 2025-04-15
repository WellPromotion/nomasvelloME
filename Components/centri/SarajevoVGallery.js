// import React from 'react'
// import Carousel from 'react-grid-carousel'


// import centar from '../../public/images/centri/sarajevo-v/centar.jpg'
// import centar1 from '../../public/images/centri/sarajevo-v/centar1.jpg'
// import centar2 from '../../public/images/centri/sarajevo-v/centar2.jpg'
// import centar3 from '../../public/images/centri/sarajevo-v/centar3.jpg'
// import centar4 from '../../public/images/centri/sarajevo-v/centar4.jpg'
// import centar5 from '../../public/images/centri/sarajevo-v/centar5.jpg'
// import centar6 from '../../public/images/centri/sarajevo-v/centar6.jpg'
// import centar7 from '../../public/images/centri/sarajevo-v/centar7.jpg'
// import centar8 from '../../public/images/centri/sarajevo-v/centar8.jpg'
// import centar9 from '../../public/images/centri/sarajevo-v/centar9.jpg'

// // your custom dot component with prop `isActive`
// const MyDot1 = ({ isActive }) => (
//     <span 
//       style={{
//         display: 'inline-block',
//         height: isActive ? '10px' : '8px',
//         width: isActive ? '10px' : '8px',
//         // background: '#2EC5CE',
//         background: isActive ? '#9EBB31' : 'white',
//         // border: isActive ? '3px solid #43B5B5' : 'none',
//       }}
//     ></span>
//   )

// export const SarajevoVGallery = () => {
//     return (
      

//     <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
//         <Carousel.Item>
//             <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar1} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar2} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar3} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar4} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar5} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar6} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar7} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar8} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
//         <Carousel.Item>
//                 <div className="centarSlide">
//                 <a href="">
//                 <img className="sliderCentarImage" src={centar9} alt="" />
//                 </a>
//             </div>
//         </Carousel.Item>
        
//         {/* ... */}
//     </Carousel>

//   )
// }




import React from 'react'
import Carousel from 'react-grid-carousel'

// No need to import images here, just use the paths directly

// your custom dot component with prop `isActive`
const MyDot1 = ({ isActive }) => (
  <span 
    style={{
      display: 'inline-block',
      height: isActive ? '10px' : '8px',
      width: isActive ? '10px' : '8px',
      background: isActive ? '#9EBB31' : 'white',
    }}
  ></span>
)

export const SarajevoVGallery = () => {
  return (
    <Carousel dot={MyDot1} cols={1} rows={1} gap={10} loop showDots>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar.jpg" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar1.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar2.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar3.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar4.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar5.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar6.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar7.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar8.JPG" alt="" />
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="centarSlide">
          <a href="">
            <img className="sliderCentarImage" src="/images/centri/sarajevo-v/centar9.jpg" alt="" />
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

