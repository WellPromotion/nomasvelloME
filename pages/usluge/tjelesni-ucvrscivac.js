import styles from '../../styles/usluge/TjelesniUcvrscivac.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import turqCheck from '../../public/images/turqCheck.svg';
import sample1 from '../../public/images/usluge/tjelesni-ucvrscivac/sample1.png'
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/naruciteSe.png'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import doctorIcon from '../../public/images/usluge/fotoepilacija/doctorIcon.svg'
import doctorImg from '../../public/images/usluge/fotoepilacija/doctorImg.png'
import TjelesniUcvrscivacPopup from '../../Components/popups/TjelesniUcvrscivacPopup';
import TjelesniUcvrscivacPopupBottom from '../../Components/popups/TjelesniUcvrscivacPopupBottom';


const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const TjelesniUcvrscivac = () => {
    return (
        
        <>
        
            
        <section id="uslugeHeader" className="uslugeHeader facijalni">
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
                            <p className="titleUsluge">Tjelesni učvršćivač</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <TjelesniUcvrscivacPopup/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="definicijaFotoepilacija" className="definicijaFotoepilacija definicijaFotopodmladjivanje definicijaTjelesni">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <p className="titleDefinicijaFotoepilacija">Kako funkcioniše tjelesni učvršćivač?</p>
                            <p className="contentDefinicijaFotoepilacija">
                            Mlitavost kože na tijelu se pojavljuje kao posljedica dubinskih morfoloških promjena na tkivu, a uzrokovano je protekom vremena. Može biti izraženije u slučaju gubitka težine ili nedostatka fizičke aktivnosti. Kombinacija specifičnog proizvoda i LED uređaja primjetno potiče proizvodnju kolagena i elastina kako bi koža poboljšala svoju glatkoću. Zone koje su najsklonije ovoj pojavi su: ruke, abdomen, prsa, bedra i stražnjica.
                            </p>
                            <p className="contentGreenTjelesni">Potrebno je obaviti 2 sesije sedmično. <br />
Broj sesija će zavisiti od nekoliko faktora, kao što su: starosna dob, zona, <br /> lokalizirane masne naslage…</p>
                            <p className="contentDefinicijaFotoepilacija">
                            Tretiraju se sljedeće zone: ruke, abdomen, lumbarna zona, noge, leđa, stražnjica i prsa.
                            </p>
                            <div className="columns coloredCols">
                        <div className="column has-text-centered">
                            <p className="txT">
                            Tjelesni učvršćivač +esthetic vraća vašoj koži elastičnost i čvrstoću <br />
izgubljenu tokom vremena ili naglih promjena težine. </p>
                        </div>
                    </div>
                        </div>
                        <div className="column videoCol">
                            <div className="videoInner">
                                <ReactPlayer url="https://www.youtube.com/watch?v=Egq-DgaikLQ&ab_channel=NomasVelloBiH"
                                    width='641px' height='368px' controls />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="hrTjelesni" className="hr">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="tretman" className="tretman tretmanTjelesni">
                <div className="container">
                    <div className="columns has-text-centered titleCols">
                        <div className="column is-4 titleCol">
                            <p className="tretmanTitle">Šta nudi ovaj tretman?</p>
                        </div>
                    </div>
                    <div className="columns colsHor">
                        <div className="column colHor">
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Vraća glatkoću koži na rukama, <br />
abdomenu, grudima, bedrima i stražnjici.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Učvršćuje kožu i potkožno tkivo.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Revitalizira kožu i daje joj elastičnost.</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns colsHor">
                    <div className="column colHor">
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Nije invazivan. Nema kolateralnih efekata.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Poboljšava rezultate tretmana za redukciju celulita.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
            
           <section id="hrTjelesni" className="hr">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="tretman" className="tretman tretmanTjelesni">
                <div className="container">
                    <div className="columns has-text-centered titleCols">
                        <div className="column is-4 titleCol">
                            <p className="tretmanTitle">Bolje rezultate postižete ako:</p>
                        </div>
                    </div>
                    <div className="columns colsHor">
                        <div className="column colHor">
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Hranite se na zdrav i raznolik način.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Umjereno vježbate svaki dan.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Održavate svoju kožu hidratiziranom sa <br />
No+Vello Hidrozaštitnom emulzijom za lice i tijelo.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
            
            
            <section id="serum" className="serum serumTjelesni">
                <div className="container">
                    <div className="columns topCols level">
                        <div className="column is-4">
                            <img src={sample1} className="imgSerum" alt="" />
                        </div>
                        <div className="column is-5">
                            <p className="rolonTitle">
                            Gel anticelulitni reduktor CountourActif.
                            </p>
                            <p className="rolonSub">
                            Uz LED svjetlost se koristi Gel anticelulitni reduktor CountourActif. Njegova ekskluzivna formula na bazi fukus algi, karnitina, guarane i mentola, stimuliše sagorijevanje masnoća i sprečava nagomilavanje adipoznog tkiva. Uz nanošenje dva puta dnevno, pomaže pri smanjivanju obima na lokalizovanim zonama, tonificira i daje čvrstoću koži.
                            </p>
                            <a href="/kozmeticki-proizvodi/kozmetika-za-tijelo" className="rolonButton">Pogledaj detalje</a>
                        </div>
                    </div>
                    <div className="columns principi">
                        <div className="column is-5">
                            <p className="principiTitle">AKTIVNI PRINCIPI I KORISTI GELA <br />
ANTICELULITNI REDUKTOR COUNTOURACTIF:</p>
                            <div className="listGreenWhite">
                                <div className="line">
                                    <p className='whiteBack'>Fukus alge</p>
                                    <p className="greenBack">Stimulišu sagorijevanje masnoća.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Guarana</p>
                                    <p className="greenBack">Stimuliše cirkulaciju krvi.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Jodne soli</p>
                                    <p className="greenBack">Pokreću tečnosti/lipolitičko djelovanje.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Crvena vinova loza</p>
                                    <p className="greenBack">Reguliše cirkulaciju krvi.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Preslica</p>
                                    <p className="greenBack">Bogata mineralima. Učvršćuje, sprečava mlitavost,
smanjuje otečenost tkiva.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Mentol</p>
                                    <p className="greenBack">Osvježavajući efekat.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Urea</p>
                                    <p className="greenBack">Hidratizira, daje fleksibilnost.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 rightColTjelesni">
                            <p className="principiTitle">EFEKTI GELA:</p>
                            <div className="list">
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Tonifikacija</p>
                                </div>
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Aktivacija cirkulacije krvi.</p>
                                </div>
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Pomaže pri sagorijevanju
lokalizovanih masnih naslaga.</p>
                                </div>
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Mobilizacija zadržane tečnosti.</p>
                                </div>
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Regenerirajući efekat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cijenaFotopod" className="cijenaFotopod cijenaFacijalni cijenaTjelesni">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Želimo da se istaknete! <br />
                                Savršena koža i najbolji osmijeh po najboljoj cijeni!</p>
                        </div>
                    </div>
                    
                    <div className="columns priceTagCols level">
                        <div className="column txtCol">
                            <div className="list">
                            <div className="singleItemTop">
                                    <div className="inner">
                                        <p className="title">Cijena po sesiji</p>
                                        <p className="price">KM</p>
                                    </div>
                                </div>
                            <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Tjelesni učvršćivač</p>
                                        <p className="price">30 KM</p>
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
NAJBOLJOJ USLUZI TJELESNOG učvršćivanja</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <TjelesniUcvrscivacPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
        
        );
    }
     
    export default TjelesniUcvrscivac;