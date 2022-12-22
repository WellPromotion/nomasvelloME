import { SchemaMetaFieldDef } from 'graphql'
import React from 'react'
import navLogo from '../public/images/Nomasvello-Logo.png'
import dropDown from '../public/images/dropdownIconWhite.svg'
import dropDownGrey from '../public/images/dropdownIcon.svg'
import youtubeIcon from '../public/images/youtubeIcon.svg'
import instagramIcon from '../public/images/instagramIcon.svg'
import twitterIcon from '../public/images/twitterIcon.svg'
import facebookIcon from '../public/images/facebookIcon.svg'
import HamburgerMenu, { Links } from '../Components/Hamburger.js'

export const Navbar = () => {
return (
<div> 


    <nav id='navbarTop' className='navbarTop'>
        <div className="navbarTopWrap">

                <div className="leftWrap">
                    
                
            <div className="centriWrap">
                <ul className="centriList">
                    <a href="/centri/sarajevo-i" className='sarajevoDrop'>
                        <li>Sarajevo <span className='downCarretMenu'><img src={dropDown} alt="" /></span>
                            <ul className='sarajevoDropdown'>
                                <a href="/centri/sarajevo-i">
                                    <li>Novo Sarajevo</li>
                                </a>
                                <a href="/centri/sarajevo-ii">
                                    <li>Stari Grad</li>
                                </a>
                                <a href="/centri/sarajevo-iii">
                                    <li>Novi Grad</li>
                                </a>
                                <a href="/centri/sarajevo-iv">
                                    <li>Ilidža</li>
                                </a>
                            </ul>
                        </li>
                    </a>
                    <a href="/centri/banja-luka">
                        <li>Banja Luka</li>
                            </a>
                    <a href="/centri/brcko">
                        <li>Brčko</li>
                    </a>
                    <a href="/centri/zenica">
                        <li>Zenica</li>
                    </a>
                    <a href="/centri/tuzla">
                        <li>Tuzla</li>
                    </a>
                    <a href="/centri/doboj">
                        <li>Doboj</li>
                    </a>
                    
                </ul>
                    </div>
                </div>
                
                
                <div className="rightWrap">
                <div className="besplatniWrap">
                    <ul className='buttonWrap'>
                    <a href="/besplatan-probni-tretman" className='bespButtonTop'>
                    <li>Besplatan probni tretman</li>
                </a>
                    </ul>
                </div> 
                

            <div className="mediaWrap">
                <ul className='mediaIconsList'>
                    <a href="https://www.youtube.com/user/NomasVelloBiH/featured">
                        <li><img src={youtubeIcon} alt="" /></li>
                    </a>
                    <a href="https://www.instagram.com/nomasvello.ba/?hl=en">
                        <li><img src={instagramIcon} alt="" /></li>
                    </a>
                    <a href="https://twitter.com/novellobih">
                        <li><img src={twitterIcon} alt="" /></li>
                    </a>
                    <a href="https://www.facebook.com/NomasvelloSarajevo">
                        <li><img src={facebookIcon} alt="" /></li>
                    </a>
                </ul>
                    </div>
                </div>
                
                
        </div>
    </nav>

    <nav id="navbar" className="navbar">
        <div className="navWrap">
            <a href="/">
                <div className="navImg">
                    <img src={navLogo} alt="" />
                </div>
            </a>

            <HamburgerMenu />

            <ul className="menuList">
                {/* <a href="/">
                    <li>Početna</li>
                </a> */}
                <a href="/usluge/laserska-epilacija" className='uslugeDrop'>
                    <li>Usluge <span className='downCarretMenu'><img src={dropDownGrey} alt="" /></span>
                        <ul className='uslugeDropdown'>
                            <a href="/usluge/laserska-epilacija">
                                <li>Laserska epilacija</li>
                            </a>
                            <a href="/usluge/fotoepilacija">
                                <li>Fotoepilacija IPL SHR</li>
                            </a>
                            <a href="/usluge/fotopodmladjivanje">
                                <li>Fotopodmlađivanje</li>
                            </a>
                            <a href="/usluge/ultrazvucno-ciscenje-lica">
                                <li>Ultrazvučno čišćenje lica</li>
                            </a>
                            <a href="/usluge/facijalni-anti-age">
                                <li>Facijalni anti-age</li>
                            </a>
                            <a href="/usluge/izbjeljivanje-zuba">
                                <li>Izbjeljivanje zuba</li>
                            </a>
                            <a href="/usluge/tjelesni-ucvrscivac">
                                <li>Tjelesni učvrščivać</li>
                            </a>
                            <a href="/usluge/personalizovani-tretmani-lica">
                                <li>Personalizovani tretman lica</li>
                            </a>
                            <a href="/usluge/tretman-akni">
                                <li>Tretman akni</li>
                            </a>
                        </ul>


                    </li>
                </a>
                <a href="/centri" className='centriDrop'>
                    <li>Centri<span className='downCarretMenu'><img src={dropDownGrey} alt="" /></span>
                        <ul className='centriDropdown'>
                            <a href="/centri/sarajevo-i">
                                <li>Novo Sarajevo</li>
                            </a>
                            <a href="/centri/sarajevo-ii">
                                <li>Stari Grad</li>
                            </a>
                            <a href="/centri/sarajevo-iii">
                                <li> Novi Grad</li>
                            </a>
                            <a href="/centri/sarajevo-iv">
                                <li>Ilidža</li>
                            </a>
                            <a href="/centri/banja-luka">
                                <li>Banja Luka</li>
                            </a>
                            <a href="/centri/brcko">
                                <li>Brčko</li>
                            </a>
                            <a href="/centri/doboj">
                                <li>Doboj</li>
                            </a>
                            <a href="/centri/tuzla">
                                <li>Tuzla</li>
                            </a>
                            <a href="/centri/zenica">
                                <li>Zenica</li>
                            </a>
                        </ul>


                    </li>
                </a>
                    <a href="/tehnologije" className='tehnologijeDrop'>
                        <li>Tehnologija</li>
                    {/* <li>Tehnologija<span className='downCarretMenu'><img src={dropDownGrey} alt="" /></span>
                        <ul className='tehnologijeDropdown'>
                            <a href="/tehnologije/laser-tehnologija">
                                <li>Laser tehnologija</li>
                            </a>
                            <a href="/tehnologije/ipl-tehnologija">
                                <li>IPL tehnologija</li>
                            </a>
                            <a href="/tehnologije/led-tehnologija">
                                <li>LED tehnologija</li>
                            </a>
                            <a href="/tehnologije/ultrazvucna-tehnologija">
                                <li>Ultrazvučna tehnologija</li>
                            </a>
                            <a href="/tehnologije/sun-and-safe">
                                <li>Sun & safe</li>
                            </a>
                            <a href="/tehnologije/ljekarska-podrska">
                                <li>Ljekarska podrška</li>
                            </a>
                        </ul>

                    </li> */}
                </a>
                
                <a href="/" className='oNamaDrop'>
                    <li>Info<span className='downCarretMenu'><img src={dropDownGrey} alt="" /></span>
                        <ul className='oNamaDropdown'>
                            <a href="/blog">
                                <li>Blog</li>
                                </a>
                            <a href="/faq/laserska-epilacija-fotoepilacija-ipl-shr">
                                <li>FAQ</li>
                                </a>  
                                <a href="/kozmeticki-proizvodi">
                                    <li>Kozmetički proizvodi</li>
                                </a>   
                                <a href="/sta-je-fotoepilacija">
                                    <li>Šta je fotoepilacija?</li>
                                 </a>   
                        </ul>
                    </li>
                    </a>
                    
                    <a href="">
                                <li className='cijeneDrop'>Cijene<span className='downCarretMenu'><img
                                            src={dropDownGrey} alt="" /></span>
                                    <ul className='cijeneDropdown'>
                                        <a href="/usluge/laserska-epilacija#diodniZone">
                                            <li>Laserska epilacija</li>
                                        </a>
                                        <a href="/usluge/fotoepilacija#diodniZone">
                                            <li>Fotoepilacija IPL SHR</li>
                                        </a>
                                        <a href="/usluge/fotopodmladjivanje#cijenaFotopod">
                                            <li>Fotopodmlađivanje</li>
                                        </a>
                                        <a href="/usluge/ultrazvucno-ciscenje-lica#cijenaUltra">
                                            <li>Ultrazvučno čišćenje lica</li>
                                        </a>
                                        <a href="/usluge/facijalni-anti-age#cijenaFotopod">
                                            <li>Facijalni anti-age</li>
                                        </a>
                                        <a href="/usluge/izbjeljivanje-zuba#cijenaFotopod">
                                            <li>Izbjeljivanje zuba</li>
                                        </a>
                                        <a href="/usluge/tjelesni-ucvrscivac#cijenaFotopod">
                                            <li>Tjelesni učvrščivać</li>
                                        </a>
                                        {/* <a href="/usluge/personalizovani-tretmani-lica#cijenaFotopod">
                                            <li>Personalizovani tretman lica</li>
                                        </a> */}
                                        <a href="/usluge/tretman-akni#cijenaFotopod">
                                            <li>Tretman akni</li>
                                        </a>
                                    </ul>
                                </li>
                                </a>
                    
                    
                    <a href="/otkrijte-nase-ponude-i-promocije">
                    <li>Promocije</li>
                    </a>
                    
                {/* <a href="/blog">
                    <li>Blog</li>
                </a>
                <a href="/faq/laserska-epilacija-fotoepilacija-ipl-shr">
                    <li>FAQ</li>
                </a> */}
                
            </ul>
        </div>
    </nav>


</div>
)
}
