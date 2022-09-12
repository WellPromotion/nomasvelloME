import React from 'react';
import Popup from 'reactjs-popup';
import { UsloviComp } from '../fransizeComp/UsloviComp';

export default () => (
  <Popup
    trigger={<button className="button naruciBtnCentri greenButton">USLOVI <br /> FRANŠIZE</button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modalUslovi">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
          <UsloviComp/>
      
                </div>
            </div>
    )}
  </Popup>
);