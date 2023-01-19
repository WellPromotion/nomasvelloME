import React from 'react';
import Popup from 'reactjs-popup';
import PackMladenkaForm from '../forms/PackMladenkaForm';


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
          
    
          < PackMladenkaForm />
          
                </div>
            </div>
    )}
  </Popup>
);