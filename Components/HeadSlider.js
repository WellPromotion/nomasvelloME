import React from 'react'
import Slider from "react-slick";
import bullet from '../public/images/bulletPoint.svg';


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
              {/* <p className="preTitleHeaderSlider">
                NO+VELLO
              </p> */}
              <div className="inner">
              <p className="titleHeaderSlider">
                10 centara u BiH!
              </p>
              <p className="postTitleHeaderSlider">
                <img className='bulletPoint' src={bullet} alt="" /> sa najsavremenijom opremom <br />
                <img className='bulletPoint' src={bullet} alt="" /> pod nadzorom medicinskog osoblja <br />
                <img className='bulletPoint' src={bullet} alt="" /> sa najboljim cijenama <br />
                </p>
                <a href="/centri" className="vidiViseBtn">vidi više</a>
             </div>
             
            </div>
          </div>
        </div>
      </div>
      
      <div className='singleHeaderSlide1'>
        <div className="container">
          <div className="columns">
            <div className="column headerColTxt has-text-centered">
              {/* <p className="preTitleHeaderSlider">
                NO+VELLO
              </p> */}
             <div className="inner">
              <p className="titleHeaderSlider">
               Laserska epilacija
              </p>
              <p className="postTitleHeaderSlider">
              <img className='bulletPoint' src={bullet} alt="" /> laserska epilacija diodnim laserom <br />
              <img className='bulletPoint' src={bullet} alt="" /> fusion sistem <br />
              <img className='bulletPoint' src={bullet} alt="" /> efikasan, brz, siguran <br />
                </p>
                <a href="/usluge/laserska-epilacija" className="vidiViseBtn">vidi više</a>
             </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className='singleHeaderSlide2'>
        <div className="container">
          <div className="columns">
            <div className="column headerColTxt has-text-centered">
              {/* <p className="preTitleHeaderSlider">
                NO+VELLO
              </p> */}
              <div className="inner">
              <p className="titleHeaderSlider">
               Fotoepilacija IPL SHR
              </p>
              <p className="postTitleHeaderSlider">
              <img className='bulletPoint' src={bullet} alt="" /> aparati posljednje generacije <br />
              <img className='bulletPoint' src={bullet} alt="" /> putem lasera ili Intense Pulsed Light (IPL) <br />
              <img className='bulletPoint' src={bullet} alt="" /> efikasan, brz, siguran <br />
                </p>
                <a href="/usluge/fotoepilacija" className="vidiViseBtn">vidi više</a>
             </div>
             
            </div>
          </div>
        </div>
      </div>
      
       
      
        
        
    </Slider>
    
    );
  }