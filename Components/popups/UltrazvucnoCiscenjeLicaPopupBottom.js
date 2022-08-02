import React from 'react';
import Popup from 'reactjs-popup';
import UltrazvucnoCiscenjeLicaForm from '../forms/UltrazvucnoCiscenjeLicaForm'


export default () => (
  <Popup
    trigger={<button className="button narudzbaButtonBottom"> Naručite se </button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
          < UltrazvucnoCiscenjeLicaForm />
          
                </div>
            </div>
    )}
  </Popup>
);