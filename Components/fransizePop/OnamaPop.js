import React from 'react';
import Popup from 'reactjs-popup';


export default () => (
  <Popup
    trigger={<button className="button naruciBtnCentri greenButton">POGLEDAJTE <br /> PREZENTACIJU</button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
         
          
                </div>
            </div>
    )}
  </Popup>
);