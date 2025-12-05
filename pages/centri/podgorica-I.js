import React from 'react'
import Link from 'next/link';
import pointImg from '../../public/images/centri/point.png';
import { PodgoricaIGallery } from '../../Components/centri/PodgoricaIGallery';
import checkGreen from '../../public/images/centri/check.png';
import greenSphere from '../../public/images/centri/sphere.png';
import PodgoricaIPopup from '../../Components/popups/PodgoricaIPopup';

const PodgoricaI = () => {
    return (
        <>
            

            <section id="centriBanjaLuka" className="centriBanjaLuka section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="titleTopCentri">
                                <img src={pointImg} alt="" />
                                <h1 className="title singleCentarTitle">Centar u Podgorici I</h1>
                            </div>
                            <div className="infoCentar">
                                <div className="columns adressCols">
                                    <div className="column leftCol">
                                <p className="cityInfoTitle">Adresa:</p>
                                <p className="cityInfoTitle">Telefon:</p>
                                <p className="cityInfoTitle">Email:</p>
                                    </div>
                                    <div className="column is-10">
                                        <p><span className="cityInfoContent">4. jula br. 107/14 - Siva Zetagradnja</span></p>
                                        <p><span className="cityInfoContent">+382 (0)67 03 83 03</span></p>
                                        <p><span
                                        className="cityInfoContent">montenegro@nomasvello.me</span></p>
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
                            <PodgoricaIPopup/>
                        </div>
                        <div className="column is-8">
                            <div className="sliderCentar">
                           <PodgoricaIGallery />
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.2353831408177!2d19.258321035486798!3d42.4276909631382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb13561dde07%3A0x5667ba37b1cd223b!2s14%2C%20Zetagradnja%2C%20107%204.%20Jul%2C%20Podgorica%2081101%2C%20Montenegro!5e1!3m2!1sen!2sba!4v1764442001685!5m2!1sen!2sba" width="888" height="340" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                            </div>
                            <Link href="https://www.google.com/maps/place/14,+Zetagradnja,+107+4.+Jul,+Podgorica+81101,+Montenegro/@42.427691,19.258321,279m/data=!3m1!1e3!4m5!3m4!1s0x134deb13561dde07:0x5667ba37b1cd223b!8m2!3d42.4257525!4d19.2589242?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D">
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
                                        <p className="centriCityTitle">Podgorica II</p>
                                        <p className="centriCitySubtitle">Kod Krivog Mosta</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Dr. Vukašina Markovića bb</span></p>
                                                    <p> <span className="cityInfoContent">+382 (0)67 820 437</span></p>
                                                    <p><span className="cityInfoContent">krusevac@nomasvello.me</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/centri/podgorica-II">
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

export default PodgoricaI
