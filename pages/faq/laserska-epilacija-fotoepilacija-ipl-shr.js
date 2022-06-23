import styles from '../../styles/Faq.module.scss'
import Iframe from 'react-iframe'
import ReactPlayer from 'react-player';
import Accordion from '../../Components/Accordion';
import iconDown from '../../public/images/faq/arrow-down.png';
import faceImg from '../../public/images/faq/face.png';
import Link from 'next/link';



export default function FaqLaserskaEpilacija() {
    return (
  
        <>
        
        <section id="heroTitle" className="hero is-medium">
            <div className="hero-body">
                    <div className="container has-text-centered">
                    <h1 className=" title">
                    Često postavljana pitanja <br />
                    laserska epilacija i fotoepilacija IPL SHR
                        </h1>
                </div>
               </div>
            </section>


            <section id="videoPart" className="videoPart">
                <div className="container">
                    <div className="columns videoColumns">
                        <div className="colummn is-3">
                            <div className="videoInner">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=CwB9GiEm6k4&ab_channel=NomasVelloBiH" width='431px' height='220px' controls />
                            </div>
                        </div>
                        <div className="colummn is-3">
                            <div className="videoInner">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=CwB9GiEm6k4&ab_channel=NomasVelloBiH" width='431px' height='220px' controls />
                            </div>
                        </div>
                        <div className="colummn is-3">
                            <div className="videoInner">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=CwB9GiEm6k4&ab_channel=NomasVelloBiH" width='431px' height='220px' controls />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="pitanja" className="pitanja">
                <div className="container">
                    <div className="columns">
                        <div className="column pitanjaColumn">
                            <div className="pitanjaTitle">
                                <h1>
                                    Pitanja
                                </h1>
                            </div>
                            <div className="pitanjaBody">
                            <Accordion className="accordion" title="Koje su prednosti lasrske depilacije i fotoepilacije IPL SHR?" content="this is content 1" />
                                <Accordion title="Koja je razlika između laserske epilacije, fotoepilacije i pulsirajuće svjetlosti?" content="this is content 2" />
                                <Accordion title="Da li je bolno?" content="Naši aparati raspolažu modernim sistemom rashlađivanja Sub Zero Intense, kojim se postiže efekat lokalne anestezije. Zato možemo sa sigurnošću reći da se radi o bezbolnom sistemu." />
                                <Accordion title="Da li je definitivno?" content="this is content 2" />
                                <Accordion title="Da li je potrebno obrijati podrucje koje ce se tretirati prije svake sesije?" content="this is content 2" />
                                <Accordion title="Mogu li se tretirati sva podrucja na tijelu?" content="this is content 2" />
                                <Accordion title="Da li postoje kontraindikacije?" content="this is content 2" />
                                <Accordion title="Da li tretman ima nuspojave?" content="this is content 2" />
                                <Accordion title="Da li se radi o bezbjednom tretmanu?" content="this is content 2" />
                                <Accordion title="Zasto smo mnogo jeftiniji od drugih firmi koje koriste lasersku epilaciju?" content="this is content 2" />
                                <Accordion title="Da li je fotoepilacija za muskarce?" content="this is content 2" />
                                <Accordion title="Da li je moguca depilacija tokom ljeta? Da li je potrebno poduzeti
neke mjere opreza?" content="this is content 2" />
                                <Accordion title="Da li se moze suncati, izlagati UVA zracima ili koristiti sredstvo za samotamnjenje tokom tretmana" content="this is content 2" />
                                <Accordion title="Koliko cesto je potrebno raditi tretman kako bi se postigli sto bolji rezultati?" content="this is content 2" />
                                <Accordion title="Da li razmak izmedju sesija utice na efikasnost tretmana?" content="this is content 2" />
                                <Accordion title="Da li ova vrsta depilacije isusuje kozu? Koji proizvod za  hidrataciju se preporucuje za koristenje tokom tretmana? Da li se moze koristiti bilo koja krema?" content="this is content 2" />
                                <Accordion title="Da li lasersko ili IPL uklanjanje dlacica moze pojacati rast dlacica?" content="this is content 2" />
                                <Accordion title="Sta moze ponuditi No+Vello?" content="this is content 2" />
                            </div>
                        </div>
                    </div>
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
                                    <p className="subTitle">A quick supportive, and easy to understand catchphrase, slogan, tagline, or the punchline of the brand.</p>
                                            <Link href="https://nextjs.org/docs/api-reference/next/link">
                                                <a className="linkPitanja turqButton">Pogledaj pitanja</a>
                                            </Link>
                                        </div>
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
 