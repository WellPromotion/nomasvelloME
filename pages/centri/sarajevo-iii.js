import React from 'react'
import Link from 'next/link';
import pointImg from '../../public/images/centri/point.png';
import { SarajevoIIIGallery } from '../../Components/centri/SarajevoIIIGallery';
import checkGreen from '../../public/images/centri/check.png';
import greenSphere from '../../public/images/centri/sphere.png';
import Popup from '../../Components/popups/NoviGradPopup'

const SarajevoIII = () => {
    return (
        <>
            

            <section id="centriSarajevoIII" className="centriSarajevoIII">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="titleTopCentri">
                                <img src={pointImg} alt="" />
                                <h1 className="title singleCentarTitle">Centar u Novom Gradu</h1>
                            </div>
                            <div className="infoCentar">
                                <div className="columns">
                                    <div className="column">
                                <p className="cityInfoTitle">Adresa:</p>
                                <p className="cityInfoTitle">Telefon:</p>
                                <p className="cityInfoTitle">Email:</p>
                                    </div>
                                    <div className="column is-10">
                                        <p><span className="cityInfoContent">Hamdije Kapidžića 11-12</span></p>
                                        <p><span className="cityInfoContent">033 766 130 | 061 136 373</span></p>
                                        <p><span
                                        className="cityInfoContent">dobrinja@nomasvello.ba</span></p>
                                    </div>
                                </div>
                            </div>
                            <hr className="cityInfoHr" /> 
                            <div className="radnoVrijeme">
                                <p className="cityInfoTitle">Radno vrijeme:</p>
                                <div className="columns">
                                    <div className="column">
                                        <p className="cityInfoTitle strong">Ponedjeljak - petak:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 20:00h</span></p>
                                    </div>
                                    <div className="column">
                                    <p className="cityInfoTitle strong">Subota:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 18:00h</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* <Link href="https://nextjs.org/docs/api-reference/next/link">
                            <a className="naruciBtnCentri greenButton">Naručite se</a>
                            </Link> */}
                            <Popup />
                        </div>
                        <div className="column is-8">
                            <div className="sliderCentar">
                           <SarajevoIIIGallery />
                            </div>
                            <div className="centarPonuda">
                                <div className="centarPonudaInner">
                                <p className="ponudaTitle">U ovom centru nudimo:</p>
                                <div className="columns">
                                    <div className="column padNone is-6">
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Fotoepilacija</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Fotopodmlađivanje</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Tjelesni učvršćivač</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Anticelulitni reduktor</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Facijalni anti-age</p>
                                    </div>
                                    <div className="column padNone">
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Izbjeljivanje zuba</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Ultrazvučno čišćenje lica</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Čišćenje lica galvanskom energijom</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Personalizovani tretmani lica</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Tretman akni</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mapaCentra">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4361714518977!2d18.35096761541074!3d43.82605334925419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c993c1ec6463%3A0x17805edcf5b7431!2sNo%2BVello%20Novi%20Grad!5e0!3m2!1sbs!2sba!4v1643899732205!5m2!1sbs!2sba" width="888" height="340" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <Link href="https://www.google.ba/maps/place/No%2BVello+Novi+Grad/@43.8260533,18.3509676,17z/data=!3m1!4b1!4m5!3m4!1s0x4758c993c1ec6463:0x17805edcf5b7431!8m2!3d43.8260543!4d18.353159">
                            <a className="pogledajMapuBtn greyButton">Pogledaj na Google Maps</a>
                            </Link>
                        </div>
                    </div>
                </div>

                

                <div className="container">
                <hr className="singleCentarHr" />
                    <div className="columns">
                        <div className="column">
                            <p className="ostaleLokacijeTitle">
                            Pogledaj i ostale lokacije
                            </p>
                        </div>
                    </div>
                    <div className="columns ostaleLokacijeColumns">
                    <div className="column">
                            <div className="boxCityOstale">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - I</p>
                                        <p className="centriCitySubtitle">Centar u Novom Sarajevu</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Kolodvorska 3B</span></p>
                                                    <p> <span className="cityInfoContent">+033 718 555</span></p>
                                                    <p><span className="cityInfoContent">info@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/centri/sarajevo-i">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="boxCityOstale">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - II</p>
                                        <p className="centriCitySubtitle">Centar u Starom Gradu</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Edhema Mulabdića 2</span></p>
                                                    <p> <span className="cityInfoContent">+033 447 351</span></p>
                                                    <p><span className="cityInfoContent">starigrad@nomasvello.ba</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/sarajevo-ii">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="boxCityOstale">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - III</p>
                                        <p className="centriCitySubtitle">Centar u Novom Gradu</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Hamdije Kapidžića 11-12</span>
                                                    </p>
                                                    <p> <span className="cityInfoContent">+033 766 130</span></p>
                                                    <p><span className="cityInfoContent">dobrinja@nomasvello.ba</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/sarajevo-iii">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

           

                


            
        </>
    )
}

export default SarajevoIII
