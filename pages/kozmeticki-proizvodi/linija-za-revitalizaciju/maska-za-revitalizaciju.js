import styles from '../../../styles/kozmeticki-proizvodi/linija-za-revitalizaciju/AmpuleZaRevitalizaciju.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sample1 from '../../../public/images/kozmeticki-proizvodi/linija-za-revitalizaciju/maska-za-revitalizaciju/sample1.jpg'
import maskeIcon from '../../../public/images/kozmeticki-proizvodi/maskeIcon.svg'
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
  
const MaskaZaRevitalizaciju = () => {
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
                            <p className='featuredTitle'>MASKA ZA REVITALIZACIJU</p>
                            <p className='featuredSubtitle'>Ova No+Vello maska vrši dubinsku revitalizaciju i hidrataciju</p>
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
                                <img className='titleIcon' src={maskeIcon} alt="" />
                                <p className='titleFeatures'>Maske za lice</p>
                            </div>
                            <div className="listInner listInnerMaska">
                            <p className='defaultText'>Maske nisu samo korisne za površinske slojeve kože na licu, nego su korisne i za najdublje slojeve epidermisa. Dodatno hrane i daju energiju svim slojevima kože, pa čak i onim najdubljim.</p>
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
                                        <p className="odlikeItem">Vitamin C djeluje kao zaštita za kožu od zračenja i sprečava oksidativno oštećenje kože.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Stimuliše sintezu kolagena i elastina.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Hidratizuje kožu i pomaže ujednačavanju tena kože.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Glicerin i sorbitol zamjenjuju vlažne agense koje je koža izgubila i vraćaju vodu epidermisu. Na ovaj način se postiže dubinska hidratacija.</p>
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
                                Preporučuje se nanošenje 2-3 puta sedmično navečer na čistu kožu. Masku je potrebno držati na licu 15 <br /> minuta. Nije potrebno nanositi serum ili kremu poslije maske.
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
 
export default MaskaZaRevitalizaciju;