import styles from '../../../styles/kozmeticki-proizvodi/kozmetika-za-ciscenje/Kozmetika-Ciscenje.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sampleImage1 from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/sample1.png'
import sampleImage2 from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/sample2.png'
import sampleImage3 from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/sample3.png'
import sampleImage4 from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/piling-lice/0.png'
import sampleImage5 from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/piling-tijelo/1.png'

import eyeIcon from '../../../public/images/eyeIcon.svg'
import checkGreen from '../../../public/images/greenCheckmark.svg';
import sampleBottom from '../../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje/kozmetika-za-ciscenje.png';

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const KozmetikaCiscenje = () => {
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
            
            <section id="headerKozmetike" className='headerKozmetike '>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className='kozmetikeHeadTitle'>Kozmetika za čišćenje</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="kozmetikeDescription" className="kozmetikeDescription section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className='kozmetikeDescriptionTitle'>Ispravno čišćenje kože je osnova uspjeha svakog tretmana lica.</p>
                            <p className='kozmetikeDescriptionText'>Čišćenje lica je veoma važno i to ne samo zbog toga da koža bude čista nego i kao garancija za efikasnost proizvoda koji su predstavljeni u nastavku.</p>
                            <p className='kozmetikeDescriptionText'>Ispravno čišćenje kože podrazumijeva čišćenje kože 2 puta dnevno: ujutro kako bi se uklonio višak masnoće izlučene tokom noći; navečer kako bi se uklonila nečistoća koja se nagomilala tokom dana na našoj koži.</p>
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

            <section id="kozmetikeProizvodi" className="kozmetikeProizvodi section">
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
                    <div className="column">
                            <div className="kozmetikeProductBox kozmetikeProductBoxPiling">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage4} alt="" />
                                    <p className='productBoxTitle'>NoMasVello piling za <br />lice</p>
                                    <p className='productBoxSubtitle'>Idealan tretman za pripremu kože, osiguravajući dubinsko čišćenje. Također je savršen i za osjetljivu kožu.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/kozmetika-za-ciscenje/nomasvello-piling-za-lice"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="kozmetikeProductBox kozmetikeProductBoxPiling">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage5} alt="" />
                                    <p className='productBoxTitle'>NoMasVello piling za tijelo</p>
                                    <p className='productBoxSubtitle'>Osmišljen je za dubinski, ali nježan tretman eksfolijacije uz korištenje visokokvalitetnih sastojaka.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/kozmetika-za-ciscenje/nomasvello-piling-za-tijelo"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns threeProductsBox">
                        <div className="column">
                            <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage1} alt="" />
                                    <p className='productBoxTitle'>Gel za čišćenje visoke tolerancije</p>
                                    <p className='productBoxSubtitle'>Svakodnevno čišćenje za sve tipove kože.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/kozmetika-za-ciscenje/gel-za-ciscenje-visoke-tolerancije"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage2} alt="" />
                                    <p className='productBoxTitle'>Liposomska voda za skidanje šminke</p>
                                    <p className='productBoxSubtitle'>Sredstvo za skidanje šminke za sve tipove kože, čak i za osjetljivu kožu.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/kozmetika-za-ciscenje/liposomska-voda-za-skidanje-sminke"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage3} alt="" />
                                    <p className='productBoxTitle'>Gel za čišćenje sa salicilnom kiselinom</p>
                                    <p className='productBoxSubtitle'>Dubinski čisti kožu, skida masnoću i čisti pore.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/kozmetika-za-ciscenje/gel-za-ciscenje-sa-salicilnom-kiselinom"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
            <section id="bottomDetails" className="bottomeDetails section">
            <div className="container">
                    <div className="columns level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="secondPart">
                                    <p className="blueTitle">
                                    Neki od aktivnih principa koji se nalaze u ovoj kozmetičkoj liniji su:
                                    </p>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Aloe vera</p>
                                        <p className="odlikeItem">koja djeluje kao umirujuće antiinflamatorno sredstvo, umiruje svrabež, a djeluje i kao prirodni regenerator koji potiče zacjeljivanje i obnavljanje ćelija.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Ekstrakti kamilice, zobi i mimoze</p>
                                        <p className="odlikeItem">Kamilica pruža umirujuće i antioksidantno djelovanje. Zob štiti od svrabeža, iritacija i infekcija, te djeluje bakteriostatično, umirujuće i dekongestivno. Mimoza posjeduje analgezična, antiseptička i regenerativna svojstva, kao i svojstva obnavljanja i učvršćivanja.</p>
                                        </div>
                                       
                                    </div>
                                    <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Triklosan</p>
                                        <p className="odlikeItem">je aktivni princip koji potiče hidrataciju i obnavljanje hidrolipidne barijere. Među njegovim svojstvima se ističe antiseptičko djelovanje koje sprečava proliferaciju bakterija; njegovo dugoročno djelovanje čini ga efikasnim tokom dužeg perioda; posjeduje antiinflamatorno djelovanje i omekšava formule za njegu kože bazirane na sapunu, šamponu i sredstvima za ispiranje…</p>
                                        </div>
                                       
                                    </div>
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
            
            <section id="kozmetikaCiscenjeOutro" className="kozmetikaCiscenjeOutro section">
            <div className="container">
                    <div className="columns topColumns">
                        <div className="column">
                            <div className="innerOutro">
                                <p className='outroMessage has-text-centered'>
                                No+Vello linija za čišćenje je namijenjena osjetljivoj koži, koži sa rozacejom ili netolerancijom prema sapunu, kao i <br />
koži sklonoj aknama, koži sa začepljenim porama, a također je namijenjena i suhoj, masnoj i mješovitoj koži.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </>


);
}
 
export default KozmetikaCiscenje;