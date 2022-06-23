import React from 'react'
import Carousel from 'react-grid-carousel'
import testionialImg from '../public/images/homepage/testimonial.png'
import ArrowBtn from './ArrowButton'


// your custom dot component with prop `isActive`
const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '14px' : '8px',
        width: isActive ? '14px' : '8px',
        // background: '#2EC5CE',
        background: isActive ? 'transparent' : '#2EC5CE',
        border: isActive ? '3px solid #43B5B5' : 'none',
      }}
    ></span>
  )


export const TestimonialCarousel = () => {
    return (
      

        <Carousel dot={MyDot} cols={3} rows={1} gap={10} loop showDots>
            
        <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                    <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                    <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                    <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Toplo preporucujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Majda Vuk</p>
                    <p className="testimonialTown">Mostar</p>
                </div>
            </div>
        </Carousel.Item>
            
        
        
        
        {/* ... */}
    </Carousel>

  )
}





