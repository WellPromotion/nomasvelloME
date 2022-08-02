import styles from '../../styles/usluge/LaserskaEpilacija.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import sample1 from '../../public/images/usluge/laserska-epilacija/sample1.png'
import turqSphere from '../../public/images/usluge/turqSphere.svg'
import sample2 from '../../public/images/usluge/laserska-epilacija/sample2.png'
import cijenaIcon from '../../public/images/usluge/cijenaIcon.svg'
import priceTag from '../../public/images/usluge/priceIcon.svg'
import priceTwo from '../../public/images/usluge/diodniLaser.png'
import naruciteSe from '../../public/images/usluge/naruciteSe.png'
import LaserskaEpilacijaPopup from '../../Components/popups/LaserskaEpilacijaPopup';
import LaserskaEpilacijaPopupBottom from '../../Components/popups/LaserskaEpilacijaPopupBottom';

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const LaserskaEpilacija = () => {
    return (
        
        <>
            
            
            <section id="uslugeHeader" className="uslugeHeader">
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
                            <p className="titleUsluge">LASERSKA EPILACIJA <br />
                                DIODNIM LASEROM</p>
                            <p className="subtitleUsluge">Efikasna, sigurna i povoljna epilacija</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <LaserskaEpilacijaPopup />
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
                                <p className='oneLinerItem'>Efikasno, brzo i sigurno</p>
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
            
            <section id="savremeneMetode" className='savremeneMetode'>
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <img src={sample1} alt="Tretman laserskom epilacijom u NO+VELLO centru u Sarajevu" />
                            <p className="metodeTitleGreen">
                            KORISTIMO NAJSAVREMENIJU <br />
METODU LASERSKE EPILACIJE
                            </p>
                        </div>
                    </div>
                    <div className="columns colsSavremeneMetode">
                        <div className="column">
                            <div className="inner has-text-centered">
                                <img src={turqSphere} className="turqSphere" alt="" />
                                <p className="metodeMediumBlue">Laserska epilacija diodnim laserom</p>
                                <p className="metodeListContent">Laserska epilacija diodnim laserom je najčešće korišten tip depilacije. No+Vello® diodni LASER je aparat velike snage kojeg je dizajnirao No+Vello® tim za inovaciju i razvoj, primjenjujući iskustvo i uz garanciju brenda koji je svjetski lider na tržištu više od decenije. Zahvaljujući uvođenju diodnog lasera razvili smo Fusion sistem.</p>
                            </div>
                        </div>
                        <div className="column">
                        <div className="inner has-text-centered">
                                <img src={turqSphere} className="turqSphere" alt="" />
                                <p className="metodeMediumBlue">Fusion sistem</p>
                                <p className="metodeListContent">Fusion sistem je fuzija, odnosno kombinacija epilacijskih tehnologija: diodni laseri i IPL SHR. No+Vello® Fusion sistem garantuje najbolje rezultate što se tiče uklanjanja neželjenih dlačica sa tijela. Zahvaljujući korištenju obje tehnologije tretiramo na siguran i efikasan način sve tipove kože i dlake. Korištenje tehnologija je prilagođeno potrebama klijenta u svim fazama tretmana.</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns colsSavremeneMetode colsSavremeneMetodeBott">
                        <div className="column is-6">
                            <div className="inner has-text-centered">
                                <img src={turqSphere} className="turqSphere" alt="" />
                                <p className="metodeMediumBlue">Efikasan, brz, siguran</p>
                                <p className="metodeListContent">Naš tretman laserske epilacije diodnim laserom je efikasan, brz, siguran i bezbolan za sve tipove kože i boje dlake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="hR" className="hR">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="nasDiodniLaser" className='nasDiodniLaser'>
                <div className="container">
                    <div className="columns level">
                        <div className="column imgCol is-8">
                            <img src={sample2} alt="Diodni laser u za tretman laserskom epilacijom u NO+VELLO centru u Sarajevu" />
                        </div>
                        <div className="column is-4">
                            <p className="titleDiodni middleGreenTitle">Naš diodni laser</p>
                            <p className="subtitleDiodni">No+Vello® laserska epilacija diodnim laserom karakteriše se talasnom dužinom od 810 nm, dubinom na kojoj se nalazi većina folikula dlake. Radi tako što postepeno zagrijava dermis dok se ne postigne odgovarajuća temperatura kako bi se uticalo na folikule dlake bez oštećenja kože.</p>
                            <div className="innerList">
                            <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Osigurava da zona koja se tretira bude u potpunosti obrađena.</p>
                                </div>
                                <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Maksimalna sigurnost po kožu.</p>
                                </div>
                                <div className="inner">
                                <img src={greenCheck} className="greenCheck" alt="" />
                                <p className='oneLinerItem'>Tretmani su ugodniji i bezbolni.</p>
                            </div>
                            </div>
                            <p className="contentDiodni">U centrima No+Vello® možete uživati u koži bez dlaka tokom čitave godine. Zahvaljujući našoj Sun&Safe tehnologiji za depilaciju preplanule kože, možete se depilirati čak i ljeti. Možete se sunčati ili izlagati UVA zracima samo 48 sati prije i poslije tretmana.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="hR" className="hR">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="prednostNovello" className="prednostNovello">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="prednostiGreenTitle middleGreenTitle">
                            Prednost No+Vello® pristupa
                            </p>
                        </div>
                    </div>
                    <div className="columns prednostiCols">
                        <div className="column">
                            <div className="inner">
                                <img src={turqSphere} className="turqSphere" alt="PERSONALIZOVAN PREGLED" />
                                <p className="prednostiTitle">PERSONALIZOVAN PREGLED</p>
                                <p className='prednostiContent'>Kao prvi korak, vaš No+Vello® centar će uraditi procjenu na osnovu upitnika i besplatnog probnog tretmana sa laser aparatom. Ovako će se procijeniti adekvatnost tretmana, odredit će se zone koje će se tretirati, fototip kože i boja, dubina i debljina dlake, a sve u cilju osiguranja optimalnih rezultata.</p>
                            </div>
                            
                        </div>
                        <div className="column">
                        <div className="inner">
                                <img src={turqSphere} className="turqSphere" alt="DIODNI LASER" />
                                <p className="prednostiTitle">DIODNI LASER</p>
                                <p className='prednostiContent'>To je najučinkovitiji laser kod većine tretmana laserske epilacije jer prodire dublje od drugih tipova lasera (Alexandrite) i omogućava tretman na preplanuloj koži.</p>
                            </div>
                            
                        </div>
                        <div className="column">
                        <div className="inner">
                                <img src={turqSphere} className="turqSphere" alt="SISTEM KONTROLE TOPLOTE" />
                                <p className="prednostiTitle">SISTEM KONTROLE TOPLOTE</p>
                                <p className='prednostiContent'>To je sistem hlađenja dermisa putem sonde koja štiti kožu i čini tretman laserske epilacije ugodnijim..</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns prednostiCols prednostiColsLower">
                        <div className="column">
                        <div className="inner">
                                <img src={turqSphere} className="turqSphere" alt="BRŽI APARAT" />
                                <p className="prednostiTitle">BRŽI APARAT</p>
                                <p className='prednostiContent'>No+Vello® diodni laser raspolaže sondom velike površine putem koje se emituje svjetlost. To omogućava smanjenje vremena trajanja tretmana na svim zonama.</p>
                        </div>
                        </div>
                  
                        <div className="column">
                        <div className="inner">
                                <img src={turqSphere} className="turqSphere" alt="No+Vello® DIODNI LASER VELIKE SNAGE" />
                                <p className="prednostiTitle">No+Vello® DIODNI LASER <br />
VELIKE SNAGE</p>
                                <p className='prednostiContent'>Diodni laser je aparat velike snage (10 Hz) koji omogućava da tretman bude učinkovit, brz i siguran za kožu.</p>
                            </div>
                        </div>
                        
                        <div className="column">
                            
                        <div className="inner">
                                <img src={turqSphere} className="turqSphere" alt="UGODAN TRETMAN" />
                                <p className="prednostiTitle">UGODAN TRETMAN</p>
                                <p className='prednostiContent'>To je sistem hlađenja dermisa putem sonde koja štiti kožu i čini tretman laserske epilacije ugodnijim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="hR" className="hR">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="diodniZone" className="diodniZone">
                <div className="container">
                    <div className="columns padMinusCols">
                        <div className="column has-text-centered padMinus">
                        <img src={cijenaIcon} className="cijenaIcon" alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="titleCijena">Cijena</p>
                            <p className="subtitleCijena">Cijene laserske epilacije i IPL epilacije su na bazi <br /> jedinstvene tarife za zene i muskarce</p>
                        </div>
                    </div>
                    
                    <div className="columns priceTagCols">
                    <div className="column leftCol">
                        <div className="priceBox">
                            <div className="inner">
                                <img src={priceTag} className="priceTag" alt="" />
                                <p className="priceTitle">
                                49KM Zona
                                </p>
                                <p className="priceSubtitle">
                                Unisex tarifa
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <img className='diodniIMG' src={priceTwo} alt="49 KM - Cijena laserske epilacije po zoni" />
                    </div>
                    </div>
                    
                    <div className="columns txtCols">
                        <div className="column txtCol">
                            <p className='txtPar'>U No+Vello centrima raspolažemo jedinstvenim uniseks cijenama po zoni, a to je 49 KM jednako za žene i muškarce. Predstavljamo vam prvi virtuelni kalkulator za izračunavanje cijena tretmana laserske epilacije i fotoepilacije IPL SHR tehnologijom.</p>
                        </div>
                        <div className="column txtCol">
                            <p className='txtPar'>U cilju prilgođavanja željama naših klijenata uvodimo još povoljnije cijene za sve one koji imaju problematične dlačice na malim površinama. Predstavljamo vam nove MINI zone po cijeni od 25 KM.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            
            
            <section id="naruciteBottom" className="naruciteBottom">
                <div className="container">
                    <div className="columns is-gapless">
                        <div className="column imgCol">
                            <img src={naruciteSe} alt="" />
                        </div>
                        <div className="column">
                            <div className="txtPart">
                                <div className="inner">
                                    <p className="titleNarudzba">UŽIVAJTE U NAJBOLJOJ LASERSKOJ EPILACIJI</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <LaserskaEpilacijaPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>

    );
}
 
export default LaserskaEpilacija;