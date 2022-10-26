import React from 'react';
import Popup from 'reactjs-popup';
import pravilaImg from '../../public/images/Promocija-pravila.jpg'


export default () => (
  <Popup id='promocijaPopup' className='popPromocije'
    trigger={<button className="button naruciBtnCentri greenButton pravilaPromocijeB">Pravila promocije</button>}
    modal
    nested
  >
        {close => (
            <div className="outer outerPravilaPromocije">
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
          </button>
          
    
        <img src={pravilaImg} alt="" />
          
                </div>
            </div>
    )}
  </Popup>
);