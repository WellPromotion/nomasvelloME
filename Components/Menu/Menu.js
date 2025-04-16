import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    return (
      <StyledMenu className='styledMenu' open={open}>
        <a href="/">
          Početna
        </a>
        <ul>
            <a href="/" className='firstMobileUsluga'>
                    Usluge
            </a>
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
                                <li>Tjelesni učvršćivač</li>
                            </a>
                            <a href="/usluge/personalizovani-tretmani-lica">
                                <li>Personalizovani tretman lica</li>
                            </a>
                            <a href="/usluge/tretman-akni">
                                <li>Tretman akni</li>
                            </a>
       </ul>
        <a href="/centri">
          Centri
        </a>
        <a href="/tehnologije">
          Tehnologije
        </a>
        <ul>
            <a href="/" className='firstMobileUsluga'>
                    Info
            </a>
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
        <ul>
            <a href="/">
                    Cijene
            </a>
            <a href="/usluge/laserska-epilacija#cijena">
                                            <li>Laserska epilacija</li>
                                        </a>
                                        <a href="/usluge/fotoepilacija#cijena">
                                            <li>Fotoepilacija IPL SHR</li>
                                        </a>
                                        <a href="/usluge/fotopodmladjivanje#cijena">
                                            <li>Fotopodmlađivanje</li>
                                        </a>
                                        <a href="/usluge/ultrazvucno-ciscenje-lica#cijena">
                                            <li>Ultrazvučno čišćenje lica</li>
                                        </a>
                                        <a href="/usluge/facijalni-anti-age#cijena">
                                            <li>Facijalni anti-age</li>
                                        </a>
                                        <a href="/usluge/izbjeljivanje-zuba#cijena">
                                            <li>Izbjeljivanje zuba</li>
                                        </a>
                                        <a href="/usluge/tjelesni-ucvrscivac#cijena">
                                            <li>Tjelesni učvrščivać</li>
                                        </a>
                                        {/* <a href="/usluge/personalizovani-tretmani-lica#cijenaFotopod">
                                            <li>Personalizovani tretman lica</li>
                                        </a> */}
                                        <a href="/usluge/tretman-akni#cijena">
                                            <li>Tretman akni</li>
                                        </a>
       </ul>
        <a href="/otkrijte-nase-ponude-i-promocije">
          Promocije
        </a>
            
      </StyledMenu>
    )
  }
  Menu.propTypes = {
      open: bool.isRequired,
  }
  export default Menu;