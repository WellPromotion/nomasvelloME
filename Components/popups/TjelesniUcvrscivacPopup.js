import React from 'react';
import Popup from 'reactjs-popup';
import TjelesniUcvrsivacForm from '../forms/TjelesniUcvrsivacForm'


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
          
    
          < TjelesniUcvrsivacForm />
          
                </div>
            </div>
    )}
  </Popup>
);