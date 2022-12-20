import styles from '../styles/Fransize.module.scss'
import naljepnicaImg from '../public/images/naljepnica.png'
import NagradePop from '../Components/fransizePop/NagradePop';
import TrzistePop from '../Components/fransizePop/TrzistePop';
import OnamaPop from '../Components/fransizePop/OnamaPop';
import UsloviPop from '../Components/fransizePop/UsloviPop';

import priceTwo from '../public/images/usluge/laserskaCijene.png'
import priceThree from '../public/images/usluge/diodniLaser.png'



// import prezentacijaPdf from '../public/pdf/prezentacija.pdf';

export default function Fransize() { 
    return (
    
    <>
    
    <section id="heroTitleFransize" className="hero is-medium">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className=" title">
                    Franšize
                </h1>
            </div>
        </div>
    </section>
            
            
            <section id="fransizeTop" className='fransizeTop section'>
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <div className="fransBox">
                                <div className="inner">
                                    <p className="fransBroj">16</p>
                                    <p className="fransSub">zemalja u svijetu</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="fransBox">
                                <div className="inner">
                                    <p className="fransBroj">1000+</p>
                                    <p className="fransSub">centara u svijetu</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="fransBox">
                                <div className="inner">
                                    <p className="fransBroj">9</p>
                                    <p className="fransSub">centara u BiH</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <img src={priceTwo} alt="" />
                        </div>
                        <div className="column">
                            <img src={priceThree} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        
            <section id="fransizeMid" className="fransizeMid section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className="parTitle">
                            Kompanija: Profitabilna franšiza
                            </p>
                            <p className="parHigh">
                            Jedna od najboljih franšiza u sektoru depilacije koja nudi tretmane laserske epilacije i fotoepilacije sa IPL tehnologijom.
                            </p>
                            <p className="parTxt">Kompanija No+Vello je mreža specijalizovanih centara za lasersku epilaciju, fotoepilaciju i fotopodmlađivanje, koja je postala neosporni lider u tom sektoru na svjetskom nivou. Nakon njenog osnivanja u novembru 2007. godine, počela je svoje širenje i otvoreno je 150 centara za samo 6 mjeseci zahvaljujući brzom prihvaćanju poslovnog koncepta i velikom potražnjom za njenim tretmanima. Naša pionirska, inovativna i atraktivna jedinstvena tarifa od 49KM po zoni i sesiji revolucionirala je tržište fotoepilacije.
                                <br /><br />
                                No+Vello je prvi brend koji je na međunarodnoj razini primijenio koncept jedinstvene tarife za lasersku epilaciju,  IPL fotoepilaciju i fotopodmlađivanje kože, te predstavlja prvu i najbolju franšizu. Tretmani laserske epilacije i fotoepilacije su prije bili namijenjeni samo visoko pozicioniranom društvu zbog njene cijene i pojavljivanje No+Vello modela je značilo prekretnicu na tržištu. Ključ uspjeha našeg modela leži u demokratizaciji usluga, čineći ih dostupnim svima što je dovelo do toga da smo danas jedna od najprofitabilnijih franšiza.
                                <br /><br />
                                Također, postoje i drugi aspekti koji su bez sumnje pomogli tom rastu: tržište u porastu, mala ulaganja i jednostavnost upravljanja, visoka profitabilnost, period otplate investicije u prosjeku između 8 mjeseci i jedne godine, te djelatnosti vezane za estetiku i kult tijela koje su u stalnom porastu.
                            </p>
                            <p className="parHigh">
                            Zbog svega toga, sa više od 1000 centara, možemo reći da je No+Vello svjetski lider u laserskoj epilaciji i fotoepilaciji.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
            <section id="fransizeBot" className="fransizeBot section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="singleBox">
                                <div className="inner">
                                    <p className="titleInner">
                                        Naše nagrade
                                    </p>
                                   <NagradePop />
                                </div>
                        </div>
                        </div>
                        <div className="column">
                        <div className="singleBox">
                                <div className="inner">
                                    <p className="titleInner">
                                       O nama
                                    </p>
                                    <a className='button naruciBtnCentri greenButton fransizeBtn' target="_blank" href="http://app-okuneva.jjjwv99uog-58e601yzv4d7.p.temp-site.link/wp-content/uploads/2022/09/prezentacija_no_vello.pdf">Pogledajte <br /> prezentaciju</a>
                                    {/* <TrzistePop/> */}
                                </div>
                        </div>
                        </div>
                        <div className="column"> <div className="singleBox">
                                <div className="inner">
                                    <p className="titleInner">
                                        Tržište franšiza
                                    </p>
                                   <TrzistePop/>
                                </div>
                        </div>
                        </div>
                        <div className="column">
                        <div className="singleBox">
                                <div className="inner">
                                    <p className="titleInner">
                                        Opći uslovi
                                    </p>
                                   <UsloviPop/>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        
        
        
    </>
);
}