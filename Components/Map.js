import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import mapLogo from '../public/images/mapLogo.svg'
import locationIcon from '../public/images/locationIcon.svg'
import downArrow from '../public/images/down-arrow.svg'

  const MapMarker = ({ isActive, image }) => (
    <div className={"map-marker " + isActive}>
      <img src={image} alt=""/>
    </div>
  );

  const MapMarkerMain = ({ image }) => (
    <div className="map-marker main">
      <img src={image} alt=""/>
    </div>
  );

export default function lokacija(props) {

    // const { seo } = props;

    // PROJECT INFORMATION

    const projectInformation = [
        {
            id: "sarajevo-1",
            name: "Podgorica I - Detalji",
            class: "_sarajevo-i",
            img: mapLogo, 
            lat: 42.42575532069287, 
            long: 19.257080373919422,
            address: "4. jula br. 107/14",
            phone: "+382 (0)67 03 83 03",
            email: "montenegro@nomasvello.me",
        },
        {
            id: "sarajevo-2",
            name: "Podgorica II - Detalji",
            class: "_sarajevo-2",
            img: mapLogo,
            lat: 42.43627448831343, 
            long: 19.239210525632874,
            address: "Dr. Vukašina Markovića bb",
            phone: "+382 (0)67 820 437",
            email: "krusevac@nomasvello.me",
        },
      
    ]

    const projectSettings = {
        center: {
            lat: 42.42575532069287, 
            lng: 19.257080373919422
        },
        zoom: 16
    };

    const [dynCenter, setDynCenter] = useState({lat: 42.42575532069287, lng: 19.257080373919422})

    const [dynZoom, setDynZoom] = useState(16)

    const [currentActive, setCurrentActive] = useState("")

    const [isDrop, setIsDrop] = useState("")

    function handleClick(latNew, lngNew, activeNew){
    setDynCenter({lat: parseFloat(projectSettings.center.lat), lng: parseFloat(projectSettings.center.lng)})
    setDynZoom(16)
    setCurrentActive(activeNew)
    setTimeout(function(){
        setDynCenter({lat: parseFloat(latNew), lng: parseFloat(lngNew)})
        setDynZoom(17.5)
        
    }, 500);
    
    }

    // const headData = {
    //     title : seo.title,
    //     meta : seo.meta
    // }
    
    return (
        <>
            {/* <HeadTags headData={headData}/>
            <Nav current={"lokacija"}/>
            <Widgets/> */}

            {/* MAP MAIN */}

            <section id='mapPage' className="map-page">
               <div className="map-page-wrap container">
            <div className="columns">
              
              <div className="column leftCol">
              <div className="inner">
              <div className="titleBox">
                <p>Naši centri u
                  Crnoj Gori</p>
              </div>
                <div className="locationBox">
                  <div className="innerLocations">

                    {/* MAIN PAGE CONTROLS */}

                    <div className="map-page-controls">
                        {
                            projectInformation.length ? 

                            projectInformation.map(info => 
                              <div className={currentActive === info.id ? "__point active" : "__point"} key={info.id} >
                                
                                
                                
                                <div className="singleLocation">
                                    <div className="__title">
                                        <div className={"__point-img " + info.class}></div>
                                    {/* <p>{info.name}</p> */}
                                    <img className='locationIcon' src={locationIcon} alt="" />
                                    <button className="buttoN titleLocation" onClick={() => isDrop === info.id ? setIsDrop("") : setIsDrop(info.id)} ><span className='nameOfLocation'>{info.name} </span><span className='locationArrow'><img className='downArrow' src={downArrow} alt="" /></span></button>
                                    {/* <img className='downArrow' src={downArrow} alt="" /> */}
                                  </div>
                                  
                                    <div className={isDrop === info.id ? "__content __active" : "__content"}>
                                        
                                    {/* <p className='contentMap'>{info.description}</p> */}
                                    <p className="contentMap">Adresa: <span className="exactInfo">{info.address}</span> - <span><button className="buttoN exactMap" onClick={()=> handleClick(info.lat, info.long, info.id)} >Pogledaj na mapi</button></span></p>
                                    <p className="contentMap">Telefon: <span className="exactInfo">{info.phone}</span></p>
                                    <p className="contentMap">Email: <span className="exactInfo">{info.email}</span></p>
                                    </div>
                                </div>
                                
                                
                                
                                </div>
                            )

                            : ""
                        }
                </div>
                
                </div>
              </div>
            </div> 
                
              </div>
              
              
              <div className="column rightCol">
              <div className="innerMap">
                    {/* MAP WRAPPER */}
                    <div className="map-wrap iframe">
                    <GoogleMapReact
                        defaultCenter={projectSettings.center}
                        defaultZoom={projectSettings.zoom}
                        center={dynCenter}
                        zoom={dynZoom}
                        bootstrapURLKeys={{ key: "AIzaSyCjWuEoL1BT8S9gAjVG_YGooS_BnqJWdFE" }}
                    >
                        
                        {
                            projectInformation.length ?
                            projectInformation.map(projects => (
                            <MapMarker
                                lat={projects.lat}
                                lng={projects.long}
                                isActive={currentActive === projects.id ? " active" : ""}
                                image={projects.img}
                            />
                            ))
                            :
                            ""
                        }
                        <MapMarkerMain
                            lat={42.42575532069287}
                            lng={19.257080373919422}
                            image={mapLogo}
                        />
                    </GoogleMapReact></div>
                    
                    </div>
                    </div>
              
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            {/* <Footer/> */}
        </>
    )
}

// export async function getStaticProps() {
//     const result = await client.query( { query: GET_SEO } )
//       return{
//         props: {
//           seo: result.data.seo.seo
//         },
//         revalidate: 10,
//       }
//   }