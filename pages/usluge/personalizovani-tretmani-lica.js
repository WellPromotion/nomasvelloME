import styles from '../../styles/usluge/PersonalizovaniTretmanLica.module.scss';
import greenCheck from '../../public/images/greenCheck.svg';
import turqCheck from '../../public/images/turqCheck.svg';
import sample1 from '../../public/images/usluge/personalizovani-tretman-lica/sample1.png';
import sample2 from '../../public/images/usluge/personalizovani-tretman-lica/sample2.png';
import sample3 from '../../public/images/usluge/personalizovani-tretman-lica/sample3.png';
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import greenSphere from '../../public/images/greenSphere.svg'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/naruciteSe.png'
import ReactPlayer from 'react-player';
import greenCircle from '../../public/images/usluge/fotoepilacija/greenCircle.svg'
import turqCircle from '../../public/images/usluge/fotoepilacija/turqCircle.svg'
import doctorIcon from '../../public/images/usluge/fotoepilacija/doctorIcon.svg'
import doctorImg from '../../public/images/usluge/fotoepilacija/doctorImg.png'
import Breadcrumbs from 'nextjs-breadcrumbs';
import PersonalizovaniTretmanLicaPopup from '../../Components/popups/PersonalizovaniTretmanLicaPopup';
import PersonalizovaniTretmanLicaPopupBottom from '../../Components/popups/PersonalizovaniTretmanLicaPopupBottom';


const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const PersonalizovaniTretmanLica = () => {
    return (
        
        <>
        

            <section id="uslugeHeader" className="uslugeHeader personalizovaniTretman">
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
                            <p className="titleUsluge">Personalizovani tretmani lica</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <PersonalizovaniTretmanLicaPopup/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="subHeader" className="subHeader">
                <div className="containe">
                    <div className="columns subHeaderCols">
                        <div className="column is-5 has-text-centered">
                            <p className="subHeaderTitle">
                            Otkrijte šta je potrebno vašoj koži tokom
potpuno besplatne profesionalne procjene!
                            </p>
                            <p className="subHeaderSub">
                            No+Vello raspolaže raznim procedurama, formulama i tretmanima za lice kako bi pružio rješenje za specifične probleme u odnosu na tip kože (osjetljiva, dehidrirana, masna, mlitava i koža sa znakovima fotostarenja).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="njegaKoze" className="njegaKoze">
                <div className="container">
                    <div className="columns njegaKozeCols level">
                        <div className="column imgCol is-4">
                            <img src={sample1} alt="personalizovani_tretmani_lica_uredjaj" />
                        </div>
                        <div className="column txtCol is-5">
                            <p className="njegakozeTitle">Njega kože od samog početka je najbolja
osnova da se održimo mladima u budućnosti. </p>
                            <p className="njegakozeSub">Njega kože je najbolji način kako bismo ostali mladi što duže. U No+Vello centrima  raspolažemo tretmanima za lice koji njeguju kožu lica na efikasan način i u skladu sa svakim tipom kože.</p>
                            <p className="njegakozeSub">Postoje različiti tipovi kože sa različitim potrebama. Adolescentna koža vjerovatno neće imati bora niti mrlja na koži, ali može biti sklona masnoj koži ili drugim problemima vezanim za akne. Nakon određene starosne dobi, koža počinje da gubi hidrataciju i pojavljuju se prve bore, mrlje i mlitavost.</p>
                        </div>
                    </div>
                    <div className="columns singleCols">
                        <div className="column is-5 has-text-centered">
                            <p className="singlePar">
                            Putem početnog pregleda uz korištenje ekskluzivne Woodove lampe odredit će se koja je vrsta tretmana za lice adekvatna, a pogotovo koje kritične zone zahtijevaju djelovanje.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="threeCols" className="threeCols">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered is-3">
                            <img src={turqSphere} className="turqSphere" alt="" />
                            <p className="threeTitle">Intenzivni tretmani:</p>
                            <p className="threeContent">Tretmani za lice u trajanju od 21 dana, koji kombinuju tretman u kabini sa aparatom i tretman na bazi specifičnih kozmetičkih proizvoda. Cilj je aktiviranje kože i dubinsko tretiranje iste.</p>
                        </div>
                        <div className="column has-text-centered is-3">
                            <img src={turqSphere} className="turqSphere" alt="" />
                            <p className="threeTitle">Održavanje:</p>
                            <p className="threeContent">Kombinuje tretman u kabini sa aparatom i tretman u kući na bazi specifičnih kozmetičkih proizvoda.</p>
                        </div>
                        <div className="column has-text-centered is-3">
                            <img src={turqSphere} className="turqSphere" alt="" />
                            <p className="threeTitle">Flash:</p>
                            <p className="threeContent">Dnevni tretmani lica u kojima se kombinuju različite usluge sa specifičnim proizvodom kako bi se postigao trenutačni efekat.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="threePars" className="threePars">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered firstCol">
                            <p className='defaultText'>Dođite u vama najbliži centar i otkrijte potpuno besplatno šta je potrebno vašoj koži!</p>
                        </div>
                    </div>
                    <div className="columns singlePar">
                        <div className="column has-text-centered is-5">
                            <p className="defaultText">Woodova lampa nam omogućava da brzo procijenimo stanje kože zahvaljujući fluorescentnim i fosforescentnim efektima. Na taj način možemo profesionalnije i sigurnije obaviti procjenu stanja kože naših klijenata. Ova usluga procjene će biti besplatna za klijenta.</p>
                        </div>
                    </div>
                    <div className="columns imgCols">
                        <div className="column has-text-centered">
                           <img src={sample2} alt="personalizovani_tretmani_lica" />
                        </div>
                    </div>
                </div>
            </section>

            
            <section id="threeColsGreen" className="threeColsGreen">
                <div className="container">
                    <div className="columns titleCols">
                        <div className="column has-text-centered">
                            <p className="threeColsGreenTitle">
                            Posljednja tehnologija na usluzi <br /> vašoj koži:
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-4">
                            <img src={greenSphere} className="greenSphere" alt="" />
                            <p className="threeTitle">IPL fotopodmlađivanje:</p>
                            <p className="threeContent">Intenzivna pulsirajuća svjetlost djeluje dubinski u koži i stimuliše stvaranje kolagena i elastina, te postiže ublažavanje bora i izražajnih linija, definisanje oblika lica, ujednačavanje tena, efekat blistavosti i primjetan efekat zategnutosti.</p>
                        </div>
                        <div className="column is-4">
                            <img src={greenSphere} className="greenSphere" alt="" />
                            <p className="threeTitle">LED:</p>
                            <p className="threeContent">Ova metoda je učinkovita za usporavanje starenja kože. Djeluje na nivou ćelija i stimuliše sistem apsorpcije svjetlosne energije koji posjeduje dermis. Na ovaj način, svjetlost koju stvaraju LED sijalice djeluje na mikroskopskom nivou i potiče regeneraciju ćelija i stimuliše proizvodnju kolagena i elastina, koji su odgovorni za nedostatak elastičnosti kod kože. Adekvatna kombinacija svjetlosti uz primijenjeni aktivni princip će postići različit rezultat na koži djelujući u njenoj unutrašnjosti.</p>
                        </div>
                        <div className="column is-4">
                            <img src={greenSphere} className="greenSphere" alt="" />
                            <p className="threeTitle">Čišćenje lica ultrazvukom i <br /> galvanskom energijom:</p>
                            <p className="threeContent">Dnevni tretmani lica u kojima se kombinuju različite usluge sa specifičnim proizvodom kako bi se postigao trenutačni efekat.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="pozivamoVas" className="pozivamoVas">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="columns is-gapless boxCols">
                                <div className="column imgCol is-3">
                                <img src={sample3} alt="besplatan_pregled_lica" />
                                </div>
                                <div className="column txtCol is-5">
                                    <div className="inner">
                                        <div className="titlePart">
                                            <img src={doctorIcon} className="doctorIcon" alt="besplatan_pregled_lica" />
                                            <p className="doctorTitle">Pozivamo vas da dodjete u nas centar na
potpuno besplatan pregled lica</p>
                                        </div>
                                        <p className='doctorSub'>Radi vase sigurnosti, Centri No+Vello <br />
                                            raspolazu ljekarskom podrskom</p>
                                        <a href="/centri" className="doctorButton">Pogledaj lokacije centara</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cijenaFotopod" className="cijenaFotopod cijenaFacijalni cijenaTjelesni cijenaPersonalizovani">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijena</p>
                        </div>
                    </div>
                    
                    <div className="columns priceTagCols level">
                        <div className="column txtCol">
                            <p className="pozivamoVas">
                            Pozivamo vas da dođete u naš Centar na potpuno <br /> besplatan probni tretman
                            </p>
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
NAJBOLJOJ USLUZI PERSONALIZOVANOG TRETMANA LICA</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <PersonalizovaniTretmanLicaPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </>
        
  );
}

export default PersonalizovaniTretmanLica;