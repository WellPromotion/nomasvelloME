import { SchemaMetaFieldDef } from 'graphql'
import React from 'react'
import navLogo from '../public/images/logoMainMenu.svg'
import dropDown from '../public/images/dropdownIcon.svg'
import youtubeIcon from '../public/images/youtubeIcon.svg'
import instagramIcon from '../public/images/instagramIcon.svg'
import twitterIcon from '../public/images/twitterIcon.svg'
import facebookIcon from '../public/images/facebookIcon.svg'


export const Navbar = () => {
    return (
        <div>
            
            
            <nav id='navbarTop' className='navbarTop'>
                <div className="navbarTopWrap">
                    
                    <div className="centriWrap">
                    <ul className="centriList">
                        <a href="/centri/sarajevo-i">
                            <li>Sarajevo</li>
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
                            <a href="/centri/teslic">
                            <li>Teslić</li>
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
                    
                    <ul className="menuList">
                        <a href="/">
                            <li>Početna</li>
                        </a>
                        <a href="/usluge/laserska-epilacija">
                            <li>Usluge</li>
                        </a>
                        <a href="/centri">
                            <li>Centri</li>
                        </a>
                        <a href="/tehnologije">
                            <li>Tehnologija</li>
                        </a>
                        <a href="/kozmeticki-proizvodi">
                            <li>Kozmetički proizvodi</li>
                        </a>
                    </ul>
                </div>
           </nav>


        </div>
    )
}

