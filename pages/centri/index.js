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
                                <h1 className="title">NAŠI CENTRI U BOSNI I HERCEGOVINI</h1>
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
                                        <p className="centriCityTitle">Sarajevo - I</p>
                                        <p className="centriCitySubtitle">Centar u Novom Sarajevu</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Kolodvorska 3B</span></p>
                                                    <p> <span className="cityInfoContent">+033 718 555</span></p>
                                                    <p><span className="cityInfoContent">info@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <Link href="/centri/sarajevo-i">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - II</p>
                                        <p className="centriCitySubtitle">Centar u Starom Gradu</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Edhema Mulabdića 2</span></p>
                                                    <p> <span className="cityInfoContent">+033 447 351</span></p>
                                                    <p><span className="cityInfoContent">starigrad@nomasvello.ba</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/sarajevo-ii">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - III</p>
                                        <p className="centriCitySubtitle">Centar na Dobrinji</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Hamdije Kapidžića 11-12</span>
                                                    </p>
                                                    <p> <span className="cityInfoContent">+033 766 130</span></p>
                                                    <p><span className="cityInfoContent">dobrinja@nomasvello.ba</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/sarajevo-iii">
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
                    
                    <div className="columns">
                    <div className="column">
                            <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - IV</p>
                                        <p className="centriCitySubtitle">Centar na Ilidži</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Rustempašina 1 – TC SARA</span></p>
                                                    <p> <span className="cityInfoContent">+033 620
                                                            077</span></p>
                                                    <p><span className="cityInfoContent">ilidza@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/sarajevo-iv">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Sarajevo - V</p>
                                        <p className="centriCitySubtitle">Centar - Sarajevo Centar</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Hamdije Kreševljakovića 7C</span></p>
                                                    <p> <span className="cityInfoContent">033 671 100 | 062 209 979</span></p>
                                                    <p><span className="cityInfoContent">centar@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/sarajevo-v">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Banja Luka</p>
                                        <p className="centriCitySubtitle">Centar u Banja Luci</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Bulevar cara Dušana 15</span>
                                                    </p>
                                                    <p> <span className="cityInfoContent">+051 258 150</span> | <span
                                                            className="cityInfoContent">066 486 645</span></p>
                                                    <p><span className="cityInfoContent">banjaluka@nomasvello.ba</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/banja-luka">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                           
                           
                        </div>
                    </div>
                    
                    <div className="columns">
                    <div className="column">
                           
                    <div className="boxCity">
                                <div className="boxOuter">
                                    <div className="boxInner">
                                        <img src={greenSphere} alt="" />
                                        <p className="centriCityTitle">Brčko</p>
                                        <p className="centriCitySubtitle">Centar u Brčkom</p>
                                        <div className="adressInfo">
                                            <div className="columns">
                                                <div className="column">
                                                    <p className="cityInfoTitle">Adresa: </p>
                                                    <p className="cityInfoTitle">Telefon:</p>
                                                    <p className="cityInfoTitle">Email: </p>
                                                </div>
                                                <div className="column is-10">
                                                    <p><span className="cityInfoContent">Studentska 3</span></p>
                                                    <p> <span className="cityInfoContent">066 326 505</span></p>
                                                    <p><span className="cityInfoContent">brcko@nomasvello.ba</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/centri/brcko">
                                        <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                           <div className="boxCity">
                                   <div className="boxOuter">
                                       <div className="boxInner">
                                           <img src={greenSphere} alt="" />
                                           <p className="centriCityTitle">Zenica</p>
                                           <p className="centriCitySubtitle">Centar u Tržnom centru Džananović</p>
                                           <div className="adressInfo">
                                               <div className="columns">
                                                   <div className="column">
                                                       <p className="cityInfoTitle">Adresa: </p>
                                                       <p className="cityInfoTitle">Telefon:</p>
                                                       <p className="cityInfoTitle">Email: </p>
                                                   </div>
                                                   <div className="column is-10">
                                                       <p><span className="cityInfoContent">Kamberovića čikma bb</span></p>
                                                       <p> <span className="cityInfoContent">+032 40 40 50</span> | <span
                                                               className="cityInfoContent">061 02 67 00</span></p>
                                                       <p><span className="cityInfoContent">zenica@nomasvello.ba</span></p>
                                                   </div>
                                               </div>
                                           </div>
                                           <Link href="/centri/zenica">
                                           <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                               
                               <div className="boxCity">
                                   <div className="boxOuter">
                                       <div className="boxInner">
                                           <img src={greenSphere} alt="" />
                                           <p className="centriCityTitle">Tuzla</p>
                                           <p className="centriCitySubtitle">Centar u zgradi Avaza</p>
                                           <div className="adressInfo">
                                               <div className="columns">
                                                   <div className="column">
                                                       <p className="cityInfoTitle">Adresa: </p>
                                                       <p className="cityInfoTitle">Telefon:</p>
                                                       <p className="cityInfoTitle">Email: </p>
                                                   </div>
                                                   <div className="column is-10">
                                                       <p><span className="cityInfoContent">Maršala Tita br. 2</span></p>
                                                       <p> <span className="cityInfoContent">061 75 20 20</span></p>
                                                       <p><span className="cityInfoContent">tuzla@nomasvello.ba</span></p>
                                                   </div>
                                               </div>
                                           </div>
                                           <Link href="/centri/tuzla">
                                           <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                           </Link>
                                       </div>
                                   </div>
                               </div>
                              
                              
                           </div>
                    </div>
                    
                    <div className="columns">
                        <div className="column">
                        <div className="boxCity">
                                   <div className="boxOuter">
                                       <div className="boxInner">
                                           <img src={greenSphere} alt="" />
                                           <p className="centriCityTitle">Doboj</p>
                                           <p className="centriCitySubtitle">Centar u Frizersko Kozmetickom Studiju “Mia”
                                           </p>
                                           <div className="adressInfo">
                                               <div className="columns">
                                                   <div className="column">
                                                       <p className="cityInfoTitle">Adresa: </p>
                                                       <p className="cityInfoTitle">Telefon:</p>
                                                       <p className="cityInfoTitle">Email: </p>
                                                   </div>
                                                   <div className="column is-10">
                                                       <p><span className="cityInfoContent">Makljenovac b.b.</span></p>
                                                       <p> <span className="cityInfoContent">061 888 595</span></p>
                                                       <p><span className="cityInfoContent">doboj@nomasvello.ba</span></p>
                                                   </div>
                                               </div>
                                           </div>
                                           <Link href="/centri/doboj">
                                           <a className="cityDetailsBtn turqButton">Vidi sve detalje</a>
                                           </Link>
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
 
export default Centri;