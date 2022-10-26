import styles from '../../styles/tehnologije/IPLTehnologija.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/ledTehnologija/ledIcon.svg'
import ledSampleImage from '../../public/images/tehnologije/ledTehnologija/ledSample.png'
import diodniLaserSampleImg from '../../public/images/tehnologije/iplTehnologija/iplSample.png'
import ReactPlayer from 'react-player';
import colorLedIconGreen from '../../public/images/tehnologije/ledTehnologija/ledGreen.png'
import colorLedIconBlue from '../../public/images/tehnologije/ledTehnologija/ledBlue.png'
import colorLedIconRed from '../../public/images/tehnologije/ledTehnologija/ledRed.png'
import ledSampleImage1 from '../../public/images/tehnologije/ledTehnologija/ledSample2.png'
import tretmanFacijalni from '../../public/images/tehnologije/ledTehnologija/tretmanFacijalni.svg'
import tretmanAnticelulitni from '../../public/images/tehnologije/ledTehnologija/tretmanAnticelulitni.svg'
import tretmanTjelesni from '../../public/images/tehnologije/ledTehnologija/tretmanTjelesni.svg'
import tretmanIzbjeljivanje from '../../public/images/tehnologije/ledTehnologija/tretmanIzbjeljivanje.svg'
import tretmanKorisnici from '../../public/images/tehnologije/ledTehnologija/ledSample3.png'
import tarifeDollar from '../../public/images/tehnologije/ledTehnologija/tarifeDollar.svg'
import tarifeZubi from '../../public/images/tehnologije/ledTehnologija/tarifeZubi.svg'
import tarifeLice from '../../public/images/tehnologije/ledTehnologija/tarifeLice.svg'
import greenCheck from '../../public/images/greenCheck.svg'






const LedTehnologija = () => {
    return (
        
        <>
           
           <section id='titleLedTehnologija' className='titleLedTehnologija hero is-medium'>
               <div className="hero-body">
                   <div className="imgTitleSphere has-text-centered">
                       <img src={aboveTitleImg} alt="" />
                   </div>
                   <div className="container has-text-centered">
                       <p className="pretitle">naše tehnologije</p>
                       <h1 className="title">LED tehnologija</h1>
                   </div>
                   <div className="imgIcon has-text-centered">
                       <img src={belowTitleImg} alt="" />
                   </div>
               </div>
           </section>

           <section id="ledAbout" className="ledAbout">
               <div className="container">
                   <div className="columns iplFirstColumn level">
                       <div className="column is-left">
                           <div className="_inner">
                               <div className="firstPart">
                                   <p className='iplAparatiTitle'>
                                       Kako funkcioniše LED tehnologija?
                                   </p>
                                   <p className='iplAparatiTxt'>
                                       LED uređaj je uređaj za fototerapiju i fotoporaciju. Studije američkog organa
                                       nadležnog za namirnice i lijekove (Food and Drug Administration FDA) i studije na
                                       Univerzitetu u Amsterdamu, kao i nekoliko objavljenih članaka i doktorskih
                                       disertacija o ovoj temi došli su do zaključka da vidljiva svjetlost različitih
                                       valnih dužina koju emituje LED uređaj je važan stimulator primarne energetske
                                       molekule stanice adenozin trifosfata ATP koji aktivira metabolitičke stanične
                                       reakcije što rezultira u povećanoj sintezi i porastu tkiva koje se tretira.
                                       Dakle, tkivo koje je bilo izloženo svjetlu odgovarajuće valne dužine koristi
                                       svjetlosnu energiju za obavljanje staničnih funkcija sa mnogo većom
                                       učinkovitošću. To dovodi do porasta sinteze vlakana kolagena i elastina, što
                                       rezultira poboljšanjem kvaliteta i izgleda kože.
                                   </p>
                                   <p className='iplAparatiTxt'>
                                       LED uređaj djeluje kombinovano: fototerapija, fotoporacija i aktivni proizvod
                                       koji udruženo održavaju osnovne kvalitete kože, hidratizuje i hrane kožu,
                                       smanjuju probleme masne kože, ublažavaju probleme neželjenih hiperpigmentacija,
                                       dovode do zatezanja kože i ublažavanja nastalih bora, tretiranja celulita i
                                       narandžine kože.
                                   </p>
                                   <p className='iplAparatiTxt'>
                                       LED uređaj, također obavlja u koži tkiva fotoporaciju koja se sastoji, kao što je
                                       nedavno pokazano na Univerzitetu St. Andrews, u otvaranju mikropora na vanjskom
                                       sloju kože, te na staničnoj membrani što omogućava adekvatnu apsorpciju aktivnih
                                       supstanci sa površine kože.
                                   </p>
                               </div>
                           </div>
                       </div>
                       <div className="column is-right">
                           <div className="_innerImage">
                               <img src={ledSampleImage} alt="" />
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="ledColors" className="ledColors">
               <div className="container">
                   <div className="columns">
                       <div className="column ledColorsHeaderColumn">
                           <p className='ledColorsHeader'>
                               LED uređaj je namjenjen za fototerapiju lica i tijela pomoću svjetlosnih dioda (LED),
                               čija je glavna karakteristika velika svjetlosna snaga i emitovanje svjetlosti u tri
                               različite valne dužina (plava, zelena i crvena) koje se koriste odvojeno ili u
                               kombinacijama.
                           </p>
                       </div>
                   </div>
               </div>

               <div className="container ledColorsContainer">
                   <div className="columns">
                       <div className="column is-4">
                           <div className="_innerLeft innerZelenaLed">
                               <div className="colorBgLedZelena"></div>
                               <div className="contentZelena">
                                   <img src={colorLedIconGreen} alt="" />
                                   <p className="titleLedColors">Zelena</p>
                                   <p className="contentLedColors">Uravnotežuje neravnomjernu pigmentaciju i crvenilo.
                                       Pomaže kod hipo i hiperpigmentacija.</p>
                               </div>
                           </div>
                           <div className="_innerLeft innerPlavaLed">
                               <div className="colorBgLedPlava"></div>
                               <div className="contentPlava">
                                   <img src={colorLedIconBlue} alt="" />
                                   <p className="titleLedColors">Plava</p>
                                   <p className="contentLedColors">Uravnotežuje neravnomjernu pigmentaciju i crvenilo.
                                       Pomaže kod hipo i hiperpigmentacija.</p>
                               </div>
                           </div>
                       </div>
                       <div className="column is-8">
                           <div className="_innerRight innerZelenaLed">
                               <div className="colorBgLedCrvena"></div>
                               <div className="contentCrvena">
                                   <img src={colorLedIconRed} alt="" />
                                   <p className="titleLedColors">Crvena</p>
                                   <p className="contentLedColors">Najviše pozitivnih učinaka na kožu i cijeli organizam
                                       dokazano ima crvena i svjetlost infracrvenog spektra. Na razini stanica omogućava
                                       bolju komunikaciju i izmjenu tvari među stanicama, zato u kombinaciji s
                                       profesionalnim preparatima postižemo iznenađujuće rezultate. Proširuje krvne žile
                                       i povećava cirkulaciju krvi, a time i ishranu tkiva. Ubrzava limfnu cirkulaciju,
                                       čime se ubrzava izlučivanje toksina iz tijela. Jača vezivno i elastično tkivo,
                                       smanjuje bore, osvježava boju kože te ujednačava kožu. Štiti od slobodnih
                                       radikala koji uzrokuju starenje kože i štiti od fotooštećenja nastalog zbog
                                       izlaganja valnim dužinama (UVA i UVB). Podržava sintezu proteina koji omogućuju
                                       regeneraciju stanica i zaustavlja sintezu onih koji rade u smjeru starenja i
                                       propadanja.</p>
                               </div>
                           </div>
                           <div className="innerRightDown">
                               <p className='textContent'>
                                   LED uređaj također omogućuje odvojenu primjenu različitih valnih dužina na različite
                                   dijelove kože uz odgovarajući program za aplikaciju tretmana, koji će nas voditi
                                   korak po korak
                                   za pravilnu primjenu i postizanje maksimalne učinkovitosti.
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="elektromagnetskaEnergija" className="elektromagnetskaEnergija">
               <div className="container">
                   <div className="columns level">
                       <div className="column leftElektromagnetska">
                           <p className="titleElektromagnetska defaultGreenTitle">
                               Pojačava učinak elektromagnetske energije
                           </p>
                           <p className="textElektromagnetska defaultText">
                               Primjena svjetla u kombinaciji s aktivnim kozmetičkim proizvodima pojačava učinak
                               elektromagnetske energije i dovodi do maksimalnog efekta.
                               <br /> <br />
                               LED uređaj je pogodan za poboljšanje masne kože, mrlja i pigmentacije kože, izražajnih
                               linija, bora, kože narandžine kore, gojaznosti i izbjeljivanje zuba.
                           </p>
                       </div>
                       <div className="column rightElektromagnetska">
                           <img src={ledSampleImage1} alt="led_tehnologija" />
                       </div>
                   </div>
               </div>
           </section>

           <section id="tretmaniLed" className="tretmaniLed">
               <div className="container">
                   <div className="columns">
                       <div className="column">
                           <p className='tretmaniTitleLed defaultGreenTitle has-text-centered'>Tretmani</p>
                       </div>
                   </div>
                   <div className="columns tretmaniFourColumns">
                       <div className="column">
                           <div className="innerTretmaniSingle prviTretman">
                               <img src={tretmanFacijalni} alt="" />
                               <a href='/usluge/facijalni-anti-age' className='tretmaniSingleTitle'>FACIJALNI ANTI-AGE</a>
                               <p className="tretmaniSingleText defaultText">Kombinuje efekte stimulacije i
                                   vazodilatacije i, zajedno sa proizvodima kozmetičke linije No+Vello, djeluje na
                                   nekoliko polja na personaliziran način prema potrebama svakog klijenta: tretman
                                   protiv bora, hidratacija i učvršćivanje kože lica. Ovaj tretman je idealan za lice,
                                   vrat, dekolte i ruke.</p>
                           </div>
                       </div>
                       <div className="column">
                           <div className="innerTretmaniSingle drugiTretman">
                               <img src={tretmanAnticelulitni} alt="" />
                                <a href='/usluge/tjelesni-ucvrscivac' className='tretmaniSingleTitle'>ANTICELULITNI REDUKTOR</a>
                               <p className="tretmaniSingleText defaultText">Vrlo je tražen zbog svog trenutačnog
                                   djelovanja, smanjuje lokalizirane masne naslage i djeluje na celulit čak i na
                                   najkonfliktivnijim zonama: abdomen, bedra i bokovi. Na samo jednoj sesiji moguće je
                                   smanjiti od 1 do 3 cm obima.</p>
                           </div>
                       </div>
                       <div className="column">
                           <div className="innerTretmaniSingle treciTretman">
                                <img src={tretmanTjelesni} alt="" />
                                <a href='/usluge/tjelesni-ucvrscivac' className='tretmaniSingleTitle'>TJELESNI UČVRŠĆIVAČ</a>
                               <p className="tretmaniSingleText defaultText">Omogućuje uživanje u glatkoj, čvrstoj i
                                   elastičnoj koži. Glavne zone na kojima se primjenjuje su: ruke, abdomen, prsa, bedra
                                   i stražnjica.</p>
                           </div>
                       </div>
                       <div className="column">
                           <div className="innerTretmaniSingle cetvrtiTretman">
                                <img src={tretmanIzbjeljivanje} alt="" />
                                <a href='/usluge/izbjeljivanje-zuba' className='tretmaniSingleTitle'>IZBJELJIVANJE ZUBA</a>
                               <p className="tretmaniSingleText defaultText">Vraća do 8 nijansi prema paleti boja za
                                   zube i postiže izvornu bjelinu zuba. Preporučuje se da usta budu sanirana prije
                                   tretmana, te da se ukloni zubni kamenac ukoliko ga ima. Također se preporučuje
                                   izbjegavanje pušenja u narednih 48 sati poslije tretmana. Podrazumijeva se da
                                   trajanje efekata tretmana zavisi od prehrambenih navika klijenta.</p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>


           <section id="korisniciTretmana" className="korisniciTretmana">
               <div className="container">
                   <div className="columns columnsKorisnici level">
                       <div className="column leftKorisniciTretmana">
                           <p className="korisniciTTitle defaultGreenTitle">KO MOŽE KORISTITI OVE TRETMANE?</p>
                           <p className='textKorisnici defaultText'>Bilo da se radi o zreloj ili mladoj koži, u oba
                               slučaja se može obaviti bilo koji od tretmana, bez obzira na fototip kože i prehrambene
                               navike klijenta, zato što se uvijek radi o tretmanima personaliziranim u odnosu na
                               potrebe i karakteristike klijenta.</p>
                       </div>
                       <div className="column rightKorisniciTretmana">
                           <img src={tretmanKorisnici} alt="led_tehnologija" />
                       </div>
                   </div>
               </div>
           </section>

           <section id="tarifeLed" className="tarifeLed">
               <div className="container">
                   <div className="columns colTarife has-text-centered">
                       <div className="column txtTarife is-6">
                           <p className='titleTarife defaultGreenTitle'>TARIFE:</p>
                           <p className="subtitleTarife">
                               U skladu sa No+Vello politikom, nastavlja se sa jedinstvenom tarifom koja je od njih
                               napravila lidere.
                           </p>
                       </div>
                   </div>

                   <div className="container containTarife">
                       <div className="columns tarifeCol">
                           <div className="column leftCol">
                               <div className="leftTarife">
                                   <div className="innerTarife">
                                       <div className="iconsTarife">
                                           <img className='is-left' src={tarifeDollar} alt="" />
                                           <img className='is-right' src={tarifeLice} alt="" />
                                       </div>
                                       <p className='tarifePrice'>
                                           30KM
                                       </p>
                                       <p className='tarifeDesc'>
                                           Cijena tretmana lica i tijela
                                       </p>
                                   </div>
                               </div>
                           </div>
                           <div className="column">
                               <div className="rightTarife">
                                   <div className="innerTarife">
                                       <div className="iconsTarife">
                                           <img className='is-left' src={tarifeDollar} alt="" />
                                           <img className='is-right' src={tarifeZubi} alt="" />
                                       </div>
                                       <p className='tarifePrice'>
                                           59KM
                                       </p>
                                       <p className='tarifeDesc'>
                                           Izbjeljivanje zuba
                                       </p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="ledTeh_Outro" className='ledTeh_Outro'>
               <div className="container">
                   <div className="columns">
                       <div className="column">
                           <div className="innerOutro">
                               <p className='outroMessage has-text-centered'>
                                   Na ovaj način, No+Vello želi da se približi svojim klijentima <br />
                                   i da ih daruje ekskluzivnim cijenama.
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="ledVideo" className="ledVideo">
               <div className="container">
                   <div className="columns">
                       <div className="column has-text-centered">
                           <div className="videoLedInner">
                               <ReactPlayer url="https://www.youtube.com/watch?v=v3vA3kLFhG0&ab_channel=NomasVelloBiH"
                                   width='660px' height='337px' controls />
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="ledPonuda" className="ledPonuda">
               <div className="container">
                   <div className="columns">
                       <div className="column ponudaColumn has-text-centered">
                           <div className="_inner">
                                <div className="columns titleCols">
                                    <div className="column">
                                    <p className="titlePonuda">
                                   Zainteresovani ste za usluge
                                   sa LED tehnologijom?
                               </p>
                                    </div>
                               </div>
                               {/* <p className="subtitlePonuda">
                                   Ovog ljeta uživajte u savršenoj koži.
                               </p> */}
                                
                                <div className="columns ledList">
                                    <div className="column">
                                        <div className="singleItem">
                                        <span><img src={greenCheck} alt="" /></span>
                                            <a href='/usluge/facijalni-anti-age' className='singleLedLead'>
                                                Facijalni anti-age
                                            </a>
                                        </div>
                                        <div className="singleItem">
                                        <span><img src={greenCheck} alt="" /></span>
                                            <a href='/usluge/tjelesni-ucvrscivac' className='singleLedLead'>
                                                Anticelulitni reduktor
                                            </a>
                                        </div>
                                        <div className="singleItem">
                                        <span><img src={greenCheck} alt="" /></span>
                                            <a href='/usluge/tjelesni-ucvrscivac' className='singleLedLead'>
                                               Tjelesni učvršćivač
                                            </a>
                                        </div>
                                        <div className="singleItem">
                                        <span><img src={greenCheck} alt="" /></span>
                                            <a href='/usluge/izbjeljivanje-zuba' className='singleLedLead'>
                                               Izbjeljivanje zuba
                                            </a>
                                        </div>
                                    </div>
                                </div>

                               {/* <div className="buttonPonuda columns">
                                    <div className="column">
                                    <a href="/usluge/facijalni-anti-age" className='turqButton buttPonuda'>
                                       Facijalni anti-age
                                   </a>
                                    </div>
                                    <div className="column">
                                    <a href="/usluge/izbjeljivanje-zuba" className='turqButton buttPonuda'>
                                       Izbjeljivanje zuba
                                   </a>
                                    </div>

                                </div> */}
                                {/* <div className="buttonPonuda columns">
                                    <div className="column">
                                    <a href="/usluge/tjelesni-ucvrscivac" className='turqButton buttPonuda'>
                                       Tjelesni učvršćivač
                                   </a>
                                    </div>
                                    
                                    <div className="column">
                                    <a href="/usluge/tjelesni-ucvrscivac" className='turqButton buttPonuda'>
                                       Anticelulitni reduktor
                                   </a>
                                    </div>

                               </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        
        </>



);
}
 
export default LedTehnologija;