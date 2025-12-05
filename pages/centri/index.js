import styles from '../../styles/Centri.module.scss';
import Link from 'next/link';
import pointImg from '../../public/images/centri/point.png';
import greenDetail from '../../public/images/centri/greenDetail.svg';
import greenSphere from '../../public/images/centri/sphere.png';




const Centri = () => {
    return (
        
        <>
            
            <section id="titleCentri" className="titleCentri section">
                <div className="container has-text-centered">
                    <div className="columns">
                        <div className="column">
                            <div className="titleTopCentri">
                                <img src={pointImg} alt="" />
                                <h1 className="title">NAŠI CENTRI U CRNOJ GORI</h1>
                                <img src={greenDetail} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="centriBoxes" className="centriBoxes section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Podgorica - I</p>
                                        <p className="centriCitySubtitle">Siva Zetagradnja</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">4. jula br. 107/14</span></p>
                                                    <p> <span className="cityInfoContent">+382 (0)67 03 83 03</span></p>
                                                    <p><span className="cityInfoContent">montenegro@nomasvello.me</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/centri/podgorica-I">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Podgorica - II</p>
                                        <p className="centriCitySubtitle">Kod Krivog Mosta</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Dr. Vukašina Markovića bb</span></p>
                                                    <p> <span className="cityInfoContent">+382 (0)67 820 437</span></p>
                                                    <p><span className="cityInfoContent">krusevac@nomasvello.me</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/podgorica-II">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                      
                        
                
                        {/* <div className="column last-city">
                        <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Teslić</p>
                                        <p className="centriCitySubtitle">Centar u Tesliću</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Stevana Sinđelića bb</span></p>
                                                    <p> <span className="cityInfoContent">066 398 638</span></p>
                                                    <p><span className="cityInfoContent">teslic@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/teslic">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                        
                    </div>
                    
                   
                    
                   
                    
                    
                </div>
            </section>
        </>
        
     );
}
 
export default Centri;