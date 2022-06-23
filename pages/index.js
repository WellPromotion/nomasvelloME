import Head from 'next/head'
import Footer from '../Components/Footer'
import styles from '../styles/Home.module.scss'
import bellowTitleImg from "../public/images/belowTitle.png"
import { Gallery } from '../Components/Carousel';
import { TestimonialCarousel } from '../Components/TestimonialsMain';
import womanImg from "../public/images/homepage/plan-si-quiero-nomasvello.png"
import threeHeads from "../public/images/homepage/three-heads.png"
import partnerBg from "../public/images/homepage/partner-bg.png"
import logoWhite from "../public/images/homepage/white-logo.png"
import priceTag from "../public/images/homepage/priceTag.png"
import HeadSlider from '../Components/HeadSlider';
import locationIcon from '../public/images/locationIcon.svg'
import downArrow from '../public/images/down-arrow.svg'
import MapSection from '../Components/Map.js';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Home() {
  return (
  
    <>
      
      <Head>
        <title>No+Vello - Svjetski lider u fotoepilaciji i fotopodmlađivanju</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <section id="sliderIntro" className="sIntro">
      <div className="heroSlider">
      <HeadSlider/>
      </div>
      </section>
      
      <section id="homeSubslider" className="subSlider">
        <div className="container">
          <div className="columns level">
            <div className="column level-left is-4">
              <div className="titlePart">
                <h1 className={styles.title}>
                  PROFESIONALNA <br /> NO+VELLO KOZMETIKA
                </h1>
              </div>
              <div className={styles.bellowTitle}>
                <img src={bellowTitleImg} alt="" />
              </div>
              <div className="textProfesionalnaKozmetika">
                <p>
                  Najšira lepeza profesionalne kozmetike namijenjena isticanju vaše ljepote u odnosu na vaše potrebe.
                  Specijalizovani No+Vello proizvodi koji dopunjuju vaše tretmane fotoepilacije, tretmane lica i
                  tijela.
                </p>
              </div>
            </div>
            <div className="column level-right is-7">
              <div className="carouselSlider">
                <Gallery />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="staNovello" className="staNovello">
        <div className="container">
          <div className="columns">
            <div className="column level-left">
              <img src={womanImg} alt="" />
            </div>
            <div className="column level-right is-6">
            <div className="titlePart">
                <h1 className={styles.title}>
                ŠTA JE NO+VELLO<br /> TEHNOLOGIJA?
                </h1>
              </div>
              <div className={styles.bellowTitle}>
                <img src={bellowTitleImg} alt="" />
              </div>
              <div className="textStaNovello">
                <p>
                Lectus imperdiet amet quis ac diam quam aenean nulla. Maecenas vitae bibendum metus, egestas aliquam amet amet tellus. Duis ac faucibus sit molestie mattis adipiscing ante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="savremenaDepilacija" id="savremenaDepilacija">
        <div className="container">
          <div className="columns">
            <div className="column is-8 level-left">
              <div className="titlePart">
                <h1 className={styles.title}>
                  SAVREMENA DEPILACIJA / EPILACIJA <br /> I ESTETSKI TRETMANI
                </h1>
              </div>
              <div className={styles.bellowTitle}>
                <img src={bellowTitleImg} alt="" />
              </div>
              <div className="textSavremenaDepilacija">
                <p>
                  No+Vello® je svjetski lider u estetskim centrima specijalizovanim za lasersku epilaciju, fotoepilaciju
                  i <br /> fotopodmlađivanje.
                  <br />
                  <br />
                  Usluge koje se nude u našim centrima u BiH: </p>
              </div>
              <div className="depilacijaTextbox">
                <div className="depilacijaBox">
                  <ul>
                    <li className="listTitle extraMargin">Depilacija - moderne, visoko efikasne metode depilacije poput:</li>
                      <ul>
                        <li className="listItem">Laserske epilacije</li>
                        <li className="listItem">Fotoepilacije putem IPL tehnologije.</li>
                      </ul>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle extraMargin">Anti age tretmani</li>
                      <ul>
                        <li className="listItem">Fotopodmlađivanje – savremena anti age metoda koja se primjenjuje pretežno na licu, vratu, dekolteu i šakama.</li>
                        <li className="listItem">Facijalni anti age – Aktivna njega lica kao kombinacija profesionalnih kozmetičkih proizvoda i LED svjetlosne terapije, efikasno vraća svježinu i sjaj kože</li>
                      </ul>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle">Izbjeljivanje zuba – Kombinacija LED svjetlosti i prirodnih supstanci. Blag, brz, ugodan i efikasan tretman za izvornu bjelinu zuba.</li>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle">Tjelesni učvršćivač – Kombinacijom specifičnih receptura i LED uređaja potičemo proizvodnju kolagena i elastina za elastičnost i glatkoću kože.</li>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle">Anticelulitni reduktor – Tretman sa anti-celulitnim reduktorom pruža nehiruršku alternativu za efikasno tretiranje celulita.</li>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle">Tretmani za čišćenje kože lica i tijela – Blago i efikasno dubinsko čišćenje i uklanjanje nečistoća sa kože uz upotrebu najinovativnijih tehnologija (ultrazvuk i galvanska energija) i kozmetičkih preparata sa vlastitim recepturama.</li>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle">Tretmani akni (bubuljica) IPL tehnologijom – više od 70% uspjelih tretmana akni (bubuljica) u svijetu ostvareno je IPL tehnologijom.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-4 level-right">
              <div className="threeBoxes">
                <div className="firstBox">
                  <div className="inner">
                    <img src={threeHeads} alt="" />
                    <p className="numberEleven">11</p>
                    <p className="firstText">NO+VELLO centara za savremenu depilaciju i epilaciiju u BiH</p>
                  </div>
                </div>
                <div className="secondBox">
                <div className="innerOverlay"></div>
                  <div className="inner">
                    <p className="firstTitlePart">Postanite</p>
                    <img src={logoWhite} alt="" />
                    <p className="secondTitlePart">partner.</p>

                  </div>
                </div>
                <div className="thirdBox">
                  <div className="inner">
                    <img src={priceTag} alt="" />
                    <p className="numberEleven">49KM</p>
                    <p className="firstText">Cijena po zoni i sesiji</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mapPart" className="mapPart">
        <div className="container">
          
            <MapSection/>
           
        </div>
      </section>

      {/* <section id="najcitanijiClanci" className="najcitanijiClanci">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="titlePart">
              <h1 id="najcitanijiTitle" className={styles.title}>
                   NAJČITANIJI ČLANCI
                </h1>
              </div>
              <div id="najcitanijiImg" className={styles.bellowTitle}>
                <img src={bellowTitleImg} alt="" />
              </div> */}
              {/* SLIDER PART */}
            {/* </div>
          </div>
        </div>
      </section> */}

      <section id="klijentiTestimonials" className="klijentiTestimonials">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="titlePart">
                <h1 id="klijentiTitle" className={styles.title}>
                  Klijenti o nama
                </h1>
              </div>
              <div id="klijentiImg" className={styles.bellowTitle}>
                <img src={bellowTitleImg} alt="" />
              </div>
              <div className="testimonialsSub">
                <p>
                Mi smo u potpunosti posvećeni našim klijentima i vodimo <br /> računa o njihovim potrebama!
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
            <div className="testimonialSlider">
                < TestimonialCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      

    
    </>
  )
}


