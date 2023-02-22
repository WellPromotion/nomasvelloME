import styles from '../styles/PonudePromocije.module.scss';
import leftImg from '../public/images/Plan-Esthetic-2023.jpg';
import greenCheck from '../public/images/greenCheck.svg';
import PlanEstheticPopup from '../Components/popups/PlanEstheticPopup';
// import NajboljiPlanoviPopup from '../Components/popups/NajboljiPlanoviPopup';


export default function PlanEstheticNovello() {
    return (
    
        <>
        
        <section id="heroTitlePromocije" className="hero is-medium">
            <div className="hero-body">
                    <div className="container has-text-centered">
                        <h5 className='preTitle'>
                        Otkrijte naše ponude i promocije
                        </h5>
                    <h1 className=" title">
                       Plan Esthetic No+Vello
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
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Vrijedi samo u centru gdje je kupljena.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Promocija je osobne prirode i ne može se prenositi na druga lica.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Važi 2 mjeseca od kupovine.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Promocija se ne može kombinovati sa drugim popustima.</p>
                            <p className="planoviItems"><span className='planoviItemsBullet'><img src={greenCheck} alt="" /></span> Promocija vrijedi do daljnjeg.</p>
                        
                            
                            <PlanEstheticPopup/>
                        </div>
                    </div>
                </div>
            </section>
            
         
                            
        </>
    );
}