import React from 'react';
import useCollapse from 'react-collapsed';
import locationIcon from '../../public/images/locationIcon.svg'
import downArrow from '../../public/images/down-arrow.svg'

// import '../styles/Collapsed.scss';
function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {/* {isExpanded ? 'Collapse' : 'Expand'} */}
            <img className='locationIcon' src={locationIcon} alt="" />
                  <p className='locationName'>Location - Details</p>
                  <img className='downArrow' src={downArrow} alt="" />
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <p className='adresaLokacija'>Adresa: Hamdije Kapidžića 11-12 (vidi na mapi)</p>
                <p className="telefonLokacija">Telefon: +033 766 130</p>
                <p className="emailLokacija">Email: dobrinja@nomasvello.ba</p>
            </div>
        </div>
    </div>
    );
}
function App() {
    return (
    <Collapsible/>
    );
}
export default App;