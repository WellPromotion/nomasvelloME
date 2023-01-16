import React from 'react'
import phoneIcon from '../public/images/phone.png'
 
export const Poziv = () => {
    
    return (
        <>
            



            <div className="pozivBox">
                <a className='pozivSlide' href="/da-vas-pozovemo"><span className='iconPart'><img src={phoneIcon} alt="" /></span><span className='textPart'>Želite li da Vas pozovemo?</span></a>

            </div>


            </>
    )
}
