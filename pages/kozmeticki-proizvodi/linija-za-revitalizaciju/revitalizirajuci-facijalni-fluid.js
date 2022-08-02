import styles from '../../../styles/kozmeticki-proizvodi/linija-za-revitalizaciju/RevitalizirajuciFacijalniFluid.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sample1 from '../../../public/images/kozmeticki-proizvodi/linija-za-revitalizaciju/revitalizirajuci-facijalni-fluid/sample1.png'
import maskeIcon from '../../../public/images/kozmeticki-proizvodi/maskeIcon.svg'
import listIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/listIcon.svg'
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
  
const RevitalizirajuciFacijalniFluid = () => {
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
                    <div className="columns level colsProtivNesavrsenosti">
                        <div className="column leftColumn">
                            <img className='sampleImage' src={sample1} alt="" />
                        </div>
                        <div className="column">
                            <p className='featuredTitle'>REVITALIZIRAJUĆI FACIJALNI FLUID</p>
                            <p className='featuredSubtitle'>Dnevna krema koja postepeno oslobađa aktivne supstance koje će učiniti da vaša koža bude ujednačena, hidratizirana i blistava tokom čitavog dana.</p>
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
            
            <section id="featuredProductProperties" className="featuredProductProperties">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="titleInner">
                                <img className='titleIcon' src={maskeIcon} alt="" />
                                <p className='titleFeatures'>Revitalizirajući fluid</p>
                            </div>
                            <div className="listInner listInnerFluid">
                            <p className='defaultText'>Revitalizirajući fluid za lice sadrži jedinstvenu formulu aktivnih principa koji koži daju blistavost i vitalnost, te koža odmah poprima sjajan i zdrav izgled. Poboljšava teksturu i elastičnost kože, ujednačava boju, minimizira bore i izražajne linije.</p>
                            </div>
                        </div>
                        <div className="column rightColumn">
                        <div className="titleInner">
                                <img className='titleIcon' src={listIcon} alt="" />
                                <p className='titleFeatures'>Svojstva</p>
                            </div>
                            
                            <div className="listInner listInnerFluid">
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Sadrži askorbil glikozid (Ascorbyl Glucoside), novi oblik stabilizovanog vitamina C, koji ima veću stabilnost od prirodnog vitamina C i drugih derivata vitamina C.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Sadrži ekstrakte duda i sladića
za povećanje svojstava depigmentacije.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Proizvodi efekte revitalizacije, antioksidativno
djelovanje i efekte depigmentacije.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Sadrži mimetičke peptide koji stimulišu ćelije kože
kako bi proizvodile veću količinu kolagena i elastina i tako spriječile pojavu bora.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Sadrži pigmente sjaja koji imaju soft-focus efekat koji prikriva nesavršenosti na koži.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="featuredProductPrimjena" className="featuredProductPrimjena">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <div className="titlePart">
                                <img className='primjenaIcon' src={primjenaIcon} alt="" />
                                <p className='middleBlueTitle'>Primjena</p>
                            </div>
                            <div className="textPart">
                                <p className="eighteenTitle">
                                Nanijeti ujutro i navečer uz laganu masažu dok se potpuno ne upije. Prije nanošenja fluida potrebno je nanijeti Serum protiv starenja.
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
 
export default RevitalizirajuciFacijalniFluid;