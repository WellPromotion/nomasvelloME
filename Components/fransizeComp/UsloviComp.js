import React from 'react'
import opciusloviImg from '../../public/images/opci_uslovi.jpg'

export const UsloviComp = () => {
return (

<>


    <section id="usloviSection" className="usloviSection">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="titlePart">
                        <p className="titleUslovi">
                            Opći uslovi
                        </p>
                    </div>
                    <hr />
                    <div className="bodyPart">
                        <p className="greenTitle">
                            Preduzeće:
                        </p>
                        <p className="defaultText">
                            No más vello S.L. <br />
                            C.I.F: B-85228989 <br />
                            Calle Sierra Nevada, 30-28691 – Villanueva de la Cañada MADRID <br />
                        </p>
                        <br />
                        <p className="greenTitle">
                            Nositelj franšize za Bosnu i Hercegovinu:
                        </p>
                        <p className="defaultText">
                            ZIOM d.o.o. <br />
                            Kolodvorska 3B <br />
                            71000 Sarajevo<br />
                        </p>
                        <br />
                        <p className="greenTitle">Kontakt:
                        </p>
                        <p className="defaultText">

                            Tel: 033 718 556 <br />

                            e-mail: bih@nomasvello.com <br /> </p>
                        <br />

                        <p className="greenTitle">Brend:
                        </p>
                        <p className="defaultText">
                            No mas vello ©<br />
                        </p>
                        <br />

                        <img src={opciusloviImg} alt="" />
                        <br /><br />
                    
                       

                        <p className="greenTitle">Potreban lokal:
                        </p>
                        <p className="defaultText">

                            1. Ulaz sa glavne ulice. Površina od minimalno 40 kvadratnih metara.<br />

                            2. Raspored lokala: recepcija, sala za fotoepilaciju, WC i malo skladište.
                        </p>

                        <br />

                        <p className="greenTitle">Cilj:
                        </p>
                        <p className="defaultText">


                            No más vello© ima za cilj uštedjeti nepotrebne troškove za razvoj poslovanja. Upotrijebite
                            već dokazan i učinkovit model.
                        </p>

                        <br />

                        <p className="greenTitle">Minimalan broj stanovnika:
                        </p>
                        <p className="defaultText">
                            od 30 000 stanovnika.

                        </p>
                        <br />

                        <p className="greenTitle">Profil franšizanta:
                        </p>
                        <p className="defaultText">

                            – Ljudi koji traže samozaposlenje <br />

                            – Za one koji traže nezavisnost i profesionalnu slobodu <br />

                            – Investitori
                        </p>

                        <br />

                        <p className="greenTitle">Potrebno osoblje:
                        </p>
                        <p className="defaultText">
                            Direktor (franšizant) i jedna do dvije radnice.
                        </p>

                        <br />

                        <p className="greenTitle">Iznos ulaganja:
                        </p>
                        <p className="defaultText">
                            Na upit. Kontaktirajte nas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>







</>


)
}