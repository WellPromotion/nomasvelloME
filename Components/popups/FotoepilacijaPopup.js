import React from 'react';
import Popup from 'reactjs-popup';
import FotoepilacijaForm from '../forms/FotoepilacijaForm'


export default () => (
  <Popup
    trigger={<button className="button uslugeBtn"> Naručite se </button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
          < FotoepilacijaForm />
          
                </div>
            </div>
    )}
  </Popup>
);