import styles from '../../styles/usluge/UltrazvučnoČišćenjeLica.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import sample1 from '../../public/images/usluge/ultrazvucno-ciscenje-lica/sample1.jpg'
import proskin from '../../public/images/usluge/ultrazvucno-ciscenje-lica/proskin.png'
import greenLines from '../../public/images/usluge/ultrazvucno-ciscenje-lica/greenlines.svg'
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/ultrazvucno-ciscenje-lica/ultrazvucno-ciscenje-lica.jpg'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import UltrazvucnoCiscenjeLicaPopup from '../../Components/popups/UltrazvucnoCiscenjeLicaPopup';
import UltrazvucnoCiscenjeLicaPopupBottom from '../../Components/popups/UltrazvucnoCiscenjeLicaPopupBottom';
import efikasnoImg from '../../public/images/usluge/ultrazvucno-ciscenje-lica/efikasan-tretman-mitisera.png';
import ekonomicnoImg from '../../public/images/usluge/ultrazvucno-ciscenje-lica/ekonomicno.png';
import brzoImg from '../../public/images/usluge/ultrazvucno-ciscenje-lica/brzo.png';
import crveniloImg from '../../public/images/usluge/ultrazvucno-ciscenje-lica/bez-crvenila.png';
import necistoceImg from '../../public/images/usluge/ultrazvucno-ciscenje-lica/uklanjanje-necistoca-sa-lica.png';
import stresImg from '../../public/images/usluge/ultrazvucno-ciscenje-lica/uklanjanje-stresa-sa-lica.png';
// import bottomImage from '../../public/images/usluge/ultrazvucno-ciscenje-lica/Proskin_last_Aggiornato.jpg';
import bottomImage from '../../public/images/usluge/ultrazvucno-ciscenje-lica/10minuta-pregled.jpg';



const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const UltrazvučnoČišćenjeLica = () => {
    return (
        
        <>
            
            <section id="uslugeHeader" className="uslugeHeader ultrazvucnoHeader">
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
                            <p className="titleUsluge">Ultrazvučno čišćenje lica</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <UltrazvucnoCiscenjeLicaPopup />
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
       
            <section id="definicijaFotoepilacija" className="definicijaFotoepilacija definicijaFotopodmladjivanje definicijaUltrazvucno">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <p className="titleDefinicijaFotoepilacija">Dubinsko čišćenje kože</p>
                            <p className='starenjeTitle'>Čišćenje je prvi korak do savršene kože.</p>
                            <p className="contentDefinicijaFotoepilacija">
                            Ultrazvuk je jedna od najinovativnijih tehnologija u sektoru ljepote. Postiže dubinsko čišćenje i uklanja nečistoću sa kože, a pri tome je ne oštećuje.
Ne upotrebljava hemijske proizvode, uklanja mrtve ćelije i reaktivira cirkulaciju na tretiranoj zoni, stimulišući tako stvaranje kolagena i obnavljanje ćelija.
No+Vello oprema za čišćenje lica kombinuje, na učinkovit način, ultrazvuk i galvansku energiju, što omogućava da se primijeni tretman adekvatan za svaku kožu posebno.
Postiže da koža bude čista na brz i efikasan način.
                            </p>
                           
                        </div>
                        {/* <div className="column videoCol">
                            <div className="videoInner">
                                <ReactPlayer url="https://www.youtube.com/watch?v=Egq-DgaikLQ&ab_channel=NomasVelloBiH"
                                    width='641px' height='368px' controls />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
       
            <section id="djelovanje" className="djelovanje">
                <div className="container">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <p className="djelovanjeTitle">Djelovanje ultrazvuka u kombinaciji <br />
sa galvanskom energijom:</p>
                        </div>
                    </div>
                    <div className="container lictCont">
                    <div className="columns listCols">
                        <div className="column listCol is-3">
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">Dubinski čisti pore</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">temeljit piling bez
oštećenja i crvenila</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">uklanja mrtve stanice
i ostale nečistoće,</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">detoksicira kožu</p>
                            </div>
                        </div>
                        <div className="column listCol">
                        <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">stimulira proizvodnju kolagena i elastina</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">omogućuje bolje upijanje kozmetičkih proizvoda</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">uklanja mitesere,</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">poboljšava cirkulaciju krvi i limfe</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">mikromasaža</p>
                            </div>
                        </div>
                        <div className="column listCol">
                        <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">poticanje stvaranja novih stanica</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">također pogodan za vrlo osjetljivu kožu</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">smanjuje bore i linije</p>
                            </div>
                            <div className="single">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className="singleItem">smanjuje mlitavost kože na licu</p>
                            </div>
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
            
            
            {/* <section id="savrsenaKoza" className="savrsenaKoza">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="kozaTitle">
                            Postignite savršenu kožu <br />
u samo tri koraka!
                            </p>
                            <p className="korakBroj">
                                1
                            </p>
                            <p className="korakTitle">
                            KORAK 1 <br />
ODABERITE SVOJU VRSTU ČIŠĆENJA
                            </p>
                        </div>
                    </div>
                    <div className="columns listCols">
                        <div className="column is-3">
                            <img src={turqSphere} className="turqSphere" alt="" />
                            <p className="koraciTitle">PROSKIN ESENCIJALNI</p>
                            <p className="koraciSub">Osnovno čišćenje kože, preporučuje se svim tipovima kože – Kombinacija ultrazvuka i profesionalne kozmetike odabrane za vaš tip kože.</p>
                        </div>
                        <div className="column is-3">
                        <img src={turqSphere} className="turqSphere" alt="" />
                            <p className="koraciTitle">PROSKIN NUTRITIVNI</p>
                            <p className="koraciSub">Nutritivno čišćenje kože, suzbija suhoću i poboljšava sjaj kože. Preporučuje se dehidriranoj koži, sprečava pojavu bora. – Kombinacija ultrazvuka, galvanske struje i profesionalne kozmetike odabrane za vaš tip kože.</p>
                        </div>
                        <div className="column is-3">
                        <img src={turqSphere} className="turqSphere" alt="" />
                            <p className="koraciTitle">PROSKIN REGENERATIVNI</p>
                            <p className="koraciSub">Regenerativno čišćenje kože, povećava gustoću kože, daje sjaj koži. Preporučuje se osjetljivoj koži zbog svog umirujućeg i regenerativnog efekta. – Kombinacija ultrazvuka, galvanske energije i profesionalne maske za lice odabrane za vaš tip kože.</p>
                        </div>
                    </div>
                    <div className="columns verLineCols">
                        <div className="column verLineCol">
                            <hr className="verLine"></hr>
                        </div>
                    </div>
                    <div className="columns drugiCols">
                        <div className="column has-text-centered is-6">
                            <p className="korakBroj">
                                2
                            </p>
                            <p className="korakTitle">
                            KORAK 2 <br />
ODABERITE DODATAK. <br />
MAKSIMIZIRAJTE SVOJE REZULTATE.
                            </p>
                            <p className="drugiContent">
                            Dopunite svoje čišćenje lica jednim od naših tretmana za lice i poboljšajte efekte. <span className="boldirano">IPL (tretman fotopomlađivanja i regeneracije kože, tretman akni, uklanjanje pigmentacije) ili LED (facijalni anti-age – hidratacija, protiv bora, učvršćivanje kože lica)</span> svjetlosnu tehnologiju za meku, glatku, blistavu i mlađu kožu.
                            </p>
                        </div>
                    </div>
                    <div className="columns verLineCols">
                        <div className="column verLineCol">
                            <hr className="verLine"></hr>
                        </div>
                    </div>
                    <div className="columns treciCols">
                        <div className="column has-text-centered is-6">
                            <p className="korakBroj">
                                3
                            </p>
                            <p className="korakTitle">
                            KORAK 3 <br />
NJEGUJTE SVOJU KOŽU SVAKI DAN
                            </p>
                            <p className="drugiContent">
                            Njegujte kožu svaki dan, da zadržite prirodnu ravnotežu i održavate postignute rezultate. <br />
No+Vello vam nudi visoko kvalitetnu kozmetiku za vašu kožu. Otkrijte naše profesionalne proizvode, koju su razvijeni u prestižnim laboratorijama. Hrane i obnavljaju kožu svaki dan, te vam pomažu da vaše lice postane blistavo, a vaša koža bude mlađa što duže.
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered imgCol">
                        <img src={sample1} alt="" />
                        </div>
                    </div>
                </div>
            </section> */}
            
            <section id="imgsSection" className="imgsSection section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="singleImage">
                                <img src={efikasnoImg} alt="" />
                                <h4 className="imgTitle">Efikasno</h4>
                                <p className="defaultText">
                                Ultrazvučna tehnologija djeluje dubinski uklanjajući već u prvih 10 minuta tretmana mitesere i nečistoće.
                                </p>
                            </div>
                           
                        </div>
                        <div className="column">
                            <div className="singleImage">
                                <img src={ekonomicnoImg} alt="" />
                                <h4 className="imgTitle">EKONOMIČNO</h4>
                                <p className="defaultText">
                                Sa 40KM za Basic tretman uživaj u svim ProSkin pogodnostima
                                </p>
                            </div>
                           
                        </div>
                        <div className="column">
                            <div className="singleImage">
                                <img src={brzoImg} alt="" />
                                <h4 className="imgTitle">Brzo</h4>
                                <p className="defaultText">
                                Ultrazvučna tehnologija djeluje dubinski ukljanjajući već u prvih 10 minuta tretmana mitesere i nečistoće.
                                </p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="columns secondCols">
                        <div className="column">
                            <div className="singleImage">
                                <img src={crveniloImg} alt="" />
                                <h4 className="imgTitle">Crvenilo</h4>
                                <p className="defaultText">
                                Zahvaljući ultrazvučnoj tehnologiji nećete imati nikakvo crvenilo ili upalu kao što je uobičajeno tehnikom «istiskanja».
                                </p>
                            </div></div>
                        <div className="column">
                        <div className="singleImage">
                                <img src={necistoceImg} alt="" />
                                <h4 className="imgTitle">NEČISTOĆE</h4>
                                <p className="defaultText">
                                ProSkin djeluje dubinski i brzo, efikasno a neinvazivno i bezbolno, uklanjajući sve nečistoće na vašem licu.
                                </p>
                            </div>
                        </div>
                        <div className="column">
                        <div className="singleImage">
                                <img src={stresImg} alt="" />
                                <h4 className="imgTitle">STRESS NA LICU</h4>
                                <p className="defaultText">
                                Nakon našeg tretmana, umor nestaje a vaše lice će zasluženo blistati!
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="columns imgCols">
                        <div className="column">
                            <a href="/besplatan-probni-tretman"> 
                            <img src={bottomImage} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="cijenaUltra" className="cijenaUltra">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijene ultrazvučnog čišćenja lica</p>
                            {/* <p className="subtitleCijena">Doživite iskustvo tehnologije Proskin: <br />
5 novih tretmana osmišljenih upravo za vaše lice</p> */}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                        <img className='proskinLogo' src={proskin} alt="proskin-logo" />
                        </div>
                    </div>
                    <div className="columns fourCols">
                        <div className="column">
                            <div className="single">
                                <div className="inner">
                                    <div className="titlePart">
                                        <div className="left">
                                        <p className="singleTitle">Basic</p>
                                        <img src={greenLines} alt="" />
                                       </div>
                                        <div className="right">
                                        <p className="singlePrice">30KM</p>
                                        </div>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Ultrazvučno čišćenje lica</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Revitalizirajući fluid
sa C vitaminom</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Dermoactif sa kolagenom
i hijaluronskom kiselinom</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">10 min. masaža</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="single">
                                <div className="inner basicPlus">
                                    <div className="titlePart">
                                        <div className="left">
                                        <p className="singleTitle basicTitle">Basic Plus</p>
                                        <img src={greenLines} alt="" />
                                       </div>
                                        <div className="right">
                                        <p className="singlePrice">40KM</p>
                                        </div>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Ultrazvučno čišćenje lica</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Revitalizirajući fluid
sa C vitaminom</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Dermoactif sa kolagenom
i hijaluronskom kiselinom</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">10 min. masaža</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">čišćenje lica sa
galvanskom energijom</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="single">
                                <div className="inner">
                                    <div className="titlePart">
                                        <div className="left">
                                        <p className="singleTitle">Soft</p>
                                        <img src={greenLines} alt="" />
                                       </div>
                                        <div className="right">
                                        <p className="singlePrice">40KM</p>
                                        </div>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Ultrazvučno čišćenje lica</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Ampula</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">10 min. masaža</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="single">
                                <div className="inner">
                                    <div className="titlePart">
                                        <div className="left">
                                        <p className="singleTitle">Relax</p>
                                        <img src={greenLines} alt="" />
                                       </div>
                                        <div className="right">
                                        <p className="singlePrice">55KM</p>
                                        </div>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Ultrazvučno čišćenje lica</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Maska</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Revitalizirajući fluid
sa C vitaminom</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">10 min. masaža</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="columns fourCols">
                        <div className="column lowerCol">
                            <div className="single">
                                <div className="inner">
                                    <div className="titlePart">
                                        <div className="left">
                                        <p className="singleTitle">Complete</p>
                                        <img src={greenLines} alt="" />
                                       </div>
                                        <div className="right">
                                        <p className="singlePrice">65KM</p>
                                        </div>
                                    </div>
                                    <div className="columns lowerCols">
                                        <div className="column is-5">
                                        <div className="greenItem">
                                        <p className="greenTxt">Ultrazvučno čišćenje lica</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">Ampula + Maska</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                        </div>
                                        <div className="column">
                                        <div className="greenItem">
                                        <p className="greenTxt">Revitalizirajući fluid sa C vitaminom</p>
                                        <p className="plusSign">+</p>
                                    </div>
                                    <div className="greenItem">
                                        <p className="greenTxt">10 min. masaža</p>
                                    </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            
            <section id="pogledajtePromocije" className="section">
                <div className="container">
                <div className="columns promocijeCols">
                        <div className="column">
                        <a href="/otkrijte-nase-ponude-i-promocije" className="button pogledajtePromocije promocijeButton">Otkrijte naše ponude i promocije</a>
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
NAJBOLJOJ USLUZI ULTRAZVUČNOG ČIŠĆENJA LICA</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <UltrazvucnoCiscenjeLicaPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
       </>

        );
    }
     
    export default UltrazvučnoČišćenjeLica;