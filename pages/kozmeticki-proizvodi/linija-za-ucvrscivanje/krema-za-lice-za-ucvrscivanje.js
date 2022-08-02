import styles from '../../../styles/kozmeticki-proizvodi/linija-za-ucvrscivanje/KremaZaLice.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sample1 from '../../../public/images/kozmeticki-proizvodi/linija-za-ucvrscivanje/krema-za-lice/sample1.png'
import elipseIcon from '../../../public/images/kozmeticki-proizvodi/maskeIcon.svg'
import listIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/listIcon.svg'
import karakteristikeIcon from '../../../public/images/kozmeticki-proizvodi/maskeIcon.svg'
import turqCheck from '../../../public/images/turqCheck.svg'
import greenCheck from '../../../public/images/greenCheck.svg'
import primjenaIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/primjenaIcon.svg'
import linijaUcvrscivanje from '../../../public/images/kozmeticki-proizvodi/linijaUcvrscivanje.png'
import linijaProtivNesavrsenosti from '../../../public/images/kozmeticki-proizvodi/linijaProtivNesavrsenosti.png'
import linijaHidratacija from '../../../public/images/kozmeticki-proizvodi/linijaHidratacija.png'

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const KremaZaLice = () => {
    return (
        
        <>
            
            <section id='breacdcrumbs' className='breadcrumbs breadcrumbsGel'>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <Example></Example>
                        </div>
                    </div>
                </div>
            </section>

            <section id="featuredProduct" className="featuredProduct">
                <div className="container">
                    <div className="columns level colsHidrozastitnaEmulzija">
                        <div className="column leftColumn">
                            <img className='sampleImage' src={sample1} alt="" />
                        </div>
                        <div className="column">
                            <p className='featuredTitle'>KREMA ZA LICE ZA UČVRŠĆIVANJE</p>
                            <p className='featuredSubtitle'>Krema za učvršćivanje namijenjena za tretiranje mlitave kože.</p>
                            <p className='featuredText'>Redefiniše oblik lica i ublažava mlitavost kože na licu. Sadrži hijaluronsku kiselinu i aloe vera koje hidratiziraju i regenerišu kožu, te tako poboljšavaju njen izgled.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hrFeaturedProduct" className="hrFeaturedProduct">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                        <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="featuredProductProperties" className="featuredProductProperties featuredProductPropertiesKrema">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="titleInner">
                                <img className='titleIcon' src={elipseIcon} alt="" />
                                <p className='titleFeatures'>Mlitavost kože je uzrokovana <br />
kombinacijom nekoliko faktora:</p>
                            </div>
                            <div className="listInner">
                            <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Smanjenje količine vlakana kolagena i elastina.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Gubitak tonusa mišića.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Smanjenje spojenosti dermisa i epidermisa.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>U hipodermisu dolazi do atrofije vezivnog tkiva, odnosno dolazi do smanjenja količine masnih ćelija.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="column rightColumn">
                        <div className="titleInner">
                                <img className='titleIcon' src={listIcon} alt="" />
                                <p className='titleFeatures'>Svojstva</p>
                            </div>
                            
                            <div className="listInner">
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Krema za lice za učvršćivanje lagane teksture koja se brzo upija.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Redefiniše oblik lica, sprečava pojavu mlitave kože i znakova starenja zbog svog sadržaja DMAE i hijaluronske kiseline.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Hidratacija i obnavljanje prirodne elastičnosti i turgora kože.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Umiruje i regeneriše kožu zahvaljujući svom sadržaju aloe vera.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Protivupalno djelovanje.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </section>
            
            <section id="featuredProductPrimjena" className="featuredProductPrimjena featuredProductEmulzija">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <div className="titlePart">
                                <img className='primjenaIcon' src={primjenaIcon} alt="" />
                                <p className='middleBlueTitle'>Primjena</p>
                            </div>
                            <div className="textPart">
                                <p className="eighteenTitle">
                                Kremu je potrebno nanositi ujutro i navečer na čistu kožu, a zatim masirati dok se potpuno ne upije.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="hrFeaturedProduct" className="hrFeaturedProduct">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                        <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="drugeKategorije" className="drugeKategorije">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className='middleBlueTitle'>Pogledajte i ostale kategorije</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column kozmetikaCols">
                        <div className="colInner">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaUcvrscivanje} alt="" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner smallerPadding">
                                            <p className='kozBoxTitle'>LINIJA ZA UČVRŠĆIVANJE</p>
                                            <p className='kozBoxSubtitle'>Direktno djeluje protiv mlitavosti kože na licu.
Revitalizuje, umiruje i regeneriše kožu.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-za-ucvrscivanje">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column kozmetikaCols">
                        <div className="colInner">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaProtivNesavrsenosti} alt="" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner smallestPadding">
                                            <p className='kozBoxTitle'>LINIJA PROTIV <br />
 NESAVRŠENOSTI NA KOŽI</p>
                                            <p className='kozBoxSubtitle'>Specifična linija za masnu kožu.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-protiv-nesavrsenosti-na-kozi">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column kozmetikaCols">
                        <div className="colInner">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaHidratacija} alt="" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner">
                                            <p className='kozBoxTitle'>LINIJA ZA HIDRATACIJU</p>
                                            <p className='kozBoxSubtitle'>Hidratizuje kožu i održava je mladom.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-za-hidrataciju">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        
        </>


);
}
 
export default KremaZaLice;