import styles from '../../styles/tehnologije/IPLTehnologija.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/iplTehnologija/iplIcon.svg'
import aparatiIPLImg from '../../public/images/tehnologije/iplTehnologija/iplSample2.png'
import diodniLaserSampleImg from '../../public/images/tehnologije/iplTehnologija/iplSample.png'
import checkGreen from '../../public/images/centri/check.png';
import ReactPlayer from 'react-player';


const IPLTehnologija = () => {
    return (
        
        <>

            <section id='titleIPLTehnologija' className='titleIPLTehnologija hero is-medium'>
                <div className="hero-body">
                <div className="imgTitleSphere has-text-centered">
                        <img src={aboveTitleImg} alt="" />
                    </div>
                    <div className="container has-text-centered">
                        <p className="pretitle">naše tehnologije</p>
                        <h1 className="title">IPL tehnologija</h1>
                    </div>
                    <div className="imgIcon has-text-centered">
                        <img src={belowTitleImg} alt="" />
                    </div>
               </div>
            </section> 

     
            <section id="iplAbout" className="iplAbout section">
                <div className="container">
                    <div className="columns iplFirstColumn level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="firstPart">
                                <p className='laserTitle'>
                                    Šta je IPL?
                                </p>
                                <p className='laserSubtitle'>
                                IPL (Intenzivna pulsirajuća svjetlost) je najmoderniji i najinovativniji sistem dugotrajne depilacije. Fotoepilacija ili fotopodmlađivanje se izvodi putem korištenja svjetlosti. Ova definicija uključuje dvije metode: putem lasera ili Intense Pulsed Light (IPL) tj. metoda rada pulsirajućom svjetlošću visokog intenziteta. Glavna razlika između ove dvije metode je u tome što je talasna dužina kod laser tehnologije fiksna, a kod IPL je varijabilna. IPL tehnologija omogućava tretiranje većine tipova kože i različitih boja dlaka. Obje metode nude dugotrajne rezultate.
                                </p>
                                </div>
                                <div className="secondPart">
                                    <p className="blueTitle">
                                    Kod IPL tehnologije je moguće izabrati raspon spektra kako bi se omogućilo sljedeće:
                                    </p>
                                    <div className="odlikeList">
                                        <p className="odlikeItem"> <span className="greenCheckSpacing"><img
                                                    src={checkGreen} alt="" /></span>Adaptacija talasne dužine prema boji kože,
                                                    boji dlake i debljini dlake svakog klijenta.</p>
                                            <p className="odlikeItem"> <span className="greenCheckSpacing"><img
                                                    src={checkGreen} alt="" /></span>Efikasno tretiranje većine boja kože,
                                                    isto kao i svih vrsta dlake, od najtanje do najdeblje.</p>
                                    </div>
                                </div>
                                <div className="firstPart">
                                <p className='laserSubtitle'>
                                IPL tehnologija je bezbolna, ugodna i pristupačna. No+Vello centri za fotoepilaciju raspolažu vrhunskim IPL (Intense Pulsed Light) sistemima kako bi osigurali najbolje rezultate već od prvog tretmana.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-right">
                            <div className="_innerImage">
                                <img src={diodniLaserSampleImg} alt="ipl_tehnologija_1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="iplPrincip" className="iplPrincip section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                        <p className='iplTitle'>
                        Po kojem principu radi IPL?
                            </p>
                            <p className="iplPreText">
                            No+Vello centri za fotoepilaciju raspolažu vrhunskim IPL (Intense Pulsed Light) sistemima kako bi osigurali najbolje rezultate već od prvog tretmana.
                            </p>
                                <p className='iplSubtitle'>
                                IPL (Intenzivna pulsirajuća svjetlost) je najmoderniji i najinovativniji sistem dugotrajne depilacije. Fotoepilacija ili fotopodmlađivanje se izvodi putem korištenja svjetlosti. Ova definicija uključuje dvije metode: putem lasera ili Intense Pulsed Light (IPL) tj. metoda rada pulsirajućom svjetlošću visokog intenziteta. Glavna razlika između ove dvije metode je u tome što je talasna dužina kod laser tehnologije fiksna, a kod IPL je varijabilna. IPL tehnologija omogućava tretiranje većine tipova kože i različitih boja dlaka. Obje metode nude dugotrajne rezultate.
                                </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="iplAparati" className="iplAparati section">
                <div className="container">
                    <div className="columns iplFirstColumn level">
                        <div className="column is-left">
                            <div className="_inner">
                                <div className="firstPart">
                                <p className='iplAparatiTitle'>
                                Naši aparati
                                </p>
                                <p className='iplAparatiTxt'>
                                No+Vello IPL fotoepilacija omogućava tretman za većinu tipova kože i za različite boje dlačica. Za razliku od drugih IPL tretmana, sa No+Vello tretmanom ćete biti u mogućnosti da se sunčate i do dva dana prije i dva dana nakon tretmana; što znači da omogućava da imamo depiliranu kožu tokom čitave godine, čak i ljeti. Mi imamo vlastiti istraživački laboratorij, gdje se aparati testiraju i razvijaju kako bi se postigao najbolji i najsigurniji tretman za naše klijente. To nam omogućuje da imamo najnovije aparate na tržištu sa značajnim razlikama u odnosu na druge aparate kojima raspolaže naša konkurencija. U našim centrima raspolažemo najjačim aparatima za fotoepilaciju (60 džula/cm2) i najbržim na tržištu koji su dizajnirani da pruže tretmane za fotoepilaciju i fotopomlađivanje.
                                        </p>
                                        <p className='iplAparatiTxt'>
                                        Naš sistem fotoepilacije, zasnovan na IPL tehnologiji, daje odlične rezultate na različitim dijelovima tijela, a krajnji rezultat je depilacija koja je učinkovita, trajna, superiorna i ni u čemu slična metodama depilacije koje su nam bile poznate do sada. Naši aparati raspolažu modernim sistemom rashlađivanja Sub Zero Intense, kojim se postiže efekat lokalne anestezije. Zato možemo sa sigurnošću reći da se radi o bezbolnom sistemu. IPL fotoepilacija omogućava tretman za većinu tipova kože i različitih boja dlačica, sa malim brojem  neželjenih efekata.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-right">
                            <div className="_innerImage">
                                <img src={aparatiIPLImg} alt="ipl_tehnologija_2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="iplVideo" className="iplVideo">
                <div className="container">
                    <div className="columns">
                        <div className="column has-text-centered">
                            <div className="videoIplInner">
                            <ReactPlayer
                                    url="https://www.youtube.com/watch?v=kGy9XetMxl4&ab_channel=NomasVelloBiH" width='660px' height='337px' controls />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ipl_Outro" className='ipl_Outro section'>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="innerOutro">
                            <p className='outroMessage has-text-centered'>
                            Dođite u naš centar No+Vello i isprobajte probni tretman, bit ćete iznenađeni.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="iplPonuda" className="iplPonuda section">
                <div className="container">
                    <div className="columns">
                        <div className="column ponudaColumn has-text-centered">
                            <div className="_inner">
                                <p className="titlePonuda">
                                Zainteresovani ste za usluge
sa IPL tehnologijom?
                                </p>
                                <p className="subtitlePonuda">
                                Ovog ljeta uživajte u savršenoj koži.
                                </p>
                               
                                <div className="buttonPonuda">
                                   
                                <a href="/usluge/fotoepilacija" className='turqButton buttPonuda'>
                                        Pogledaj naše usluge
                                        </a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        
        </>



);
}
 
export default IPLTehnologija;