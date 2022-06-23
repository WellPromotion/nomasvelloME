import React from 'react'
import Slider from "react-slick";


export default function HeadSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
  return (
      
    <Slider {...settings}>
      
      <div className='singleHeaderSlide'>
        <div className="container">
          <div className="columns">
            <div className="column headerColTxt has-text-centered">
              <p className="preTitleHeaderSlider">
                NO+VELLO
              </p>
              <p className="titleHeaderSlider">
                13 centara <br />
                u BiH!
              </p>
              <a href="https://google.com" className="vidiViseBtn">vidi više</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className='singleHeaderSlide'>
        <div className="container">
          <div className="columns">
            <div className="column headerColTxt has-text-centered">
              <p className="preTitleHeaderSlider">
                NO+VELLO
              </p>
              <p className="titleHeaderSlider">
                13 centara <br />
                u BiH!
              </p>
              <a href="https://google.com" className="vidiViseBtn">vidi više</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className='singleHeaderSlide'>
        <div className="container">
          <div className="columns">
            <div className="column headerColTxt has-text-centered">
              <p className="preTitleHeaderSlider">
                NO+VELLO
              </p>
              <p className="titleHeaderSlider">
                13 centara <br />
                u BiH!
              </p>
              <a href="https://google.com" className="vidiViseBtn">vidi više</a>
            </div>
          </div>
        </div>
      </div>
      
       
      
        
        
    </Slider>
    
    );
  }