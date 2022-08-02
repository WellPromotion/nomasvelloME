import React from 'react';
import Popup from 'reactjs-popup';
import TretmanAkniForm from '../forms/TretmanAkniForm'


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
          
    
          < TretmanAkniForm />
          
                </div>
            </div>
    )}
  </Popup>
);