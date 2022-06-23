import React from 'react'
import Link from 'next/link';
import pointImg from '../../public/images/centri/point.png';
import { MostarGallery } from '../../Components/centri/MostarGallery';
import checkGreen from '../../public/images/centri/check.png';
import greenSphere from '../../public/images/centri/sphere.png';


const Brcko = () => {
    return (
        <>
            

            <section id="centriBrcko" className="centriBrcko">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="titleTopCentri">
                                <img src={pointImg} alt="" />
                                <h1 className="title singleCentarTitle">Centar u Brčkom</h1>
                            </div>
                            <div className="infoCentar">
                                <div className="columns">
                                    <div className="column">
                                <p className="cityInfoTitle">Adresa:</p>
                                <p className="cityInfoTitle">Telefon:</p>
                                <p className="cityInfoTitle">Email:</p>
                                    </div>
                                    <div className="column is-10">
                                        <p><span className="cityInfoContent">Studentska 3</span></p>
                                        <p><span className="cityInfoContent">066 326 505</span></p>
                                        <p><span
                                        className="cityInfoContent">brcko@nomasvello.ba</span></p>
                                    </div>
                                </div>
                            </div>
                            <hr className="cityInfoHr" /> 
                            <div className="radnoVrijeme">
                                <p className="cityInfoTitle">Radno vrijeme:</p>
                                <div className="columns">
                                    <div className="column">
                                        <p className="cityInfoTitle strong">Ponedjeljak - petak:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 17:00h</span></p>
                                    </div>
                                    <div className="column">
                                    <p className="cityInfoTitle strong">Subota:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 15:00h</span></p>
                                    </div>
                                </div>
                            </div>
                            <Link href="https://nextjs.org/docs/api-reference/next/link">
                            <a className="naruciBtnCentri greenButton">Naručite se</a>
                            </Link>
                        </div>
                        <div className="column is-8">
                            <div className="sliderCentar">
                           <MostarGallery />
                            </div>
                            <div className="centarPonuda">
                                <div className="centarPonudaInner">
                                <p className="ponudaTitle">U ovom centru nudimo:</p>
                                <div className="columns">
                                    <div className="column padNone is-6">
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Fotoepilacija</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Fotopodmlađivanje</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Ultrazvučno čišćenje lica</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Čišćenje lica galvanskom energijom</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Personalizovani tretmani lica</p>
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Tretman akni</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mapaCentra">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.618734766892!2d18.80742251580235!3d44.87005598091067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c0c10206bca77%3A0xd00073b9dc0c01ed!2sNo%2BVello%C2%AE%20Br%C4%8Dko%20-%20Svjetski%20lider%20u%20laserskoj%20epilaciji!5e0!3m2!1sen!2sba!4v1643963100809!5m2!1sen!2sba" width="888" height="340" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <Link href="https://www.google.com/maps/place/No%2BVello%C2%AE+Br%C4%8Dko+-+Svjetski+lider+u+laserskoj+epilaciji/@44.870056,18.8074225,17z/data=!3m1!4b1!4m5!3m4!1s0x475c0c10206bca77:0xd00073b9dc0c01ed!8m2!3d44.8700522!4d18.8096112">
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

                                        <Link href="https://nextjs.org/docs/api-reference/next/link">
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
                                        <Link href="https://nextjs.org/docs/api-reference/next/link">
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
                                        <Link href="https://nextjs.org/docs/api-reference/next/link">
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

export default Brcko
