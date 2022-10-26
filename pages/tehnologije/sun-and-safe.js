import styles from '../../styles/tehnologije/SunandsafeTehnologija.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/sunandsafeTehnologija/sunIcon.svg'
import sunSample from '../../public/images/tehnologije/sunandsafeTehnologija/sunSample.png'
import sunBottom from '../../public/images/tehnologije/sunandsafeTehnologija/sunBottom.png'

const SunandsafeTehnologija = () => {
    return (
        
        <>
            
            <section id='titleSunandsafe' className='titleSunandsafe hero is-medium'>
               <div className="hero-body">
                   <div className="imgTitleSphere has-text-centered">
                       <img src={aboveTitleImg} alt="" />
                   </div>
                   <div className="container has-text-centered">
                       <p className="pretitle">naše tehnologije</p>
                       <h1 className="title">SUN & SAFE</h1>
                   </div>
                   <div className="imgIcon has-text-centered">
                       <img src={belowTitleImg} alt="" />
                   </div>
               </div>
            </section>

            <section id="mainSun" className="mainSun">
                <div className="container">
                    <div className="columns imgColsSun">
                        <div className="column">
                            <img src={sunSample} alt="" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            {/* <img src={sunSample} alt="fotoepilacija_preplanule_koze" /> */}
                            <p className='defaultGreenTitle'>No+Vello© je dizajnirao učinkovit i siguran tretman koji dugotrajno uklanja dlake na koži koja je bila izložena suncu ili UV zračenju.</p>
                            <p className='sunSubtitlePar defaultText'>No+Vello©, svjetski lider u tretmanima za fotoepilaciju sa više od 1000 centara u svijetu, predstavlja SUN&SAFE, novu tehnologiju epilacije koja omogućava dugotrajno i učinkovito uklanjanje dlačica na preplanuloj koži. No+Vello© je patentirao (broj patenta: P201131087) ovu revolucionarnu tehnologiju koja omogućuje fotoepilaciju čak i ljeti.
<br /><br />
Istraživanja provedena od strane ureda za R&D (Odjel za istraživanje i razvoj) naše firme – formiranog od tima doktora, inženjera i stručnjaka iz sektora depilacije – i firmi specijaliziranim za epilaciju iz SAD-a i Izraela, su omogućili da se dođe do značajnijih poboljšanja u aparatima i protokolima koje koristi No+Vello i da se ponudi SUN&SAFE.
<br /><br />
                                Zahvaljujući ovom inovativnom sistemu, centri No+Vello nude sistem depilacije putem Intenzivne pulsirajuće svjetlosti koja je sigurna za kožu preplanulu od sunca ili UV zračenja.
                            </p>
                        </div>
                        <div className="column">
                        {/* <img src={sunSample1} alt="sun_safe" /> */}
                            <p className='sunTitlePar'>Sun&Safe značajno smanjuje vrijeme čekanja za izlaganje sunčevim ili UVA zrakama: od 15 dana na 2 dana prije i poslije tretmana; što znači da omogućava da imamo depiliranu kožu tokom čitave godine, čak i ljeti. </p>
                            <p className='sunSubtitlePar defaultText'>
Sun&Safe tehnologija je bezbolna, učinkovita, a rezultati su vidljivi već od prve sesije. Može se istovremeno primijeniti na nekoliko zona na licu i tijelu.
<br /><br />
Ova poboljšanja prije svega utiču na profesionalne aparate za fotoepilaciju No+Vello©. Također su uspostavljeni novi protokoli za tretmane koji garantuju fotoepilaciju na preplanuloj koži, eliminirajući postojeće kontraindikacije na istoj.
<br /><br />
No+Vello© zadržava svoju jedinstvenu uniseks tarifu od 49 KM po zoni/sesiji.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="bottomSun" className="bottomSun">
            <div className="container">
                    <div className="columns level">
                        <div className="column imgCol">
                            <img src={sunBottom} alt="" />
                        </div>
                       <div className="column ponudaColumn is-7">
                           <div className="_inner">
                               <p className="titlePonuda">
                               Napokon sigurna i učinkovita fotoepilacija,
čak i ljeti!
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
 
export default SunandsafeTehnologija;