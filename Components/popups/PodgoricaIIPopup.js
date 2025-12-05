import React from 'react';
import Popup from 'reactjs-popup';
import PodgoricaIIForm from '../forms/PodgoricaIIForm'


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
          
    
          < PodgoricaIIForm />
          
                </div>
            </div>
    )}
  </Popup>
);