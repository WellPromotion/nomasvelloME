import styles from '../../styles/usluge/FacijalniAntiAge.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import turqCheck from '../../public/images/turqCheck.svg';
import sample1 from '../../public/images/usluge/facijalni-anti-age/sample1.png'
import sample2 from '../../public/images/usluge/facijalni-anti-age/roll-on-serum.png'
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/facijalni-anti-age/facijalni-anti-age.jpg'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import doctorIcon from '../../public/images/usluge/fotoepilacija/doctorIcon.svg'
import doctorImg from '../../public/images/usluge/fotoepilacija/doctorImg.png'
import FacijalniAntiAgePopup from '../../Components/popups/FacijalniAntiAgePopup';
import FacijalniAntiAgePopupBottom from '../../Components/popups/FacijalniAntiAgePopupBottom';

  
const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const FacijalniAntiAge = () => {
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
                            <p className="titleUsluge">Facijalni Anti Age</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <FacijalniAntiAgePopup />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="definicijaFotoepilacija" className="definicijaFotoepilacija definicijaFotopodmladjivanje">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <p className="titleDefinicijaFotoepilacija">Ponosno pokažite svoju kožu!</p>
                            <p className="contentDefinicijaFotoepilacija">
                            Aktivna njega lica u kombinaciji s profesionalnim kozmetičkim proizvodima i LED svjetlosnom terapijom vraća svježinu i sjaj vašoj koži. Suzbija efekte vanjskih faktora (vjetar, hladnoća, UV zrake…) i postiže da koža bude nježna, glatka, zategnuta i blistava. Primjerena je za mlađu kožu zbog svog stimulativnog učinka.
Facijalni anti-age tretman se može sprovesti na sljedećim zonama: lice, vrat i dekolte. Ovisno o potrebi i želji klijenta moguć je izbor različitih vrsta tretmana i profesionalnih kozmetičkih preparata: hidratacija, zatezanje, smanjenje bora i izražajnih linija, regulacija lučenja sebuma kod masne kože, revitalizacija kože itd.
                            </p>
                           
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
            
            <section id="ucinkovitost" className="ucinkovitost">
                <div className="container">
                    <div className="columns level">
                        <div className="column is-4 leftCol">
                            <p className="ucinkovitostTitle">
                            Učinkovitost tretmana
                            </p>
                            <p className='ucinkovitostSub defaultText'>Ovaj tretman je učinkovit za usporavanje starenja kože, djeluje na ćelijskom nivou i stimuliše sistem apsorpcije svjetlosne energije koji posjeduje dermis. Svjetlost koju proizvode LED diode djeluje na mikroskopskom nivou što potiče obnavljanje ćelije i stimuliše <span className="greenSpan">proizvodnju kolagena i elastina, koji su odgovorni za nedostatak elastičnosti kože.</span></p>
                        </div>
                        <div className="column is-4">
                            <img src={sample1} alt="facijalni_anti_age" />
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="hr" className="hr">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="tipovi" className="tipovi">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="blueTipovi">
                            U zavisnosti od vaših potreba i ciljeva, <br />
primjenjuje se tretman prilagođen svakom klijentu:
                            </p>
                            <p className="tipoviTitle">Tipovi tretmana</p>
                        </div>
                    </div>
                    <div className="columns threeCols">
                        <div className="column">
                            <div className="outter">
                                <div className="inner">
                                    <p className="boxTitle">
                                    Protiv bora
                                    </p>
                                    <div className="list">
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Ublažava male izražajne linije.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Aktivira vlakna kolagena i elastina kože
kako bi se poboljšala elastičnost.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Hidratizira i daje sjaj.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Sprečava starenje kože.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column secondCol">
                        <div className="outter">
                                <div className="inner">
                                    <p className="boxTitle">
                                    Hidratacija
                                    </p>
                                    <div className="list">
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Hrani kožu na dubinski način.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Hidratizira..</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Poboljšava elastičnost i daje nježnost koži.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Postiže blistavost kože.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Sprečava starenje kože.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="outter">
                                <div className="inner">
                                    <p className="boxTitle">
                                    Učvršćivanje kože lica
                                    </p>
                                    <div className="list">
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Sprečava starenje kože.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Poboljšava sintezu kolagena i elastina
poboljšavajući tako elastičnost.</p>
                                        </div>
                                        <div className="item">
                                            <img src={turqCheck} alt="" />
                                            <p className='singleItem'>Postiže efekat zategnutosti mreže dermisa.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="sesije" className="sesije">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="txT">
                                {/* <span className='greenPart'>Potrebno je obaviti 2 sesije sedmično.</span> */}
                                {/* <br /> */}
Broj sesija će zavisiti od nekoliko faktora, kao što su: starosna dob, tretirana zona, stanje kože, itd.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="serum" className="serum">
                <div className="container">
                    <div className="columns topCols level">
                        <div className="column is-4">
                            <img src={sample2} className="imgSerum" alt="" />
                        </div>
                        <div className="column is-5">
                            <p className="rolonTitle">
                            Roll-on Serum protiv starenja
                            </p>
                            <p className="rolonSub">
                            Uz LED svjetlost se koristi roll-on Serum protiv starenja koji sadrži kolagen zbog svog efekta zatezanja i fleksibilizacije kože. Lokalna primjena smanjuje naboranost kože povećavajući hidratiziranost i obnavljajući elastičnost svojstvenu kožnim tkivima. Ima antioksidantni efekat pri čemu se uništavaju slobodni radikali i hijaluronsku kiselinu koja ima hidratizirajuću funkciju.
                            </p>
                            <a href="/kozmeticki-proizvodi/linija-za-hidrataciju/serum-protiv-starenja" className="rolonButton">Pogledaj detalje</a>
                        </div>
                    </div>
                    <div className="columns principi">
                        <div className="column is-5">
                            <p className="principiTitle">AKTIVNI PRINCIPI ROLL-ON <br />
                                SERUMA PROTIV STARENJA:</p>
                            <div className="listGreenWhite">
                                <div className="line">
                                    <p className='whiteBack'>Biljna placenta</p>
                                    <p className="greenBack">Hrani</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Hijaluronska kiselina</p>
                                    <p className="greenBack">Hidratizira.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Antioksidanti</p>
                                    <p className="greenBack">Vitamin A i vitamin E: repariraju i regeneriraju kožu.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Pantenol</p>
                                    <p className="greenBack">Daje nježnost i elastičnost, obnavlja i smiruje.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Alantoin</p>
                                    <p className="greenBack">Liječi ožiljke i regenerira.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Ekstrakt zelenog čaja</p>
                                    <p className="greenBack">Antioksidant.</p>
                                </div>
                                <div className="line">
                                    <p className='whiteBack'>Kolagen</p>
                                    <p className="greenBack">Daje glatkoću i elastičnost koži.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <p className="principiTitle">EFEKTI AKTIVNOG PRISTUPA:</p>
                            <div className="list">
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Aktiviranje vlakana kolagena i elastina.</p>
                                </div>
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Regeneracija.</p>
                                </div>
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Hidratacija.</p>
                                </div>
                                <div className="single">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className="singleItem">Pružanje elastičnosti.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cijenaFotopod" className="cijenaFotopod cijenaFacijalni">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijena facijalnog Anti-Age tretmana</p>
                            {/* <p className="subtitleCijena">Želimo da se istaknete! <br />
                                Savršena koža i najbolji osmijeh po najboljoj cijeni!</p> */}
                            {/* <p className="contentCijena">A ako ste već naš klijent, uživajte uz nevjerovatan popust!</p> */}
                        </div>
                    </div>
                    
                    <div className="columns priceTagCols level">
                        <div className="column txtCol">
                            <div className="list">
                            <div className="singleItemTop">
                                    <div className="inner">
                                        <p className="title">Cijena po sesiji</p>
                                        {/* <p className="price">Klijenti No+Vello *</p> */}
                                    </div>
                                </div>
                            <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Facijalni anti-age</p>
                                        <p className="price">30 KM</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </section>
            
            <section id="naruciteBottom" className="naruciteBottom naruciteFoto">
                <div className="container">
                    <div className="columns is-gapless">
                        <div className="column imgCol">
                            <img src={naruciteSe} alt="" />
                        </div>
                        <div className="column">
                            <div className="txtPart">
                                <div className="inner">
                                    <p className="titleNarudzba">UŽIVAJTE U
NAJBOLJOJ USLUZI FACIJALNOG ANTI AGE TRETMANA</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <FacijalniAntiAgePopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
        
        );
    }
     
    export default FacijalniAntiAge;