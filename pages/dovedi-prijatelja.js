import styles from '../styles/PonudePromocije.module.scss';
import leftImg from '../public/images/Dovedi-prijatelja-za-stranicu.jpg';
import greenCheck from '../public/images/greenCheck.svg';
import headerImg from '../public/images/Dovedi-prijatelja-naslovnica.jpg';
import PravilaPromocijePopup from '../Components/popups/PravilaPromocijePopup';
import DovediPrijateljaPopup from '../Components/popups/DovediPrijateljaPopup';




export default function DovediPrijatelja() {
    return (
    
        <>
        
        <section id="heroTitlePromocije" className="hero is-medium">
            <div className="hero-body">
                    <div className="container has-text-centered">
                        <h5 className='preTitle'>
                        Otkrijte naše ponude i promocije
                        </h5>
                    <h1 className=" title">
                       Dovedi prijatelja
                    </h1>
                </div>
            </div>
        </section>
            
            
            <section id="dovediPrijateljaMid" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img src={headerImg} alt="" />
                    </div>
                    </div>
                    
                    <div className="columns">
                        <div className="column topCol">
                            <p className="defaultText">
                            Nomasvello nagrađuje prijateljstvo … ljepotom! Recite prijateljima o svom pozitivnom iskustvu u centru No+Vello. Za svakog vašeg prijatelja ili prijateljicu koji započne tretman dobijate 1 besplatnu zonu na poklon! Kao znak zahvalnosti, vaši prijatelji će također dobiti poklon: nakon što završe najmanje 1 zonu od 49 KM, dobit će 50% popusta na drugu sesiju. Šta čekate?! Odmah pozovite svoje prijatelje!
                            </p>
                            <div className="buttonWrap">
                            <PravilaPromocijePopup />
                           </div>
                            
                        </div>
                    </div>
                    
                    <hr />
                    
                    <div className="columns midCols level">
                        <div className="column is-4">
                            <img src={leftImg} alt="" />
                        </div>
                        <div className="column">
                            <h4 className="bespLjepota">Besplatna ljepota!</h4>
                            <p className="defaultText">
                                Zatražite od svog centra specijalnu karticu “Dovedi prijatelja”. Dajte prijateljima kupon rezervisan za njih. Kada prijatelj dođe u centar i kupi najmanje 1 sesiju epilacije laserom ili IPL tehnologijom uz pokaz kartice, No+Vello će rezervisati na vaše ime 1 besplatnu sesiju!
                                <br />
                                Prijatelje, koji su postali naši klijenti, očekuje popust od 50% na drugu sesiju tretirane zone!
                            </p>
                            
                            <DovediPrijateljaPopup/>
                        </div>
                    </div>
                    
                    <hr />
                     
                    <div className="columns botCols">
                        <div className="column">
                            <h3 className="ucestvujteTitle">
                                Za učestvovanje u promociji slijedite ove korake:
                            </h3>
                        </div>
                    </div>
                    
                    <div className="columns">
                        <div className="column">
                            <p className="defaultText">
                            Obavijestite svoje prijatelje o prednostima laserske epilacije ili epilacije IPL tehnologijom. Očekuje Vas 1 besplatna zona za svakog prijatelja koji postane No+Vello klijent. Pošto nagrađujemo prijateljstvo, vaš prijatelj će za drugu sesiju dobiti popust od 50%!
                            </p>
                        </div>
                    </div>
                    
                    <div className="columns botSteps">
                        <div className="column">
                            <div className="singleItem">
                                <p className="numberGreen">1</p>
                                <p className="defaultText">Preuzmite svoju specijalnu karticu “Dovedi prijatelja” u vašem lokalnom No+Vello centru.</p>
                            </div>
                           
                            
                        </div>
                        <div className="column">
                        <div className="singleItem">
                                <p className="numberGreen">2</p>
                                <p className="defaultText">Angažujte svoje prijatelje i pozovite ih da se pojave s vašim kuponom u vašem No+Vello centru.</p>
                            </div>
                          
                        </div>
                    </div>
                    <div className="columns botSteps">
                        <div className="column">
                        <div className="singleItem">
                                <p className="numberGreen">3</p>
                                <p className="defaultText">Svaki prijatelj koji dođe mora postati No+Vello klijent kupovinom jedne sesije laserske epilacije ili epilacije IPL tehnologijom od 49 KM. Tako automatski dobija kupon za popust od 50% za drugu sesiju.</p>
                            </div>
                        </div>
                        <div className="column">
                        <div className="singleItem">
                                <p className="numberGreen">4</p>
                                <p className="defaultText">Provjerite svoju elektronsku poštu. Primit ćete poruku čim vaš prijatelj kupi svoju prvu sesiju.</p>
                            </div>
                        </div>
                    </div>
                    <div className="columns botSteps">
                        <div className="column">
                        <div className="singleItem">
                                <p className="numberGreen">5</p>
                                <p className="defaultText">Otiđite u svoj centar ili kontaktirajte isti putem telefona da rezervišete termin za sesiju koju ste dobili na poklon.</p>
                            </div>
                        </div>
                        <div className="column blankCol">
                            
                        </div>
                    </div>
                </div>
            </section>
            
         
                            
        </>
    );
}