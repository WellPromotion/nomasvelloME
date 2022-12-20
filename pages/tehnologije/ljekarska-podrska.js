import styles from '../../styles/tehnologije/LjekarskaPodrska.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/ljekarskaPodrska/ljekarskaIcon.svg'
import ljekarskaSample from '../../public/images/tehnologije/ljekarskaPodrska/ljekarskaSample.png'
import turqCircle from '../../public/images/turqCircle.svg'
import greenLines from '../../public/images/belowTitleGreen.svg'
import Accordion from '../../Components/Accordion';
import iconDown from '../../public/images/faq/arrow-down.png';


const LjekarskaPodrska = () => {
    return (
        
        <>
            
            <section id='titleLjekarska' className='titleLjekarska hero is-medium'>
               <div className="hero-body">
                   <div className="imgTitleSphere has-text-centered">
                       <img src={aboveTitleImg} alt="" />
                   </div>
                   <div className="container has-text-centered">
                       <p className="pretitle">naše tehnologije</p>
                       <h1 className="title">Ljekarska podrška</h1>
                   </div>
                   <div className="imgIcon has-text-centered">
                       <img src={belowTitleImg} alt="" />
                   </div>
               </div>
            </section>

            <section id="ljekarskaStart" className="ljekarskaStart section"> 
                <div className="container contLjekarska">
                    <div className="columns colsLjekarska">
                        <div className="column ljekarskaTxt has-text-centered">
                            <p className='ljekarskaPTitle defaultGreenTitle'>Ljekarska podrška</p>
                            <p className='ljekarskaSubtitle defaultText'>No+Vello centri sudjeluju s kvalificiranim stručnjacima i ljekarima na području svjetlosne terapije, estetike i dermatologije te tako pružaju centrima svu stručnu pomoć i podršku osiguravajući sigurnost i neškodljivost tretmana. Naše certificirano osoblje je spremno da odgovori na sva Vaša pitanja u vezi tretmana.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="columns">
                        <div className="column has-text-centered">
                        <img className='ljekarskaSample' src={ljekarskaSample} alt="Ljekarska podrška" />
                        </div>
                    </div>
                </div>
                <div className="container conIndikacije">
                    <div className="columns colsIndikacije">
                        <div className="column has-text-centered">
                            <p className='indikacijeTitle'>Kakve su kontraindikacije za fotoepilaciju?</p>
                            <p className='indikacijeSubtitle defaultText'> Za većinu klijenata su tretmani fotoepilacije primjereni, iako postoji nekoliko kontraindikacija za koje se tretmani ne preporučuju:</p>
                        </div>
                    </div>
                </div>
                <div className="container indikacijeCont">
                    <div className="columns indikacijeList">
                        <div className="column indikacijeCol">
                            <div className="indikacijeInner">
                                    <p className='indListItem'> <span className='turqCircle'><img src={turqCircle} alt="" /></span> Trudnoća, dojenje</p>
                                    <p className='indListItem'><span className='turqCircle'><img src={turqCircle} alt="" /></span>fotosenzitivni lijekovi</p>
                                    <p className='indListItem'><span className='turqCircle'><img src={turqCircle} alt="" /></span>kožne bolesti</p>
                                    <p className='indListItem'><span className='turqCircle'><img src={turqCircle} alt="" /></span>oslabljen imunološki sistem</p>
                                    <p className='indListItem'><span className='turqCircle'><img src={turqCircle} alt="" /></span>rak kože</p>
                                    <p className='indListItem'><span className='turqCircle'><img src={turqCircle} alt="" /></span>poremećaji zgrušavanja krvi</p>
                                    <p className='indListItem'><span className='turqCircle'><img src={turqCircle} alt="" /></span>fotodermatoza (alergija na sunce)</p>
                                    <p className='indListItem'><span className='turqCircle'><img src={turqCircle} alt="" /></span>tetovaže i mikropigmentacija (trajni make-up)</p>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section id="ljekarskaPreporuke" className="ljekarskaPreporuke section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className='defaultGreenTitle'>Preporuke prije i poslije tretmana</p>
                        </div>
                    </div>
                    <div className="columns colsPreporukeLjekarska colsPreporukeLjekarskaFirst">
                        <div className="column">
                            <div className="preporukeBox firstPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>01</p>
                                    <p className='preporukeTxt defaultText'>Ne upotrebljavajte fotosenzitivne lijekove (osjetljive na svjetlost) prije tretmana. Obavijestite svoj No+Vello © centar o lijekovima koje koristite.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="preporukeBox firstPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>02</p>
                                    <p className='preporukeTxt defaultText'>Izbjegavajte izlaganje suncu i UVA zrakama prije tretmana (posavjetujte se u svom centru).</p>
                                </div>
                            </div>
                          
                          
                        </div>
                        <div className="column">
                        <div className="preporukeBox firstPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>03</p>
                                    <p className='preporukeTxt defaultText'>Ne upotrebljavajte jake hemikalije na koži, kao što su profesionalni pilinzi
ili hemijske kiseline
mjesec dana prije tretmana.</p>
                                </div>
                            </div>
                            
                           
                        </div>
                        <div className="column">
                        <div className="preporukeBox firstPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>04</p>
                                    <p className='preporukeTxt defaultText'>Izbjegavajte upotrebu krema s vitaminom A ili retinoičnom kiselinom (većinom se nalaze u
kremama protiv bora). </p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    
                    <div className="columns colsPreporukeLjekarska">
                        <div className="column">
                        <div className="preporukeBox secondPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>05</p>
                                    <p className='preporukeTxt defaultText'>Preporučuje se dolazak na tretman s čistom kožom, bez kreme, deodoransa i šminke. Ne upotrebljavajte proizvode koji sadrže alkohol prva tri dana nakon tretmana (dezodorans).</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="preporukeBox secondPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>06</p>
                                    <p className='preporukeTxt defaultText'>Potrebno je izbjegavati uklanjanje dlačica voskom i pincetom ali i hemijsko uklanjanje dlačica mjesec dana prije tretmana. Dlačice možete uklanjati britvicom, ali ne 2 dana prije tretmana.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="preporukeBox secondPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>07</p>
                                    <p className='preporukeTxt defaultText'>Na dan tretmana se preporučuje izbjegavanje vruće vode na tretiranim predjelima i preporučljivo je tuširanje mlakom vodom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="preporukeBox secondPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>08</p>
                                    <p className='preporukeTxt defaultText'>Izbjegavajte nošenje uskih hlača na dan tretmana te izlaganje tretiranih predjela dodatnim izvorima topline ili vlage kao npr. bavljenje sportom.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="columns colsPreporukeLjekarska colsPreporukeLjekarskaLast">
                        <div className="column blankCol"></div>
                        <div className="column">
                        <div className="preporukeBox thirdPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>09</p>
                                    <p className='preporukeTxt defaultText'>Ukoliko osjetite pojavu topline, svrbež ili crvenilo na tretiranom području, hladite ga 20 minuta oblogom namočenom hladnom vodom.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="preporukeBox thirdPreporuke">
                                <div className="preporukeInner">
                                <p className='preporukeNumber'>10</p>
                                    <p className='preporukeTxt defaultText'>Po završetku tretmana koristite hidrozaštitnu No+Vello© emulziju za lice i tijelo 3 do 4 dana (ujutro i navečer). Poslije je dovoljno nanositi kremu jednom dnevno.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column blankCol">
                        </div>
                  </div>
                    
                </div>
            </section>


            <section id="kontraindikacijeLjekarska" className="kontraindikacijeLjekarska section">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className='kontraindikacijeTitle defaultBlueTitle'>Kontraindikacije</p>
                            <img src={greenLines} alt="" />
                            <div className="pitanjaKontraindikacije">
                            <Accordion title="Kakve su kontraindikacije za LED terapiju?"
                                    content="trudnoća, dojenje, fotosenzitivni lijekovi, aktivna infekcija, upala kože."     />
                        <Accordion
                            title="Kakve su kontraindikacije za izbjeljivanje zubi?"
                            content="trudnoća i dojenje, alergija na plastiku, oralne lezije i bolesti, upala desni." />
                        <Accordion
                            title="Kakve su kontraindikacije za dubinsko čišćenje kože?"
                                    content="trudnoća, problemi sa srcem (elektrosimulacija srca, aritmija), 5 godina od preboljenog raka, čišćenje se ne izvodi na vratu, 3 mjeseca od zadnje hemoterapije ili radioterapije."
                                       />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ljekarska_Outro" className='ljekarska_Outro section'>
               <div className="container">
                   <div className="columns">
                       <div className="column">
                           <div className="innerOutro">
                               <p className='outroMessage has-text-centered'>
                               Za Vašu sigurnost centri No+Vello© raspolažu podrškom zdravstvenih stručnjaka.
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           <section id="ljekarskaPonuda" className="ljekarskaPonuda section">
               <div className="container">
                   <div className="columns">
                       <div className="column ponudaColumn has-text-centered">
                           <div className="_inner">
                               <p className="titlePonuda">
                                   Zainteresovani ste za usluge
                                   sa Ljekarskom podrškom?
                               </p>
                               <p className="subtitlePonuda">
                                   Ovog ljeta uživajte u savršenoj koži.
                               </p>

                               <div className="buttonPonuda">

                                   <a href="/usluge/fotopodmladjivanje" className='turqButton buttPonuda'>
                                       Pogledaj naše usluge
                                   </a>

                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        </>


);
}
 
export default LjekarskaPodrska;