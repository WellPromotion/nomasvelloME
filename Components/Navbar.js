import { SchemaMetaFieldDef } from 'graphql'
import React from 'react'
import navLogo from '../public/images/logoMainMenu.svg'
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
                    
                    <div className="centriWrap">
                    <ul className="centriList">
                        <a href="/centri/sarajevo-i" className='sarajevoDrop'>
                                <li>Sarajevo  <span className='downCarretMenu'><img src={dropDown} alt="" /></span>
                                    <ul className='sarajevoDropdown'>
                                        <div className="singleCenter"> <a href="/centri/sarajevo-i"><li>Novo Sarajevo</li></a></div>
                                        <div className="singleCenter"><a href="/centri/sarajevo-ii"><li>Stari Grad</li></a></div>
                                        <div className="singleCenter"> <a href="/centri/sarajevo-iii"><li>Novi Grad</li></a></div>
                                        <div className="singleCenter"><a href="/centri/sarajevo-iv"><li>Ilidža</li></a></div>
                                    </ul>
                            </li>
                        </a>
                        <a href="/centri/banja-luka">
                            <li>Banja Luka</li>
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
                        <a href="/centri/brcko">
                            <li>Brčko</li>
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
                            <a href="https://www.facebook.com/NomasvelloBiH/">
                                <li><img src={facebookIcon} alt="" /></li>
                            </a>
                        </ul>
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
                    
                    <HamburgerMenu/>
                    
                    <ul className="menuList">
                        <a href="/">
                            <li>Početna</li>
                        </a>
                        <a href="/usluge/laserska-epilacija" className='uslugeDrop'>
                            <li>Usluge  <span className='downCarretMenu'><img src={dropDownGrey} alt="" /></span>
                                    <ul className='uslugeDropdown'>
                                        <div className="singleCenter"> <a href="/usluge/laserska-epilacija"><li>Laserska epilacija</li></a></div>
                                        <div className="singleCenter"><a href="/usluge/fotoepilacija"><li>Fotoepilacija</li></a></div>
                                        <div className="singleCenter"> <a href="/usluge/fotopodmladjivanje"><li>Fotopodmlađivanje</li></a></div>
                                    <div className="singleCenter"> <a href="/usluge/ultrazvucno-ciscenje-lica"><li>Ultrazvučno čišćenje lica</li></a></div>
                                    <div className="singleCenter"> <a href="/usluge/facijalni-anti-age"><li>Facijalni anti-age</li></a></div>
                                    <div className="singleCenter"> <a href="/usluge/izbjeljivanje-zuba"><li>Izbjeljivanje zuba</li></a></div>
                                    <div className="singleCenter"> <a href="/usluge/tjelesni-ucvrscivac"><li>Tjelesni učvrščivać</li></a></div>
                                    <div className="singleCenter"> <a href="/usluge/personalizovani-tretmani-lica"><li>Personalizovani tretman lica</li></a></div>
                                    <div className="singleCenter"> <a href="/usluge/tretman-akni"><li>Tretman akni</li></a></div>
                                </ul>
                                
                                
                            </li>
                        </a>
                        <a href="/centri" className='centriDrop'>
                            <li>Centri<span className='downCarretMenu'><img src={dropDownGrey} alt="" /></span>
                                    <ul className='centriDropdown'>
                                        <div className="singleCenter"> <a href="/centri/sarajevo-i"><li>Novo Sarajevo</li></a></div>
                                        <div className="singleCenter"><a href="/centri/sarajevo-ii"><li>Stari Grad</li></a></div>
                                        <div className="singleCenter"> <a href="/centri/sarajevo-iii"><li> Novi Grad</li></a></div>
                                    <div className="singleCenter"> <a href="/centri/sarajevo-iv"><li>Ilidža</li></a></div>
                                    <div className="singleCenter"> <a href="/centri/banja-luka"><li>Banja Luka</li></a></div>
                                    <div className="singleCenter"> <a href="/centri/brcko"><li>Brčko</li></a></div>
                                    <div className="singleCenter"> <a href="/centri/doboj"><li>Doboj</li></a></div>
                                    <div className="singleCenter"> <a href="/centri/tuzla"><li>Tuzla</li></a></div>
                                    <div className="singleCenter"> <a href="/centri/zenica"><li>Zenica</li></a></div>
                                </ul>
                                
                                
                            </li>
                        </a>
                        <a href="/tehnologije" className='tehnologijeDrop'>
                            <li>Tehnologija<span className='downCarretMenu'><img src={dropDownGrey} alt="" /></span>
                                    <ul className='tehnologijeDropdown'>
                                        <div className="singleCenter"> <a href="/tehnologije/laser-tehnologija"><li>Laser tehnologija</li></a></div>
                                        <div className="singleCenter"><a href="/tehnologije/ipl-tehnologija"><li>IPL tehnologija</li></a></div>
                                        <div className="singleCenter"> <a href="/tehnologije/led-tehnologija"><li>LED tehnologija</li></a></div>
                                    <div className="singleCenter"> <a href="/tehnologije/ultrazvucna-tehnologija"><li>Ultrazvučna tehnologija</li></a></div>
                                    <div className="singleCenter"> <a href="/tehnologije/sun-and-safe"><li>Sun & safe</li></a></div>
                                    <div className="singleCenter"> <a href="/tehnologije/ljekarska-podrska"><li>Ljekarska podrška</li></a></div>
                                </ul>
                                
                            </li>
                        </a>
                        <a href="/kozmeticki-proizvodi">
                            <li>Kozmetički proizvodi</li>
                        </a>
                        <a href="/blog">
                            <li>Blog</li>
                        </a>
                        <a href="/faq/laserska-epilacija-fotoepilacija-ipl-shr">
                            <li>FAQ</li>
                        </a>
                    </ul>
                </div>
           </nav>


        </div>
    )
}

