import styles from '../../styles/Tehnologije.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/headerIcon.svg'
import laserHeaderImg from '../../public/images/tehnologije/imgs/laser.jpg'
import iplHeaderImg from '../../public/images/tehnologije/imgs/laser.jpg'
import ledHeaderImg from '../../public/images/tehnologije/imgs/led.jpg'
import ultrazvucnaHeaderImg from '../../public/images/tehnologije/imgs/ultrazvucna.jpg'
import sunHeaderImg from '../../public/images/tehnologije/imgs/sun.jpg'
import ljekarskaHeaderImg from '../../public/images/tehnologije/imgs/ljekarskap.jpg'
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
                                <div className="tehnImgWrap">
                                <img className='headerImgTehn' src={laserHeaderImg} alt="" />
                           </div>
                                <div className="inner">
                                    <img singleTehnologijaIkona src={laserIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Laser tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        Laser je aparat koji radi na principu emitovanja svjetlosti na određenoj talasnoj dužini. Riječ laser je skraćenica od Light Amplification by Stimulated Emission of Radiation.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="/tehnologije/laser-tehnologija"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="singleTehnologija">
                            <div className="tehnImgWrap headerImgTehnUzv">
                            <img className='headerImgTehn' src={ultrazvucnaHeaderImg} alt="" />
                           </div>
                          
                                <div className="inner">
                                    <img singleTehnologijaIkona src={ultrazvucnaIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Ultrazvučna tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        Ultrazvuk je emitovanje zvučnog talasa nečujnog za ljudsko uho, koji proizvodi termičke, mehaničke i hemijske promjene koje imaju korisne efekte za kožu. 
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="/tehnologije/ultrazvucna-tehnologija"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="singleTehnologija">
                            <div className="tehnImgWrap">
                            <img className='headerImgTehn' src={iplHeaderImg} alt="" />
                           </div>
                           
                                <div className="inner">
                                    <img singleTehnologijaIkona src={iplIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        IPL tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        IPL (Intenzivna pulsirajuća svjetlost) je najmoderniji i najinovativniji sistem dugotrajne depilacije. Fotoepilacija ili fotopodmlađivanje se izvodi putem korištenja svjetlosti.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="/tehnologije/ipl-tehnologija"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="singleTehnologija">
                            <div className="tehnImgWrap tehnImgWrapSun">
                            <img className='headerImgTehn' src={sunHeaderImg} alt="" />
                           </div>
                           
                                <div className="inner">
                                    <img singleTehnologijaIkona src={sunIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Sun & Safe
                                        </p>
                                        <p className='textSingleTeh'>
                                        Sun&Safe značajno smanjuje vrijeme čekanja za izlaganje sunčevim ili UVA zrakama: od 15 dana na 2 dana prije i poslije tretmana i omogućava da imamo depiliranu kožu tokom čitave godine.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="/tehnologije/sun-and-safe"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="singleTehnologija">
                            <div className="tehnImgWrap">
                            <img className='headerImgTehn'src={ledHeaderImg} alt="" />
                           </div>
                           
                                <div className="inner">
                                    <img singleTehnologijaIkona src={ledIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        LED tehnologija
                                        </p>
                                        <p className='textSingleTeh'>
                                        LED uređaj djeluje kombinovano: fototerapija, fotoporacija i aktivni proizvod koji udruženo održavaju osnovne kvalitete kože, hidratizuje i hrane kožu, smanjuju probleme masne kože...
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="/tehnologije/led-tehnologija"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="singleTehnologija">
                            <div className="tehnImgWrap ljekarskaWrap">
                            <img className='headerImgTehn' src={ljekarskaHeaderImg} alt="" />
                           </div>
                          
                                <div className="inner">
                                    <img singleTehnologijaIkona src={ljekarskaIconImg} alt="" />
                                    <div className="contentTehnologije">
                                        <p className='titleSingleTeh'>
                                        Ljekarska podrška
                                        </p>
                                        <p className='textSingleTeh'>
                                        No+Vello centri sudjeluju s kvalificiranim stručnjacima i ljekarima na području svjetlosne terapije, estetike i dermatologije te tako pružaju centrima svu stručnu pomoć i podršku.
                                        </p>
                                    </div>
                                    <div className="linkTehnologije">
                                    <Link href="/tehnologije/ljekarska-podrska"><a className="detaljnijeTehnologije greenButton">Pogledaj detaljnije</a></Link>
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