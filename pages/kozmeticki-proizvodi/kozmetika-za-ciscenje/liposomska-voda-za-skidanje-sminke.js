import styles from '../../../styles/kozmeticki-proizvodi/kozmetika-za-ciscenje/LiposomskaVoda.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sample1 from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/liposomska-voda/sample11.png'
import efektiIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/liposomska-voda/efektiIcon.svg'
import greenCheck from '../../../public/images/greenCheck.svg'
import primjenaIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/primjenaIcon.svg'
import linijaUcvrscivanje from '../../../public/images/kozmeticki-proizvodi/linijaUcvrscivanje.jpg'
import linijaProtivNesavrsenosti from '../../../public/images/kozmeticki-proizvodi/linijaProtivNesavrsenosti.jpg'
import linijaHidratacija from '../../../public/images/kozmeticki-proizvodi/linijaHidratacija.jpg'



const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />; 
};
  
const LiposomskaVoda = () => {
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
                    <div className="columns level colsLiposomska">
                        <div className="column leftColumn leftColumnLiposomska">
                            <img className='sampleImage' src={sample1} alt="" />
                        </div>
                        <div className="column rightColumnLiposomska">
                            <p className='featuredTitle'>LIPOSOMSKA VODA
ZA SKIDANJE ŠMINKE</p>
                            <p className='featuredSubtitle'>Sredstvo za skidanje šminke za sve tipove kože, čak i za osjetljivu kožu.</p>
                            <p className='featuredText'>No+Vello liposomska voda za skidanje šminke čisti, umiruje i obnavlja. Zahvaljujući svojoj liposomskoj formuli dubinski čisti kožu, te joj daje osjećaj hidratacije. Koži daje masne kiseline i aktivne supstance neophodne za održavanje ravnoteže kože.</p>
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
            
            
            <section id="featuredProductProperties" className="featuredProductProperties efektiLiposomskaVoda section">
                <div className="container">
                    <div className="columns">
                        <div className="column rightColumn">
                        <div className="titleInner">
                                <img className='titleIcon' src={efektiIcon} alt="" />
                                <p className='titleFeatures'>Efekti na koži</p>
                            </div>
                            
                            <div className="listInner">
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">3 u 1: čišćenje, tonik i tretman.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Privlači i rastvara vodotopive nečistoće..</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Rastvara liposolubilne ostatke.</p>
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
                                Nanijeti proizvod na vatu ili gazu.
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
 
export default LiposomskaVoda;