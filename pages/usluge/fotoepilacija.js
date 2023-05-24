import styles from '../../styles/usluge/Fotoepilacija.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import sample1 from '../../public/images/usluge/fotoepilacija/sample1.png'
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLasera.png'
import naruciteSe from '../../public/images/usluge/fotoepilacija/fotoepilacija.jpg'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import doctorIcon from '../../public/images/usluge/fotoepilacija/doctorIcon.svg'
import doctorImg from '../../public/images/usluge/fotoepilacija/doctorImg.png'
import FotoepilacijaPopup from '../../Components/popups/FotoepilacijaPopup';
import FotoepilacijaPopupBottom from '../../Components/popups/FotoepilacijaPopupBottom';
import Main from "../../Components/Selector/Main";
import pravaKlijenata from '../../public/images/prava-klijenata1.png';
import fotoepilacijaNovello from '../../public/images/usluge/fotoepilacija/fotoepilacija-Nomasvello.jpg';
import fotoepilacijaNomasvello from '../../public/images/usluge/fotoepilacija/fotoepilacija-IPL.jpg';



const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const Fotoepilacija = () => {
    return (
        
        <>
            
            <section id="uslugeHeader" className="uslugeHeader fotoepilacijaHeader">
                <div id='breacdcrumbs' className='breadcrumbs breadcrumbsUsluge'>
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <Example></Example>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="columns headerColsUsluge">
                        <div className="column titlePart has-text-centered">
                            <p className="titleUsluge">FOTOEPILACIJA IPL SHR</p>
                            <p className="subtitleUsluge">Aparati sa tehnologijom posljednje generacije</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <FotoepilacijaPopup />
                        </div>
                    </div>
                </div>
            </section>


            <section id="oneLiner" className="oneLiner">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Sa najsavremenijom opremom</p>
                            </div>
                            <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Pod nadzorom medicinskog osoblja</p>
                            </div>
                            <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Sa najboljim cijenama</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="scndTitle" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h2 className='scnTitle'>
                                Nomasvello <br />
                                pulsirajuća <br />
svjetlost
                            </h2>
                        </div>
                        <div className="column">
                            <h3 className="blueSub">
                            Tražite istinski efikasan način za dugotrajno uklanjanje neželjenih dlačica?
                            </h3>
                            <p className="defaultText">
                            Pulsirajuća svjetlost je jedan od najefikasnijih sistema na svijetu. Koristi svjetlosnu energiju koja uništava korijen dlake i tako sprečava njen ponovni rast. <br /> Naši tretmani su personalizovani jer prije tretmana analiziramo tip dlake i kože svakog klijenta te na taj način prilagođavamo tretman njegovim potrebama.
                            </p>
                            <a href="/besplatan-probni-tretman" className="button greenButton">Želim besplatan probni tretman</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section imgSection imgSectionFotoep">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img src={fotoepilacijaNovello} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="greenWhite" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column whiteCol">
                            <p className="titleGreen">
                            Više od milion
                            </p>
                            <p className="defaultText defaultWhitegreen">
                            osoba nam je poklonilo svoje povjerenje jer samo No+Vello daje najbolje rezultate u borbi protiv neželjenih dlačica <br /> za samo 55 KM po zoni.
                            </p>
                        </div>
                    </div>
                    
                        <div className="columns">
                        <div className="column greenCol">
                            <p className="titleGreen">
                            Efikasno
                            </p>
                            <p className="defaultText defaultWhitegreen">
                            No+Vello tehnologija intenzivne pulsirajuće svjetlosti (IPL) koristi različite talasne dužine u skladu sa tipom kože i dlake, te precizno usmjerava svoje djelovanje na bulbu dlake koju potpuno uništava. 
                            </p>
                        </div>
                    </div>
                    
                    <div className="columns">
                        <div className="column whiteCol">
                            <p className="titleGreen">
                            Bezbolno
                            </p>
                            <p className="defaultText defaultWhitegreen">
                            Tokom tretmana nećete skoro nikako osjetiti bol, nego samo blago zagrijavanje kože koje je uveliko smanjeno jer prije tretmana kožu adekvatno pripremimo kako bismo postigli da tretman bude bezbolan i efikasan.
                            </p>
                        </div>
                    </div>
                    
                    <div className="columns">
                        <div className="column greenCol">
                            <p className="titleGreen">
                            Personalizovano
                            </p>
                            <p className="defaultText defaultWhitegreen">
                            Prije početka tretmana, naše stručno osoblje će obaviti personalizovan pregled kako bi se tretman prilagodio u skladu sa tipom dlake i kože svakog klijenta. 
                            </p>
                        </div>
                    </div>
                    
                </div>
            </section>
            
            <section id="seguro" className="section">
                <div className="container">
                    <div className="columns level">
                        <div className="column imgCol">
                            <img src={fotoepilacijaNomasvello} alt="" />
                        </div>
                        <div className="column">
                            <h3 className="blueSub">
                            Sigurno
                            </h3>
                            <p className="defaultText">
                            Tretmane u našim centrima sprovodi samo kvalifikovano i educirano osoblje uz savjetovanje od strane dermatologa. Koža je u potpunosti zaštićena zahvaljujući ekskluzivnom i striktnom sigurnosnom protokolu razvijenom od strane Nomasvello centra za istraživanje i razvoj. Raspolažemo tehnologijom i opremom posljednje generacije, kao i certifikatima prema svim važećim normativama, što garantuje da tretmani budu sigurni i efikasni jer naše stručno osoblje prije tretmana podesi aparate u skladu sa tipom dlake i kože svakog klijenta. Sve navedeno se čini za dobrobit klijenta i njegovog iskustva tokom našeg tretmana depilacije, a rezultat je efikasan i siguran tretman. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
            
            <section id="hR" className="hR">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cijena" className="diodniZone fotoepilacijaZone">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijena</p>
                            <p className="subtitleCijena">Cijene laserske epilacije i IPL epilacije su na bazi <br /> jedinstvene tarife za žene i muškarce.</p>
                        </div>
                    </div>
                    
                    <div className="columns priceTagCols">
                    <div className="column leftCol">
                        <div className="priceBox">
                            <div className="inner">
                                <img src={priceTag} className="priceTag" alt="55 KM - Cijena laserske epilacije po zoni" />
                                <p className="priceTitle">
                                55KM Zona
                                </p>
                                <p className="priceSubtitle">
                                Unisex tarifa
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column diodniCol">
                        <img className='diodniIMG' src={priceTwo} alt="55 KM - Cijena laserske epilacije po zoni" />
                    </div>
                    </div>
                    
                    {/* <div className="columns txtCols">
                        <div className="column txtCol">
                            <p className='txtPar'>U No+Vello centrima raspolažemo jedinstvenim uniseks cijenama po zoni, a to je 55 KM jednako za žene i muškarce. Predstavljamo vam prvi virtuelni kalkulator za izračunavanje cijena tretmana laserske epilacije i fotoepilacije IPL SHR tehnologijom.</p>
                        </div>
                        <div className="column txtCol">
                            <p className='txtPar'>U cilju prilgođavanja željama naših klijenata uvodimo još povoljnije cijene za sve one koji imaju problematične dlačice na malim površinama. Predstavljamo vam nove MINI zone po cijeni od 25 KM.</p>
                        </div>
                    </div> */}
                    
                </div>
                
                <div className="container">
          <div className="columns">
                        <div className="column is-12">
                        <p className="titleCijena titleCijenaPad">Izaberite zone koje želite tretirati</p>
              <Main />
            </div>
          </div>
                </div>
                
                <div className="container pricingTable"> 
                <div className="columns priceTagCols level">
                        <div className="column txtCol">
                            <div className="list">
                            <div className="singleItemTop">
                                    <div className="inner">
                                        <p className="title">Zona</p>
                                        <p className="price">Cijena</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Lice (nausnica+brada+obrazi)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Vrat</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Ramena (oba ramena)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Pazuh (oba pazuha)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Ruke (svaka ruka, pola ili cijele)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Zatiljak</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Leđa (dorzal) (od završetka vrata do pola leđa)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Lumbago (krsta) (od pola leđa do početka stražnjice)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Stražnjica</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Prsa (od kraja vrata do ispod prsa)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Stomak</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Bikini</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Noge (svaka noga, pola noge ili kompletna)</p>
                                        <p className="price">55 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Nausnice</p>
                                        <p className="price">25 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Stopala (oba stopala)</p>
                                        <p className="price">25 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Između grudi</p>
                                        <p className="price">25 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Oko bradavica</p>
                                        <p className="price">25 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Trbušna linija</p>
                                        <p className="price">25 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Šake (obje šake)</p>
                                        <p className="price">25 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Perianalna zona</p>
                                        <p className="price">25 KM</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="columns promocijeCols">
                        <div className="column">
                        <a href="/otkrijte-nase-ponude-i-promocije" className="button pogledajtePromocije promocijeButton">otkrijte naše ponude i promocije</a>
                        </div>
                    </div>
                    
                   </div>
                
            </section>
            
            <section id="besplatTretmanButton" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <a href="/besplatan-probni-tretman" className="bespTretmanButton button">
                                Želite li  <span className="bespBig">  besplatan probni tretman?</span>
                            </a>
                        </div>
                    </div>
                </div>
          </section>
            
            <section id="naruciteBottom" className="naruciteBottom">
                <div className="container">
                    <div className="columns is-gapless">
                        <div className="column imgCol">
                            <img src={naruciteSe} alt="" />
                        </div>
                        <div className="column">
                            <div className="txtPart">
                                <div className="inner">
                                    <p className="titleNarudzba">UŽIVAJTE U NAJBOLJOJ FOTOEPILACIJI IPL SHR</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <FotoepilacijaPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="pravaBottom" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <a href="/prava-novello-klijenta/">
                            <img src={pravaKlijenata} alt="" />
                           </a>
                        </div>
                    </div>
                </div>
            </section>
            

        </>

        );
    }
     
    export default Fotoepilacija;
