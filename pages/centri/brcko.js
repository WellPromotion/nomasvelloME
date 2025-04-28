import React from 'react'
import Link from 'next/link';
import pointImg from '../../public/images/centri/point.png';
import { BrckoGallery } from '../../Components/centri/BrckoGallery';
import checkGreen from '../../public/images/centri/check.png';
import greenSphere from '../../public/images/centri/sphere.png';
import BrckoPopup from '../../Components/popups/BrckoPopup';

const Brcko = () => {
    return (
        <>
            

            <section id="centriBrcko" className="centriBrcko section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="titleTopCentri">
                                <img src={pointImg} alt="" />
                                <h1 className="title singleCentarTitle">Centar u Brčkom</h1>
                            </div>
                            <div className="infoCentar">
                                <div className="columns adressCols">
                                    <div className="column leftCol">
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
                                        <p className="cityInfoTitle strong">Ponedjeljak - Petak:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 20:00h</span></p>
                                        {/* <p className="cityInfoTitle strong">Utorak:</p>
                                        <p><span className="cityInfoContent strong workHours">12:00 - 20:00h</span></p>
                                        <p className="cityInfoTitle strong">Srijeda:</p>
                                        <p><span className="cityInfoContent strong workHours">11:00 - 19:00h</span></p>
                                        <p className="cityInfoTitle strong">Četvrtak:</p>
                                        <p><span className="cityInfoContent strong workHours">11:00 - 19:00h</span></p>
                                        <p className="cityInfoTitle strong">Petak:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 17:00h</span></p>
                                        <p className="cityInfoTitle strong">Subota:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 15:00h</span></p> */}
                                    </div>
                                    <div className="column">
                                    <p className="cityInfoTitle strong">Subota:</p>
                                        <p><span className="cityInfoContent strong workHours">09:00 - 15:00h</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* <Link href="https://nextjs.org/docs/api-reference/next/link">
                            <a className="naruciBtnCentri greenButton">Naručite se</a>
                            </Link> */}
                            <BrckoPopup />
                        </div>
                        <div className="column is-8">
                            <div className="sliderCentar">
                           <BrckoGallery />
                            </div>
                            <div className="centarPonuda">
                                <div className="centarPonudaInner">
                                <p className="ponudaTitle">U ovom centru nudimo:</p>
                                <div className="columns">
                                    <div className="column padNone is-6">
                                            <p className="ponudaItem"> <span className="greenCheckSpacing"><img src={checkGreen} alt="" /></span>Fotoepilacija IPL SHR</p>
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
                            <a className="pogledajMapuBtn greyButton" target='_blank'>Pogledaj na Google Maps</a>
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
                                        <p className="centriCityTitle">Tuzla</p>
                                        <p className="centriCitySubtitle">Centar u zgradi Avaza</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Maršala Tita br. 2</span></p>
                                                    <p> <span className="cityInfoContent">061 75 20 20</span></p>
                                                    <p><span className="cityInfoContent">tuzla@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/centri/tuzla">
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
                                        <p className="centriCityTitle">Doboj</p>
                                        <p className="centriCitySubtitle">Centar u Frizersko Kozmetickom Studiju “Mia”</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Makljenovac b.b.</span></p>
                                                    <p> <span className="cityInfoContent">061 888 595</span></p>
                                                    <p><span className="cityInfoContent">doboj@nomasvello.ba</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/doboj">
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
                                        <p className="centriCityTitle">Banja Luka</p>
                                        <p className="centriCitySubtitle">Centar u Banja Luci</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Bulevar cara Dušana 15</span>
                                                    </p>
                                                    <p> <span className="cityInfoContent">+051 258 150 | 066 486 645</span></p>
                                                    <p><span className="cityInfoContent">banjaluka@nomasvello.ba</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/banja-luka">
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
