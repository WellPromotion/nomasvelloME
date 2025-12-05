import styles from '../styles/PravaKlijenta.module.scss';
import greenCheck from '../public/images/greenCheck.svg';
import ljekarskaPodrska from '../public/images/usluge/tretman-akni/ljekarska-podrska-img.jpg'
import ReactPlayer from 'react-player';


export default function PravaKlijenta() {
    return (
    
        <>
        
            
            
            
        <section id="pokloniteMid" className="section klijentiSection">
                <div className="container">
                    <div className="columns level">
                        <div className="column">
                            <h2 className="pokloniteTitle">Prava No+Vello klijenta</h2>
                            
                            <p className="defaultText">
                            1. Klijenti, prije svega, imaju pravo da uživaju u tretmanima u No+Vello© centrima koji u potpunosti ispunjavaju propisane kriterije čistoće i dezinfekcije.<br/>
2. Dobijanje detaljnog objašnjenja vezano za tretmane i pripadajuće proizvode.<br/>
3. Ispunjavanje upitnika i potpisivanje informisanog pristanka za personalizovani tretman.<br/>
4. Pravo na besplatan probni tretman u slučaju tretmana fotoepilacije i fotopodmlađivanja, kako bi se utvrdila tolerancija na zoni koja će se tretirati.<br/>
5. Na dan sesije, važno je informisati radnicu u slučaju uzimanja nekih lijekova, izlaganja suncu ili UVA zrakama ili korištenja nekog proizvoda za samotamnjenje.<br/>
6. Radnica mora uvijek koristiti rukavice tokom rada.<br/>
7. Radnica mora pred klijentom staviti novi papir na krevet i dezinficirati pribor i naočale prije upotrebe.<br/>
8. Zona na kojoj će se raditi tretman mora biti prethodno pripremljena (očišćena, označena…)<br/>
9. Nakon što je tretman završen, nanijet će se odgovarajuća krema ili kreme.<br/>
10. Nakon sesije, radnica mora pred klijentom baciti korišteni potrošni materijal i dezinficirati krevet i sondu aparata u slučaju da je korištena.<br/>
11. Radnica će klijentu zakazati sljedeći termin.
                            </p>
                            <p className="defaultText">
                            Želimo istaći da brend <b>No+Vello©</b> vrši praćenje i kontrolu kvaliteta u centrima No+Vello© koji posluju po franšiznom principu.
                            </p>
                            <p className="defaultText">
                            U tom smislu, bit ćemo zahvalni na svim komentarima koje nam pošalju klijenti kako bismo poboljšali usluge u centrima i kako bismo ih učinili vrhunskim. Za bilo koje objašnjenje ili komentar, molimo vas da nam se obratite putem sljedeće elektronske adrese: <a class="novellopink" href="mailto:info@nomasvello.me">info@nomasvello.me</a>
                            </p>
                        </div>
                        <div className="column imgCol">
                            <img src={ljekarskaPodrska} alt="" />
                            <div className="videoInner">
                                <ReactPlayer className="videoPl" url="  https://youtu.be/Egq-DgaikLQ"
                                    width='541px' height='268px' controls />
                            </div>
                          
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
                                    <p className="fransBroj">49KM</p>
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