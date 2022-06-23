import styles from '../../../styles/LinijaZaHidrataciju.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sampleImage1 from '../../../public/images/kozmeticki-proizvodi/linija-za-hidrataciju/sample1.png'
import sampleImage2 from '../../../public/images/kozmeticki-proizvodi/linija-za-hidrataciju/sample2.png'
import sampleImage3 from '../../../public/images/kozmeticki-proizvodi/linija-za-hidrataciju/sample3.png'
import sampleImage4 from '../../../public/images/kozmeticki-proizvodi/linija-za-hidrataciju/sample4.png'
import eyeIcon from '../../../public/images/eyeIcon.svg'
import checkGreen from '../../../public/images/greenCheckmark.svg';
import hijaluronskaIcon from '../../../public/images/kozmeticki-proizvodi/linija-za-hidrataciju/hijaluronskaIcon.svg';
import glikolnaIcon from '../../../public/images/kozmeticki-proizvodi/linija-za-hidrataciju/glikolnaIcon.svg';
import aloeveraIcon from '../../../public/images/kozmeticki-proizvodi/linija-za-hidrataciju/aloeveraIcon.svg';


const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const LinijaZaHidrataciju = () => {
    return (
        
        <>
        
            
            
        <section id='breacdcrumbs' className='breadcrumbs'>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <Example></Example>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="headerKozmetike" className='headerKozmetike hero'>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className='kozmetikeHeadTitle'>Linija za hidrataciju</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="kozmetikeDescription" className="kozmetikeDescription">
                <div className="container">
                    <div className="columns">
                        <div className="column colNesavrsenosti">
                            <p className='kozmetikeDescriptionTitle'>Kozmetički proizvodi s višeslojnom tehnologijom: <br />
hidratacija i efekat punoće</p>
                            <p className='kozmetikeDescriptionText'>Hidratacija je ključna za održavanje kože mladom jer starenje kože izaziva dehidrataciju kože usljed smanjenja količine hijaluronske kiseline. Kozmetički proizvodi ove linije su namijenjeni za sve tipove kože kako bi vidljivo poboljšali nivo hidratacije.
<br /><br />
Liposomska formula ovih proizvoda potiče prodiranje hijaluronske kiseline u kožu, te povećava volumen dermisa stvarajući tako “efekat punoće” koji blažava bore i izražajne linije.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="hrKozmetike" className="hrKozmetike">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="kozmetikeProizvodi" className="kozmetikeProizvodi">
                <div className="container">
                    <div className="columns topColumns">
                        <div className="column">
                            <div className="innerOutro">
                                <p className='outroMessage has-text-centered'>
                                Kozmetički proizvodi za hidrataciju koji čine ovu No+Vello liniju su:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container productsContainer productsContainerHidratacija">
                <div className="columns threeProductsBox">
                        <div className="column">
                            <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage1} alt="" />
                                    <p className='productBoxTitle'>AMPULE ZA HIDRATACIJU</p>
                                    <p className='productBoxSubtitle'>Trenutna hidratacija</p>
                                    <a className='productBoxButton' href=""><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage2} alt="" />
                                    <p className='productBoxTitle'>MASKA ZA <br />
HIDRATACIJU</p>
                                    <p className='productBoxSubtitle'>Dubinska hidratacija</p>
                                    <a className='productBoxButton' href=""><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage3} alt="" />
                                    <p className='productBoxTitle'>SERUM PROTIV STARENJA</p>
                                    <p className='productBoxSubtitle'>Podmlađivanje kože</p>
                                    <a className='productBoxButton' href=""><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage4} alt="" />
                                    <p className='productBoxTitle'>KREMA PROTIV STARENJA</p>
                                    <p className='productBoxSubtitle'>Sprečava pojavu bora</p>
                                    <a className='productBoxButton' href=""><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="bottomDetails" className="bottomeDetails detailsRevitalizacija detailsProtivNesavrsenosti detailsHidratacija">
                <div className="container">
                    <div className="columns hidratacijaBottomParCols">
                        <div className="column hidratacijaBottomPar has-text-centered">
                            <div className="innerHidratacijaBott">
                        <p className="odlikeItem defaultText">Ljudsko tijelo, uključujući i dermis, sačinjeno je od 60% vode. Što se tiče epidermisa, njegov površinski sloj obavlja funkciju odvajanja unutrašnjeg vrlo vlažnog dijela od vanjskog vrlo suhog zraka.</p>
                        <p className="blueTitle defaultBlueTitle">
                        Epidermis sadržava između 20 i 30% vode, a sloj koji je najbliži površini sadrži između 10 i 20%.
                                </p>
                                </div>
                        </div>
                    </div>
                    <div className="columns hidratacijaSpacing">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="secondPart">
                                <p className="defaultText defaultTextHidratacija">Bitno je znati da do dehidratacije dolazi kada tijelo gubi više vode nego što unosi, te je zbog toga potrebno održavati adekvatnu svakodnevnu hidrataciju. Bez obzira da li se radi o suhoj, mješovitoj ili masnoj koži, koža može dehidrirati usljed djelovanja vanjskih negativnih faktora.
<br /><br /> 
Zrela koža je obično u većoj mjeri dehidrirana usljed smanjenja količine hijaluronske kiseline ključne za hidrataciju kože. Zbog toga je hijaluronska kiselina, zajedno sa glikolnom kiselinom i aloe verom, jedan od osnovnih aktivnih sastojaka ove kozmetičke linije.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-right colBottHidratacija">
                        <div className="listInner">
                                <div className="detailsList">
                                <div className="singleDetailImg">
                                        <img className="hijaluronskaIcon" src={hijaluronskaIcon} alt="" />
                                        </div>
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Hijaluronska kiselina</p>
                                        <p className="odlikeItem defaultText">je aktivni sastojak koji ima najveći kapacitet hidratacije. Privlači vodu do 1000 puta težu od svoje težine. Održava stanje funkcionalnosti epidermisa, te vrši efekat dekongestije i regeneracije epidermisa. Ponovno uspostavlja funkcionalnu ravnotežu kože, pri čemu vrši hidrataciju, povećava sintezu kolagena i elastina i daje koži adekvatnu i efikasnu zaštitu od vanjskih agresija.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                <div className="singleDetailImg">
                                        <img className="hijaluronskaIcon" src={glikolnaIcon} alt="" />
                                        </div>
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Glikolna kiselina</p>
                                        <p className="odlikeItem defaultText">smanjuje debljinu vanjskog sloja epidermisa (stratum corneum) i pomaže u povećavanju Malpigijevog sloja. To direktno pomaže u ublažavanju bora na koži i poboljšanju izgleda atrofičnih ožiljaka od akni. Odlično je sredstvo za piling, te pomaže u sprečavanju i suzbijanju akni Također omogućava da druge supstance lakše prodiru u kožu.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                    <div className="singleDetailImg">
                                  <img className="hijaluronskaIcon" src={aloeveraIcon} alt="" /> 
                                    </div>
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aloe vera</p>
                                        <p className="odlikeItem defaultText">je sredstvo koje daje koži veliku vlažnost. Kada se koristi kao maska, bolje prodire u duboke slojeve kože, a rezultat je vidljiv odmah. Postiže da lice bude blistavo, a koža hidratizirana i svježa.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <section id="kozmetikaCiscenjeOutro" className="kozmetikaCiscenjeOutro hidratacijaOutro">
            <div className="container">
                    <div className="columns topColumns">
                        <div className="column">
                            <div className="innerOutro">
                                <p className='outroMessage has-text-centered'>
                                Sve gore navedeno čini ove kozmetičke proizvode idealnim za dehidriranu kožu i kožu sa prvim znacima starenja.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
        
        </>


);
}
 
export default LinijaZaHidrataciju;