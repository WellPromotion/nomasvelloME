import styles from '../styles/PonudePromocije.module.scss';
import dovediPrijateljaImg from '../public/images/Dovedi-prijatelja-za-promociju.jpg';
import najboljiPlanoviImg from '../public/images/Planovi-za-stranicu.jpg';
import mladenkaImg from '../public/images/Promocija-mladenka.jpg';
import planImg from '../public/images/ponude_i_promocije_06.jpg'

export default function PonudePromocije() {
    return (
    
        <>
        
        <section id="heroTitlePromocije" className="hero is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className=" title">
                        Otkrijte naše ponude i promocije
                    </h1>
                </div>
            </div>
        </section>
            
            
            <section id="promocijeMid" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <a className='promocijaWrap' href="/dovedi-prijatelja">
                            <div className="singlePromocija">
                                <div className="inner">
                                    <p className="titlePromocija">Dovedi prijatelja</p>
                                    <img className='imgPromocija' src={dovediPrijateljaImg} alt="" />
                                    <a href="/dovedi-prijatelja" className="promocijaButt button">Saznajte više!</a>
                                </div>
                            </div>
                            </a>
                            <a href="/pack-mladenka">
                            <div className="singlePromocija">
                                <div className="inner">
                                    <p className="titlePromocija">Pack mladenka</p>
                                    <img className='imgPromocija' src={mladenkaImg} alt="" />
                                    <a href="/pack-mladenka" className="promocijaButt button">Saznajte više!</a>
                                </div>
                            </div>
                           </a>
                        </div>
                        <div className="column">
                        <a className='promocijaWrap' href="/imamo-najbolje-planove-za-vas">
                            <div className="singlePromocija">
                                <div className="inner">
                                    <p className="titlePromocija">Imamo najbolje planove za vas</p>
                                    <img className='imgPromocija' src={najboljiPlanoviImg} alt="" />
                                    <a href="/imamo-najbolje-planove-za-vas" className="promocijaButt button">Saznajte više!</a>
                                </div>
                            </div>
                            </a>
                            <a href="/plan-esthetic-novello">
                            {/* <div className="singlePromocija">
                                <div className="inner">
                                    <p className="titlePromocija">Plan esthetic no+vello</p>
                                    <img className='imgPromocija' src={planImg} alt="" />
                                    <a href="/plan-esthetic-novello" className="promocijaButt button">Saznajte više!</a>
                                </div>
                            </div> */}
                           </a>
                        </div>
                    </div>
                </div>
            </section>
            
         
                            
        </>
    );
}