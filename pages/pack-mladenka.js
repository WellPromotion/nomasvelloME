import styles from '../styles/PonudePromocije.module.scss';
import leftImg from '../public/images/Promocija-mladenka-4.jpg';
import greenCheck from '../public/images/greenCheck.svg';
import PackMladenkaPopup from '../Components/popups/PackMladenkaPopup';
// import NajboljiPlanoviPopup from '../Components/popups/NajboljiPlanoviPopup';


export default function PackMladenka() {
    return (
     
        <> 
        
        <section id="heroTitlePromocije" className="hero is-medium">
            <div className="hero-body">
                    <div className="container has-text-centered">
                        <h5 className='preTitle'>  
                        Otkrijte naše ponude i promocije
                        </h5> 
                    <h1 className=" title">
                       Pack Mladenka
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
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Ponuda važi u centrima u kojima je aktivna ova promocija.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> U cijenu je uključen PDV.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Plaćene sesije se moraju realizovati u centru u kojem su kupljene.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Ovu ponudu nije moguće kombinovati s drugim ponudama i promocijama.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Kuponi se moraju realizovati prije nego što istekne navedeni rok važenja.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Kuponi se ne mogu zamijeniti za druge usluge ili za novac u centrima.</p>
                            
                            <PackMladenkaPopup/>
                        </div>
                    </div>
                </div>
            </section>
            
         
                            
        </>
    );
}