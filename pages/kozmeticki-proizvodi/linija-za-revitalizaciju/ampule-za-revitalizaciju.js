import styles from '../../../styles/kozmeticki-proizvodi/linija-za-revitalizaciju/AmpuleZaRevitalizaciju.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sample1 from '../../../public/images/kozmeticki-proizvodi/linija-za-revitalizaciju/ampule-za-revitalizaciju/sample1.png'
import elipseIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/elipseIcon.svg'
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
  
const AmpuleZaRevitalizaciju = () => {
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
                            <p className='featuredTitle'>AMPULE ZA REVITALIZACIJU</p>
                            <p className='featuredSubtitle'>Moć vitamina C u čistom stanju. Flash blistavost efekat</p>
                            <p className='featuredText'>Preporučuje se upotreba kod blijede, dehidrirane, ugašene, mat i kože s mrljama usljed izlaganja suncu.</p>
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
                                <img className='titleIcon' src={elipseIcon} alt="" />
                                <p className='titleFeatures'>Visoka koncentracija aktivnih supstanci</p>
                            </div>
                            <div className="listInner listInnerAmpule">
                            <p className='defaultText'>Ampule sadrže visoku koncentraciju spojeva i aktivnih supstanci. Predstavljaju najkoncentrovaniji oblik za ekskluzivnu njegu kože.
Ove ampule su obično tečne/uljne teksture koja se lako nanosi i odmah prodire u kožu.</p>
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
                                        <p className="odlikeItem">Njihova formula bez vode, koja garantuje svojstva vitamina C do momenta primjene, čini da sadržaj ima uljnu teksturu.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Omogućava vraćanje blistavosti i svjetlosti izgubljenih tokom vremena i usljed neadekvatnog izlaganja UV zracima, kao i usljed brojnih štetnih uticaja kojima je koža svakodnevno izložena (zagađenost, hladnoća, duhan, loša ishrana, nedostatak sna, stres, itd.)</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Zahvaljujući visokom sadržaju čistog vitamina C, njihova kontinuirana upotreba omogućava ujednačavanje tena kože i smanjenje neželjenih pigmentacija.</p>
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
                                Preporučuje se nanošenje 2-3 puta sedmično ujutro. Nanijeti na čistu kožu i masirati dok se potpuno ne upije.
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
                                                href="https://www.figma.com">Pogledaj kolekciju</a>
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
                                                href="https://www.figma.com">Pogledaj kolekciju</a>
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
                                                href="https://www.figma.com">Pogledaj kolekciju</a>
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
 
export default AmpuleZaRevitalizaciju;