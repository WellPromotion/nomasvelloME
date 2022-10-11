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
                                <a href="/usluge/laserska-epilacija" className="footerLink isGreen">Laserska Epilacija</a> <span> – </span>
                                <a href="/usluge/fotoepilacija" className="footerLink isGreen">Fotoepilacija IPL SHR</a><span> – </span>
                                <a href="/usluge/fotopodmladjivanje" className="footerLink isGreen">Fotopodmlađivanje</a><span> – </span>
                                <a href="/usluge/ultrazvucno-ciscenje-lica" className="footerLink isGreen">Ultrazvučno čišćenje lica</a><span> – </span>
                                <a href="/usluge/tretman-akni" className="footerLink isGreen">Tretman akni</a><span> – </span>
                                <a href="/usluge/facijalni-anti-age" className="footerLink isGreen">Facijalni anti-age</a><span> – </span>
                                <a href="/usluge/izbjeljivanje-zuba" className="footerLink isGreen">Izbjeljivanje zuba</a><span> – </span>
                                <a href="/usluge/tjelesni-ucvrscivac" className="footerLink isGreen">Tjelesni učvršćivač</a>
                            </div>
                            <div className="firstRow thirdRow">
                                <p className="footerTitle">
                                    Posjetite No+Vello centre:
                                </p>
                            </div>
                            <div className="secondRow">
                                <a href="/centri/sarajevo-i" className="footerLink isGreen">Sarajevo</a> <span> / </span>
                                <a href="/centri/banja-luka" className="footerLink isGreen">Banja Luka</a><span> / </span>
                                <a href="/centri/tuzla" className="footerLink isGreen">Tuzla</a><span> / </span>
                                <a href="/centri/zenica" className="footerLink isGreen">Zenica</a><span> / </span>
                                <a href="/centri/doboj" className="footerLink isGreen">Doboj</a><span> / </span>
                                <a href="/centri/brcko" className="footerLink isGreen">Brčko</a>
                            </div>
                            
                            <div className="firstRow thirdRow">
                                <p className="footerTitle">
                                    Naručite se:
                                </p>
                            </div>
                            <div className="secondRow">
                                <a href="/besplatan-probni-tretman" className="footerLink isGreen">Besplatan probni tretman</a>
                            </div>
                        </div>
                        <div className="column thirdColumn is-2">
                            <div className="firstRow">
                                <p className="footerTitle">
                                    Kontakt
                                </p>
                                <p>
                                    <a href="tel:+38733718555" className="kontaktLinks isGreen footerLink"> <span><img src={phoneLogo}
                                                alt="" /></span> 033 718 555</a>
                                </p>
                                <p>
                                    <a href="mail:bih@nomasvello.com" className="kontaktLinks isGreen footerLink"> <span><img src={inboxLogo}
                                                alt="" /></span> bih@nomasvello.com</a>
                                </p>
                            </div>
                            <div className="secondRow">
                                <p className="footerTitle">
                                    Naše tehnologije
                                </p>
                                <ul className="technologiesList">
                                    <li><a href="/tehnologije/laser-tehnologija">Laser Tehnologija</a></li>
                                    <li><a href="/tehnologije/ipl-tehnologija">IPL Tehnologija</a></li>
                                    <li><a href="/tehnologije/sun-and-safe">Sun & Safe</a></li>
                                    <li><a href="/tehnologije/led-tehnologija">LED Tehnologija</a></li>
                                    <li><a href="/tehnologije/ultrazvucna-tehnologija">Ultrazvučna Tehnologija</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="footerHr" />
                    <div className="columns">
                        <div className="column colCredits">
                            
                            <p className="footerCopyright">
                                Copyright <span>{today.getFullYear()}</span> Nomasvello Bosna i Hercegovina | Sva prava pridržana
                            </p>
                            <p className="footerCopyright createdBy">
                                Created by <a href="https://wellpromotion.ba" target="_blank">Well Business Promotion</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
