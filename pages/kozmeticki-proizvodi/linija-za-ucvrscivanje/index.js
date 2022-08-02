import styles from '../../../styles/LinijaZaUcvrscivanje.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sampleImage1 from '../../../public/images/kozmeticki-proizvodi/linija-za-ucvrscivanje/sample1.png'
import sampleImage2 from '../../../public/images/kozmeticki-proizvodi/linija-za-ucvrscivanje/sample2.png'
import sampleImage3 from '../../../public/images/kozmeticki-proizvodi/linija-za-ucvrscivanje/sample3.png'
import eyeIcon from '../../../public/images/eyeIcon.svg'
import checkGreen from '../../../public/images/greenCheckmark.svg';
import sampleBottom from '../../../public/images/kozmeticki-proizvodi/linija-za-ucvrscivanje/sampleBottom.png'

const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const LinijaZaUcvrscivanje = () => {
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
                            <p className='kozmetikeHeadTitle'>Linija za učvršćivanje</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="kozmetikeDescription" className="kozmetikeDescription">
                <div className="container">
                    <div className="columns colsTopUcvrscivanje">
                        <div className="column colTopUcvrscivanje">
                            <p className='kozmetikeDescriptionTitle'>Direktno djeluje protiv mlitavosti kože na licu.</p>
                            <p className='kozmetikeDescriptionText'>S vremenom dolazi do degradacije vlakana kolagena i elastina koji čine da koža bude elastična i čvrsta. Linija za učvršćivanje je bogata dimetilaminoetanolom (DMAE), prirodnim sastojkom koji potiče sintezu kolagena i djeluje na svim nivoima kože:</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column colTopUcvrscivanje1">
                        <div className="listInnerUcvrscivanje">
                            <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Na nivou epidermisa</p>
                                        <p className="odlikeItem">proizvodi lifting efekat koji je odmah vidljiv.</p>
                                        </div>
                            </div>
                            <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Na nivou dermisa</p>
                                        <p className="odlikeItem">stimuliše proizvodnju kolagena i elastina.</p>
                                        </div>
                            </div>
                            <div className="detailsList">
                                  <img className="greenCheckSpacing" src={checkGreen} alt="" />
                                        <div className="singleDetail">
                                            <p className='odlikeTitle'>Na muskularnom nivou</p>
                                        <p className="odlikeItem">stimuliše kontrakciju mišića kako bi se spriječio gubitak tonusa mišića.</p>
                                        </div>
                            </div>
                            </div>
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
                                    <p className='productBoxTitle'>KREMA ZA LICE ZA UČVRŠĆIVANJE</p>
                                    <p className='productBoxSubtitle'>Krema za učvršćivanje namijenjena je za tretiranje mlitave kože.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-ucvrscivanje/krema-za-lice-za-ucvrscivanje"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage2} alt="" />
                                    <p className='productBoxTitle'>MASKA ZA UČVRŠĆIVANJE</p>
                                    <p className='productBoxSubtitle'>Namijenjena za tretiranje i njegu mlitave kože.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-ucvrscivanje/maska-za-ucvrscivanje"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="kozmetikeProductBox">
                                <div className="_inner">
                                    <img className='productImg' src={sampleImage3} alt="" />
                                    <p className='productBoxTitle'>AMPULE ZA UČVRŠĆIVANJE</p>
                                    <p className='productBoxSubtitle'>Anti-age tretman čiji je efekat odmah vidljiv.</p>
                                    <a className='productBoxButton' href="/kozmeticki-proizvodi/linija-za-ucvrscivanje/ampule-za-ucvrscivanje"><span><img src={eyeIcon} alt="" /></span>Pogledaj detaljnije</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="bottomDetails" className="bottomeDetails detailsRevitalizacija detailsLinijaUcvrscivanja">
            <div className="container">
                    <div className="columns level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="secondPart">
                               
                                    <p className="blueTitle">
                                    Prirodni sastojci No+Vello kozmetičkih proizvoda revitaliziraju, umiruju i regenerišu kožu. U slučaju linije protiv mlitavosti kože u tom smislu se ističe dimetilaminoetanol (DMAE).
                                    </p>
                                    <p className="odlikeItem firstParUcvrscivanje">DMAE je prirodni hranjivi sastojak koji se nalazi u našem vlastitom organizmu i koji se nalazi u namirnicama kao što su: losos, inćuni i sardine. DMAE je stabilizator membrane ćelije, koju štiti od negativnog uticaja slobodnih radikala, a pomaže u eliminaciji toksina i čuvanju korisnih hranjivih tvari. Proizvodi efekat učvršćivanja i poboljšava fleksibilnost i čvrstoću kože.</p>
                            
                                    <p className="blueTitle">
                                    Drugi aktivni principi koji su pogodni za piling kože su kiseline. U ovoj kozmetičkoj liniji se ističu sljedeće kiseline:
                                    </p>
                                    <p className="smallGreenTitle">
                                    Mliječna kiselina
                                    </p>
                                    <p className="odlikeItem">uglavnom se koristi kao alternativa glicerinu. Njena svojstva su idealna za podmlađivanje kože jer ublažava konture lica i smanjuje štetne uticaje usljed izlaganja suncu, te poboljšava ten i teksturu kože.</p>
                                    <p className="smallGreenTitle">
                                    Hijaluronska kiselina
                                    </p>
                                    <p className="odlikeItem">je aktivni sastojak koji ima najveći kapacitet hidratacije, te čini da ista bude odmah vidljiva. Formira hidratantni i zaštitni površinski sloj, te tako smanjuje upaljenost kože i poboljšava obnavljanje ćelija.</p>
                                    <br />
                                    <p className="odlikeItem">Kozmetički proizvodi ove linije su posebno namijenjeni za korištenje kod osoba poslije 35 godina starosti kao rješenje za prve bore, a nakon 45 godina starosti su namijenjeni za tretiranje dubljih bora, izjednačavanje boje kože i za poboljšanje teksture kože.</p>
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
 
export default LinijaZaUcvrscivanje;