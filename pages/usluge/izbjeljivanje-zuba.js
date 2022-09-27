import styles from '../../styles/usluge/IzbjeljivanjeZuba.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import sample1 from '../../public/images/usluge/izbjeljivanje-zuba/sample1.jpg'
import sample2 from '../../public/images/usluge/izbjeljivanje-zuba/sample2.png'
import sample3 from '../../public/images/usluge/izbjeljivanje-zuba/sample3.jpg'
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/izbjeljivanje-zuba/izbjeljivanje-zuba.jpg'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import doctorIcon from '../../public/images/usluge/fotoepilacija/doctorIcon.svg'
import doctorImg from '../../public/images/usluge/fotoepilacija/doctorImg.png'
import IzbjeljivanjeZubaPopup from '../../Components/popups/IzbjeljivanjeZubaPopup';
import IzbjeljivanjeZubaPopupBottom from '../../Components/popups/IzbjeljivanjeZubaPopupBottom';


const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const IzbjeljivanjeZuba = () => {
    return (
        
        <>
            
        
            <section id="uslugeHeader" className="uslugeHeader izbjeljivanje-zubaUsl">
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
                            <p className="titleUsluge">Izbjeljivanje zuba</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <IzbjeljivanjeZubaPopup />
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="definicijaFotoepilacija" className="definicijaFotoepilacija definicijaFotopodmladjivanje definicijaIzbjeljivanje">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <p className="titleDefinicijaFotoepilacija">Ponosno pokažite savršen osmijeh</p>
                            <p className="contentDefinicijaFotoepilacija">
                            Svakodnevno konzumiranje kafe, duhana i raznih lijekova uništava strukturu cakline i stvara mrlje na zubima koje se ne mogu odstraniti dnevnom higijenom usta.
                            </p>
                            <p className='starenjeTitle'>Faktori koji utiču na gubitak prirodne bjeline zubi:</p>
                            <div className="starenjeItems">
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Promjene u mineralnoj strukturi zuba.</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Emajl postaje manje porozan zbog nedostatka fosfata.</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Bakterijski pigmenti za različite vrste hrane.</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Čaj, kafa, duhan, vino, Coca-Cola i obojeni napici.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column videoCol">
                            <div className="videoInner">
                                <ReactPlayer url="https://www.youtube.com/watch?v=v3vA3kLFhG0&ab_channel=NomasVelloBiH"
                                    width='641px' height='368px' controls />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="led" className="led">
                <div className="container">
                    <div className="columns level">
                        <div className="column is-5">
                            <p className="ledEstTitle">LED +esthetic</p>
                            <p className="ledEstSub">LED +esthetic izbjeljivanje zuba je brz, ugodan i efikasan način da se zubima vrati njihova izvorna bjelina izgubljena tokom godina. Koristi se neškodljiv spoj koji oslobađa aktivni oksigen koji je odgovoran za izbjeljivanje, a LED svjetlost brzo, ugodno i eﬁkasno vraća vašim zubima izvornu bjelinu izgubljenu tokom godina.</p>
                            <div className="ledEstGreen">Sa samo 3 aplikacije od 20 minuta na jednoj sesiji možete postići izbjeljivanje do 8 nijansi.</div>
                        </div>
                        <div className="column imgCol">
                            <img src={sample1} alt="uredjaj_izbjeljivanje_zuba" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="hrLed" className="hr">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="tretman" className="tretman"> 
                <div className="container">
                    <div className="columns has-text-centered titleCols">
                        <div className="column is-4 titleCol">
                            <p className="tretmanTitle">Šta nudi ovaj tretman?</p>
                            <p className="tretmanSub">Izbjeljivanje zubi je prikladno samo za zdrave prirodne zube. Ne funkcionira na implantatima, umjetnim zubima ili zubima bez živaca i sa plombama.</p>
                        </div>
                    </div>
                    <div className="columns colsHor has-text-centered">
                        <div className="column colHor">
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Vraća izvornu bjelinu zuba.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Do 8 nijansi prema paleti boja za zube.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Brz, ugodan i efikasan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns has-text-centered">
                    <div className="column colHor">
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Jedinstvena cijena na tržištu.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Nije agresivan.</p>
                            </div>
                            <div className="singleItem">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItemT">Rezultati vidljivi već od prve sesije.</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns imgCols">
                        <div className="column has-text-centered">
                            <img src={sample2} alt="izbjeljivanje_zuba" />
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
            
            <section id="pojacaj" className="pojacaj">
                <div className="container">
                    <div className="columns level">
                        <div className="column imgCol is-4">
                            <img src={sample3} alt="izbjeljivanje_zuba" />
                        </div>
                        <div className="column rigtCol is-4">
                            <p className="rezultTitle">Pojačaj rezultate</p>
                            <p className="rezultSub">No+Vello LED tretman izbjeljivanja zuba se zasniva na korištenju hemijskog sastava zvanog natrij bikarbonat (ne koristimo hidrogen peroksid). Natrij bikarbonat je bezopasan hemijski sastav, što daje veliku sigurnost tretmanu. U osnovi, njegova funkcija je da generira aktivni oksigen koji je odgovoran za izbjeljivanje.</p>
                            <div className="list">
                                <div className="singleList">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className='singleListTxt'>Održavajte adekvatnu higijenu usta.
Nastojte prati zube poslije svakog obroka.</p>
                                </div>
                                <div className="singleList">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className='singleListTxt'>Izbjegavajte pretjeranu konzumaciju
kafe i pića sa kolorantima.</p>
                                </div>
                                <div className="singleList">
                                    <img src={greenCheck} className="greenCheck" alt="" />
                                    <p className='singleListTxt'>Izbjegavajte duhan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cijenaFotopod" className="cijenaFotopod cijenaIzbjeljivanje">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijene izbjeljivanja zuba</p>
                            {/* <p className="subtitleCijena">Želimo da se istaknete! <br />
                                Savršena koža i najbolji osmijeh po najboljoj cijeni!</p>
                                <p className="contentCijena">A ako ste već naš klijent, uživajte uz nevjerovatan popust!</p> */}
                        </div>
                    </div>
                    
                    <div className="columns priceTagCols level">
                        <div className="column txtCol">
                            <div className="list">
                            <div className="singleItemTop">
                                    <div className="inner">
                                        <p className="title">Cijene po sesiji</p>
                                        <p className="price"></p>
                                    </div>
                                </div>
                            <div className="singleItem middleItem">
                                    <div className="inner">
                                        <p className="title">Izbjeljivanje zuba: 1 sesija od 20 minuta</p>
                                        <p className="price">59 KM</p>
                                    </div>
                                </div>
                                <div className="singleItem bottomItem">
                                    <div className="inner">
                                        <p className="title">Izbjeljivanje zuba: 3 sesije od 20 minuta</p>
                                        <p className="price">99 KM</p>
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
                                    <p className="titleNarudzba">UŽIVAJTE U <br />
NAJBOLJOJ USLUZI IZBJELJIVANJA ZUBA</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <IzbjeljivanjeZubaPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

        );
    }
     
    export default IzbjeljivanjeZuba;