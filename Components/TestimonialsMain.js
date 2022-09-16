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
                    <p className="testimonialTitle">Mogu samo dalje da preporučim</p>
                    <p className="testimonialSubtitle">Nakon 6 tretmana fotoepilacije – komplet nogu i bikini zone, ovako nešto mogu samo dalje da preporučim svakome želi efikasno i povoljno da se riješi dlaka. Vjerujte mi, sada tek vidim koliko sam uštedjela novaca i vremena kroz tretmane kod No+Vello.</p>
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
                    <p className="testimonialTitle">Stručno i ljubazno osoblje</p>
                    <p className="testimonialSubtitle">Stručno i ljubazno osoblje koje ima odgovor na sva moja pitanja; konsultacija s dermatologom; ugodan, moderan i relaksirajući ambijent.</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Eldina Zukić</p>
                    <p className="testimonialTown">Sarajevo</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                    <p className="testimonialTitle">Toplo preporučujem!</p>
                    <p className="testimonialSubtitle">Imala sam problema sa rastom dlaka kao i sa urastanjem, a sve je to nestalo redovnim tretmanima u No-Vellu. Sada nakon što sam postigla željeni rezultat, idem samo 1 ili 2 puta godišnje na održavanje. Osim što je na duže staze ekonomičnija opcija, mogu iskreno reći da je tretman fotoepilacijom i dosta manje bolan od običnih depilacija. Toplo preporučujem!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Ivana Vujaković</p>
                    <p className="testimonialTown">Banja Luka</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Pozitivni utisci!</p>
                    <p className="testimonialSubtitle">Želim da vam prenesem pozitivne utiske koje imam već godinama, prvo ja, a sada i moja kćerka. Profesionalnost, usluga, ljubaznost, baš sve je na zavidnom nivou. Koristim svaku priliku da vas pohvalim i prenesem moje zadovoljstvo i pozitivno iskustvo, kako na prijatelje, tako i na forume i grupe na društvenim mrežama.😊</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Ana Milidrag</p>
                    <p className="testimonialTown">Sarajevo</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Stručnost i vrhunski kvalitet!</p>
                    <p className="testimonialSubtitle">Sve pohvale za stručnost i vrhunski kvalitet usluga! Osoblje je veoma ljubazno i pristupačno, te je ovo nešto što svaka dama sebi treba priuštiti!</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Maida Kovač</p>
                    <p className="testimonialTown">Sarajevo</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Sve preporuke.</p>
                    <p className="testimonialSubtitle">Malo je reći da sam zadovoljna svim tretmanima koje pružaju, jer su učinkoviti. Rezultati se brzo primjete. Pored toga osoblje je ljubazno, ambijent je ugodan, ali najbitnije je da je svaki tretman kvalitetan. Sve preporuke.</p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Elmedina Oruli</p>
                    <p className="testimonialTown">Sarajevo</p>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="testimonialSlide">
                <div className="testimonialInner">
                <p className="testimonialTitle">Iskrene preporuke</p>
                    <p className="testimonialSubtitle">Jedino mjesto gdje rado ostavljam svoj novac i svoje vrijeme.Hvala vam što postojite.Riješiti se dlaka više nije mit i nije nemoguća misija uz vas.
Iskrene preporuke za sve one koji muku muče s dlakama. </p>
                </div>
                <div className="testimonialBellow">
                    <img className="testionialImg" src={testionialImg} alt="" />
                    <p className="testimonialName">Amra Mrkonja</p>
                    <p className="testimonialTown">Sarajevo</p>
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





