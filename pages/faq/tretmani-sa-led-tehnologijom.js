import styles from '../../styles/FaqLed.module.scss'
import Accordion from '../../Components/Accordion';
import iconDown from '../../public/images/faq/arrow-down.png';
import faceImg from '../../public/images/faq/face.png';
import Link from 'next/link';
import greenImg from '../../public/images/faq/greenLines.svg'
import IzbjeljivanjeZubaPopupFAQ from '../../Components/popups/IzbjeljivanjeZubaPopupFAQ';
import FacijalniAntiAgePopupFAQ from '../../Components/popups/FacijalniAntiAgePopupFAQ';
import TjelesniUcvrscivacPopupFAQ from '../../Components/popups/TjelesniUcvrscivacPopupFAQ';


export default function FaqLedTehnologija() {
return (

<>

    <section id="heroTitle" className="hero is-medium">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className=" title">
                    Često postavljana pitanja <br />
                    Tretmani sa LED tehnologijom
                </h1>
            </div>
        </div>
    </section>

    <section id="pitanja" className="pitanja">
        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN IZBJELJIVANJA ZUBA
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koliko mi je sesija potrebno?"
                            content="3 aplikacije do 20 minuta. Najbolji rezultati se postižu kada se sve tri aplikacije realizuju na istoj sesiji." />
                        <Accordion
                            title="Koliko nijansi mogu povratiti?"
                            content="Do 8 nijansi prema paleti boja za zube." />
                        <Accordion
                            title="Pušač sam"
                            content="Izbjegavajte duhan, kafu i vino i bilo koji drugi proizvod koji tvari koje boje. Idealno bi bilo pridržavati se bijele dijete tokom narednih 48 sati." />
                        <Accordion
                            title="Da li je potrebno obaviti profesionalno čišćenje zuba prije tretmana?"
                            content="Nije neophodno, ali je preporučljivo. Ako uklonimo zubne naslage, LED svjetlost će doprijeti na ujednačen način do čitavog zubala, te će i postignuta bjelina biti ujednačenija." />
                        <Accordion
                            title="Imam karijes"
                            content="Savjetuje se saniranje usta prije tretmana." />
                        <Accordion
                            title="Imam plombe"
                                content="Potrebno je informisati osobu koja će raditi tretman. Bitno je znati da li se plombe nalaze na prednjim zubima." />
                            <Accordion
                            title="Koliko vremena traju rezultati?"
                            content="Između ostalog, zavisi i od prehrambenih navika." />
                    </div>
                    <div className="buttonLed">
                        {/* <Link href="https://nextjs.org/docs/api-reference/next/link">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link> */}
                            <IzbjeljivanjeZubaPopupFAQ/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN FACIJALNI ANTI-AGE
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koliko mi je sesija potrebno?"
                            content="U prosjeku je potrebno od 8 do 10 sesija. Svaki slučaj je potrebno procijeniti posebno u odnosu na karakteristike klijenta." />
                        <Accordion
                            title="Kakve rezultate ću postići?"
                            content="Poboljšat ćete elastičnost, čvrstoću, sjaj i hidratiziranost kože." />
                        <Accordion
                            title="Zašto je potrebno koristiti Facijalni fluid No+Vello, a ne moju uobičajenu hidratantnu kremu?"
                            content="Zato što Revitalizirajući facijalni fluid aktivira vlakna kolagena i elastina potičući elastičnost kože. Hidratizira i djeluje protiv slobodnih radikala. Sadrži vitamin C koji ima piling efekat i priprema kožu za sljedeću sesiju." />
                        <Accordion
                            title="Mlada sam osoba i nemam potrebu da uklanjam bore"
                            content="Ovo je tretman koji sprečava starenje kože. Zbog toga je bitno početi što prije jer ćete se tako lakše boriti protiv protoka vremena." />
                    </div>
                    <div className="buttonLed">
                        {/* <Link href="https://nextjs.org/docs/api-reference/next/link">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link> */}
                            <FacijalniAntiAgePopupFAQ/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN ANTICELULITNI REDUKTOR
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koliko mi je sesija potrebno?"
                            content="U prosjeku je potrebno od 8 do 10 sesija. Svaki slučaj je potrebno procijeniti posebno u odnosu na karakteristike klijenta." />
                        <Accordion
                            title="Kakve rezultate ću postići?"
                            content="Već od prve sesije. DOKAZANO!" />
                         <Accordion
                            title="Da li je bolno?"
                                content="Ne, ovo je tretman u kojem uživate  u potpunosti." />
                             <Accordion
                            title="Koliko dugo traju rezultati?"
                                content="Bitno je voditi zdrav način života kako bi se rezultati održali i poboljšali na svakoj sesiji." />
                             <Accordion
                            title="Može li mi pomoći u suzbijanju celulita?"
                                content="Ovaj tretman ubrzava prirodni fiziološki proces svake osobe pomažući tako eliminaciju masnih naslaga na određenim zonama koje je teško ukloniti čak i kada se pridržavate dijete." />
                            
                    </div>
                    <div className="buttonLed">
                        <Link href="#">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN TJELESNI UČVRŠĆIVAČ
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koliko mi je sesija potrebno?"
                                content="U prosjeku je potrebno od 8 do 10 sesija. Svaki slučaj je potrebno procijeniti posebno u odnosu na karakteristike klijenta." />
                             <Accordion title="Kakve rezultate ću postići?"
                                content="Tretman poboljšava elastičnost kože kako bi se ista učvrstila vodeći zdrav način života i uz fizičku aktivnost koja će ojačati mišićno tkivo." />
                             <Accordion title="Da li je bolno?"
                                content="Ne, ovo je tretman u kojem uživate  u potpunosti." />
                             <Accordion title="Koliko dugo traju rezultati?"
                                content="Bitno je voditi zdrav način života kako bi se rezultati održali i kako bi se poboljšali na svakoj sesiji. Ne preporučuje se iznenadno dobijanje ili gubitak težine." />
                             <Accordion title="Kako poboljšati rezultate?"
                                content="Fizička aktivnost, piti vodu i uravnotežena prehrana." />
                             
                    </div>
                    <div className="buttonLed">
                        {/* <Link href="https://nextjs.org/docs/api-reference/next/link">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link> */}
                            <TjelesniUcvrscivacPopupFAQ/>
                    </div>
                </div>
            </div>
        </div>

    </section>




    <section id="bottomQuestion" className="bottomQuestion">
        <div className="container">
            <div className="columns">
                <div className="column pitanjaBottomColumn is-centered">
                    <div className="pitanjaLink">
                        <div className="left">
                            <img src={faceImg} alt="" />
                        </div>
                        <div className="right">
                            <div className="inner">
                                <p className="title">Pitanja za tretmane sa IPL SHR tehnologijom</p>
                                <p className="subTitle">Često postavljana pitanja - 
laserska epilacija i fotoepilacija IPL SHR</p>
                                <Link href="/faq/laserska-epilacija-fotoepilacija-ipl-shr">
                                <a className="linkPitanja turqButton">Pogledaj pitanja</a>
                                </Link>
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