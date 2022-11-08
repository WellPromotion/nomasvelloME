import React, { useState } from 'react'
// import HeadTags from '../Components/HeadTags'
// import Nav from '../Components/Nav'
// import Footer from '../Components/Footer'
// import Widgets from '../Components/Widgets'
import GoogleMapReact from 'google-map-react';
// import GET_SEO from '../queries/seo/seo-location'
// import client from '../Components/ApolloClient'
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
            name: "Novo Sarajevo - Detalji",
            class: "_sarajevo-i",
            img: mapLogo, 
            lat: 43.85421427202709, 
            long: 18.390190383133785,
            address: "Kolodvorska 3B",
            phone: "+033 718 555",
            email: "info@nomasvello.ba",
        },
        {
            id: "sarajevo-2",
            name: "Stari Grad - Detalji",
            class: "_sarajevo-2",
            img: mapLogo,
            lat: 43.860144599935474, 
            long: 18.427049679415575,
            address: "Edhema Mulabdića 2",
            phone: "+033 447 351",
            email: "starigrad@nomasvello.ba",
        },
        {
            id: "sarajevo-3",
            name: "Novi Grad - Detalji",
            class: "_sarajevo3",
            img: mapLogo, 
            lat: 43.826073680387616, 
            long: 18.35323238701965,
            address: "Hamdije Kapidžića 11",
            phone: "+033 766 130",
            email: "dobrinja@nomasvello.ba",
        },
        {
            id: "sarajevo-4",
            name: "Ilidža - Detalji",
            class: "_sarajevo-4",
            img: mapLogo, 
            lat: 43.83108391485479, 
            long: 18.30768914160114,
            address: "Rustem-pašina 1, Ilidža",
            phone: "+033 620 077",
            email: "ilidza@nomasvello.ba",
        },
        {
            id: "banjaluka-1",
            name: "Banja Luka - Detalji",
            class: "_banjaluka-1",
            img: mapLogo, 
            lat: 44.769029076816324, 
            long: 17.185361934757125,
            address: "Bulevar cara Dušana 15",
            phone: " +051 258 150 | 066 486 645",
            email: "banjaluka@nomasvello.ba",
      },
      {
        id: "brcko",
        name: "Brčko - Detalji",
        class: "_brcko",
        img: mapLogo, 
        lat: 44.87005873701408, 
        long: 18.809639424178854,
        address: "Studentska 3",
            phone: "066 326 505",
            email: "brcko@nomasvello.ba",
      },
        {
            id: "zenica",
            name: "Zenica - Detalji",
            class: "_zenica",
            img: mapLogo, 
            lat: 44.200100661438874,    
            long: 17.909923994094555,
            address: "Kamberovića čikma bb",
            phone: " +032 40 40 50 | 061 02 67 00",
            email: "zenica@nomasvello.ba",
      },
      {
        id: "tuzla",
        name: "Tuzla - Detalji",
        class: "_tuzla",
        img: mapLogo, 
        lat: 44.534124, 
        long: 18.683063,
        address: "Maršala Tita br. 2",
        phone: "061 75 20 20",
        email: "tuzla@nomasvello.ba",
      },
      {
        id: "doboj",
        name: "Doboj - Detalji",
        class: "_doboj",
        img: mapLogo, 
        lat: 44.708790355073276, 
        long: 18.05836607589864,
        address: "Makljenovac b.b.",
            phone: "061 888 595",
            email: "doboj@nomasvello.ba",
      },
      
    ]

    const projectSettings = {
        center: {
            lat: 43.854245798806055, 
            lng: 18.390102952285982
        },
        zoom: 16
    };

    const [dynCenter, setDynCenter] = useState({lat: 43.854245798806055, lng: 18.390102952285982})

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
                  Bosni i Hercegovini</p>
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
                            lat={43.854189055457304}
                            lng={18.390102948315203}
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