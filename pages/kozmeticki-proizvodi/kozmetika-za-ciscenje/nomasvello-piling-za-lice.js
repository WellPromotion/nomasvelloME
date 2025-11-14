import styles from '../../../styles/kozmeticki-proizvodi/kozmetika-za-ciscenje/Kozmetika-Ciscenje.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sample1 from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/piling-lice/0.png'
import elipseIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/elipseIcon.svg'
import listIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/listIcon.svg'
import turqCheck from '../../../public/images/turqCheck.svg'
import greenCheck from '../../../public/images/greenCheck.svg'
import primjenaIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/primjenaIcon.svg'
import linijaUcvrscivanje from '../../../public/images/kozmeticki-proizvodi/linijaUcvrscivanje.jpg'
import linijaProtivNesavrsenosti from '../../../public/images/kozmeticki-proizvodi/linijaProtivNesavrsenosti.jpg'
import linijaHidratacija from '../../../public/images/kozmeticki-proizvodi/linijaHidratacija.jpg'


const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />; 
};
  
const NomasvelloPilingZaLice = () => {
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
            
            
            <section id="featuredProduct" className="featuredProduct section">
                <div className="container">
                    <div className="columns level colsProtivNesavrsenosti">
                        <div className="column leftColumn">
                            <img className='sampleImage' src={sample1} alt="" />
                        </div>
                        <div className="column">
                            <p className='featuredTitle'>NoMasVello piling za lice</p>
                            <p className='featuredSubtitle'>Idealan tretman za pripremu kože, osiguravajući dubinsko čišćenje. Zahvaljujući svojim sastojcima, također je savršen i za osjetljivu kožu.</p>
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
            
            <section id="featuredProductProperties" className="featuredProductProperties section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="titleInner">
                                <img className='titleIcon' src={elipseIcon} alt="" />
                                <p className='titleFeatures'>Ključni sastojci:</p>
                            </div>
                            <div className="listInner">
                            <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Vulkanska stijena</p>
                                        <p className="odlikeItem">Prirodni piling koji nježno uklanja mrtve ćelije kože bez imalo agresivnosti. Njeno nježno djelovanje omogućava da koža postane meka, blistava, te potiče regeneraciju ćelija.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Shea maslac</p>
                                        <p className="odlikeItem">Bogat oleinskom, stearinskom i linolenskom kiselinom, shea maslac hrani i regeneriše kožu.Njegovoemolijentno djelovanje pomaže da koža bude meka i hidrirana.</p>
                                        </div>
                                </div>
                                {/* <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aloe vera</p>
                                        <p className="odlikeItem">Hrani, hidratizuje i regeneriše kožu.</p>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                        <div className="column rightColumn rightColumnPiling">
                        <div className="titleInner">
                                <img className='titleIcon' src={listIcon} alt="" />
                                <p className='titleFeatures'>Prednosti pilinga</p>
                            </div>
                            
                            <div className="listInner">
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                    <div className="singleDetail">
                                    <p className='odlikeTitle'>Nježna, ali dubinska eksfolijacija</p>
                                        <p className="odlikeItem">Uklanja mrtve ćelije kože i potiče regeneraciju kože, koja postaje svježa i blistava.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                    <div className="singleDetail">
                                    <p className='odlikeTitle'>Prevencija pojave uraslih dlačica</p>
                                        <p className="odlikeItem">Adekvatna eksfolijacija kože omogućava dlačicama da pravilno rastu, te smanjuje rizik od pojave uraslih dlačica uzrokovanih neadekvatnom depilacijom.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                    <div className="singleDetail">
                                        <p className='odlikeTitle'>Idealna priprema za dugotrajnu depilaciju</p>
                                        <p className="odlikeItem">Eksfolijacija kože prije tretmana poboljšava rezultate i povećava učinkovitost NoMasVello tretmana.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            
             
            <section id="featuredProductPrimjena" className="featuredProductPrimjena section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <div className="titlePart">
                                <img className='primjenaIcon' src={primjenaIcon} alt="" />
                                <p className='middleBlueTitle'>Primjena</p>
                            </div>
                            <div className="textPart">
                                <p className="eighteenTitle">
                                Preporučuje se korištenje NoMasVello pilinga za lice tokom 10 dana nakon IPL tretmana.
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
 
export default NomasvelloPilingZaLice;