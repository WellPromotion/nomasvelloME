import React from 'react';
import Popup from 'reactjs-popup';
import IzbjeljivanjeZubaForm from '../forms/IzbjeljivanjeZubaForm'


export default () => (
  <Popup
    trigger={<button className="button linkPitanjaLed greenButton"> Naručite se </button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
          < IzbjeljivanjeZubaForm />
          
                </div>
            </div>
    )}
  </Popup>
);