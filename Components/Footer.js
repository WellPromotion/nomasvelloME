import React from 'react'
import logoFooter from '../public/images/footer/logoGreen.svg'
import phoneLogo from '../public/images/footer/icons/phone.svg'
import inboxLogo from '../public/images/footer/icons/inbox.svg'

export const Footer = () => {
    const today = new Date();
    return (
        <>
            
            <section id="footer" className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="logoFooter">
                                <img src={logoFooter} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="columns spaceBetween">
                        <div className="column firstColumn is-3">
                            <p>
                                No+Vello© je svjetski lider u estetskim centrima specijalizovanim za lasersku epilaciju,
                                fotoepilaciju i fotopodmlađivanje. Kompanija je osnovana u novembru 2007. i ima preko
                                1.000 centara u 16 zemalja. Mi smo firma koja je posvećena svijetu depilacije i koju
                                čini veliki broj profesionalaca, sa velikim iskustvom u sektoru ljepote i lične njege.
                                <br /><br />
                                <span className="isGreen">Br. 1 u svijetu među centrima za lasersku epilaciju.</span>
                            </p>
                        </div>
                        <div className="column secondColumn is-4">
                            <div className="firstRow">
                                <p className="footerTitle">
                                    Najposjećenije usluge
                                </p>
                            </div>
                            <div className="secondRow">
                                <a href="" className="footerLink isGreen">Laserska Epilacija</a> <span> – </span>
                                <a href="" className="footerLink isGreen">Fotoepilacija IPL SHR</a><span> – </span>
                                <a href="" className="footerLink isGreen">Fotopodmlađivanje</a><span> – </span>
                                <a href="" className="footerLink isGreen">Ultrazvučno čišćenje lica</a><span> – </span>
                                <a href="" className="footerLink isGreen">Tretman akni</a><span> – </span>
                                <a href="" className="footerLink isGreen">Facijalni anti-age</a><span> – </span>
                                <a href="" className="footerLink isGreen">Izbjeljivanje zuba</a><span> – </span>
                                <a href="" className="footerLink isGreen">Tjelesni učvršćivač</a><span> – </span>
                                <a href="" className="footerLink isGreen">Anticelulitni reduktor</a>
                            </div>
                            <div className="firstRow thirdRow">
                                <p className="footerTitle">
                                    Posjetite No+Vello centre:
                                </p>
                            </div>
                            <div className="secondRow">
                                <a href="" className="footerLink isGreen">Sarajevo</a> <span> / </span>
                                <a href="" className="footerLink isGreen">Mostar</a><span> / </span>
                                <a href="" className="footerLink isGreen">Banja Luka</a><span> / </span>
                                <a href="" className="footerLink isGreen">Tuzla</a><span> / </span>
                                <a href="" className="footerLink isGreen">Zenica</a><span> / </span>
                                <a href="" className="footerLink isGreen">Doboj</a><span> / </span>
                                <a href="" className="footerLink isGreen">Brčko</a><span> / </span>
                                <a href="" className="footerLink isGreen">Teslić</a><span> / </span>
                                <a href="" className="footerLink isGreen">Ljubuški</a>
                            </div>
                        </div>
                        <div className="column thirdColumn is-2">
                            <div className="firstRow">
                                <p className="footerTitle">
                                    Kontakt
                                </p>
                                <p>
                                    <a href="" className="kontaktLinks isGreen footerLink"> <span><img src={phoneLogo}
                                                alt="" /></span> +1 844 2311 0113</a>
                                </p>
                                <p>
                                    <a href="" className="kontaktLinks isGreen footerLink"> <span><img src={inboxLogo}
                                                alt="" /></span> bih@nomasvello.com</a>
                                </p>
                            </div>
                            <div className="secondRow">
                                <p className="footerTitle">
                                    Naše tehnologije
                                </p>
                                <ul className="technologiesList">
                                    <li><a href="">IPL Technology</a></li>
                                    <li><a href="">Laser Technology</a></li>
                                    <li><a href="">Sun & Safe</a></li>
                                    <li><a href="">LED Technology</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <hr className="footerHr" />
                            <p className="footerCopyright">
                                Copyright <span>{today.getFullYear()}</span> Nomasvello Bosna i Hercegovina | Sva prava pridržana
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
