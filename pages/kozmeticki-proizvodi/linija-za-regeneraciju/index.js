import styles from '../../../styles/LinijaZaRegeneraciju.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sampleImage1 from '../../../public/images/kozmeticki-proizvodi/linija-za-regeneraciju/sample1.png'
import sampleImage2 from '../../../public/images/kozmeticki-proizvodi/linija-za-regeneraciju/sample2.png'
import eyeIcon from '../../../public/images/eyeIcon.svg'
import checkGreen from '../../../public/images/greenCheckmark.svg';
import sampleBottom from '../../../public/images/kozmeticki-proizvodi/linija-za-regeneraciju/sampleBottom.jpg'

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const LinijaZaRegeneraciju = () => {
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
                            <p className='kozmetikeHeadTitle'>Linija za Regeneraciju <br />Regeneriše i štiti kožu </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="kozmetikeDescription" className="kozmetikeDescription kozmetikeRegeneracija">
                <div className="container">
                    <div className="columns">
                        <div className="column colRegen">
                            <p className='kozmetikeDescriptionTitle'>Specijalna linija za osjetljivu i oštećenu kožu.</p>
                            <p className='kozmetikeDescriptionText'>Ponekad nije dovoljna samo hidratacija kože, nego je potrebna regeneracija, obnavljanje i zaštita solarnim filterima i umirujućim regenerativnim aktivnim supstancama.</p>
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
            
            <section id="kozmetikeProizvodi" className="kozmetikeProizvodi kozmetikeProizvodiRegen">
                <div className="container">
                    <div className="columns topColumns">
                        <div className="column">
                            <div className="innerOutro">
                                <p className='outroMessage has-text-centered'>
                                Kozmetički proizvodi koji čine ovu liniju su:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container productsContainer">
                <div className="columns threeProductsBox">
                        <div className="column colProductRegen">
                            <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage1} alt="" />
                                    <p className='productBoxTitle'>HIDROZAŠTITNA EMULZIJA</p>
                                    <p className='productBoxSubtitle'>Sa visokom koncentracijom aloe vera i ulja ploda čileanske ruže.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-regeneraciju/hidrozastitna-emulzija-za-lice-i-tijelo"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column colProductRegen">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage2} alt="" />
                                    <p className='productBoxTitle'>MASKA ZA REGENERACIJU</p>
                                    <p className='productBoxSubtitle'>Aloe vera maska umiruje, hidratizira i regeneriše kožu.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-regeneraciju/maska-za-regeneraciju"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="bottomDetails" className="bottomeDetails detailsRevitalizacija detailsRegeneracija">
            <div className="container">
                    <div className="columns level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="secondPart">
                                    <p className="odlikeItem">Naša koža je stalno izložena štetnim vanjskim uticajima, tako da nije dovoljna samo hidratacija, nego je potrebna i regeneracija, obnavljanje i zaštita kože.</p>
                                    <p className="blueTitle blueTitleRegeneracija">
                                    Zbog toga je potrebno svakodnevno koristiti kozmetičke proizvode koji sadrže:
                                    </p>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Zaštitne filtere protiv sunca.</p>
                                        </div>
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aktivne principe koji umiruju.</p>
                                        </div>
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aktivne principe koji regenerišu.</p>
                                        </div>
                                    </div>
                                    
                                    <p className="blueTitle blueTitleRegeneracija">
                                    Zbog toga je potrebno svakodnevno koristiti kozmetičke proizvode koji sadrže:
                                    </p>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aloe vera</p>
                                        <p className="odlikeItem">je prirodni regenerator koji potiče zacjeljivanje i obnavljanje ćelija. Osim toga, djeluje umirujuće i štiti ćelije od oksidacije.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Ulje ploda čileanske ruže (rosa mosqueta)</p>
                                        <p className="odlikeItem">pruža koži hidrataciju, elastičnost, regeneriše površinske slojeve kože, sprečava fotostarenje i potiče zacjeljivanje.</p>
                                        </div>
                                       
                                    </div>
                                    <p className="defaultText txtLinReg">No+Vello regenerativno-zaštitna linija je namijenjena oštećenoj ili iritiranoj, osjetljivoj i koži koja je izložena ekstremnim atmosferskim uslovima, kao i mladoj koži.</p>
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
 
export default LinijaZaRegeneraciju;