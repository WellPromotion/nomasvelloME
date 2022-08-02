import styles from '../../styles/KozmetickiProizvodi.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import belowTitleImgGreen from '../../public/images/belowTitleGreen.svg'
import kozmetikaCiscenje from '../../public/images/kozmeticki-proizvodi/kozmetikaCiscenje.png'
import linijaUcvrscivanje from '../../public/images/kozmeticki-proizvodi/linijaUcvrscivanje.png'
import linijaRevitalizacija from '../../public/images/kozmeticki-proizvodi/linijaRevitalizacija.png'
import linijaProtivNesavrsenosti from '../../public/images/kozmeticki-proizvodi/linijaProtivNesavrsenosti.png'
import kozmetikaTijelo from '../../public/images/kozmeticki-proizvodi/kozmetikaTijelo.png'
import linijaRegeneracija from '../../public/images/kozmeticki-proizvodi/linijaRegeneracija.png'
import linijaHidratacija from '../../public/images/kozmeticki-proizvodi/linijaHidratacija.png'



const KozmetickiProizvodi = () => {
    return (
        
        <>
            <section id="headerKozmetika" className="headerKozmetika hero">
                <div className="hero-body has-text-centered">
                    <div className="innerTitle">
                        <p className="title">
                        KOZMETIKA NO+VELLO
                        </p>
                        <img src={belowTitleImg} alt="" />
                    </div>
                </div>
            </section>

            <section id="kozmetikaBody" className="kozmetikaBody">
                <div className="container kozmetikaTitleCol">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <p className="kozmetikaTitle">PROFESIONALNA NO+VELLO KOZMETIKA</p>
                            <p className="kozmetikaSubtitle">Dopunjuje i poboljšava efikasnost vaših No+Vello tretmana za ljepotu</p>
                            <p className='kozmetikaSubSubtitle defaultText'>Najšira lepeza profesionalne kozmetike namijenjena isticanju vaše ljepote u odnosu na vaše potrebe. Specijalizovani No+Vello proizvodi koji dopunjuju vaše tretmane fotoepilacije, tretmane lica i tijela.</p>
                            <img className='kozmetikaTitleImg' src={belowTitleImgGreen} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="kozmetikaBoxes" className="kozmetikaBoxes">
                <div className="container">
                    <div className="columns">
                        <div className="column kozmetikaCols">

                            <div className="colInner">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={kozmetikaCiscenje} alt="KOZMETIKA ZA ČIŠĆENJE" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner">
                                            <p className='kozBoxTitle'>KOZMETIKA ZA ČIŠĆENJE</p>
                                            <p className='kozBoxSubtitle'>Čišćenje je prvi korak za postizanje savršene
                                                kože
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/kozmetika-za-ciscenje">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="colInner secCol">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaUcvrscivanje} alt="LINIJA ZA UČVRŠĆIVANJE" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner smallerPadding">
                                            <p className='kozBoxTitle'>LINIJA ZA UČVRŠĆIVANJE</p>
                                            <p className='kozBoxSubtitle'>Direktno djeluje protiv mlitavosti kože na licu.
Revitalizuje, umiruje i regeneriše kožu.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-za-ucvrscivanje">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="column kozmetikaCols">
                       <div className="colInner">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaRevitalizacija} alt="LINIJA ZA REVITALIZACIJU" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner smallerPadding">
                                            <p className='kozBoxTitle'>LINIJA ZA REVITALIZACIJU</p>
                                            <p className='kozBoxSubtitle'>Za mladu kožu, kožu sa znacima fotostarenja,
ugašenu kožu i kožu sa prvim znacima starenja.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-za-revitalizaciju">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="colInner secCol">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaProtivNesavrsenosti} alt="LINIJA PROTIV NESAVRŠENOSTI NA KOŽI" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner smallestPadding">
                                            <p className='kozBoxTitle'>LINIJA PROTIV <br />
 NESAVRŠENOSTI NA KOŽI</p>
                                            <p className='kozBoxSubtitle'>Specifična linija za masnu kožu.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-protiv-nesavrsenosti-na-kozi">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="colInner thirdCol">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={kozmetikaTijelo} alt="KOZMETIKA ZA TIJELO" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner">
                                            <p className='kozBoxTitle'>KOZMETIKA ZA TIJELO</p>
                                            <p className='kozBoxSubtitle'>Anticelulitni reduktor i tjelesni učvršćivač
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/kozmetika-za-tijelo">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                        <div className="column kozmetikaCols">
                        <div className="colInner">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaRegeneracija} alt="LINIJA ZA REGENERACIJU" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner smallerPadding smallerMargin">
                                            <p className='kozBoxTitle'>LINIJA ZA REGENERACIJU</p>
                                            <p className='kozBoxSubtitle'>Razni vanjski faktori oštećuju našu kožu. Osim
hidratacije, potrebno je da kožu zaštitimo i regenerišemo.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-za-regeneraciju">Pogledaj kolekciju</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="colInner secCol">
                                <div className="kozmetikaBox">
                                    <div className="imgKozmetika">
                                        <img src={linijaHidratacija} alt="LINIJA ZA HIDRATACIJU" />
                                    </div>
                                    <div className="_outer">
                                        <div className="_inner">
                                            <p className='kozBoxTitle'>LINIJA ZA HIDRATACIJU</p>
                                            <p className='kozBoxSubtitle'>Hidratizuje kožu i održava je mladom.
                                            </p>
                                            <a className='ctaKolekcijaBox kolekcijaButton'
                                                href="/kozmeticki-proizvodi/linija-za-hidrataciju">Pogledaj kolekciju</a>
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
 
export default KozmetickiProizvodi;