import styles from '../../styles/usluge/Fotopodmlađivanje.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import sample1 from '../../public/images/usluge/fotopodmladjivanje/sample1.png'
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/fotopodmladjivanje/fotopodmladjivanje.jpg'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import doctorIcon from '../../public/images/usluge/fotoepilacija/doctorIcon.svg'
import doctorImg from '../../public/images/usluge/fotoepilacija/doctorImg.png'
import FotopodmladjivanjePopup from '../../Components/popups/FotopodmladjivanjePopup';
import FotopodmladjivanjePopupBottom from '../../Components/popups/FotopodmladjivanjePopupBottom';
import smanjujeBore from '../../public/images/usluge/fotopodmladjivanje/smanjuje-bore.jpg';
import oblikuje from '../../public/images/usluge/fotopodmladjivanje/oblikuje.jpg';
import sjaj from '../../public/images/usluge/fotopodmladjivanje/sjaj.jpg';

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
}; 

const Fotopodmlađivanje = () => {
    return (
        
        <>
            
        
            <section id="uslugeHeader" className="uslugeHeader fotopodmladjivanje">
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
                            <p className="titleUsluge">Fotopodmlađivanje</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <FotopodmladjivanjePopup />
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="oneLiner" className="oneLiner">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Sa najsavremenijom opremom</p>
                            </div>
                            <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Pod nadzorom medicinskog osoblja</p>
                            </div>
                            <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Sa najboljim cijenama</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="definicijaFotoepilacija" className="definicijaFotoepilacija definicijaFotopodmladjivanje">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <p className="titleDefinicijaFotoepilacija">Problem starenja kože</p>
                            <p className="contentDefinicijaFotoepilacija">
                            Starenje kože je nepovratni proces karakteriziran pojavom bora, pjega, istanjivanja i mlitavosti kože. Gustoća kolagena se smanjuje, koža gubi elastičnost i postaje krhka. Radi se o nizu promjena koje nastaju u koži, povezanih sa neumoljivim protokom vremena, hormonalnim promjenama i izlaganjem suncu kao glavnom faktoru.
                            </p>
                            <p className='starenjeTitle'>Starenje kože dovodi do:</p>
                            <div className="starenjeItems">
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Suhoće kože</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Bora</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Gubitka elastičnosti</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Solarnih ili senilnih kožnih pjega</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Hiperpigmentacije</p>
                                </div>
                                <div className="singleStarenje">
                                    <img src={turqCircle} alt="" />
                                    <p className='starenjeTxt'>Poremećaja vaskularizacije</p>
                                </div>
                            </div>
                        </div>
                        <div className="column videoCol">
                            <div className="videoInner">
                                <ReactPlayer url="https://www.youtube.com/watch?v=T5oTUvVDpNk&ab_channel=NomasVelloBiH"
                                    width='641px' height='368px' controls />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="principFoto" className="principFoto section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-5 leftCol">
                            <p className="titlePrincipFoto">Prema kojem principu
                                radi fotopodmlađivanje kože?</p>
                            <p className="subPrincipFoto">Fotopodmlađivanje (fotorejuvenacija) radi prema principu primjene impulsa intenzivne svjetlosti koja prodire u kožu bez oštećivanja površinskog sloja.
<br /><br />
Putem svjetlosti se prenosi toplota na kožu što dovodi do stvaranja novih vlakana kolagena i elastina koji obnavljaju mikromreže koje sačinjavaju dermis i epidermis, reorganizirajući ih i postižući efekat punoće putem zadebljanja i poravnanja kože iznutra.</p>
                        </div>
                        <div className="column is-5">
                        <p className="titlePrincipFoto">Zone koje se tretiraju</p>
                            <p className="subPrincipFoto">Posebno je pogodna i sa zadovoljavajućim rezultatima na licu, vratu, dekolteu i šakama, ali se može tretirati bilo koje područje tijela gdje je potrebno poboljšanje kvaliteta kože.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="rezultati" className="rezultati">
                <div className="container">
                    {/* <div className="columns level">
                        <div className="column is-5">
                            <p className="titleRezultati">Rezultati</p>
                            <p className="subRezultati defaultText">Smanjuje bore i izražajne linije, oblikuje lice, ujednačava ten, daje sjaj i efekat zatezanja kože, te u konačnici pruža zdraviji i podmlađen izgled. Iako se poboljšanja i rezultati mogu primijetiti nakon prvih sesija, potpuni učinci tretmana postaju vidljivi nakon završetka istog.</p>
                            <p className="bluesubRezultati">Pravilno nanošenje Revitalizirajućeg facijalnog fluida no+vello© dva puta na dan značajno poboljšava rezultate fotorejuvenacije zadržavajući efekte na duže vrijeme.
<br /><br />
Ne postoji ni minimalna ni maksimalna dobna starost za ovu vrstu tretmana.</p>
                        </div>
                        <div className="column is-5 imgCol">
                            <img src={sample1} alt="" />
                        </div>
                    </div> */}
                    <div className="coumns">
                    <div className="column">
                            <h3 className="rezultatiTitleFotopod">Rezultati
                            </h3>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="_innerCol">
                                <img src={smanjujeBore} alt="" />
                                <h3 className="rezultatiSingleTitle">Smanjuje bore</h3>
                                <p className="defaultText">
                                Smanjuje bore i izražajne linije, dajući <br /> nam vidljive rezultate nakon prve sesije.
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="_innerCol">
                                <img src={oblikuje} alt="" />
                                <h3 className="rezultatiSingleTitle">Oblikuje</h3>
                                <p className="defaultText">
                                Oblikuje lice i ujednačava ten pružajući <br /> zdraviji izgled.
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="_innerCol">
                                <img src={sjaj} alt="" />
                                <h3 className="rezultatiSingleTitle">Sjaj</h3>
                                <p className="defaultText">
                                Vraća sjaj umornoj koži i daje efekat <br /> zatezanja i podmlađen izgled lica.
                                </p>
                            </div>
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
            
            <section id="cijena" className="cijenaFotopod">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijena</p>
                            {/* <p className="subtitleCijena">Pozivamo vas da dodjete u nas Centar na potpuno <br /> besplatan probni tretman</p> */}
                        </div>
                    </div>
                    
                    <div className="columns priceTagCols level">
                        <div className="column txtCol">
                            <div className="list">
                            <div className="singleItemTop">
                                    <div className="inner">
                                        <p className="title">Zona</p>
                                        <p className="price">Cijena:</p>
                                    </div>
                                </div>
                            <div className="singleItem upperItem">
                                    <div className="inner">
                                        <p className="title">Lice</p>
                                        <p className="price">55KM</p>
                                    </div>
                                </div>
                                <div className="singleItem">
                                    <div className="inner">
                                        <p className="title">Dekolte</p>
                                        <p className="price">55KM</p>
                                    </div>
                                </div>
                                <div className="singleItem">
                                    <div className="inner">
                                        <p className="title">Šake (obje)</p>
                                        <p className="price">55KM</p>
                                    </div>
                                </div>
                                <div className="singleItem">
                                    <div className="inner">
                                        <p className="title">Vrat</p>
                                        <p className="price">55KM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column leftCol">
                            <div className="priceBox">
                                <div className="inner">
                                    <img src={priceTag} className="priceTag" alt="" />
                                    <p className="priceTitle">
                                        55KM Zona
                                    </p>
                                    <p className="priceSubtitle">
                                        Unisex tarifa
                                    </p>
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
NAJBOLJOJ USLUZI FOTOPODMLAĐIVANJA</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <FotopodmladjivanjePopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

        );
    }
     
    export default Fotopodmlađivanje;
