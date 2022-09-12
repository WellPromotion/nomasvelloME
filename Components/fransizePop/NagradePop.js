import React from 'react';
import Popup from 'reactjs-popup';
import { NagradeComp } from '../fransizeComp/nagradeComp';


export default () => (
  <Popup
    trigger={<button className="button naruciBtnCentri greenButton">NAGRADE <br /> NO+VELLO</button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modalNagrade">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
         <NagradeComp/>
          
                </div>
            </div>
    )}
  </Popup>
);