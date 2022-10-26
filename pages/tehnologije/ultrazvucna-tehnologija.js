import styles from '../../styles/tehnologije/UltrazvukTehnologija.module.scss';
import Link from 'next/link';
import belowTitleImg from '../../public/images/belowTitleWhite.svg'
import aboveTitleImg from '../../public/images/tehnologije/ultrazvukTehnologija/ultrazvukIcon.svg'
import sampleUltrazvuk from '../../public/images/tehnologije/ultrazvukTehnologija/ultrazvukSample.png'
import sampleUltrazvuk1 from '../../public/images/tehnologije/ultrazvukTehnologija/ultrazvukSample1.png'
import sampleUltrazvuk2 from '../../public/images/tehnologije/ultrazvukTehnologija/ultrazvukSample2.png'
import turqCheck from '../../public/images/turqCheck.svg'
import greenCheck from '../../public/images/greenCheck.svg'


const UltrazvukTehnologija = () => {
    return (
        
        <>
            
            <section id='titleUltrazvuk' className='titleUltrazvuk hero is-medium'>
               <div className="hero-body">
                   <div className="imgTitleSphere has-text-centered">
                       <img src={aboveTitleImg} alt="" />
                   </div>
                   <div className="container has-text-centered">
                       <p className="pretitle">naše tehnologije</p>
                       <h1 className="title">Ultrazvučna tehnologija</h1>
                   </div>
                   <div className="imgIcon has-text-centered">
                       <img src={belowTitleImg} alt="" />
                   </div>
               </div>
            </section>
            
            <section id="ultrazvukAbout" className="ultrazvukAbout">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className='ultrazvukTitle defaultGreenTitle'>Šta je Ultrazvuk?</p>
                            <p className='ultrazvukTxt firstPUzv defaultText'>Ultrazvuk je emitovanje zvučnog talasa nečujnog za ljudsko uho, koji proizvodi termičke, mehaničke i hemijske promjene koje imaju korisne efekte za kožu. Ultrazvučno čišćenje lica je u potpunosti bezbolno i neškodljivo.</p>
                            <p className='ultrazvukTitle defaultGreenTitle'>Galvanska energija (Konstantna struja)</p>
                            <p className='ultrazvukTxt defaultText'>Radi se o konstantnoj jednosmjernoj struji čiji tok elektrona ne mijenja smjer kretanja tokom vremena. Ova energija još je poznata i pod imenom galvanska energija.
Galvanska energija aktivira stimulaciju proizvodnje kolagena i elastina, stimuliše regeneraciju ćelija i pomaže pri apsorpciji aktivnih principa korištenih tokom tretmana.</p>
                        </div>
                        <div className="column">
                        <img className='imgUltrazvuk' src={sampleUltrazvuk} alt="ultrazvuk_aparat" />
                        </div>
                    </div>

                    <div className="columns secondColUzv level">
                        <div className="column">
                            <p className='uzvTitle defaultBlueTitle'>Ultrazvučno čišćenje lica</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Ultrazvuk je jedna od najinovativnijih tehnologija u sektoru ljepote.</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Postiže dubinsko čišćenje i uklanja nečistoću sa kože, a pri tome je ne oštećuje.</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Ne upotrebljava kemijske proizvode, uklanja mrtve stanice i reaktivira cirkulaciju na tretiranoj zoni, stimulirajući tako stvaranje kolagena i obnavljanje stanica.</p>
                            <p className='defaultBlueText uzvList lastItem'> <span><img src={turqCheck} alt="" /></span>No+Vello oprema za čišćenje lica kombinira, na učinkovit način, ultrazvuk i galvansku energiju, što omogućava da se primijeni tretman adekvatan za svaku kožu posebno.</p>

                            <p className='uzvTitle defaultBlueTitle'>Učinci na koži:</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Hidratiziranija, glađa i nježnija koža</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Minimizira pore</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Smanjuje mlitavost kože na licu</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Poboljšava obnavljanje stanica i proizvodnju kolagena</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Uklanjaju se mrtve stanice na površini kože</p>
                            <p className='defaultBlueText uzvList'> <span><img src={turqCheck} alt="" /></span>Omogućava bolje upijanje aktivnih sastojaka iz preparata.</p>
                        </div>
                        <div className="column">
                            <img className='secColImg' src={sampleUltrazvuk1} alt="ultrazvuk_01" />
                        </div>
                    </div>


                    <div className="columns thirdColUzv level">
                    <div className="column">
                            <img className='thirdColImg' src={sampleUltrazvuk2} alt="ultrazvuk_02" />
                        </div>
                        <div className="column">
                            <p className='uzvTitle defaultBlueTitle'>Prednosti u odnosu na klasično čišćenje lica:</p>
                            <p className='defaultBlueText uzvList'> <span><img src={greenCheck} alt="" /></span>Nema bolnog mehaničkog istiskivanja</p>
                            <p className='defaultBlueText uzvList'> <span><img src={greenCheck} alt="" /></span>Nema upaljenosti i crvenila nakon tretmana</p>
                            <p className='defaultBlueText uzvList'> <span><img src={greenCheck} alt="" /></span>Koža postaje glađa, blistavija i zdravija</p>
                            <p className='defaultBlueText uzvList lastItem'> <span><img src={greenCheck} alt="" /></span>Tretman je brz, 20 minuta</p>
                            <p className='defaultBlueText uzvList lastItem'> <span><img src={greenCheck} alt="" /></span>Odlično u pauzi između posla</p>
                            <p className='defaultBlueText uzvList lastItem'> <span><img src={greenCheck} alt="" /></span>Vrsta čišćenja se određuje prema tipu i stanju kože</p>
                            <p className='defaultBlueText uzvList lastItem'> <span><img src={greenCheck} alt="" /></span>Pospješuje rezultate LED i IPL tretmana.</p>

                            {/* <p className='uzvTitle defaultBlueTitle'>Vrste čišćenja:</p>
                            <p className='defaultBlueText uzvList'> <span><img src={greenCheck} alt="" /></span>Esencijalno čišćenje lica: preporučuje se svim tipovima kože</p>
                            <p className='defaultBlueText uzvList'> <span><img src={greenCheck} alt="" /></span>Nutritivno čišćenje lica: suzbija suhoću i poboljšava sjaj kože. Preporučuje se dehidriranoj koži, sprečava pojavu bora.</p>
                            <p className='defaultBlueText uzvList'> <span><img src={greenCheck} alt="" /></span>Regenerativno čišćenje lica: povećava gustoću kože, daje sjaj koži. Preporučuje se osjetljivoj koži zbog svog umirujućeg i regenerativnog efekta.</p> */}
                        </div>
                    </div>
                </div>
            </section>

            <section id="ultrasoundPonuda" className="ultrasoundPonuda">
               <div className="container">
                   <div className="columns">
                       <div className="column ponudaColumn has-text-centered">
                           <div className="_inner">
                               <p className="titlePonuda">
                                   Zainteresovani ste za usluge
                                   sa Ultrazvučnom tehnologijom?
                               </p>
                               {/* <p className="subtitlePonuda">
                                   Ovog ljeta uživajte u savršenoj koži.
                               </p> */}

                               <div className="buttonPonuda">

                                   <a href="/usluge/ultrazvucno-ciscenje-lica" className='turqButton buttPonuda'>
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
 
export default UltrazvukTehnologija;