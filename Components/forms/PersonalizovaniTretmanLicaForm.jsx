import React from 'react'
import { useState, useEffect } from 'react';
import CONTACT_MUTATION from "../../mutations/contact-form";
import { useMutation } from '@apollo/client';

export default function PersonalizovaniTretmanLicaForm(props) {

    const { projects, map } = props;

    const initialState = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
  };

  const [ input, setInput ] = useState( initialState );
  const [ orderData, setOrderData ] = useState( null );
  const [ success, setSuccess ] = useState( 0 );


  const createContactData = ( contactInfo ) => {
        const contactData = {
        id: 17,
        fieldValues: [

            {id : 1, value: contactInfo[1] },
            {id : 3, value: contactInfo[2] },
            {id : 4, value: contactInfo[3] },
            {id : 5, value: contactInfo[4] },
            {id : 6, value: contactInfo[5] }
        ]
    };
setOrderData(contactData)


};

  // CONTACT Mutation.
  const [ contactForm, {  loading, error, data} ] = useMutation( CONTACT_MUTATION, {
  variables: {
    input: orderData
  },
  onCompleted: () => {
    setSuccess(1)
  },
      onError: ( error ) => {
        setSuccess(2)
      }
});

const handleOnChange = ( event ) => {
    const newState = { ...input,  [event.target.name]: event.target.value };
    setInput( newState );
};
  
  const handleFormSubmit = ( event ) => {
    event.preventDefault(); 
      createContactData(input)
  };

  useEffect( () => {

    if ( null !== orderData ) {
    contactForm()
    }

  }, [ orderData ] );


    return (
        <>
            {/* CONTACT */}

            <section className="contact" id="kontakt">
                <div className="container-90">
                <div className="columns">
                    <div className="column is-6">
                    <div className="info-wrap">
                        <h2 className='naruciteTermin'>Naručite se</h2>
                        
                    </div>
                    
                    </div>

                    <div className="column is-6">

                    <div className="form-wrap">
                        {
                            success === 1 ? 
                            <div className="success-wrap">
                                <h5>Hvala vam!</h5>
                                <p>Vaša je poruka primljena. Neko će vas kontaktirati.</p>
                            </div>
                            :
                            success === 2 ? 
                            <div className="success-wrap">
                                <h5>Došlo je do greške</h5>
                                <p>Molimo pokušajte opet.</p>
                            </div>
                            :""
                        }
                        <form onSubmit={ handleFormSubmit } className="form">
                        {/* <div className="select">
                        <select onChange={ handleOnChange }>
                            <option className="first">Select</option>
                            <option value="question">Question</option>
                            <option>Propety Evaulation</option>
                            <option>Project</option>
                        </select>
                        </div> */}
                    

                        <div className="columns is-multiline form-column">
                        <div className="column is-12">
                            <input onChange={ handleOnChange } className="input" type="text" placeholder="Ime i prezime*" required name="1"/>
                        </div>
                        <div className="column is-12">
                            <input onChange={ handleOnChange } className="input" type="text" placeholder="Kontakt telefon*" required name="2"/>
                        </div>
                        <div className="column is-12">
                            <input onChange={ handleOnChange } className="input" type="email" placeholder="Email*" required name="3"/>
                        </div>
                        <div className="select column is-12">
                        <select onChange={ handleOnChange } required name="4">
                            <option className="first">Odaberite željeni centar</option>
                                                <option value="Sarajevo - Novo Sarajevo">Sarajevo - Novo Sarajevo</option>
                                                <option value="Sarajevo - Stari Grad">Sarajevo - Stari Grad</option>
                                                <option value="Sarajevo - Novi Grad">Sarajevo - Novi Grad</option>
                                                <option value="Sarajevo - Ilidža">Sarajevo - Ilidža</option>
                                                <option value="Banja Luka">Banja Luka</option>
                                                <option value="Zenica">Zenica</option>
                                                <option value="Tuzla">Tuzla</option>
                                                <option value="Doboj">Doboj</option>
                                                <option value="Brčko">Brčko</option>
                        </select>
                        </div>
                        <div className="column is-12 terminKontakta">
                            <input onChange={ handleOnChange } className="input" type="text" placeholder="Termin u kojem želite biti kontaktirani" name="5"/>
                        </div>
                        <div className="column is-12">
                            <button className="button submit-form" type="submit">POŠALJI</button>
                        </div>
                        </div>
                        </form>

                        
                    </div>
                    </div>
                    
                </div>
                </div>
            </section>
            
        </>
    )
}
