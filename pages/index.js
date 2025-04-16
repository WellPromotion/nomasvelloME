import Head from 'next/head'
import Footer from '../Components/Footer'
import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import bellowTitleImg from '../public/images/belowTitle.png'
import { Gallery } from '../Components/Carousel';
import { TestimonialCarousel } from '../Components/TestimonialsMain';
import threeHeads from "../public/images/homepage/three-heads.png"
import logoWhite from "../public/images/homepage/white-logo.png"
import priceTag from "../public/images/homepage/priceTag.png"
import HeadSlider from '../Components/HeadSlider';
import locationIcon from '../public/images/locationIcon.svg'
import downArrow from '../public/images/down-arrow.svg'
import MapSection from '../Components/Map.js';
import ReactPlayer from 'react-player';
import novelloTehnologija from '../public/images/novello-tehnologija.jpg';
import poklonVauceri from '../public/images/homepage/poklon-vauceri.jpg'
import specijalnePonude from '../public/images/homepage/ponude.jpg'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Home() {
  return (
  
    <>
      
      <Head>
        <title>No+Vello® - Svjetski lider u laserskoj epilaciji</title>
        {/* <link rel="icon" href="favicon-v1.png" type="image/png" /> */}
        {/* <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/> */}
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />

        <meta name="viewport" content="width=device-width" />
       
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
                <img src={bellowTitleImg} alt="." />
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
      
      <section id="twoBoxes" className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <a href="/poklonite-ljepotu">
              <div className="singleBox">
                <div className="inner">
                <img src={poklonVauceri} alt="" />
                <p className="boxTitle">NO+VELLO Poklon bonovi</p>
                <p className="boxText defaultText">Poklonite ljepotu! Tretman trajne epilacije ili tretman lica ili tijela su uvijek savršen poklon Vama najdražoj dami.</p>
               </div>
              </div>
              </a>
            </div>
            <div className="column">
              <a href="/otkrijte-nase-ponude-i-promocije">
              <div className="singleBox">
                <div className="inner">
                <img src={specijalnePonude} alt="" />
                <p className="boxTitle">NO+VELLO – specijalne ponude i promocije</p>
                <p className="boxText defaultText">Iskoristite mnogobrojne ponude i promocije, omogućite si još povoljnije tretmane u Vašim No+Vello® centrima.</p>
               </div>
              </div>
             </a>
            </div>
          </div>
        </div>
      </section>

      <section id="staNovello" className="staNovello">
        <div className="container">
          <div className="columns level">
            <div className="column level-left">
              <img src={novelloTehnologija} alt="" />
              {/* <div className="videoInner">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=Egq-DgaikLQ" width='570px' height='330px' controls />
                            </div> */}
            </div>
            <div className="column level-right is-6">
            <div className="titlePart">
                <h1 className={styles.title}>
                Najbolje cijene najveće franšize za dugotrajno uklanjanje dlačica na svijetu!
                </h1>
              </div>
              <div className={styles.bellowTitle}>
                <img src={bellowTitleImg} alt="" />
              </div>
              <div className="textStaNovello">
                <p>
                <b>No+Vello®</b>  je prva i globalno najuspješnija franšiza na području dugotrajne epilacije, čemu svjedoči više od 1000 centara i više od 1.000.000 zadovoljnih korisnika u 16 zemalja.
                  <br />
                  Dio ove uspješne priče je i No+Vello® Bosna i Hercegovina, koji se može pohvaliti sa <b>10 centara u Bosni i Hercegovini</b>, <u>specijaliziranih za područje laserske epilacije i fotoepilacije</u> - dugotrajnog uklanjanja dlačica uz pomoć svjetla. 
                  <br /><br />
                  Naša inovativna i pristupačna <b>unisex cijena od 59KM po zoni i sesiji</b> napravila je revoluciju na tržištu u području dugotrajnog uklanjanja dlačica. Ključ našeg uspjeha je <b>najsavremenija tehnologija</b> i najbolji protokoli rada koji nam zahvaljujući globalnoj prisutnosti omogućuju <b>pružanje visokokvalitetnih usluga epilacije po vrlo pristupačnoj cijeni.</b>
                  
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
                        <li className="listItem"><a href="/usluge/laserska-epilacija">Laserske epilacije.</a></li>
                        <li className="listItem"><a href="/usluge/fotoepilacija">Fotoepilacije putem IPL tehnologije.</a></li>
                      </ul>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle extraMargin">Anti age tretmani</li>
                      <ul>
                        <li className="listItem"><a href="/usluge/fotopodmladjivanje">Fotopodmlađivanje</a> – savremena anti age metoda koja se primjenjuje pretežno na licu, vratu, dekolteu i šakama.</li>
                        <li className="listItem"><a href="/usluge/facijalni-anti-age">Facijalni anti age</a> – Aktivna njega lica kao kombinacija profesionalnih kozmetičkih proizvoda i LED svjetlosne terapije, efikasno vraća svježinu i sjaj kože</li>
                      </ul>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle"><a href="/usluge/izbjeljivanje-zuba">Izbjeljivanje zuba</a></li>
                    <ul>
                        <li className="listItem">Kombinacija LED svjetlosti i prirodnih supstanci.</li>
                        <li className="listItem">Blag, brz, ugodan i efikasan tretman za izvornu bjelinu zuba.</li>
                      </ul>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle"><a href="/usluge/tjelesni-ucvrscivac">Tjelesni učvršćivač</a></li>
                    <ul>
                        <li className="listItem">Kombinacija specifičnih receptura i LED uređaja.</li>
                        <li className="listItem">Proizvodnja kolagena i elastina za elastičnost i glatkoću kože.</li>
                      </ul>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle"><a href="/usluge/tjelesni-ucvrscivac">Anticelulitni reduktor</a></li>
                    <ul>
                        <li className="listItem"><a href="/usluge/tjelesni-ucvrscivac">Tretman sa anti-celulitnim reduktorom.</a></li>
                        <li className="listItem">Nehirurška alternativa za <a href="/usluge/tjelesni-ucvrscivac">efikasno tretiranje celulita.</a></li>
                      </ul>
                  </ul>    
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle"><a href="/usluge/ultrazvucno-ciscenje-lica">Tretmani za čišćenje kože lica i tijela</a></li> 
                    <ul>
                        <li className="listItem">Blago i efikasno <a href="/usluge/ultrazvucno-ciscenje-lica">dubinsko čišćenje i uklanjanje nečistoća sa kože.</a></li>
                        <li className="listItem">Upotreba <a href="/tehnologije/ultrazvucna-tehnologija">najinovativnijih tehnologija (ultrazvuk i galvanska energija)</a> i <a href="/kozmeticki-proizvodi">kozmetičkih preparata</a> sa vlastitim recepturama.</li>
                      </ul>
                  </ul>
                </div>
                <hr />
                <div className="depilacijaBox">
                <ul>
                    <li className="listTitle"><a href="/usluge/tretman-akni">Tretmani akni (bubuljica)</a></li>
                    <ul>
                        <li className="listItem">radi se <a href="/tehnologije/ipl-tehnologija">IPL tehnologijom.</a></li>
                        <li className="listItem">više od 70% uspjelih <a href="/usluge/tretman-akni">tretmana akni (bubuljica) u svijetu.</a></li>
                      </ul>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-4 level-right">
              <div className="threeBoxes">
                <div className="firstBox">
                  <a href="/centri"><div className="inner">
                    <img src={threeHeads} alt="" />
                    <p className="numberEleven">10</p>
                    <p className="firstText">NO+VELLO centara za savremenu depilaciju i epilaciiju u Bosni i Hercegovini</p>
                  </div></a>
                </div>
                <div className="secondBox">
                  <a href="/fransize">
                  <div className="innerOverlay"></div>
                  <div className="inner">
                    <p className="firstTitlePart">Postanite</p>
                    <img src={logoWhite} alt="" />
                    <p className="secondTitlePart">partner.</p>
                  </div>
                </a>
                </div>
                <div className="thirdBox">
                  <a href="/usluge/fotoepilacija#diodniZone"><div className="inner">
                    <img src={priceTag} alt="" />
                    <p className="numberEleven">59KM</p>
                    <p className="firstText">Cijena po zoni i sesiji</p>
                  </div></a>
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


