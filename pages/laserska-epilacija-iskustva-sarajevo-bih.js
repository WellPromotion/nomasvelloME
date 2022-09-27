import styles from '../styles/Fransize.module.scss'
import imgIskustvaSar from '../public/images/firstSlideHeader.jpg'



// import prezentacijaPdf from '../public/pdf/prezentacija.pdf';

export default function IskustvaSarajevo() {
    return (
    
    <>
    
    <section id="heroTitleIskustva" className="hero is-medium">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className=" title">
                Laserska epilacija, iskustva, Sarajevo BiH
                </h1>
            </div>
        </div>
    </section>
       
            <section id="iskustvaSaSection" className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            
                           
                            
                            <p className='singleIskustvo defaultText'>
                            Nakon što sam probala fotoepilaciju već nekoliko mjeseci, odlučila sam se i na lasersku epilaciju. Prednost No+Vello centara je baš u tome, što na istom mjestu možete isprobati razne metode, a osoblje će vas posavjetovati i čitav tretman prilagoditi baš vama. Osjećam se tako privilegovanom, a moje noge su opet glatke i nisu izbrazdane kao što su bile nakon godina i godina brijanja, depilacije voskom i raznoraznih epilatora. Aida, 32
                            </p>
                            <p className='singleIskustvo defaultText'>
                            Laserska epilacija me učinila sretnom ženom! Više nema straha od toga da li mogu da pokažem noge ili ne. Uvijek sam spremna za kratku suknju, za bazen ili za bilo koji drugi uzbudljivi plan. Radila sam noge, pazuhe i bikini zonu. Koža mi je mekana na dodir. Ne žalim nijedne marke. Vesna, 24
                            </p>
                            <p className='singleIskustvo defaultText'>
                            Godinama sam vodila borbu sa dlačicama na licu. Bilo me je stid kada bi se neka dlačica pojavila i kada bi to neko primijetio i zagledao se u moje lice. Kada mi je prijateljica preporučila da probam, nisam baš bila sigurna u to i mislila sam da će biti veoma skupo. Već nakon prvog tretmana sam primijetila razliku, a moje samopouzdanje raste vrtoglavo. Danijela, 38
                            </p>
                            <p className='singleIskustvo defaultText'>
                            Kada sam prvi put ušla u No+Vello centar, iskreno rečeno, nisam znala šta da očekujem. Međutim, nakon prvih pitanja počela sam da se opuštam. Pitanja su bila baš detaljna i profesionalna. Opustila sam se i nekako sam znala da sam u pravim rukama. Tako je i bilo. Moje nogu su bile baš dlakave. Od puberteta je tako bilo. Sada ne mogu da prepoznam vlastite noge. Nakon nekoliko tretmana, i više sam nego zadovoljna. Jedva čekam da uradim tretmane koji su mi ostali. Emina, 30
                            </p>
                            
                            <img src={imgIskustvaSar} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            
       
            
            
            
        
    </>
);
}