import styles from '../../../styles/LinijaProtivNesavrsenosti.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sampleImage1 from '../../../public/images/kozmeticki-proizvodi/linija-protiv-nesavrsenosti/sample1.png'
import sampleImage2 from '../../../public/images/kozmeticki-proizvodi/linija-protiv-nesavrsenosti/sample2.png'
import sampleImage3 from '../../../public/images/kozmeticki-proizvodi/linija-protiv-nesavrsenosti/sample3.png'
import eyeIcon from '../../../public/images/eyeIcon.svg'
import checkGreen from '../../../public/images/greenCheckmark.svg';
import sampleBottom from '../../../public/images/kozmeticki-proizvodi/linija-protiv-nesavrsenosti/sampleBottom.png'

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const LinijaProtivNesavrsenosti = () => {
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
                            <p className='kozmetikeHeadTitle'>Linija protiv nesavršenosti na koži</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="kozmetikeDescription" className="kozmetikeDescription">
                <div className="container">
                    <div className="columns">
                        <div className="column colNesavrsenosti">
                            <p className='kozmetikeDescriptionTitle'>Reguliše lučenje sebuma</p>
                            <p className='kozmetikeDescriptionText'>Specifična linija za masnu kožu. Sadrži bademovu i salicilnu kiselinu koje vrše piling kože i imaju keratolitičko djelovanje, te regulišu lučenje sebuma.</p>
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
                                Kozmetički proizvodi za učvršćivanje koji čine ovu No+Vello liniju su:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container productsContainer">
                <div className="columns threeProductsBox">
                        <div className="column">
                            <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage1} alt="" />
                                    <p className='productBoxTitle'>AMPULE PROTIV NESAVRŠENOSTI
NA KOŽI</p>
                                    <p className='productBoxSubtitle'>Sadrže aloe veru i kamilicu</p>
                                    <a className='productBoxButton' href=""><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage2} alt="" />
                                    <p className='productBoxTitle'>MASKA PROTIV NESAVRŠENOSTI
NA KOŽI</p>
                                    <p className='productBoxSubtitle'>Reguliše lučenje sebuma</p>
                                    <a className='productBoxButton' href=""><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage3} alt="" />
                                    <p className='productBoxTitle'>KREMA PROTIV NESAVRŠENOSTI
NA KOŽI</p>
                                    <p className='productBoxSubtitle'>Hidratantna nemasna krema</p>
                                    <a className='productBoxButton' href=""><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="bottomDetails" className="bottomeDetails detailsRevitalizacija detailsProtivNesavrsenosti">
            <div className="container">
                    <div className="columns level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="secondPart">
                                <p className="odlikeItem">Ova kozmetička linija je namijenjena tretiranju nesavršenosti na koži koje mogu biti neupalne lezije (seboreja) ili upalne lezije (pustule, nodule ili ciste) te rezidualne lezije (ožiljci).</p>
                                    <p className="blueTitle">
                                    Među <span className='nesavrsenostiTitleSpan'>aktivnim supstancama</span> koje se najviše ističu u ovim kozmetičkim proizvodima su:
                                    </p>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Bademova kiselina</p>
                                        <p className="odlikeItem">ima efekat depigmentacije što pomaže pri eliminaciji melaninskog pigmenta i sprečava sintezu melanina. Ima anti-ageing djelovanje jer povećava količinu kolagena i elastina.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Salicilna kiselina</p>
                                        <p className="odlikeItem">vrši efekat na komedonima što reguliše višak sebuma. Pomaže u suzbijanju akni. Potiče piling kože i sprečava zatvaranje pora.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aloe vera</p>
                                        <p className="odlikeItem">je prirodno sredstvo za regeneraciju, ubrzava obnavljanje ćelija i potiče zacjeljivanje. Osim toga, na kožu djeluje umirujuće i ispunjava antioksidativnu funkciju zahvaljujući svojim fenolnim supstancama.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Glikolna kiselina</p>
                                        <p className="odlikeItem">je odlično sredstvo za piling koje pomaže u sprečavanju i suzbijanju akni. Osim toga, smanjuje debljinu vanjskog sloja epidermisa (stratum corneum) i pomaže u povećavanju Malpigijevog sloja. To direktno pomaže u ublažavanju bora na koži i poboljšanju izgleda atrofičnih ožiljaka od akni. Također omogućava da druge supstance lakše prodiru u kožu.</p>
                                        </div>
                                       
                                    </div>
                                    <p className="defaultText lastParNesavsenosti">Sve gore navedeno čini ove kozmetičke proizvode idealnim za <span className='nesavrsenostiBottomSpan'>masnu kožu i/ili kožu sa tendencijom stvaranja akni</span> jer pomažu našoj koži da kontroliše proizvodnju sebuma, smanjuju lezije od akni, poboljšavaju izgled ožiljaka od akni i ujednačavaju ten kože.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-right">
                            <div className="_innerImage">
                                <img src={sampleBottom} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            
            
        
        </>


);
}
 
export default LinijaProtivNesavrsenosti;