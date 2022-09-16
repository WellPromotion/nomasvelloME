import styles from '../../styles/usluge/Fotoepilacija.module.scss';
import Breadcrumbs from 'nextjs-breadcrumbs';
import greenCheck from '../../public/images/greenCheck.svg';
import sample1 from '../../public/images/usluge/fotoepilacija/sample1.png'
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
import FotoepilacijaPopup from '../../Components/popups/FotoepilacijaPopup';
import FotoepilacijaPopupBottom from '../../Components/popups/FotoepilacijaPopupBottom';
import Main from "../../Components/Selector/Main";


const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};

const Fotoepilacija = () => {
    return (
        
        <>
            
            <section id="uslugeHeader" className="uslugeHeader fotoepilacijaHeader">
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
                            <p className="titleUsluge">FOTOEPILACIJA</p>
                            <p className="subtitleUsluge">Aparati sa tehnologijom posljednje generacije</p>
                            {/* <a href="https://www.figma.com" className="uslugeBtn">Naručite se</a> */}
                            <FotoepilacijaPopup />
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


            <section id="definicijaFotoepilacija" className="definicijaFotoepilacija">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <p className="titleDefinicijaFotoepilacija">Šta je fotoepilacija?</p>
                            <p className="contentDefinicijaFotoepilacija">
                                Fotoepilacija ili fotopodmlađivanje se izvodi putem korištenja svjetlosti. Ova
                                definicija uključuje dvije metode: putem lasera ili Intense Pulsed Light (IPL) tj.
                                metoda rada pulsirajućom svjetlošću visokog intenziteta.
                                <br /><br />
                                Glavna razlika između ove dvije metode je u tome što je talasna dužina kod laser
                                tehnologije fiksna, a kod IPL je varijabilna. IPL tehnologija omogućava tretiranje
                                većine tipova kože i različitih boja dlaka. Obje metode nude dugotrajne rezultate.
                                Pulsirajuća svjetlost visokog intenziteta (IPL) sastoji se od emitovanja širokog spektra
                                svjetlosti na više talasnih dužina, što omogućuje da se tretman prilagodi
                                karakteristikama svakog klijenta.
                                <br /><br />
                                Aparati za fotoepilaciju No+Vello® raspolažu tehnologijom posljednje generacije i sadrže
                                moderni sistem rashlađivanja Sub Zero Intense, koji minimizira osjećaj toplote.
                            </p>
                        </div>
                        <div className="column videoCol">
                            <div className="videoInner">
                                <ReactPlayer className="videoPl" url="https://www.youtube.com/watch?v=ayP3TLmiWyA&ab_channel=NomasVelloBiH"
                                    width='641px' height='368px' controls />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section id="prijePoslije" className="prijePoslije">
                <div className="container">
                    <div className="columns">
                        <div className="column leftCol">
                            <div className="inner">
                                <p className="prijeTitle">Prije fotoepilacije</p>
                                <div className="singleItem">
                                    <img src={turqCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Ne uzimati nikakve fotosenzibilne lijekove prije tretmana. Obavijestiti svoj centar no+vello© ako se podvrgavate nekom medicinskom tretmanu.</p>
                                </div>
                                <div className="singleItem">
                                    <img src={turqCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Izbjegavati izlaganje suncu i UV zračenju prije i poslije tretmana (Posavjetujte se u Vašem centru).</p>
                                </div>
                                <div className="singleItem">
                                    <img src={turqCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Ne koristiti agresivne proizvode na koži, kao što su profesionalni piling ili hemijske kiseline (glikolna ili retinoička), najmanje mjesec dana prije tretmana.</p>
                                </div>
                                <div className="singleItem">
                                    <img src={turqCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Izbjegavati izlaganje suncu i UV zračenju prije i poslije tretmana (Posavjetujte se u Vašem centru).</p>
                                </div>
                                <div className="singleItem">
                                    <img src={turqCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Izbjegavati nanošenje krema sa vitaminom A ili retinoičkom kiselinom (uobičajeno se nalazi u kremama protiv bora).</p>
                                </div>
                                <div className="singleItem">
                                    <img src={turqCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Preporučuje se dolazak u centar sa čistom kožom, što znači, bez krema, dezodoransa, šminke. Ne koristiti proizvode koji u sebi sadrže alkohol prva tri dana (dezodorans).</p>
                                </div>
                            </div>
                        </div>
                        <div className="column rightCol">
                        <div className="inner">
                                <p className="prijeTitle">Poslije fotoepilacije</p>
                                <div className="singleItem">
                                    <img src={greenCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Izbjegavati izlaganje suncu i UV zračenju prije i poslije tretmana (Posavjetujte se u Vašem centru).</p>
                                </div>
                                <div className="singleItem">
                                    <img src={greenCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Izbjegavati nanošenje krema sa vitaminom A ili retinoičkom kiselinom (uobičajeno se nalazi u kremama protiv bora).</p>
                                </div>
                                <div className="singleItem">
                                    <img src={greenCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Preporučuje se dolazak u centar sa čistom kožom, što znači, bez krema, dezodoransa, šminke. Ne koristiti proizvode koji u sebi sadrže alkohol prva tri dana (dezodorans).</p>
                                </div>
                                <div className="singleItem">
                                    <img src={greenCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Na dan tretmana i dan poslije, preporučuje se izbjegavanje tople vode na tretiranoj zoni. Preporučljivo je korištenje mlake vode.</p>
                                </div>
                                <div className="singleItem">
                                    <img src={greenCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Izbjegavati farmerke ili zategnute pantalone na dan sesije, kao i bilo kakvog izvora toplote na zoni, kao što je sauna, sport, itd.</p>
                                </div>
                                <div className="singleItem">
                                    <img src={greenCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>U slučaju pojave osječaja toplote, žara ili crvenila na zoni, rashladiti je otprilike 20 minuta hladnim oblogama.</p>
                                </div>
                                <div className="singleItem">
                                    <img src={greenCircle} className="turqCircle" alt="" />
                                    <p className='singleText'>Nanositi <span className="grenSpan">No+Vello© Hidrozaštitnu emulziju za lice i tijelo</span> sve dok je koža u potpunosti ne apsorbira i nastaviti sa nanošenjem 3 ili 4 dana poslije. Nakon toga, dovoljno je jedno dnevno nanošenje.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="ljekarskaFotoepilacija" className="ljekarskaFotoepilacija">
                <div className="container">
                    <div className="columns level">
                        <div className="column leftCol">
                            <p className="upitnik">?</p>
                            <p className="upitnikTitle">Mogu li se i ja podvrgnuti tretmanu fotoepilacije?</p>
                            <p className="upitnikSub">Većina stanovnika je prikladna za tretman, ali postoje <br /> kontraindikacije gdje se ne preporučuje.</p>
                        </div>
                        <div className="column rightCol">
                            <div className="lokacijeBox">
                                <div className="inner">
                                    <div className="top">
                                        <img src={doctorIcon} className="doctorIcon" alt="fotoepilacija-ljekarska-podrska" />
                                        <p className="podrskaTitle">Radi vaše sigurnosti, Centri No+Vello
raspolažu ljekarskom podrškom</p>
                                    </div>
                                    <p className="topSub">Posjetite NO+VELLO CENTRE i posavjetujte se <br />
                                        sa našim stručnim timom</p>
                                    <div className="bottom">
                                        <a href="/centri" className='lokacijeButton'>Pogledaj lokacije centara</a>
                                    </div>
                                </div>
                                <img src={doctorImg} className="doctorImg" alt="fotoepilacija-ljekarska-podrska" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="uklanjanjeDlacica" className="uklanjanjeDlacica">
                <div className="container">
                    <div className="columns topCols">
                        <div className="column has-text-centered is-5">
                            <p className='dlaciceTitle'>Kako se uklanjaju dlačice?</p>
                            <p className='dlaciceSub'>Fotoepilacija se zasniva na principu selektivne fototermolize. Prema tome, svjetlost (foto) primijenjena na kožu pretvara se u toplotu (termo) i selektivno uništava (liza) klice ćelija korijena dlačica. Što znači, melanin upija svjetlost i prenosi je na korijen dlačice, gdje pretvorena u toplotu, uništava klice ćelija koje hrane dlačice. Eliminisanjem ovih ćelija, dlačice odumiru i otpadaju.</p>
                        </div>
                    </div>
                    <div className="columns secondRow">
                        <div className="column has-text-centered">
                        <p className='dlaciceTitle'>Koliko sesija mi je potrebno?</p>
                        </div>
                    </div>
                    <div className="columns txtCols">
                            <div className="column is-5">
                            <p className='dlaciceSub'>Broj sesija će zavisiti od fototipa kože, o boji i debljini dlake, područja koje se tretira, spola i starosti klijenta, kao i hormonskog statusa, ali se uglavnom kreće između četiri i osam sesija.
 <br /><br />
Glavni razlog je što je fotoepilacija efikasna u jednoj od tri faze dlačica. To je anagena faza u kojoj je dlačica “posađena“ u korijenu. U tom slučaju, dlačice igraju ulogu fitilja koji provodi toplotu do korijena i uništava ćelije koje ga hrane. U sljedećim dvjema fazama, telogena i katagena, fotoepilacija nije učinkovita, jer su se dlačice već odvojile od svog korijena i iako ih spalimo, neće utjecati na spomenute ćelije.
 <br /> <br />
Na svakom dijelu našeg tijela dlačice su različite, čak i kada se nalaze na istoj zoni. Mogu biti više na površini ili dublje, mogu biti svjetlije ili tamnije, mogu se naći u porama sa više ili manje aktivnih žlijezda, kako lojnih tako i znojnih. To uzrokuje da u svakoj zoni našeg tijela imamo dlačice koje se više ili manje lako uklanjaju.</p>
                            </div>
                            <div className="column is-5">
                            <p className='dlaciceSub'>Toplotom se uništava korijen dlačice, ali one ostaju u folikulu još otprilike između prve i treće sedmice nakon obavljanja sesije, a zatim same ispadaju. U toj fazi može izgledati kao da one i dalje normalno rastu, ali ako ih pokušate izvući vidjet ćete da one lagano klize iz folikula. Jedna od prednosti aparata fotoepilacije No+Vello® je da neće konstantno dolaziti do izbacivanja dlačica, jer su one potpuno uništene i samim tim pore su čiste, bez ičega unutra.
<br /><br />
U početku, sesije su neophodne svaki mjesec, ali postepeno će biti sve rjeđe iz razloga što će folikul dlake biti sve slabiji i dlačicama će trebati više vremena da narastu. Rezultati su vidljivi već od prve sesije.
<br /><br />
Fotoepilacija pulsirajućom svjetlošću predstavlja praktično bezbolan tretman i u većini slučajeva ukloni se minimalno 80 ili 85% dlačica, tako da nekoliko dlačica koje se opet pojave nakon nekoliko godina, rastu sporije i mnogo su slabije i tanje, te se lahko mogu ukloniti na samo jednoj sesiji.</p>
                            </div>
                        </div>
                </div>
            </section>
            
            <section id="koraciFotoepilacije" className="koraciFotoepilacije">
                <div className="container">
                    <div className="columns topCols">
                        <div className="column has-text-centered">
                         <p className='koraciTitle'>Od čega se sastoji tretman fotoepilacije?</p>
                        </div>
                    </div>
                    <div className="columns triKoraka">
                        <div className="column is-3">
                            <p className="korakBroj">1</p>
                            <p className="korakTitle">Prvi korak</p>
                            <p className="korakContent">Razgovor sa klijentom i procjena istog putem upitnika gdje će se procijeniti adekvatnost tretmana, te će se odrediti područja koja će se depilirati, fototip kože i boja, dubina i debljina dlačica.</p>
                        </div>
                        <div className="column is-3">
                        <p className="korakBroj">2</p>
                            <p className="korakTitle">Drugi korak</p>
                            <p className="korakContent">Klijent dobiva preporuke i potrebne mjere koje se moraju uzeti u obzir. Popunit će upitnik i informisani pristanak gdje se navodi da je ispravno informisan.</p>
                        </div>
                        <div className="column is-3">
                        <p className="korakBroj">3</p>
                            <p className="korakTitle">Treći korak</p>
                            <p className="korakContent">Nakon analize ovih informacija, provjerava se podnošljivost kod klijenta provodeći probni test na zoni koja će se depilirati. Na kraju, sprovodi se sesija.</p>
                        </div>
                    </div>
                </div>
            </section>
        
            <section id="preporuke" className="preporuke">
                <div className="container">
                    <div className="columns">
                        <div className="column is-5">
                            <img src={sample1} alt="" />
                        </div>
                        <div className="column is-7">
                            <div className="txtBox">
                                <div className="inner">
                                    <p className="preporukeTitle">Preporuke od strane No+Vello</p>
                                    <p className="preporukeContent defaultText2">Preporučuje se korištenje kreme No+Vello®. Krema je neophodna za pripremu i prilagođavanje kože zbog svog balzamičkog, smirujućeg, hidratantnog, antiseptičkog i antibiotičkog efekta. Stimuliše regeneraciju novih ćelija i daje ten koži, sprečavajući bilo kakvu kožnu neugodnost. Osim toga, sadrži visoki zaštitni solarni faktor, povećava proizvodnju kolagena, minimizira potencijalne štete koje mogu nastati kao posljedica dehidratacije izazvane fotoepilacijom i fototerapijom. Krema je bitan dio tretmana kako bi se dobili željeni rezultati sa totalnom sigurnošću. Na taj način, postići ćemo depiliranu i njegovanu kožu.</p>
                                </div>
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
            
            <section id="diodniZone" className="diodniZone fotoepilacijaZone">
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
                                <img src={priceTag} className="priceTag" alt="49 KM - Cijena laserske epilacije po zoni" />
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
                
                <div className="container">
          <div className="columns">
                        <div className="column is-12">
                        <p className="titleCijena titleCijenaPad">Izaberite zone koje želite tretirati</p>
              <Main />
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
                                    <p className="titleNarudzba">UŽIVAJTE U NAJBOLJOJ FOTOEPILACIJI</p>
                                    <p className="subtitleNarudzba">U SVOM No+Vello® CENTRU!</p>
                                    {/* <a href="https://google.com" className="narudzbaButtonBottom">Naručite se</a> */}
                                    <FotoepilacijaPopupBottom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

        );
    }
     
    export default Fotoepilacija;