import styles from '../../styles/usluge/TretmanAkni.module.scss';
import greenCheck from '../../public/images/greenCheck.svg';
import turqCheck from '../../public/images/turqCheck.svg';
import sample1 from '../../public/images/usluge/tretman-akni/ljekarska-podrska-img.jpg';
import sample3 from '../../public/images/usluge/personalizovani-tretman-lica/sample3.png';
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import greenSphere from '../../public/images/greenSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/tretman-akni/tretman-akni-usluga.jpg'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import doctorIcon from '../../public/images/usluge/fotoepilacija/doctorIcon.svg'
import doctorImg from '../../public/images/usluge/fotoepilacija/doctorImg.png'
import Breadcrumbs from 'nextjs-breadcrumbs';
import TretmanAkniPopup from '../../Components/popups/TretmanAkniPopup';
import TretmanAkniPopupBottom from '../../Components/popups/TretmanAkniPopupBottom';

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const TretmanAkni = () => {
    return (
        
        <>
        
        <section id="uslugeHeader" className="uslugeHeader tretmanAkniHeader">
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
                            <p className="titleUsluge">Tretman akni</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <TretmanAkniPopup/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="image" className="image">
                <div className="container">
                    <div className="columns has-text-centered">
                        <div className="column has-text-centered">
                            <img className='ljekarskapodrskaIMG' src={sample1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="tretmanAkni" className="tretmanAkni">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="tretmanAkniTitle">
                            Tretman akni sa IPL tehnologijom
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <p className="colTitle">ACNE VULGARIS</p>
                            <p className="colContent defaultText">su često upalno oboljenje kože lokalizovano na predjelima sa sebacealnim folikulima (lice, poprsje, leđa). Najčešće se javlja u pubertetu i biva aktivirano androgenim hormonima sa značajnom ulogom genetske predispozicije. Smatra se da više od 80% populacije od 13 do 16 godina ima probleme sa aknama bez obzira na pol, rasu ili geografski položaj.</p>
                        </div>
                        <div className="column">
                            <p className="colTitle">UZROCI NASTANKA AKNI</p>
                            <p className="colContent defaultText">su povećana osjetljivost lojnih žlijezda na hormonalni podražaj (androgeni hormoni), pojačano lučenje loja (sebacea) i začepljenje (opstrukcija) izvodnog kanala sebacealne žlijezde. Akumulacija loja olakšava razmnožavanje bakterija (Proprionbacterium acnes) koje dovode do upalnog procesa i nastanka akni.</p>
                        </div>
                        <div className="column lastCol">
                            <p className="colTitle">RAZLIKUJEMO NEKOLIKO OBLIKA:</p>
                            <div className="listCont">
                                <div className="sinleCont">
                                    <img src={greenCircle} className="greenCircle" alt="" />
                                    <p className="singleTxt">blagi oblik: prisutne crne tačkice (komedoni) ili
male površine zahvaćene papulama i pustulama,</p>
                                </div>
                                <div className="sinleCont">
                                    <img src={greenCircle} className="greenCircle" alt="" />
                                    <p className="singleTxt">umjereni oblik: oblik akni sa
papulo-pustuloznim promjenama</p>
                                </div>
                                <div className="sinleCont">
                                    <img src={greenCircle} className="greenCircle" alt="" />
                                    <p className="singleTxt"> teški oblik: nodulo-cistični oblik.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns lastCols">
                        <div className="column has-text-centered firstCol">
                            <p className='defaultText'>Svake godine se na liječenje u svijetu potroši oko 5 miliona dolara na razne tretmane akni.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="intenzivna" className="intenzivna">
                <div className="container">
                    <div className="columns titleCols has-text-centered">
                        <div className="column is-6">
                            <p className="titleIntenzivna">INTENZIVNA PULSIRAJUĆA SVJETLOST <br /> (IPL TEHNOLOGIJA)</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-5">
                            <p className="parIntenzivna defaultText">
                         <span className="intenzivnaSmallTitle">INTENZIVNA PULSIRAJUĆA SVJETLOST (IPL TEHNOLOGIJA)</span>   <br />
ima dvojaki efekat: antibakterijsko djelovanje (uništava kolonije bakterija) i regenerativno djelovanje (stimuliše rast epitelnih stanica i proizvodnju kolagena i ubrzava zacjeljenje rana). Dakle, više od 70% uspjelih tretmana akni u svijetu ostvareno je IPL tehnologijom.
<br /><br />
IPL tehnologija, također, raspolaže još jednom prednošću jer pospješuje pigmentaciju kože te pomaže u saniranju ožiljaka koje su teški oblici akni ostavili na našem licu.
                            </p>
                        </div>
                        <div className="column is-1"></div>
                        <div className="column is-5">
                        <p className="parIntenzivna defaultText">
                        Prednosti tretmana akni IPL tehnologijom su: jednostavnost, bezbolnost i bezbjednost tretmana, koji je finansijski prihvatljiv, a rezultati su vidljivi već nakon nekoliko tretmana.
 <br /><br />
 Centri No+Vello nude tretmane akni vulgaris po jedinstvenoj cijeni od 49 KM. Ovi tretmani su pod nadzorom ljekara-dermatologa. Tretman se radi svakih 15 dana tokom 4 mjeseca, a rezultati su vidljivi već nakon prvih sesija.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="pozivamoVas" className="pozivamoVas">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="columns is-gapless boxCols">
                                <div className="column imgCol is-3">
                                <img src={sample3} alt="" />
                                </div>
                                <div className="column txtCol is-5">
                                    <div className="inner">
                                        <div className="titlePart">
                                            <img src={doctorIcon} className="doctorIcon" alt="" />
                                            <p className="doctorTitle">Pozivamo vas da dođete u naš centar na
potpuno besplatan pregled lica</p>
                                        </div>
                                        <p className='doctorSub'>Radi vaše sigurnosti, Centri No+Vello <br />
                                            raspolažu ljekarskom podrškom</p>
                                        <a href="/centri" className="doctorButton">Pogledaj lokacije centara</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cijenaFotopod" className="cijenaFotopod cijenaFacijalni cijenaTjelesni cijenaPersonalizovani cijenaTretmanAkni">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijena tretmana akni</p>
                        </div>
                    </div>
                    
                    {/* <div className="columns priceTagCols level">
                        <div className="column txtCol">
                            <p className="pozivamoVas">Tretman akni
                            </p>
                        </div>
                    </div> */}
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
                                        <p className="title">Lice</p>
                                        <p className="price">49 KM</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            <section id="naruciteBottom" className="naruciteBottom naruciteFoto naruciteTjelesni">
                <div className="container">
                    <div className="columns is-gapless">
                        <div className="column imgCol">
                            <img src={naruciteSe} alt="" />
                        </div>
                        <div className="column">
                            <div className="txtPart">
                                <div className="inner">
                                    <p className="titleNarudzba">UŽIVAJTE U
NAJBOLJOJ USLUZI TRETMANA AKNI</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <TretmanAkniPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
        
        );
    }
     
    export default TretmanAkni;