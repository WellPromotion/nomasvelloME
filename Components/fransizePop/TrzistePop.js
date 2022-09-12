import React from 'react';
import Popup from 'reactjs-popup';
import { TrzisteComp } from '../fransizeComp/TrzisteComp';

export default () => (
  <Popup
    trigger={<button className="button naruciBtnCentri greenButton">TRŽIŠTE <br /> FRANŠIZA</button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modalTrziste">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
         <TrzisteComp/>
          
                </div>
            </div>
    )}
  </Popup>
);