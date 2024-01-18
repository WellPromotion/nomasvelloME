import styles from '../styles/PokloniteLjepotu.module.scss';
import greenCheck from '../public/images/greenCheck.svg';
import podariteImg from '../public/images/podarite_ljepotu.jpg'
import podariteljepotuImg from '../public/images/poklon-bon-baner-1.png'


export default function PokloniteLjepotu() {
    return (
    
        <>
        
        <section id="heroTitlePromocije" className="hero is-medium">
            <div className="hero-body">
                    <div className="container has-text-centered">
                    <h1 className=" title">
                       Poklonite ljepotu
                    </h1>
                </div>
            </div>
        </section>
            
            
        <section id="pokloniteMid" className="section">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <h2 className="pokloniteTitle">Poklonite No+Vello Giftcard i obradujte Vama najdraže dame</h2>
                            <p className="defaultText">
                            Savršen poklon za supruge, kčerke, mame, koleginice, prijateljice pa čak i poslovne partnerice.
Giftcard možete napuniti sa iznosom po želji počev od 55KM a dobitnica poklona može isti da iskoristi na tretmane epilacije, tretmane lica ili tijela… Kada god to poželi.
                            </p>
                            <p className="defaultText">
                            Ukoliko ne može stići do naših salona… Mi ćemo Vam dostaviti Giftcard gdje god poželite u Bosni i Hercegovini.
                            </p>
                            <p className="defaultText">
Plaćanje možete izvršiti gotovinski, preko računa ili karticom ukoliko isti preuzmete u salonu.
                            </p>
                            {/* <p className="greenLine">Pozivamo Vas da zakažete besplatan probni tretman.</p> */}
                            <img className='poklonBon' src={podariteljepotuImg} alt="" />
                        </div>
                        <div className="column imgCol">
                            <img src={podariteImg} alt="" />
                        </div>
                     </div>
                </div>  
        </section>
            
            
        {/* <section id="fransizeTop" className='fransizeTop pokloniteLjepotuBottom'>
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <div className="fransBox">
                                <div className="inner">
                                    <p className="fransBroj">14</p>
                                    <p className="fransSub">zemalja u svijetu</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="fransBox">
                                <div className="inner">
                                    <p className="fransBroj">1300+</p>
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
                        <div className="fransBox">
                                <div className="inner">
                                    <p className="fransBroj">55KM</p>
                                    <p className="fransSub">zona/sesija unisex tarifa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
                            
        </>
    );
}
