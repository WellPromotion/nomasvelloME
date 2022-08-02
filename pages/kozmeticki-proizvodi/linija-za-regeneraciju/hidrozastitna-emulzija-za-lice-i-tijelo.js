import styles from '../../../styles/kozmeticki-proizvodi/linija-za-regeneraciju/HidrozastitnaEmulzija.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sample1 from '../../../public/images/kozmeticki-proizvodi/linija-za-regeneraciju/hidrozastitna-emulzija/sample1.png'
import elipseIcon from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/gel-za-ciscenje-visoke-tolerancije/elipseIcon.svg'
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
  
const HidrozastitnaEmulzija = () => {
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
                            <p className='featuredTitle'>HIDROZAŠTITNA EMULZIJA
ZA LICE I TIJELO</p>
                            <p className='featuredSubtitle'>Hidratantna, regenerativna emulzija sa aloe verom, uljem ploda čileanske ruže i visokim zaštitnim solarnim faktorom SPF30.</p>
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
                                <p className='titleFeatures'>Aktivni principi</p>
                            </div>
                            <div className="listInner">
                            <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aloe vera:</p>
                                        <p className="odlikeItem">Hrani, hidratizuje i regeneriše.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Ulje ploda čileanske ruže:</p>
                                        <p className="odlikeItem">Regeneriše kožno tkivo, pomaže u prevenciji ranog starenja, ublažava bore, <br /> smanjuje strije, ožiljke i mrlje na koži.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Alantoin:</p>
                                        <p className="odlikeItem">Regeneriše ćelije.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>UV zaštita:</p>
                                        <p className="odlikeItem">srednjeg faktora.</p>
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
                                        <p className="odlikeItem">Neophodna je za pripremu i zaštitu kože zbog svog balzamskog, umirujućeg i hidratantnog efekta.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Stimuliše regeneraciju novih ćelija, povećava proizvodnju kolagena i tonificira kožu, te na taj način sprečava eventualne nelagode na koži.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Minimizira moguća oštećenja na koži koja se mogu pojaviti kao posljedica dehidratacije kože koju može uzrokovati proces fotoepilacije.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Ova emulzija je dio tretmana kako bi se dobili očekivani rezultati uz potpunu sigurnost. Na ovaj način postižemo da koža bude depilirana i njegovana.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="columns">
                        <div className="column rightColumn bottomColEmulzija">
                        <div className="titleInner">
                                <img className='titleIcon' src={karakteristikeIcon} alt="" />
                                <p className='titleFeatures'>Karakteristike</p>
                            </div>
                            
                            <div className="listInner">
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Hidratizuje</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Umiruje</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Regeneriše</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="greenCheckSpacing" src={greenCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Tonificira</p>
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
                                Nanositi uvijek prije izlaganja sunčevim zrakama.
<br /> <br />
Dok su kreme uglavnom sačinjene od jednog manje-više masnog spoja kojem se dodaju aktivne supstance (kao ulje ploda čileanske ruže), a upotreba se preporučuje osobama koje imaju više od 30 godina, emulzije su proizvodi blagog sastava namijenjeni mlađoj koži kojoj nije potrebna dubinska hidratacija. <br />
Kako bi zaštita bila potpuna, klijent treba da nanese tanak sloj Hidrozaštitne emulzije nakon Seruma protiv starenja i Revitalizirajućeg facijalnog fluida.
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
 
export default HidrozastitnaEmulzija;