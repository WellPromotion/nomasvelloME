import styles from '../styles/PonudePromocije.module.scss';
import leftImg from '../public/images/Planovi-Cijeli-2022.jpg';
import greenCheck from '../public/images/greenCheck.svg';
import NajboljiPlanoviPopup from '../Components/popups/NajboljiPlanoviPopup';


export default function PonudePromocije() {
    return (
    
        <>
        
        <section id="heroTitlePromocije" className="hero is-medium">
            <div className="hero-body">
                    <div className="container has-text-centered">
                        <h5 className='preTitle'>
                        Otkrijte naše ponude i promocije
                        </h5>
                    <h1 className=" title">
                       Imamo najbolje planove za vas
                    </h1>
                </div>
            </div>
        </section>
            
            
            <section id="planovieMid" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column imgCol">
                            <img src={leftImg} alt="" />
                        </div>
                        <div className="column">
                            <h3 className="planoviTitle">Pravila promocije</h3>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Upotreba isključivo u centru u kojem je plan kupljen.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Ličnog je karaktera i ne može se prenositi na druge osobe.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Rok važenja: 3 mjeseca od kupovine.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Ne može se kombinovati sa drugim ponudama.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Dati na uvid karticu za plan na svakoj sesiji.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Dati na uvid račun kao dokaz o kupovini.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Važi samo u centrima u kojima je aktivna ova promocija.</p>
                            
                            <NajboljiPlanoviPopup/>
                        </div>
                    </div>
                </div>
            </section>
            
         
                            
        </>
    );
}