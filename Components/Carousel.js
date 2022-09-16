import React from 'react'
import Carousel from 'react-grid-carousel'
import sliderImage1 from '../public/images/homepage/sliderImage1.jpg'
import sliderImage2 from '../public/images/homepage/sliderImage2.jpg'
import sliderImage3 from '../public/images/homepage/sliderImage3.jpg'
import sliderImage4 from '../public/images/homepage/sliderImage4.jpg'
import sliderImage5 from '../public/images/homepage/sliderImage5.jpg'
import sliderImage6 from '../public/images/homepage/sliderImage6.jpg'





export const Gallery = () => {
    return (
      

    <Carousel cols={3} rows={1} gap={10} loop>
        <Carousel.Item>
            <div className="slickSlide">
                <a href="/kozmeticki-proizvodi/linija-za-revitalizaciju">
                <img className="sliderImage" src={sliderImage1} alt="" />
                <p className="sliderTitle">Linija za revitalizaciju</p>
                <p className="sliderSubtitle">Specijalna linija za osjetljivu i oštećenu kožu.</p>
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="slickSlide">
                <a href="/kozmeticki-proizvodi/kozmetika-za-ciscenje">
                <img className="sliderImage" src={sliderImage2} alt="" />
                <p className="sliderTitle">Kozmetika za čišćenje</p>
                <p className="sliderSubtitle">Ispravno čišćenje kože je osnova uspjeha svakog tretmana lica.</p>
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="slickSlide">
                <a href="/kozmeticki-proizvodi/linija-za-ucvrscivanje">
                <img className="sliderImage" src={sliderImage3} alt="" />
                <p className="sliderTitle">Linija za učvršćivanje</p>
                <p className="sliderSubtitle">Direktno djeluje protiv mlitavosti kože na licu.</p>
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
                <div className="slickSlide">
                <a href="/kozmeticki-proizvodi/linija-za-regeneraciju">
                <img className="sliderImage" src={sliderImage4} alt="" />
                <p className="sliderTitle">Linija za regeneraciju</p>
                <p className="sliderSubtitle">Osim hidratacije, potrebno je da kožu zaštitimo i regenerišemo.</p>
                </a>
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slickSlide">
                <a href="/kozmeticki-proizvodi/linija-protiv-nesavrsenosti-na-kozi">
                <img className="sliderImage" src={sliderImage5} alt="" />
                <p className="sliderTitle">Linija protiv nesavršenosti na koži</p>
                <p className="sliderSubtitle">Specifična linija za masnu kožu.</p>
                </a>
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slickSlide">
                <a href="/kozmeticki-proizvodi/linija-za-hidrataciju">
                <img className="sliderImage" src={sliderImage2} alt="" />
                <p className="sliderTitle">Linija za hidrataciju</p>
                <p className="sliderSubtitle">Hidratizuje kožu i održava je mladom.</p>
                </a>
            </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slickSlide">
                <a href="/kozmeticki-proizvodi/kozmetika-za-tijelo">
                <img className="sliderImage" src={sliderImage6} alt="" />
                <p className="sliderTitle">Kozmetika za tijelo</p>
                <p className="sliderSubtitle">Anticelulitni reduktor i tjelesni učvršćivač</p>
                </a>
            </div>
        </Carousel.Item>
        {/* ... */}
    </Carousel>

  )
}





