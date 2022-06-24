import styles from '../../styles/Tehnologije.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/headerIcon.svg'
import laserHeaderImg from '../../public/images/tehnologije/imgs/laser.png'
import iplHeaderImg from '../../public/images/tehnologije/imgs/ipl.png'
import ledHeaderImg from '../../public/images/tehnologije/imgs/led.png'
import ultrazvucnaHeaderImg from '../../public/images/tehnologije/imgs/ultrazvucna.png'
import sunHeaderImg from '../../public/images/tehnologije/imgs/sun.png'
import ljekarskaHeaderImg from '../../public/images/tehnologije/imgs/ljekarska.png'
import laserIconImg from '../../public/images/tehnologije/icons/svg/laser.svg'
import iplIconImg from '../../public/images/tehnologije/icons/svg/ipl.svg'
import ledIconImg from '../../public/images/tehnologije/icons/svg/led.svg'
import ultrazvucnaIconImg from '../../public/images/tehnologije/icons/svg/ultrazvucna.svg'
import sunIconImg from '../../public/images/tehnologije/icons/svg/sun.svg'
import ljekarskaIconImg from '../../public/images/tehnologije/icons/svg/ljekarska.svg'


const Tehnologije = () => {
    return (
        
        <>

            <section id='titleTehnologije' className='titleTehnologije hero is-medium'>
                <div className="hero-body">
                <div className="imgTitleSphere has-text-centered">
                        <img src={aboveTitleImg} alt="" />
                    </div>
                    <div className="container has-text-centered">
                        <h1 className="title">NAŠE TEHNOLOGIJE</h1>
                    </div>
                    <div className="imgIcon has-text-centered">
                        <img src={belowTitleImg} alt="" />
                    </div>
               </div>
            </section>

            <section id="tehnologijeBody" className="tehnologijeBody">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="singleTehnologija">
                            <img src={laserHeaderImg} alt="" />
                                <div className="inner">
                                    <img singleTehnologijaIkona src={laserIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Laser tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        Iaculis arcu at maecenas vel, venenatis habitant id eget. Et lectus elit, scelerisque tortor diam. Egestas amet consectetur purus, tempus amet arcu. Est tempus pulvinar malesuada sed sit cras.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="https://nextjs.org/docs/api-reference/next/link"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="singleTehnologija">
                            <img src={ultrazvucnaHeaderImg} alt="" />
                                <div className="inner">
                                    <img singleTehnologijaIkona src={ultrazvucnaIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Ultrazvučna tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        Iaculis arcu at maecenas vel, venenatis habitant id eget. Et lectus elit, scelerisque tortor diam. Egestas amet consectetur purus, tempus amet arcu. Est tempus pulvinar malesuada sed sit cras.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="https://nextjs.org/docs/api-reference/next/link"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                        <div className="singleTehnologija">
                            <img src={iplHeaderImg} alt="" />
                                <div className="inner">
                                    <img singleTehnologijaIkona src={iplIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        IPL tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        Iaculis arcu at maecenas vel, venenatis habitant id eget. Et lectus elit, scelerisque tortor diam. Egestas amet consectetur purus, tempus amet arcu. Est tempus pulvinar malesuada sed sit cras.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="https://nextjs.org/docs/api-reference/next/link"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="singleTehnologija">
                            <img src={sunHeaderImg} alt="" />
                                <div className="inner">
                                    <img singleTehnologijaIkona src={sunIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Sun & Safe
                                        </p>
                                        <p className='textSingleTeh'>
                                        Iaculis arcu at maecenas vel, venenatis habitant id eget. Et lectus elit, scelerisque tortor diam. Egestas amet consectetur purus, tempus amet arcu. Est tempus pulvinar malesuada sed sit cras.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="https://nextjs.org/docs/api-reference/next/link"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                        <div className="singleTehnologija">
                            <img src={ledHeaderImg} alt="" />
                                <div className="inner">
                                    <img singleTehnologijaIkona src={ledIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        LED tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        Iaculis arcu at maecenas vel, venenatis habitant id eget. Et lectus elit, scelerisque tortor diam. Egestas amet consectetur purus, tempus amet arcu. Est tempus pulvinar malesuada sed sit cras.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="https://nextjs.org/docs/api-reference/next/link"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="singleTehnologija">
                            <img src={ljekarskaHeaderImg} alt="" />
                                <div className="inner">
                                    <img singleTehnologijaIkona src={ljekarskaIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Ljekarska podrška
                                        </p>
                                        <p className='textSingleTeh'>
                                        Iaculis arcu at maecenas vel, venenatis habitant id eget. Et lectus elit, scelerisque tortor diam. Egestas amet consectetur purus, tempus amet arcu. Est tempus pulvinar malesuada sed sit cras.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="https://nextjs.org/docs/api-reference/next/link"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
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
 
export default Tehnologije;