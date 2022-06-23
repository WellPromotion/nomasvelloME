import React from 'react'
import Carousel from 'react-grid-carousel'
import sliderImage1 from '../public/images/homepage/sliderImage1.png'
import sliderImage2 from '../public/images/homepage/sliderImage2.png'




export const Gallery = () => {
    return (
      

    <Carousel cols={3} rows={1} gap={10} loop>
        <Carousel.Item>
            <div className="slickSlide">
                <a href="">
                <img className="sliderImage" src={sliderImage1} alt="" />
                <p className="sliderTitle">Linija za revitalizaciju</p>
                <p className="sliderSubtitle">Specijalna linija za osjetljivu i oštećenu kožu.</p>
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="slickSlide">
                <a href="">
                <img className="sliderImage" src={sliderImage2} alt="" />
                <p className="sliderTitle">Kozmetika za čišćenje</p>
                <p className="sliderSubtitle">Ispravno čišćenje kože je osnova uspjeha svakog tretmana lica.</p>
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="slickSlide">
                <a href="">
                <img className="sliderImage" src={sliderImage1} alt="" />
                <p className="sliderTitle">Linija za učvršćivanje</p>
                <p className="sliderSubtitle">Direktno djeluje protiv mlitavosti kože na licu.</p>
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="slickSlide">
                <a href="">
                <img className="sliderImage" src={sliderImage2} alt="" />
                <p className="sliderTitle">Linija za revitalizaciju</p>
                <p className="sliderSubtitle">Specijalna linija za osjetljivu i oštećenu kožu.</p>
                </a>
            </div>
        </Carousel.Item>
        {/* ... */}
    </Carousel>

  )
}





