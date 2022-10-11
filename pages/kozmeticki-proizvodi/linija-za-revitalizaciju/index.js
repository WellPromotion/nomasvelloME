import styles from '../../../styles/LinijaZaRevitalizaciju.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sampleImage1 from '../../../public/images/kozmeticki-proizvodi/linija-za-revitalizaciju/sample1.png'
import sampleImage2 from '../../../public/images/kozmeticki-proizvodi/linija-za-revitalizaciju/sample2.png'
import sampleImage3 from '../../../public/images/kozmeticki-proizvodi/linija-za-revitalizaciju/sample3.png'
import eyeIcon from '../../../public/images/eyeIcon.svg'
import checkGreen from '../../../public/images/greenCheckmark.svg';
import sampleBottom from '../../../public/images/kozmeticki-proizvodi/linija-za-revitalizaciju/linija-za-revitalizaciju.png';

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const LinijaZaRevitalizaciju = () => {
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
                            <p className='kozmetikeHeadTitle'>Linija za Revitalizaciju</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="kozmetikeDescription" className="kozmetikeDescription">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className='kozmetikeDescriptionTitle'>Flash blistavost – Kozmetika sa vitaminom C</p>
                            <p className='kozmetikeDescriptionText'>Za mladu kožu, kožu sa znacima fotostarenja, ugašenu kožu i kožu sa prvim znacima starenja.
<br /><br />
Prepustite se moćima vitamina C. Osjetite njegov trostruki efekat: antioksidativni, protiv bora i ujednačenje tena. Štiti kožu od vanjskih štetnih uticaja, povećava nivoe kolagena i gustoću vlakana elastina i tako sprečava starenje kože i formiranje prvih bora.</p>
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
                                Kozmetički proizvodi koji čine No+Vello liniju za revitalizaciju su:
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
                                    <p className='productBoxTitle'>AMPULE ZA REVITALIZACIJU</p>
                                    <p className='productBoxSubtitle'>Postižu ujednačavanje tena kože.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-revitalizaciju/ampule-za-revitalizaciju"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage2} alt="" />
                                    <p className='productBoxTitle'>MASKA ZA REVITALIZACIJU</p>
                                    <p className='productBoxSubtitle'>Postižu ujednačavanje tena kože.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-revitalizaciju/maska-za-revitalizaciju"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage3} alt="" />
                                    <p className='productBoxTitle'>REVITALIZIRAJUĆI FACIJALNI FLUID</p>
                                    <p className='productBoxSubtitle'>Koži pruža blistavost i vitalnost.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-revitalizaciju/revitalizirajuci-facijalni-fluid"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="bottomDetails" className="bottomeDetails detailsRevitalizacija">
            <div className="container">
                    <div className="columns level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="secondPart">
                                <p className="odlikeItem">Ova kozmetička linija je idealna za mat i ugašenu kožu, kožu sa prvim znacima starenja, ali i za mladu kožu jer se radi o svježim i hidratantnim proizvodima koji nisu agresivni po kožu.</p>
                                    <p className="blueTitle">
                                    Lokalno povećanje vitamina C podrazumijeva:
                                    </p>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Antioksidativno djelovanje:</p>
                                        <p className="odlikeItem">Štiti ćelijsku membranu tako što blokira formiranje slobodnih radikala.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Djeluje protiv bora:</p>
                                        <p className="odlikeItem">Značajno potiče proizvodnju kolagena.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList lastdetailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Depigmentirajuće djelovanje:</p>
                                        <p className="odlikeItem">Smanjuje proizvodnju melanina.</p>
                                        </div>
                                       
                                    </div>
                                    <p className="odlikeBlueItem"><b>Vitamin C pripada grupi vitamina rastvorljivih u vodi (hidrosolubilni)</b> i kao većina njih ne zadržava se dugoročno u tijelu, nego se eliminiše u malim količinama putem mokraće. Iz tog razloga je bitno svakodnevno uzimanje vitamina C jer se lako može desiti da se njegove rezerve prije potroše nego što je to slučaj sa drugim vitaminima.</p>
                                    <p className="odlikeBlueItem"><b>Vitamin C je prirodni aktivni princip</b> koji udružen sa tehnologijom obasjava lice kao nijedan drugi spoj. Obavlja 4 osnovne funkcije na koži: antioksidativni efekat, regeneracija, hidratacija i blistavost kože. Koži se brzo vraća hidratacija, čvrstoća i ujednačenost.</p>
                                    <p className="odlikeBlueItem">S druge strane, <b>askorbil glikozid (Ascorbyl Glucoside) ima duži efekat nego vitamin C</b> i zadržava svoj potencijal na koži tokom dužeg vremenskog perioda.</p>
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
 
export default LinijaZaRevitalizaciju;