import styles from '../styles/BesplatniTretman.module.scss'
import logofusion from '../public/images/logofusion.png'
import besplatnitretman from '../public/images/probnitretman.jpg'
import BesplatniForm from '../Components/forms/BesplatniForm';
import korak1 from '../public/images/Novello-korak-1.png'
import korak2 from '../public/images/Novello-korak-2.png'
import korak3 from '../public/images/Novello-korak-3.png'
import korak4 from '../public/images/Novello-korak-4.png'


export default function BesplatniTretman() {
    return (
      
        <>
        
        <section id="heroTitleBesplatni" className="hero is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className=" title">
                        Besplatan probni tretman 
                    </h1>
                </div>
            </div>
        </section>
            
            
            <section id="bespTop" className='bespTop section'>
                <div className="container">
                    <div className="columns">
                        <div className="column titleCol">
                            <hr className='bespHR' />
                            <p className="bespTopTitle defaultGreenTitle">Mi smo specijalisti za epilaciju</p>
                            <hr className='bespHR' />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <p className="bespTxt">
                                <b>Fusion</b>, odnosno fuzija je kombinacija <b>Laser</b> i <b>IPL SHR</b>  tehnologija. Zajedno daju konačno rješenje za uklanjanje neželjenih dlačica na bilo kojem dijelu tijela. Zahvaljujući korištenju ovih tehnologija moguće je sigurno i efikasno tretirati sve tipove kože i dlake, prilagođavajući njihovu upotrebu potrebama svakog tipa pojedinačno u svim fazama tretmana, te garantujući bolji kvalitet i bolju uslugu.
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column imgColBesp">
                            <img src={logofusion} alt="" />
                        </div>
                    </div>
                    
                    <div className="columns midColsBesp">
                    <div className="column rightmidCols">
                            <div className="singlePro">
                                <div className="inner">
                                    <p className="titlePro">Dugotrajna</p>
                                    <p className="subtitlePro">
Rezultati su vidljivi već od prve sesije. Djeluje se direktno na korijen dlake.</p>
                                </div>
                            </div>
                           
                           
                        </div>
                        <div className="column rightmidCols">
                        <div className="singlePro">
                                <div className="inner">
                                    <p className="titlePro">Bezbolna</p>
                                    <p className="subtitlePro">
Naš inovativni sistem hlađenja minimizuje osjećaj intezivne toplote.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column rightmidCols">
                        <div className="singlePro">
                                <div className="inner">
                                    <p className="titlePro">Personalizovana</p>
                                    <p className="subtitlePro">
                                    Tretman prilagođavamo vašim potrebama, uzimajući u obzir fototip vaše kože, tip dlake i kože.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="bespMid" className='bespMid section'>
                <div className="container">
                    <div className="columns bespmidCols">
                        <div className="column greenbackCol is-8">
                        <p className="defaultGreenTitle titlebespMid">Ispunite obrazac i prijavite se odmah na <br /> <span className='greenbackColTitle'>BESPLATAN PROBNI TRETMAN</span></p>
                       </div>
                    </div>
                    {/* <div className="columns midColsBesp">
                        <div className="column leftmidCols is-9">
                            <img src={besplatnitretman} alt="" />
                        </div>
                      
                    </div> */}
                </div>
                <div className="container">
                    <BesplatniForm/>
                </div>
            </section>
            
            {/* <section id="koraciBesplatni" className="section">
                <div className="container">
                    <div className="columns">
                        .column
                    </div>
                </div>
            </section> */}
            
            <section id="besplatniFormKoraci" className="besplatniForm section">
                <div className="container">
                    <div className="columns titleCols">
                    <div className="column greenbackCol is-8">
                        <p className="defaultGreenTitle titlebespMid">Kako funkcionira besplatni probni tretman fotoepilacije?</p>
                       </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <img src={korak1} alt="" />
                            <p className="brojKoraka">01.</p>
                            <p className="opisKoraka defaultText">
                            Naručite se na probni test tako što ćete ispuniti obrazac iznad "BESPLATAN PROBNI TRETMAN".
                            </p>
                        </div>
                        <div className="column">
                            <img src={korak2} alt="" />
                            <p className="brojKoraka">02.</p>
                            <p className="opisKoraka defaultText">
                            Svaki probni test je individualan, što znači da ćete kroz razgovor moći pitati sve što vas zanima o tretmanu.
                            </p>
                        </div>
                        <div className="column">
                            <img src={korak3} alt="" />
                            <p className="brojKoraka">03.</p>
                            <p className="opisKoraka defaultText">
                            Upitnikom ćemo provjeriti moguće medicinske kontraindikacije i stanje kože.
                            </p>
                        </div>
                        <div className="column">
                            <img src={korak4} alt="" />
                            <p className="brojKoraka">04.</p>
                            <p className="opisKoraka defaultText">
                            Napravit ćemo probni tretman na manjoj površini željene zone (ccc 3x3cm).
                            </p>
                        </div>
                    </div>
               </div>
            </section>
        
         
        </>
    );
}