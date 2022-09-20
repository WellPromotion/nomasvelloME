import styles from '../styles/BesplatniTretman.module.scss'
import logofusion from '../public/images/logofusion.png'
import besplatnitretman from '../public/images/probnitretman.jpg'
import BesplatniForm from '../Components/forms/BesplatniForm';

export default function BesplatniTretman() {
    return (
    
        <>
        
        <section id="heroTitle" className="hero is-medium">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className=" title">
                    Besplatan probni tretman
                </h1>
            </div>
        </div>
    </section>
            
            
            <section id="bespTop" className='bespTop'>
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
                </div>
            </section>
            
            <section id="bespMid" className='bespMid'>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                        <p className="defaultGreenTitle titlebespMid">Ispunite obrazac i prijavite se odmah na BESPLATAN PROBNI TRETMAN</p>
                       </div>
                    </div>
                    <div className="columns midColsBesp">
                        <div className="column leftmidCols is-9">
                            <img src={besplatnitretman} alt="" />
                        </div>
                        <div className="column rightmidCols">
                            <div className="singlePro">
                                <div className="inner">
                                    <p className="titlePro">Dugotrajna</p>
                                    <p className="subtitlePro">
Rezultati su vidljivi već od prve sesije. Djeluje se direktno na korijen dlake.</p>
                                </div>
                            </div>
                            <div className="singlePro">
                                <div className="inner">
                                    <p className="titlePro">Bezbolna</p>
                                    <p className="subtitlePro">
Naš inovativni sistem hlađenja minimizuje osjećaj intezivne toplote.</p>
                                </div>
                            </div>
                            <div className="singlePro">
                                <div className="inner">
                                    <p className="titlePro">Delikatna</p>
                                    <p className="subtitlePro">
Idealan tretman epilacije za one koji pate od uraslih dlaka, proširenih vena i folikulitisa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <section id="koraciBesplatni" className="section">
                <div className="container">
                    <div className="columns">
                        .column
                    </div>
                </div>
            </section> */}
            
            <section id="besplatniForm" className="besplatniForm">
                <div className="container">
                    <BesplatniForm/>
                </div>
            </section>
        
         
        </>
    );
}