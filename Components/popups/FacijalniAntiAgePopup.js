import React from 'react';
import Popup from 'reactjs-popup';
import FacijalniAntiAgeForm from '../forms/FacijalniAntiAgeForm'


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
          
    
          < FacijalniAntiAgeForm />
          
                </div>
            </div>
    )}
  </Popup>
);