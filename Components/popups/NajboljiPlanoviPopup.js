import React from 'react';
import Popup from 'reactjs-popup';
import NajboljiPlanoviForm from '../forms/NajboljiPlanoviForm';


export default () => (
  <Popup
    trigger={<button className="button naruciBtnCentri greenButton"> Naručite se </button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
          < NajboljiPlanoviForm />
          
                </div>
            </div>
    )}
  </Popup>
);