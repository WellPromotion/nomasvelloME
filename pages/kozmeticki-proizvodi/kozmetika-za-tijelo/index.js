import styles from '../../../styles/KozmetikaZaTijelo.module.scss';
import Link from 'next/link';
import Breadcrumbs from 'nextjs-breadcrumbs';
import sampleImage1 from '../../../public/images/kozmeticki-proizvodi/kozmetika-za-tijelo/anticelulitni-reduktor.png'
import sampleImage2 from '../../../public/images/kozmeticki-proizvodi/kozmetika-za-tijelo/tjelesni-ucvrscivac.png'
import checkGreen from '../../../public/images/greenCheckmark.svg';
import turqCheck from '../../../public/images/turqCheck.svg';


const Example = () => {
    return <Breadcrumbs useDefaultStyle rootLabel="Početna"
    />;
};
  
const KozmetikaZaTijelo = () => {
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
                            <p className='kozmetikeHeadTitle'>NO+VELLO Kozmetika za tijelo</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="kozmetikeDescription" className="kozmetikeDescription">
                <div className="container">
                    <div className="columns">
                        <div className="column colNesavrsenosti">
                            <p className='kozmetikeDescriptionTitle'>Dopunite vaše tretmane ljepote No+Vello
specijalizovanim kozmetičkim proizvodima.</p>
                            <p className='kozmetikeDescriptionText'>Proizvodi koji dopunjuju tretmane za tijelo</p>
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
            
     
            <section id="firstKozmetika" className="firstKozmetika">
                <div className="container">
                    <div className="columns level">
                        <div className="column imgCol">
                            <img src={sampleImage1} alt="" className="sampleImage" />
                        </div>
                        <div className="column is-8 rightCol">
                            <p className="reduktorTitle">ANTICELULITNI REDUKTOR</p>
                            <p className='reduktorSubtitle'>Koji su efekti gela?</p>
                            <div className="listInner">
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Tonificiranje.</p>
                                        </div>
                                    </div>
                                    <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Aktiviranje cirkulacije krvi.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Pomaže pri sagorijevanju lokalizovanih masnih naslaga.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Pokreće zadržanu tečnost.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Regeneracija.</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="scndSection">
                                <p className="reduktorSubtitle">Aktivni principi i druge dobrobiti:</p>
                                <div className="columns">
                                    <div className="column">
                                    <div className="listInner">
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Alga fukus:.</p>
                                            <p className="odlikeSub">Stimuliše sagorijevanje masnoće.</p>
                                        </div>
                                    </div>
                                    <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Karnitin:</p>
                                            <p className="odlikeSub">Suzbija nagomilavanje masnih naslaga na adipoznom tkivu.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Guarane:</p>
                                            <p className="odlikeSub">Stimuliše cirkulaciju krvi.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Jodne soli:</p>
                                            <p className="odlikeSub">Pokreće tečnost/lipolitičko djelovanje.</p>
                                        </div>
                                </div>
                            </div>
                                    </div>
                                    <div className="column">
                                    <div className="listInner">
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Crvena vinova loza:.</p>
                                            <p className="odlikeSub">Reguliše cirkulaciju krvi.</p>
                                        </div>
                                    </div>
                                    <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Preslica:</p>
                                            <p className="odlikeSub">Bogata mineralima. Učvršćuje, suzbija mlitavost kože, smanjuje oticanje tkiva.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Mentol:</p>
                                            <p className="odlikeSub">Efekat hlađenja</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Urea:</p>
                                            <p className="odlikeSub">Hidratizuje, pruža fleksibilnost.</p>
                                        </div>
                                </div>
                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            
            <section id="firstKozmetika" className="firstKozmetika firstKozmetika2">
                <div className="container">
                    <div className="columns level">
                        <div className="column imgCol">
                            <img src={sampleImage2} alt="" className="sampleImage" />
                        </div>
                        <div className="column is-8 rightCol">
                            <p className="reduktorTitle reduktorTitle2">TJELESNI UČVRŠĆIVAČ</p>
                            <div className="parTjel">
                            <p className="defaultText">Gel krema za učvršćivanje za svakodnevnu upotrebu. Bogata prirodnim mladim kolagenom koji vrši efekat zatezanja i fleksibilizacije kože. Osim toga, sadrži elastin koji prenosi svojstva elastičnosti i poboljšava glatkoću kože. Nanosite dva puta dnevno i uradite +Esthetic tretman za učvršćivanje kako biste postigli najbolje rezultate.</p>
                            </div>
                            <p className='reduktorSubtitle'>Koji su efekti gela?</p>
                            <div className="listInner">
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Aktiviranje vlakana kolagena i elastina.</p>
                                        </div>
                                    </div>
                                    <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Regeneracija.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Hidratacija.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Pokreće zadržanu tečnost.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                        <p className="odlikeItem">Pruža fleksibilnost.</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="scndSection">
                                <p className="reduktorSubtitle">Aktivni principi i druge dobrobiti:</p>
                                <div className="columns">
                                    <div className="column">
                                    <div className="listInner">
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Kolagen:</p>
                                            <p className="odlikeSub">Efekat zategnutosti.</p>
                                        </div>
                                    </div>
                                    <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Elastin:</p>
                                            <p className="odlikeSub">Elastičnost.</p>
                                        </div>
                                </div>
                                <div className="detailsList">
                                  <img className="turqCheckSpacing" src={turqCheck} alt="" />
                                        <div className="singleDetail">
                                            <p className="odlikeItem">Biljna placenta:</p>
                                            <p className="odlikeSub">Hrani kožu.</p>
                                        </div>
                                </div>
                            </div>
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
 
export default KozmetikaZaTijelo;