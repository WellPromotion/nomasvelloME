import React from 'react'
import Link from 'next/link';
import pointImg from '../../public/images/centri/point.png';
import { SarajevoIGallery } from '../../Components/centri/SarajevoIGallery';
import checkGreen from '../../public/images/centri/check.png';
import greenSphere from '../../public/images/centri/sphere.png';
import Popup from 'reactjs-popup';
import Popup1 from '../../Components/popups/NovoSarajevoPopup';

const SarajevoI = () => {
    return (
        <>
            

            <section id="centriSarajevoI" className="centriSarajevoI">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="titleTopCentri">
                                <img src={pointImg} alt="" />
                                <h1 className="title singleCentarTitle">Centar u Novom Sarajevu</h1>
                            </div>
                            <div className="infoCentar">
                                <div className="columns">
                                    <div className="column">
                                <p className="cityInfoTitle">Adresa:</p>
                                <p className="cityInfoTitle">Telefon:</p>
                                <p className="cityInfoTitle">Email:</p>
                                    </div>
                                    <div className="column is-10">
                                        <p><span className="cityInfoContent">Kolodvorska
                                            3B</span></p>
                                        <p><span className="cityInfoContent">033 718
                                            555 | 061 134 946</span></p>
                                        <p><span
                                        className="cityInfoContent">info@nomasvello.ba</span></p>
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
                            {/* <Popup
                                trigger={<button className="naruciBtnCentri greenButton">Naručite se</button>} position="right center">
                                <div>Popup content here !!</div>
                            </Popup> */}
                            <Popup1/>
                        </div>
                        <div className="column is-8">
                            <div className="sliderCentar">
                           <SarajevoIGallery />
                            </div>
                            <div className="centarPonuda">
                                <div className="centarPonudaInner">
                                <p className="ponudaTitle">U ovom centru nudimo:</p>
                                <div className="columns">
                                        <div className="column padNone is-6">
                                        <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Laserska epilacija diodnim laserom</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Fotoepilacija IPL SHR</p>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1981.1901006630171!2d18.388858714880683!3d43.85351886320726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x4758c9c0e11ee2b9%3A0xe39d30e18cdebaf3!2sNo%2BVello%20Novo%20Sarajevo%2C%20Kolodvorska%203b%2C%20Sarajevo%2071000!3m2!1d43.8541149!2d18.3898045!5e0!3m2!1sen!2sba!4v1636027235470!5m2!1sen!2sba" width="888" height="340" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <Link href="https://www.google.com/maps/dir//No%2BVello+Novo+Sarajevo,+Kolodvorska+3b,+Sarajevo+71000/@43.8541672,18.3547635,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x4758c9c0e11ee2b9:0xe39d30e18cdebaf3!2m2!1d18.3898045!2d43.8541149!3e2">
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
                        <div className="column">
                            <div className="boxCityOstale">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - IV</p>
                                        <p className="centriCitySubtitle">Centar na Ilidži</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Rustempašina 1 – TC SARA</span></p>
                                                    <p> <span className="cityInfoContent">+033 620 077</span></p>
                                                    <p><span className="cityInfoContent">ilidza@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/centri/sarajevo-iv">
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

export default SarajevoI
