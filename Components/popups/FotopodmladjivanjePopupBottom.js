import React from 'react';
import Popup from 'reactjs-popup';
import FotopodmladjivanjeForm from '../forms/FotopodmladjivanjeForm'


export default () => (
  <Popup
    trigger={<button className="button narudzbaButtonBottom"> Naručite se </button>}
    modal
    nested
  >
        {close => (
            <div className="outer">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
          < FotopodmladjivanjeForm />
          
                </div>
            </div>
    )}
  </Popup>
);