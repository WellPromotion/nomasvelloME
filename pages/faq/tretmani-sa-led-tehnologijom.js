import styles from '../../styles/FaqLed.module.scss'
import Accordion from '../../Components/Accordion';
import iconDown from '../../public/images/faq/arrow-down.png';
import faceImg from '../../public/images/faq/face.png';
import Link from 'next/link';
import greenImg from '../../public/images/faq/greenLines.svg'



export default function FaqLedTehnologija() {
return (

<>

    <section id="heroTitle" className="hero is-medium">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className=" title">
                    Često postavljana pitanja <br />
                    Tretmani sa LED tehnologijom
                </h1>
            </div>
        </div>
    </section>

    <section id="pitanja" className="pitanja">
        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN IZBJELJIVANJA ZUBA
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koje su prednosti lasrske depilacije i fotoepilacije IPL SHR?"
                            content="this is content 1" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                    </div>
                    <div className="buttonLed">
                        <Link href="https://nextjs.org/docs/api-reference/next/link">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN FACIJALNI ANTI-AGE
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koje su prednosti lasrske depilacije i fotoepilacije IPL SHR?"
                            content="this is content 1" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                    </div>
                    <div className="buttonLed">
                        <Link href="https://nextjs.org/docs/api-reference/next/link">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN ANTICELULITNI REDUKTOR
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koje su prednosti lasrske depilacije i fotoepilacije IPL SHR?"
                            content="this is content 1" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                    </div>
                    <div className="buttonLed">
                        <Link href="https://nextjs.org/docs/api-reference/next/link">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="columns">
                <div className="column pitanjaColumnLed">
                    <div className="pitanjaTitleLed">
                        <h1>
                            TRETMAN TJELESNI UČVRŠĆIVAČ
                        </h1>
                    </div>
                    <div className="greenImg">
                        <img src={greenImg} alt="" />
                    </div>
                    <div className="pitanjaBodyLed">
                        <Accordion title="Koje su prednosti lasrske depilacije i fotoepilacije IPL SHR?"
                            content="this is content 1" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                        <Accordion
                            title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?"
                            content="this is content 2" />
                    </div>
                    <div className="buttonLed">
                        <Link href="https://nextjs.org/docs/api-reference/next/link">
                        <a className="linkPitanjaLed greenButton">Naručite se!</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </section>




    <section id="bottomQuestion" className="bottomQuestion">
        <div className="container">
            <div className="columns">
                <div className="column pitanjaBottomColumn is-centered">
                    <div className="pitanjaLink">
                        <div className="left">
                            <img src={faceImg} alt="" />
                        </div>
                        <div className="right">
                            <div className="inner">
                                <p className="title">Pitanja za tretmane sa LED tehnologijom</p>
                                <p className="subTitle">A quick supportive, and easy to understand catchphrase, slogan,
                                    tagline, or the punchline of the brand.</p>
                                <Link href="https://nextjs.org/docs/api-reference/next/link">
                                <a className="linkPitanja turqButton">Pogledaj pitanja</a>
                                </Link>
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