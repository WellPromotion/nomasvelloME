import React from 'react';
import Popup from 'reactjs-popup';
import LaserskaEpilacijaForm from '../forms/LaserskaEpilacijaForm'


export default () => (
  <Popup
    trigger={<button className="button narudzbaButtonBottom"> Naručite se - Laserska epilacija</button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
          < LaserskaEpilacijaForm />
          
                </div>
            </div>
    )}
  </Popup>
);