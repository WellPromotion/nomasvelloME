import styles from '../../styles/tehnologije/LaserTehnologija.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/laserTehnologija/laserIcon.svg'
import diodniLaserImg from '../../public/images/tehnologije/laserTehnologija/diodniLaser.png'
import diodniLaserSampleImg from '../../public/images/tehnologije/laserTehnologija/laserSample.png'
import checkGreen from '../../public/images/centri/check.png';


const LaserTehnologija = () => {
    return (
        
        <>

            <section id='titleLaserTehnologija' className='titleLaserTehnologija hero is-medium'>
                <div className="hero-body">
                <div className="imgTitleSphere has-text-centered">
                        <img src={aboveTitleImg} alt="" />
                    </div>
                    <div className="container has-text-centered">
                        <p className="pretitle">naše tehnologije</p>
                        <h1 className="title">Laser tehnologija</h1>
                    </div>
                    <div className="imgIcon has-text-centered">
                        <img src={belowTitleImg} alt="" />
                    </div>
               </div>
            </section>

            <section id="laserBody" className="laserBody">
                <div className="titlePart">
                    <p className='laserTitle'>
                    Šta je laser tehnologija?
                    </p>
                    <p className='laserSubtitle'>
                    Laser je aparat koji radi na principu emitovanja svjetlosti na određenoj talasnoj dužini. Riječ laser je skraćenica od Light Amplification by Stimulated Emission of Radiation.
                    </p>
                </div>
            </section>
            
            <section id="principLaser" className="principLaser">
                <div className="container">
                    <div className="columns level">
                        <div className="column is-left">
                            <div className="_innerImage">
                                <img src={diodniLaserImg} alt="" />
                          </div>
                        </div>
                        <div className="column is-right">
                            <div className="_inner">
                            <p className='laserTitle'>
                        Po kojem principu radi diodni laser
                    </p>
                    <p className='laserSubtitle'>
                    Diodni laser karakteriše se talasnom dužinom od 810 nm, dubinom na kojoj se nalazi većina folikula dlake. Radi tako što postepeno zagrijava dermis dok se ne postigne odgovarajuća temperatura kako bi se uticalo na folikule dlake bez oštećenja kože.
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="diodniLaser" className="diodniLaser">
                <div className="container">
                    <div className="columns level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="firstPart">
                                <p className='laserTitle'>
                                    No+Vello diodni laser
                                </p>
                                <p className='laserSubtitle'>
                                    No+Vello diodni laser je aparat velike snage (10 Hz) koji omogućava sprovođenje
                                    tretmana koji je izuzetno efikasan, brz i siguran po kožu. Sadrži sistem hlađenja
                                    kože što čini tretman ugodnijim. Zahvaljujući sondi velike površine koja emituje
                                    svjetlost, bilo koja zona se tretira u rekordnom vremenu.
                                </p>
                                </div>
                                <div className="secondPart">
                                    <p className="blueTitle">
                                        Glavne odlike No+Vello diodnog lasera su:
                                    </p>
                                    <div className="odlikeList">
                                        <p className="odlikeItem"> <span className="greenCheckSpacing"><img
                                                    src={checkGreen} alt="" /></span>Osigurava da zona koja se tretira bude
                                            u potpunosti obrađena.</p>
                                            <p className="odlikeItem"> <span className="greenCheckSpacing"><img
                                                    src={checkGreen} alt="" /></span>Maksimalna sigurnost po kožu.</p>
                                            <p className="odlikeItem"> <span className="greenCheckSpacing"><img
                                                    src={checkGreen} alt="" /></span>Tretmani su ugodniji i bezbolni.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-right">
                            <div className="_innerImage">
                                <img src={diodniLaserSampleImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="t_Outro" className='t_Outro'>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="innerOutro">
                            <p className='outroMessage has-text-centered'>
                            Tretmani DIODNIM LASEROM preporučuju se svim tipovima kože i dlake. 
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="t_Ponuda" className="t_Ponuda">
                <div className="container">
                    <div className="columns">
                        <div className="column ponudaColumn has-text-centered">
                            <div className="_inner">
                                <p className="titlePonuda">
                                Zainteresovani ste za usluge
sa laserskom tehnologijom?
                                </p>
                                <p className="subtitlePonuda">
                                Ovog ljeta uživajte u savršenoj koži.
                                </p>
                               
                                <div className="buttonPonuda">
                                   
                                <a href="/usluge/laserska-epilacija" className='turqButton buttPonuda'>
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
 
export default LaserTehnologija;