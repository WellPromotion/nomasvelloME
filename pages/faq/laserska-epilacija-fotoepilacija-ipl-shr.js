import styles from '../../styles/Faq.module.scss'
import Iframe from 'react-iframe'
import ReactPlayer from 'react-player';
import Accordion from '../../Components/Accordion';
import iconDown from '../../public/images/faq/arrow-down.png';
import faceImg from '../../public/images/faq/face.png';
import Link from 'next/link';
import LaserskaEpilacijaPopupFAQ from '../../Components/popups/LaserskaEpilacijaPopupFAQ';


export default function FaqLaserskaEpilacija() {
    return (
   
        <>
        
        <section id="heroTitleLaserska" className="section">
            <div className="hero-b container">
                    <div className="columns">
                        <div className="column">
                        <div className="has-text-centered">
                    <h1 className=" title">
                    Često postavljana pitanja <br />
                    laserska epilacija i fotoepilacija IPL SHR
                        </h1>
                </div>
                        </div>
                   </div>
               </div>
            </section>


            {/* <section id="videoPart" className="videoPart section">
                <div className="container">
                    <div className="columns videoColumns">
                        <div className="colummn is-3">
                            <div className="videoInner">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=Egq-DgaikLQ" width='431px' height='220px' controls />
                            </div>
                        </div>
                        <div className="colummn is-3">
                            <div className="videoInner">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=kGy9XetMxl4" width='431px' height='220px' controls />
                            </div>
                        </div>
                        <div className="colummn is-3">
                            <div className="videoInner">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=ayP3TLmiWyA" width='431px' height='220px' controls />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            
            <section id="pitanjaLas" className="pitanja section">
                <div className="container">
                    <div className="columns">
                        <div className="column pitanjaColumn">
                            {/* <div className="pitanjaTitle">
                                <h1>
                                    Pitanja
                                </h1>
                            </div> */}
                            <div className="buttonLaserEpFAQ">
                            <LaserskaEpilacijaPopupFAQ/>
                            </div>
                            
                            <div className="pitanjaBody">
                                
                                <Accordion className="accordion" title="Koje su prednosti laserske depilacije i fotoepilacije IPL SHR?" content="Svi znamo kako neprijatne mogu ponekad biti neželjene dlake, i kako naporno može da bude depilirati se svako malo vremena. I kako ponekad, postojanje dlaka na nekim veoma vidnim zonama kao što je na licu kod žena ili na leđima kod muškaraca, može izazvati nelagodnosti kod istih. 
                            Sve do sada, neželjene dlake su se većinom uklanjale putem depilatornih krema, brijača, voska ili bolne epilacije iglom.
                            Sve te metode su neprijatne, neugodne i jako skupe na dugoročan period, sa vidnim rezultatima na samo kratak period. Međutim, novi napreci u estetici doprinijeli su da nam budu pristupačne tehnike za dugotrajnu depilaciju, od kojih se najviše preporučuje laserska epilacija i fotoepilacija IPL SHR.
                            Unutar fotoepilacije, imamo epilaciju sa laserom i epilaciju sa intenzivnom pulsirajućom svjetlošću, također poznatom kao IPL.
                            I jedna i druga tehnologija, preporučuje se kako za muškarce tako i za žene. Podrazumijeva primjenu intenzivne svjetlosti koja uništava folikul dlake i sprečava njegov ponovni rast, postižući na taj način dugotrajnu depilaciju koja se vrši na progresivan način i sa kojom je moguće tretirati veće zone kao što su leđa, prsa, ruke, noge i lice.
                            Dakle, konačno možemo zaboraviti na bolne i agresivne metode kao što je vosak, ili vrlo kratkoročne i neugodne kao što su brijači, i preći na nove metode kao što su laserska epilacija i fotoepilacija sa intenzivnom pulsirajućom svjetlošću, koja garantuje uklanjanje neželjenih dlaka učinkovito, dugotrajno, ugodno i bezbolno!! " />
                                
                                <Accordion title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?" content="Fotoepilacija je uklanjanje dlaka putem svjetlosti. U okviru fotoepilacije postoje dvije vrste aparata: laser i IPL ili intenzivna pulsirajuća svjetlost.
                                 Glavna razlika između ova dva aparata jeste talasna dužina na kojoj rade. Laser aparat radi na fiksnoj talasnoj dužini, a IPL na varijabilnoj. To znači da će laser aparat zagrijavati folikule na istoj zoni na većoj dubini, a IPL radi na različitim dubinama, tako da može ukloniti tamne i svjetlije dlake. U centrima No+Vello radimo personalizovanu depilaciju za svakog našeg klijenta. Kada je dlaka tamna i jaka naš diodni laser efikasno uklanja takve dlake. Kako tretman odmiče, tako su i dlake slabije, te diodni laser više nije tako učinkovit i ne uklanja potpuno dlake. Tada je vrijeme za IPL tretman. Naš aparat je u stanju da eliminiše tanke i svjetlije dlake koje ostaju kako tretman napreduje.
                                 Zbog toga su naši tretmani personalizovani. Prije početka tretmana obavi se pregled zone koja se tretira te u skladu sa stanjem dlaka, primjenjuje se jedna ili druga tehnika. U centrima No+Vello uklanjamo dlake uz iznimnu profesionalnost i efikasnost što nas čini najboljima na tržištu u ovom domenu." />
                                
                                <Accordion title="Da li je bolno?" content="Naši aparati raspolažu modernim sistemom rashlađivanja Sub Zero Intense, kojim se postiže efekat lokalne anestezije. Zato možemo sa sigurnošću reći da se radi o bezbolnom sistemu." />
                                
                                <Accordion title="Da li je definitivno?" content="U većini slučajeva ukloni se minimalno 90% dlačica, tako da nekoliko dlačica koje se opet pojave nakon nekoliko godina rastu sporije i mnogo su slabije i tanje, tako da se lako mogu ukloniti na samo jednoj sesiji. U današnje vrijeme ne postoji metoda koja može da ukloni 100% folikulu dlake na tijelu. Fotoepilacija je depilacija koja se zasniva na svjetlosti i prenosi tu svjetlost samo na folikule dlake koje su aktivne jer joj je potrebna dlaka da bi mogla da sprovede tu energiju koja se pretvara u toplotu uništavajući malo pomalo korijen odakle potiče dlaka, uništavajući ga definitivno kroz nekoliko sesija. Postoji određeni postotak folikula dlake koje se nalaze u stanju mirovanja i ne mogu da budu tretirani u tom momentu. U slučaju da se oni aktiviraju, bila bi potrebna još jedna sesija kako bi se postigao dugotrajni efekat." />
                               
                                <Accordion title="Da li je potrebno obrijati područje koje će se tretirati prije svake sesije?" content="Ukoliko radimo lasersku epilaciju sa diodnim laserom, odgovor je da, potrebno je, dan prije, obrijati zonu koja će se tretirati. Ukoliko radimo fotoepilaciju sa IPL SHR aparatom, potrebno je skratiti dlačice na dužinu od 1 do 3 milimetra, tako da emitirana svjetlost bude apsorbirana kroz melanin dlačice i da nam služi kao provodnik do folikula dlake. Što znači, melanin upija svjetlost i prenosi je na korijen dlačice, gdje pretvorena u toplotu, uništava klice ćelija koje hrane dlačice. Eliminisanjem ovih ćelija, dlačice umiru i otpadaju.
                                Međutim, vaše je samo da dođete u naš centar i naše ljubazno osoblje će to uraditi za vas." />
                               
                                <Accordion title="Mogu li se tretirati sva područja na tijelu?" content="Mogu se tretirati gotovo svi dijelovi tijela osim na slušnom otvoru, dlakama iz nosa i na onim područjima na kojima sonda može dotaći oči, kao što su obrve ili razmak među obrvama." />
                              
                                <Accordion title="Da li postoje kontraindikacije?" content="Prije nego što se započne tretman postaviti će se niz pitanja kako bi se otkrile potencijalne kontraindikacije, kao na primjer dijabetes, epilepsija, ako se koriste neki lijekovi koji mogu biti fotosenzibilni, trudnoća, period dojenja, keloidi, tetovaže, koža nedavno pocrnjela ili vrlo pigmentirana, tamna ili crna." />
                              
                                <Accordion title="Da li tretman ima nuspojave?" content="U nekim slučajevima može se pojaviti crvenilo na tretiranom području koje nestaje u roku od nekoliko sati. Preporučuje se korištenje kreme No+Vello.
                                Krema je neophodna za pripremu i prilagođavanje kože zbog svog balzamičkog, smirujućeg, hidratantnog, antiseptičkog i antibiotičkog efekta. Stimuliše regeneraciju novih ćelija i daje ten koži, sprečavajući bilo kakvu neugodnost na koži. Osim toga, sadrži visoki zaštitni solarni faktor.
                                – Povećava proizvodnju kolagena
                                – Minimizira potencijalne štete koje mogu nastati kao posljedica dehidratacije izazvane fotoepilacijom i fototerapijom.
                                – To je bitan dio tretmana kako bi se dobili željeni rezultati sa totalnom sigurnošću. Na taj način, postići ćemo depiliranu i njegovanu kožu.
                                " />
                              
                                <Accordion title="Da li se radi o bezbjednom tretmanu?" content="Naši tretmani su sigurni za sve strukture kože jer se fotoepilacija zasniva na principu selektivne fototermolize. Prema tome, svjetlost (foto) primijenjena na kožu pretvara se u toplotu (termo) i selektivno uništava (liza) klice ćelija korijena dlačica. Što znači, melanin upija svjetlost i prenosi je na korijen dlačice, gdje pretvorena u toplotu, uništava klice ćelija koje hrane dlačice a pri tome se ne oštećuju ostale strukture kože. Eliminisanjem ovih ćelija, dlačice odumiru i otpadaju." />
                              
                                <Accordion title="Zašto smo mnogo jeftiniji od drugih firmi koje koriste lasersku epilaciju?" content="Koncept No+Vello zasniva se, između ostalog, na specijalizaciji. Prije lansiranja No+Vello na tržište, laserska epilacija i fotoepilacija IPL SHR najčešće su nuđene kao dopuna u kozmetičkim centrima, kliničkim centrima, itd.
                                Nakon što smo uspjeli da se specijaliziramo u sistemu pulsirajuće svjetlosti, u stanju smo da Vam ponudimo bezbjednu i kvalitetnu uslugu po najpovoljnijim cijenama na tržištu. Ključ našeg uspjeha leži u modelu demokratizacije usluga, čineći tretman dostupnim bilo kojoj osobi." />
                              
                                <Accordion title="Da li je fotoepilacija za muškarce?" content="Pozivamo sve klijente muškog spola da isprobaju naše usluge i sami se uvjere u kvalitetu istih. Novi trendovi u izgledu čine da ovo tržištu bude u stalnom porastu i da je sve više muškaraca koji traže tu vrstu usluge. Posjetite naš centar za besplatne konsultacije!" />
                              
                                <Accordion title="Da li je moguća depilacija tokom ljeta? Da li je potrebno poduzeti neke mjere opreza?" content="Ljeti nam je depilacija najpotrebnija jer upravo tada želimo da budemo bez neželjenih dlačica. No+Vello nudi rješenje za sigurnu i efikasnu depilaciju preplanule kože. Oba No+Vello sistema, laser i IPL depilacija, su osmišljeni tako da mogu depilirati preplanulu kožu. Jedina mjera opreza je da se klijenti ne smiju izlagati sunčevim zrakama 48 sati prije i poslije tretmana. Nema više izgovora da vaša koža ne bude savršeno depilirana tokom ljeta!" />
                              
                                <Accordion title="Da li se može sunčati, izlagati UVA zracima ili koristiti sredstvo za samotamnjenje tokom tretmana" content="Važno je da je koža zaštićena od sunčevog zračenja. Tokom 48 sati nakon tretmana  jer što je veća zaštita, to je veći rizik od okluzije kože koja ne dozvoljava da emitovana toplota tokom sesije izađe iz kože što može uzrokovati oštećenje iste. Odgovor na pitanje je: DA, možemo tretirati preplanulu kožu, zdravu kožu bez opekotina i koja se ne guli i ne smijemo se izlagati sunčevim ili UVA zrakama prije i poslije tretmana. Što se tiče sredstava za samotamnjenje, ne preporučuje se IPL ili laser tretman minimalno 15 dana nakon nanošenja. Važno je da na dan sesije ne bude ostataka sredstva za samotamnjenje na koži." />
                               
                                <Accordion title="Koliko često je potrebno raditi tretman kako bi se postigli što bolji rezultati?" content="Što se tiče lica, zbog specifičnosti ove zone, tretman se radi svaki mjesec. Međutim, što se tiče tijela, pošto se ne radi o zonama čije se ćelije tako brzo regenerišu niti se radi o hormonski aktivnim zonama, tretman se radi svakih 45 dana. Kako tretman napreduje, tako je razmak između sesija sve duži i duži." />
                              
                                <Accordion title="Da li razmak između sesija utiče na efikasnost tretmana?" content="Sesije se moraju raditi nakon što su dlačice ispale i počele da rastu nove. Ako se sesija uradi ranije, tretman neće biti učinkovit, jer se dlaka ne nalazi u folikuli gdje se nalaze ćelije koje hrane dlaku tako da ih ne možemo uništiti. S druge strane, ako je razmak između sesija predug, nećemo dobiti željene rezultate jer će se ćelije regenerisati i opet će hraniti dlaku koja će narasti i biti jaka. Za postizanje najboljih rezultata konstantnost i obavljanje tretmana kada na zoni ima dlaka koje nisu u fazi ispadanja." />
                              
                                <Accordion title="Da li ova vrsta depilacije isušuje kožu? Koji proizvod za  hidrataciju se preporučuje za korištenje tokom tretmana? Da li se može koristiti bilo koja krema?" content="Pošto se radi sa toplotom uvijek dolazi do malog gubitka vode koju sadrži naša koža. Zbog toga je neophodno da koža bude hidratizirana. Međutim, nisu sve kreme pogodne za tretman fotoepilacije bez obzira što sadrže aloe veru, ulje ploda divlje ruže itd. Gustoća krema može dovesti do okluzije pora na koži, tako da emitovana toplota ne može da izađe. No+Vello hidrozaštitna emulzija je jedina i ekskluzivna krema koja se može koristiti u ovom tretmanu. Krema je testirana kako bi bila kompatibilna i kako ne bi izazvala nikakvu reakciju. Naša Hidrozaštitna emulzija sadrži aloe veru, ulje ploda divlje ruže, alantoin, vitamine i zaštitni faktor 30. To je savršeni dodatak kako bi koža bila zdrava tokom čitavog tretmana." />
                               
                                <Accordion title="Da li lasersko ili IPL uklanjanje dlačica moze pojačati rast dlačica?" content="Kada bi ovo bila istina, imali bismo lijek za ćelavost. Nemoguće je da laser ili IPL pojačaju rast dlačica. Važno je imati na umu da se naša tijela stalno mijenjaju i s godinama neki ljudi gube na tjelesnoj dlakavosti, dok nekima dlačice počinju rasti na novim mjestima. Laser i IPL mogu uništiti folikule vaših dlačica, no ne mogu spriječiti razvoj novih dlačica." />
                              
                                <Accordion title="Šta može ponuditi No+Vello?" content="No+Vello© Vam nudi dokazani sistem sa zagarantovanim rezultatima. U našim centrima raspolažemo sa najjačim aparatima za lasersku epilaciju (810nm) i fotoepilaciju IPL SHR (60 džula/cm2) i najbržim na tržištu. Naš sistem fotoepilacije, zasnovan na laserskoj epilaciji i IPL tehnologiji, daje odlične rezultate na različitim dijelovima tijela, a krajnji rezultat je depilacija koja je efektna, trajna, superiorna i ni u čemu slična metodama depilacije koje su nam bile poznate do sada." />
                            </div>
                            
                            
                        </div>
                    </div>
                    {/* <div className="container"> */}
                    <div className="columns">
                        <div className="column pitanjaBottomColumn is-centered">
                            <div className="pitanjaLink">
                                <div className="left">
                                    <img src={faceImg} alt="" />
                                </div>
                                    <div className="right">
                                        <div className="inner">
                                        <p className="title">Pitanja za tretmane sa LED tehnologijom</p>
                                    <p className="subTitle">Često postavljana pitanja - 
tretmani sa LED tehnologijom</p>
                                            <Link href="/faq/tretmani-sa-led-tehnologijom">
                                                <a className="linkPitanja turqButton">Pogledaj pitanja</a>
                                            </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </section>


        </>
     );
}
 