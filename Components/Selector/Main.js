import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional
import styles from "./Main.module.css";

export default function Main(props) {
  const [gender, setGender] = useState(false);
  const [services, setServices] = useState([
    {
      id: 0,
      title: "Lice + Nausnice",
      price: 49,
      selected: false,
      sidebar: false,
    },
    { id: 1, title: "Vrat", price: 49, selected: false, sidebar: false },
    {
      id: 2,
      title: "Grudi + Između grudi + Trbušna linija",
      price: 49,
      selected: false,
      sidebar: false,
    },
    { id: 3, title: "Stomak", price: 49, selected: false, sidebar: false },
    { id: 4, title: "Bikini", price: 49, selected: false, sidebar: false },
    { id: 5, title: "Noge", price: 110, selected: false, sidebar: false },
    { id: 6, title: "Stopala", price: 25, selected: false, sidebar: false },
    { id: 7, title: "Ramena", price: 49, selected: false, sidebar: false },
    { id: 8, title: "Ruke", price: 98, selected: false, sidebar: false },
    { id: 9, title: "Šake", price: 25, selected: false, sidebar: false },
    { id: 10, title: "Potiljak", price: 49, selected: false, sidebar: false },
    {
      id: 11,
      title: "Gornji dio leđa",
      price: 49,
      selected: false,
      sidebar: false,
    },
    {
      id: 12,
      title: "Donji dio leđa",
      price: 49,
      selected: false,
      sidebar: false,
    },
    {
      id: 13,
      title: "Zadnjica + Između stražnjice",
      price: 49,
      selected: false,
      sidebar: false,
    },
    { id: 14, title: "Nausnice", price: 25, selected: false, sidebar: false },
    {
      id: 15,
      title: "Između obrva",
      price: 25,
      selected: false,
      sidebar: false,
    },
    { id: 16, title: "Pazusi", price: 49, selected: false, sidebar: false },
    {
      id: 17,
      title: "Oko bradavica",
      price: 25,
      selected: false,
      sidebar: false,
    },
    {
      id: 18,
      title: "Između grudi",
      price: 25,
      selected: false,
      sidebar: false,
    },
    {
      id: 19,
      title: "Trbušna linija",
      price: 25,
      selected: false,
      sidebar: false,
    },
    {
      id: 20,
      title: "Između stražnjice",
      price: 25,
      selected: false,
      sidebar: false,
    },
  ]);

  const filterData = services.filter((service) => service.sidebar);
  const totalPrice = filterData.reduce(
    (total, currentValue) => (total = total + currentValue.price),
    0
  );

  return (
    <section id={styles.selector__wrap}>
      <div className={styles.nav__gender}>
        <button
          className={gender ? styles.btn__gender__not : styles.btn__gender}
          onClick={() => setGender(false)}
        >
          <svg
            height="19"
            width="13"
            fill="none"
            viewBox="0 0 13 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1.18743C5.22696 1.18743 4.00606 1.68788 3.10589 2.57868C2.20571 3.46948 1.7 4.67767 1.7 5.93745C1.7 7.19723 2.20571 8.40542 3.10589 9.29622C4.00606 10.187 5.22696 10.6875 6.5 10.6875C7.77304 10.6875 8.99394 10.187 9.89411 9.29622C10.7943 8.40542 11.3 7.19723 11.3 5.93745C11.3 4.67767 10.7943 3.46948 9.89411 2.57868C8.99394 1.68788 7.77304 1.18743 6.5 1.18743ZM0.5 5.93745C0.500015 4.78844 0.836926 3.66411 1.46987 2.70083C2.10282 1.73755 3.00461 0.976702 4.06587 0.510562C5.12713 0.0444206 6.30227 -0.106986 7.44877 0.0747057C8.59526 0.256397 9.66386 0.76338 10.525 1.53417C11.386 2.30495 12.0026 3.30643 12.3 4.41713C12.5973 5.52784 12.5625 6.70005 12.2 7.79161C11.8374 8.88316 11.1626 9.84717 10.2573 10.5667C9.35206 11.2862 8.25528 11.7304 7.1 11.8453V14.25H9.5C9.65913 14.25 9.81174 14.3125 9.92426 14.4239C10.0368 14.5352 10.1 14.6863 10.1 14.8437C10.1 15.0012 10.0368 15.1522 9.92426 15.2636C9.81174 15.3749 9.65913 15.4375 9.5 15.4375H7.1V18.4062C7.1 18.5637 7.03679 18.7147 6.92426 18.8261C6.81174 18.9374 6.65913 19 6.5 19C6.34087 19 6.18826 18.9374 6.07574 18.8261C5.96321 18.7147 5.9 18.5637 5.9 18.4062V15.4375H3.5C3.34087 15.4375 3.18826 15.3749 3.07574 15.2636C2.96321 15.1522 2.9 15.0012 2.9 14.8437C2.9 14.6863 2.96321 14.5352 3.07574 14.4239C3.18826 14.3125 3.34087 14.25 3.5 14.25H5.9V11.8453C4.42002 11.6981 3.04805 11.0121 2.05026 9.92051C1.05246 8.82888 0.499981 7.4094 0.5 5.93745Z"
              fill="black"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          className={gender ? styles.btn__gender : styles.btn__gender__not}
          onClick={() => setGender(true)}
        >
          <svg
            height="17"
            width="17"
            fill="none"
            viewBox="0 0 17 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3216 1.21426C10.1606 1.21426 10.0061 1.15029 9.89227 1.03643C9.77842 0.922575 9.71445 0.76815 9.71445 0.607129C9.71445 0.446108 9.77842 0.291683 9.89227 0.177824C10.0061 0.0639652 10.1606 0 10.3216 0H16.3929C16.5539 0 16.7083 0.0639652 16.8222 0.177824C16.936 0.291683 17 0.446108 17 0.607129V6.67842C17 6.83944 16.936 6.99387 16.8222 7.10772C16.7083 7.22158 16.5539 7.28555 16.3929 7.28555C16.2318 7.28555 16.0774 7.22158 15.9636 7.10772C15.8497 6.99387 15.7857 6.83944 15.7857 6.67842V2.07274L10.7721 7.08641C11.7578 8.2924 12.2424 9.83112 12.1255 11.3843C12.0086 12.9375 11.2992 14.3864 10.1441 15.4313C8.98894 16.4761 7.4764 17.0371 5.91929 16.9981C4.36219 16.9591 2.87963 16.3231 1.77824 15.2218C0.676856 14.1204 0.0409 12.6378 0.00190495 11.0807C-0.0370901 9.5236 0.523858 8.01106 1.56873 6.85593C2.61361 5.70079 4.06248 4.99142 5.61568 4.87454C7.16888 4.75765 8.7076 5.24218 9.91359 6.22793L14.9273 1.21426H10.3216ZM6.07168 6.07129C4.78351 6.07129 3.54811 6.58301 2.63724 7.49388C1.72637 8.40475 1.21465 9.64016 1.21465 10.9283C1.21465 12.2165 1.72637 13.4519 2.63724 14.3628C3.54811 15.2736 4.78351 15.7854 6.07168 15.7854C7.35984 15.7854 8.59525 15.2736 9.50612 14.3628C10.417 13.4519 10.9287 12.2165 10.9287 10.9283C10.9287 9.64016 10.417 8.40475 9.50612 7.49388C8.59525 6.58301 7.35984 6.07129 6.07168 6.07129Z"
              fill="black"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles.sidebar__wrap}>
        <div className={styles.sidebar__head}>
          <span>Usluga depilacije</span>
          <svg
            height="16"
            width="16"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00004 14.6667C6.36823 14.6667 6.66671 14.3682 6.66671 14C6.66671 13.6318 6.36823 13.3333 6.00004 13.3333C5.63185 13.3333 5.33337 13.6318 5.33337 14C5.33337 14.3682 5.63185 14.6667 6.00004 14.6667Z"
              stroke="#9EBB31"
              strokeLinecap="round"
            />
            <path
              d="M13.3333 14.6667C13.7015 14.6667 14 14.3682 14 14C14 13.6318 13.7015 13.3333 13.3333 13.3333C12.9651 13.3333 12.6666 13.6318 12.6666 14C12.6666 14.3682 12.9651 14.6667 13.3333 14.6667Z"
              stroke="#9EBB31"
              strokeLinecap="round"
            />
            <path
              d="M0.666626 0.666666H3.33329L5.11996 9.59333C5.18092 9.90026 5.3479 10.176 5.59166 10.3722C5.83541 10.5684 6.14042 10.6727 6.45329 10.6667H12.9333C13.2462 10.6727 13.5512 10.5684 13.7949 10.3722C14.0387 10.176 14.2057 9.90026 14.2666 9.59333L15.3333 4H3.99996"
              stroke="#9EBB31"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={styles.sidebar__body}>
          {services
            .filter((service) => service.sidebar)
            .map((service) => (
              <div className={styles.box__elem} key={service.id}>
                <span>{service.title}</span>
                <span>{service.price} KM</span>
              </div>
            ))}
        </div>
        <div className={styles.sidebar__footer}>
          <div className={styles.total__elem}>
            <span>UKUPNO:</span>
            <span>{totalPrice} KM</span>
          </div>
          <button
            className={styles.btn__reset}
            onClick={() =>
              setServices((current) =>
                current.map((obj) => {
                  return { ...obj, selected: false, sidebar: false };
                })
              )
            }
          >
            <span>Poništi</span>
          </button>
        </div>
      </div>
      <div className={styles.main__selector}>
        {gender ? (
          <svg
            height="100%"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            }}
            width="100%"
            version="1.1"
            viewBox="0 0 1157 1939"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
          >
            <g>
              <Tippy
                content="Lice + Nausnice (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Lice"
                  className={
                    services[0].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 0) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        if (obj.id === 14) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        if (obj.id === 15) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M199.238,193.184c-0,0 -33.542,-68.739 -14.886,-138.184c18.655,-69.446 83.118,-54.593 110.886,-44.818c27.769,9.775 40.05,75.504 36.68,109.317c-3.37,33.813 -16.576,65.953 -22.54,75.765c-5.963,9.813 -28.284,22.315 -28.284,22.315l-23.898,6.809l-35.865,-12.221l-15.785,-8.669l-6.308,-10.314Z"
                />
              </Tippy>
              <Tippy
                content="Vrat (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Vrat"
                  className={
                    services[1].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 1) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M207.69,204.807l-2.661,63.885c-0,0 43.861,4.721 64.209,4.656c20.348,-0.065 37.959,-6.321 37.959,-6.321l-3.172,-61.071l-46.829,18.432l-49.506,-19.581Z"
                />
              </Tippy>
              <Tippy
                content="Grudi + Između grudi + Trbušna linija (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Grudi"
                  className={
                    services[2].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 2) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        if (obj.id === 18) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        if (obj.id === 19) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M96.853,316.95c-0,0 -4.033,55.064 -1.876,79.629c2.156,24.565 9.406,63.385 9.406,63.385l15.911,47.211l17.305,70.956c-0,0 122.312,2.536 154.723,3.383c32.412,0.847 82.867,-2.428 82.867,-2.428l14.922,-59.379l17.203,-49.385c0,-0 14.752,-76.308 14.309,-104.984c-0.443,-28.675 -5.083,-47.796 -5.083,-47.796l-46.5,-16.169l-48.314,-25.394l-14.529,-9.105c-0,0 -18.696,5.179 -34.257,5.61c-22.805,0.632 -67.911,-4.671 -67.911,-4.671l-44.878,21.903l-63.298,27.234Z"
                />
              </Tippy>
              <Tippy
                content="Stomak (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Stomak"
                  className={
                    services[3].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 3) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M136.276,577.705l6.12,39.191l-0.479,38.728l-8.616,50.315l-12.2,33.721c-0,0 174.067,19.038 211.361,15.506c37.295,-3.531 59.548,-7.95 59.548,-7.95l-14.597,-42.609l-7.242,-50.244l1.354,-46.314l5.266,-29.177c0,0 -32.52,1.433 -69.594,1.515c-37.074,0.083 -170.921,-2.682 -170.921,-2.682Z"
                />
              </Tippy>
              <Tippy
                content="Bikini (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Bikini"
                  className={
                    services[4].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 4) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M121.612,739.007l-16.413,98.371l-5.773,80.71l3.798,48.161l144.214,3.033l-4.609,-35.467l-5.531,-20.335l36.15,-2.231l-4.264,38.638l-0.459,19.395l113.834,-0l5.94,-14.105l25.52,-30.029l-6.711,-90.926l-15.298,-87.355c-0,-0 -37.588,4.409 -66.64,6.517c-29.053,2.108 -203.758,-14.377 -203.758,-14.377Z"
                />
              </Tippy>
              <Tippy
                content="Noge (110 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Noge"
                  className={
                    services[5].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 5) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M104.006,965.653l12.948,99.553l46.993,185.561l8.354,40.379l3.614,43.103l-5.618,67.967l2.725,69.226l5.683,49.442l15.417,52.319l34.971,113.336l7.971,45.904l49.132,-8.768l-5.102,-30.229l-3.957,-47.689l-1.712,-123.411l-6.118,-118.465l-2.086,-51.359l4.982,-74.708l-8.491,-53.047l-13.862,-102.654l-2.412,-86.059l-0,-68.514l-143.432,-1.887Zm163.671,1.781l5.833,49.862l20.061,136.324l3.688,36.261l-1.682,67.396l4.524,32.954l-5.173,283.703l-3.067,35.055l42.991,10.305l13.126,-49.617l20.69,-61.554l17.77,-63.974l5.572,-47.953l-0,-37.329l-5.01,-32.458l-4.96,-38.594l2.902,-32.741l9.589,-50.017l5.277,-55.993l8.051,-61.55l2.477,-32.08l-6.937,6.21l-24.493,14.614l-25.579,3.204l-0.402,-6.636l-1.91,-5.295l-0.416,-5.935l1.926,-3.043l-0.706,-7.612l5.469,-6.745l-1.779,-6.456l9.017,-18.378l8.046,-14.019l11.066,-37.5l-115.961,-0.409Zm111.146,66.799l13.061,-28.906l8.409,-11.992c-0,0 5.769,-3.574 7.401,0.126c1.632,3.701 -2.578,17.972 -2.578,17.972l-6.024,13.778l-21.307,12.254l1.038,-3.232Z"
                />
              </Tippy>
              <Tippy
                content="Stopala (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Stopala"
                  className={
                    services[6].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 6) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M236.067,1732.27l49.531,-10.148l-4.504,-26.772l-3.424,-36.35l-0.13,-10.72l11.927,-25.457l2.593,-16.33l42.465,11.142l-2.063,26.822l5.844,15.971l-1.8,12.162l-6.651,11.387l6.908,30.996l11.866,46.413l0.35,24.753l-7.644,16.063l-15.903,10.048l-20.223,2.771l4.479,29.412l8.758,41.465l-1.515,26.059l-13.006,17.658l-22.831,5.818l-24.539,-7.236l-23.257,-16.079l-4.48,-9.87l-0.566,-23.607l7.197,-42.521l6.829,-41.883l0.756,-9.771l-9.736,-9.536l-2.55,-7.973l7.078,-15.346l-1.759,-19.341Z"
                />
              </Tippy>
              <Tippy
                content="Ramena (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ramena"
                  className={
                    services[7].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 7) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M416.925,317.916l22.702,9.022l17.138,12.931l18.455,29.316l6.178,19.474l4.565,51.746l-2.016,23.712l0.016,31.224l-81.687,-14.208c0,0 16.167,-65.895 18.35,-111.481c0.829,-17.297 -3.701,-51.736 -3.701,-51.736Zm-318.97,-3.904l-36.918,18.425l-23.311,32.183l-9.155,18.916l-3.453,40.728l3.684,50.485l78.527,-4.876c0,0 -9.453,-49.842 -10.964,-74.887c-1.473,-24.428 1.59,-80.974 1.59,-80.974Z"
                />
              </Tippy>
              <Tippy
                content="Ruke (98 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ruke"
                  className={
                    services[8].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 8) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M402.823,478.759l-13.693,39.39l28.446,111.959l-5.13,81.191l6.473,46.911l7.163,51.781l1.466,66.536l-2.957,35.299l-10.572,13.298l46.035,23.055l8.315,-31.099l3.284,-18.323l4.863,-58.66l15.546,-148.428l-2.336,-51.011l-7.445,-148.5l-79.458,-13.399Zm-372.867,-7.355l-7.953,147.507l-0.847,30.04l-12.704,63.064l-1.095,47.566l-3.702,100.459l-0.798,66.406l45.036,-6.512l-0.687,-25.388l5.947,-40.402l10.336,-40.566l17.379,-67.863l10.036,-42.032l3.438,-52.35l2.554,-28.937l26.194,-106.153l-17.031,-48.697l-76.103,3.858Z"
                />
              </Tippy>
              <Tippy
                content="Šake (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Sake"
                  className={
                    services[9].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 9) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M3.777,924.788l1.001,39.739l4.712,47.553l25.062,39.813l9.193,13.73l32.372,21.561l15.356,2.397l1.323,-7.359l3.848,-9.507l-2.302,-4.601l2.717,-7.36l-4.874,-6.521l2.157,-11.776l-12.216,-27.992l-8.094,-48.812l-22.225,-32.831l-4.004,-14.168l-44.026,6.134Zm411.848,-0.237l43.609,22.742l-11.328,60.194l-5.868,11.011l-28.019,30.763l-12.283,14.226l-21.505,12.451l-25.763,4.24l-2.722,-3.387l2.218,-5.725l-4.985,-5.675l3.09,-7.09l0.338,-6.655l4.835,-7.699l-1.523,-7.09l10.143,-18.843l7.095,-13.897l5.828,-21.746l8.492,-25.455l4.733,-6.826l23.615,-25.539Zm-367.687,75.68l0.409,11.398l5.091,17.552l20.676,17.275l-5.301,-15.638l-5.841,-19.695l-5.501,-11.183l-4.879,-3.924l-3.549,1.073l-1.105,3.142Zm329.881,34.869l12.014,-25.746l10.642,-16.175l5.598,-0.768l1.888,6.14l-5.377,19.833l-6.137,8.048l-21.179,11.876l2.551,-3.208Z"
                />
              </Tippy>
              <Tippy
                content="Potiljak (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Potiljak"
                  className={
                    services[10].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 10) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M852.678,204.652l-2.764,63.892l101.96,0.001l-1.959,-63.738l-20.865,5.19c-0,0 -34.559,2.56 -54.759,0.746c-20.201,-1.813 -21.613,-6.091 -21.613,-6.091Z"
                />
              </Tippy>
              <Tippy
                content="Gornji dio leđa (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Gornji-dio-ledja"
                  className={
                    services[11].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 11) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M849.776,267.368l101.963,-0l49.902,25.318l57.114,22.658l-4.502,145.852l-22.382,62.32l-11.092,49.316l-240.143,0l-12.248,-52.819l-21.177,-58.817l-9.863,-142.012l44.121,-14.913l68.307,-36.903Z"
                />
              </Tippy>
              <Tippy
                content="Donji dio leđa (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Donji-dio-ledja"
                  className={
                    services[12].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 12) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M780.617,571.711l6.824,52.433l-2.094,42.51l-6.697,41.208l-10.754,24.403l-7.99,43.789l283.262,2.524l-8.991,-46.025l-14.493,-46.523l-4.159,-41.573l0.232,-45.636l5.2,-27.703l-240.34,0.593Z"
                />
              </Tippy>
              <Tippy
                content="Zadnjica + Između stražnjice (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Zadnjica"
                  className={
                    services[13].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 13) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        if (obj.id === 20) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M760.232,774.527l-14.347,89.555l-2.238,61.675l142,0l-0.728,-14.289l34.282,0.785l-4.177,14.216l141.36,0l-1.213,-39.818l-5.374,-61.929l-6.629,-48.051l-282.936,-2.144Z"
                />
              </Tippy>
              <Tippy
                content="Ramena (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ramena1"
                  className={
                    services[7].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 7) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M1057.25,313.691l-4.265,149.29l75.448,9.903l3.02,-52.784l-4.195,-39.509l-15.904,-32.486l-15.954,-17.447l-38.15,-16.967Zm-319.048,5.208l-27.394,13.19l-23.604,26.062l-11.653,26.138l-4.549,31.476l2.982,51.781l74.726,-6.35l-10.508,-142.297Z"
                />
              </Tippy>
              <Tippy
                content="Ruke (98 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ruke1"
                  className={
                    services[8].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 8) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M673.635,466.084l-0.365,51.543l-2.271,35.841l-2.788,65.109l-3.311,67.72l9.827,94.332l7.252,73.515l4.155,33.006l-0,16.497l8.955,29.188l39.482,-21.78l-4.463,-36.717l-1.127,-41.733l8.367,-69.204l6.299,-46.158l0,-37.826l-3.45,-49.9l14.633,-58.399l12.851,-52.937l-19.977,-58.908l-74.069,6.811Zm380.377,-6.116l-19.886,57.398l16.171,60.339l11.09,51.841l2.012,45.302l6.254,43.413l12.389,51.622l15.643,54.38l8.318,43.583l3.167,36.881l-2.159,20.487l46.909,7.621l0.456,-60.768l-4.117,-52.572l-1.079,-54.5l-2.761,-51.79l-4.763,-46.551l-7.441,-30.759l-2.765,-71.242l-3.346,-94.243l-74.092,-10.442Z"
                />
              </Tippy>
              <Tippy
                content="Šake (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Sake1"
                  className={
                    services[9].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 9) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M1107.38,922.675l46.008,8.312l-1.131,45.067l-4.042,37.82l-15.013,18.239l-17.067,30.887l-26.672,19.559l-24.303,7.022l-0.783,-8.491l-5.618,-7.245l3.065,-6.313l-0.942,-8.42l2.834,-5.561l0.543,-13.777l12.056,-30.061l7.68,-47.848l15.816,-22.549l7.569,-16.641Zm-413.627,9.319l41.324,-22.463l8.574,16.938l1.74,124.592l-12.421,-14.379l-20.942,-22.831l-5.513,-24.107l-12.762,-57.75Zm389.729,112.505l7.335,-22.23l4.823,-15.784l7.8,-10.5l5.551,3.167l-0.307,12.046l-4.188,16.778l-14.522,13.341l-6.492,3.182Z"
                />
              </Tippy>
              <Tippy
                content="Noge (110 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Noge1"
                  className={
                    services[5].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 5) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M916.176,924.205l-6.455,44.264l-0.083,70.569l-2.828,98.235l-14.408,96.028l-8.776,42.631l5.327,78.418l-1.874,47.886l-4.193,82.996l-1.323,60.671l-1.537,101.937l4.448,9.418l-3.324,17.354l-1.141,16.267l8.944,38.954l31.908,6.629l6.828,-41.41l21.536,-76.6l23.492,-82.907l9.275,-43.848l4.987,-67.577l-4.125,-75.072l-1.08,-26.741l4.509,-48.998l13.236,-46.205l22.842,-85.87l14.124,-59.564l9.659,-61.4l10.24,-95.506l-140.208,-0.559Zm-172.757,0.559l142.612,0.475l2.922,40.414l-10.176,87.169l-15.858,103.533l-1.384,31.46l1.59,60.288l-6.12,38.902l2.275,58.517l1.918,73.985l-0.305,99.705l2.4,68.158l5.09,34.416l-44.766,5.315l-7.603,-40.346l-27.19,-73.898c-0,0 -27.67,-84.206 -25.759,-129.165c1.91,-44.96 9.899,-78.172 9.899,-78.172c0,0 1.32,-31.101 -3.224,-60.891c-4.545,-29.791 -23.403,-188.781 -23.403,-188.781l-0.689,-68.224l-2.229,-62.86Z"
                />
              </Tippy>
              <Tippy
                content="Stopala (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Stopala1"
                  className={
                    services[6].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 6) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M823.047,1624.5l0.961,20.96l-4.898,15.745l3.073,12.914l4.832,8.093l-8.637,43.513l-9.037,29.798l-2.822,20.31l4.768,18.47l12.657,14.498l18.636,6.823l8.903,-1.617l-9.266,47.399l-4.201,38.802l6.099,20.167l12.332,10.563l19.564,5.612l26.175,-10.717l24.547,-18.642l2.577,-25.977l-4.868,-38.312l-10.387,-56.157l7.459,-11.237l4.654,-10.577l-6.304,-14.948l0.664,-14.699l-32.364,-7.273l-8.311,-39.44l1.379,-13.934l3.373,-12.101l-3.983,-13.859l-12.778,-28.18l-44.797,4.003Z"
                />
              </Tippy>
              <g id="Blank-Body">
                <g>
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M980.349,111.381c0,4.149 -0.23,13.229 -1.372,19.754c-1.553,8.545 -2.604,13.05 -3.289,15.413c0.092,-0.014 0.183,-0.018 0.319,-0.037c0.685,-0.324 1.647,-2.545 2.789,-6.589l0.364,-1.293c0.732,-2.581 1.966,-5.104 3.108,-7.544c2.421,-5.059 4.706,-9.834 3.655,-15.341c-0.364,-1.928 -1.096,-3.171 -2.194,-3.824c-1.05,-0.598 -2.329,-0.626 -3.38,-0.539Zm-4.844,40.559c-3.336,0 -5.072,-1.992 -5.576,-3.299c-0.272,-0.722 -0.227,-1.544 0.139,-2.23c-0,-0.014 1.187,-2.787 3.563,-16.227c1.464,-8.019 1.325,-20.819 1.325,-20.946c0,-1.152 0.732,-2.185 1.783,-2.573c0.549,-0.183 5.437,-1.832 9.641,0.576c1.783,1 4.021,3.121 4.844,7.508c1.372,7.238 -1.508,13.297 -4.067,18.652c-1.143,2.363 -2.194,4.588 -2.832,6.773l-0.366,1.183c-1.051,3.948 -2.697,9.911 -7.267,10.506c-0.41,0.05 -0.821,0.077 -1.187,0.077Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M821.099,111.358c-0.915,-0 -1.874,0.15 -2.65,0.626c-1.143,0.676 -1.828,1.933 -2.147,3.852c-0.959,5.511 1.37,10.25 3.882,15.267c1.19,2.427 2.424,4.94 3.247,7.512l0.364,1.289c1.189,4.021 2.193,6.224 2.925,6.548c0.138,0.014 0.23,0.018 0.319,0.028c-0.73,-2.354 -1.872,-6.841 -3.517,-15.368c-1.28,-6.502 -1.646,-15.582 -1.738,-19.727c-0.227,-0.018 -0.457,-0.027 -0.685,-0.027Zm6.031,40.509c-0.319,-0 -0.685,-0.023 -1.051,-0.064c-4.569,-0.516 -6.305,-6.447 -7.448,-10.377l-0.365,-1.188c-0.639,-2.176 -1.736,-4.396 -2.923,-6.736c-2.651,-5.315 -5.621,-11.337 -4.387,-18.58c0.776,-4.4 3.014,-6.552 4.75,-7.585c4.159,-2.477 9.048,-0.914 9.644,-0.722c1.051,0.37 1.827,1.389 1.827,2.541c0,0.127 0.045,12.922 1.6,20.924c2.651,13.398 3.838,16.153 3.929,16.262c0.275,0.649 0.366,1.463 0.092,2.13c-0.502,1.329 -2.194,3.395 -5.668,3.395Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M1104.69,997.42c-0.275,-0 -0.458,0.046 -0.641,0.096c-2.42,0.736 -5.207,5.195 -8.271,13.233c-0.455,1.22 -1.051,3.583 -1.872,6.58c-1.782,6.905 -4.525,17.146 -7.722,24.448c2.923,-2.139 6.167,-4.506 7.814,-5.762c3.289,-2.528 7.584,-6.85 9.139,-9.72c0.091,-0.224 0.319,-0.937 0.41,-1.366c0.092,-0.375 0.228,-0.713 0.275,-0.965c2.604,-7.512 5.803,-23.487 2.376,-25.964c-0.593,-0.448 -1.142,-0.58 -1.508,-0.58Zm-35.916,59.203c-2.606,-0 -4.068,-1.106 -4.204,-1.21c-0.687,-0.558 -0.823,-1.572 -0.23,-2.276c0.549,-0.69 1.553,-0.809 2.24,-0.279c0.136,0.1 4.706,3.025 13.113,-6.379c0.047,-0.019 0.047,-0.037 0.047,-0.046c4.478,-5.058 8.773,-21.239 11.058,-29.935c0.824,-3.203 1.462,-5.52 1.874,-6.639c2.468,-6.59 5.804,-14.048 10.465,-15.446c1.644,-0.498 3.38,-0.174 4.98,0.964c6.899,5.013 -1.142,29.401 -1.234,29.643c-0.044,0.197 -0.136,0.471 -0.183,0.768c-0.227,0.736 -0.41,1.494 -0.732,2.043c-1.827,3.372 -6.488,8.055 -10.007,10.747c-3.289,2.527 -12.611,9.203 -13.936,10.163c-5.712,6.374 -10.237,7.882 -13.251,7.882Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M743.006,928.885c-0.413,0 -0.823,-0.086 -1.234,-0.278c-1.555,-0.741 -15.034,-9.235 -15.4,-77.263c-0.227,-34.418 6.397,-78.029 10.373,-100.96c0.502,-2.997 1.006,-5.757 1.462,-8.394c3.199,-17.437 5.348,-28.957 2.65,-66.414c-0.685,-9.573 -1.278,-16.953 -1.736,-22.802c-1.782,-22.291 -1.827,-22.72 1.645,-37.041l0.366,-1.417c5.712,-23.853 23.258,-97.098 23.258,-97.098l5.257,1.252c-0,-0 -17.549,73.259 -23.305,97.112l-0.322,1.413c-3.288,13.488 -3.288,13.488 -1.506,35.354c0.456,5.858 1.051,13.256 1.736,22.843c2.696,38.142 0.549,49.932 -2.695,67.771c-0.504,2.614 -1.006,5.356 -1.508,8.34c-3.932,22.756 -10.512,66.007 -10.282,100.005c0.366,63.951 12.383,72.451 12.52,72.524c1.325,0.648 1.827,2.23 1.189,3.568c-0.504,0.947 -1.464,1.485 -2.468,1.485Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M1066.71,1091.81c-1.644,-0 -2.925,-0.297 -3.518,-1.024c-1.783,-2.257 -2.147,-5.15 -1.096,-8.632c-1.463,-0.69 -3.063,-1.978 -3.884,-4.738c-0.96,-3.304 -0.047,-6.224 1.142,-8.253c-1.281,-1.805 -2.24,-4.514 -1.464,-7.942c0.688,-2.911 2.194,-5.232 3.566,-6.822c-1.462,-2.143 -1.827,-5.392 -1.189,-9.902c0.687,-4.707 3.244,-10.117 6.033,-15.852c2.878,-6.041 5.848,-12.293 6.122,-17.004c0.549,-10.208 6.214,-42.999 8.363,-48.743c1.508,-3.893 7.356,-12.489 17.868,-26.293c3.106,-4.067 5.208,-8.961 5.208,-9.003c-0,0 5.256,-18.342 1.416,-51.334c-2.376,-20.366 -10.922,-51.554 -18.505,-79.072c-4.983,-18.15 -9.278,-33.828 -10.876,-43.118c-1.325,-7.599 -3.154,-13.997 -5.118,-20.769c-3.929,-13.471 -8.363,-28.743 -9.733,-57.928c-0.457,-9.359 -0.731,-16.693 -0.961,-22.656c-0.821,-20.861 -1.004,-24.617 -4.523,-39.331c-5.759,-23.848 -23.305,-97.66 -23.305,-97.66l5.254,-1.253c0,0.005 17.549,73.804 23.306,97.648c3.657,15.235 3.837,19.566 4.661,40.381c0.229,5.954 0.502,13.275 0.959,22.615c1.325,28.551 5.667,43.493 9.505,56.671c2.01,6.928 3.929,13.472 5.255,21.368c1.555,9.034 5.85,24.593 10.785,42.606c7.631,27.701 16.222,59.099 18.642,79.867c3.976,34.322 -1.461,53.003 -1.689,53.784c-0.183,0.493 -2.423,5.831 -5.712,10.122c-12.84,16.77 -16.497,22.966 -17.365,25.279c-2.055,5.323 -7.54,37.465 -8.042,47.108c-0.321,5.789 -3.565,12.529 -6.671,19.045c-2.468,5.114 -4.982,10.401 -5.529,14.285c-0.732,5.159 0.41,6.26 0.455,6.274c1.143,-0 1.966,0.703 2.332,1.814c0.366,1.106 -0.275,2.285 -1.234,2.975c-0,0.018 -3.2,2.426 -4.021,6.104c-0.64,2.788 1.143,4.191 1.326,4.346c0.685,0.476 1.095,1.234 1.142,2.034c0.045,0.808 -0.274,1.604 -0.87,2.152c-0.045,0.064 -2.147,2.148 -1.323,4.931c0.363,1.284 0.821,1.416 1.736,1.676c0.776,0.215 2.01,0.581 2.65,1.92c0.319,0.704 0.272,2.024 0,2.737c-0.823,1.864 -1.098,3.322 -0.778,4.359c4.159,-0.425 18.369,-4.203 22.162,-6.223c4.251,-2.239 21.57,-15.921 23.625,-18.219c0.823,-0.928 2.606,-4.305 4.661,-8.23c2.88,-5.548 6.809,-13.142 12.019,-21.445c1.187,-1.919 5.255,-6.946 9.231,-11.798c2.695,-3.346 6.076,-7.509 6.58,-8.299c0.547,-1.403 2.831,-13.887 2.559,-18.991c-0.091,-2.623 0.502,-11.178 1.323,-22.007c0.915,-12.722 2.104,-28.555 2.104,-36.634c0,-1.266 -0.047,-1.842 -0.091,-2.642c-0.138,-1.553 -0.321,-3.898 -0.413,-12.429c-0.045,-4.857 0.047,-10.56 0.138,-16.706c0.183,-10.944 0.366,-23.351 -0.138,-34.839c-0.183,-4.734 -0.73,-11.849 -1.37,-20.448c-1.736,-23.776 -4.387,-59.711 -3.382,-87.521c1.463,-42.511 -4.479,-78.514 -9.733,-101.234c-4.706,-20.344 -4.661,-25.229 -4.614,-34.958c0.044,-3.957 0.091,-8.883 -0.23,-16.112c-1.096,-25.215 -3.976,-78.692 -5.804,-101.842c-1.963,-24.347 0.732,-59.994 1.6,-70.339c3.474,-42.159 -4.386,-57.476 -11.332,-70.993l-1.509,-3.034c-13.708,-27.189 -24.583,-31.558 -31.757,-34.446c-1.691,-0.69 -3.199,-1.307 -4.433,-2.051c-2.01,-1.161 -29.794,-12.155 -44.234,-15.578c-11.377,-2.683 -28.652,-12.324 -41.218,-19.366c-3.882,-2.152 -7.173,-3.98 -9.458,-5.141c-5.757,-2.933 -11.926,-5.41 -17.364,-7.599c-7.403,-2.975 -13.206,-5.324 -16.04,-7.91c-1.051,-0.941 -2.421,-2.23 -3.061,-64.682c-0,-0.909 0.457,-1.768 1.234,-2.276c1.736,-1.183 11.149,-9.45 21.705,-55.909c8.407,-36.917 5.163,-86.574 -7.22,-110.702c-15.4,-29.931 -41.767,-30.305 -55.93,-30.511l-3.153,-0.059c-1.053,-0.041 -3.247,-0.005 -4.342,-0l-1.281,-0c-10.371,0.009 -41.947,0.023 -57.713,30.579c-11.79,22.825 -17.502,72.711 -7.265,110.589c12.064,44.571 17.546,53.258 21.706,56.013c0.776,0.526 1.187,1.408 1.187,2.34c-2.147,61.589 -3.153,63.284 -3.564,64.006c-1.919,3.217 -8.545,6.635 -20.061,12.397c-5.482,2.746 -11.149,5.584 -15.902,8.349c-1.234,0.731 -30.615,17.88 -48.346,22.066c-14.256,3.382 -42.222,14.422 -44.279,15.6l-1.553,0.887c-7.997,4.606 -22.986,13.174 -34.591,35.62l-1.281,2.449c-7.081,13.508 -15.125,28.816 -11.56,71.546c0.868,10.341 3.564,45.96 1.598,70.344c-1.78,22.414 -4.706,76.389 -5.801,101.837c-0.413,9.125 -0.504,14.513 -0.596,19.229c-0.136,7.791 -0.274,13.946 -1.644,32.289c-2.24,29.953 0.183,51.508 5.027,90.148l2.329,18.809c3.291,25.776 5.438,42.807 6.671,57.558c1.83,21.696 3.336,34.669 4.387,44.142c1.189,10.244 1.83,15.888 1.783,23.113c-0.092,9.664 3.929,22.518 7.129,32.85c1.006,3.254 1.965,6.229 2.65,8.741c3.929,14.468 10.692,52.51 11.15,58.039c0.457,5.095 4.386,17.158 5.21,18.598c0.457,0.608 4.386,4.3 7.539,7.266c4.523,4.281 9.231,8.709 10.647,10.45c6.58,7.951 9.55,12.502 11.561,15.504c1.233,1.915 1.918,2.975 2.786,3.684c1.098,0.973 1.234,2.668 0.275,3.806c-0.96,1.124 -2.649,1.261 -3.791,0.302c-1.417,-1.216 -2.376,-2.655 -3.793,-4.83c-1.919,-2.916 -4.8,-7.302 -11.197,-15.03c-1.187,-1.485 -6.214,-6.182 -10.19,-9.961c-6.077,-5.735 -7.813,-7.408 -8.362,-8.244c-1.462,-2.156 -5.574,-15.44 -6.031,-21.093c-0.411,-5.013 -7.176,-42.949 -11.014,-57.074c-0.685,-2.463 -1.599,-5.374 -2.603,-8.559c-3.292,-10.692 -7.448,-23.99 -7.357,-34.5c0.045,-6.886 -0.596,-12.415 -1.738,-22.445c-1.096,-9.505 -2.604,-22.529 -4.431,-44.307c-1.234,-14.641 -3.383,-31.622 -6.627,-57.339l-2.329,-18.808c-4.891,-38.993 -7.359,-60.757 -5.074,-91.227c1.372,-18.192 1.508,-24.283 1.646,-31.987c0.092,-4.748 0.183,-10.176 0.594,-19.357c1.095,-25.489 4.021,-79.561 5.848,-102.034c1.874,-23.976 -0.776,-59.226 -1.598,-69.462c-3.701,-44.293 4.706,-60.341 12.154,-74.502l1.234,-2.431c12.383,-23.848 28.194,-32.933 36.739,-37.813l1.509,-0.873c2.604,-1.517 30.936,-12.68 45.74,-16.176c13.573,-3.208 36.603,-15.45 46.885,-21.477c4.844,-2.861 10.6,-5.735 16.176,-8.522c7.038,-3.51 16.634,-8.321 17.821,-10.328c0.549,-2.522 2.011,-37.607 2.787,-60.016c-4.797,-3.885 -10.556,-13.476 -22.665,-58.185c-10.922,-40.354 -4.523,-90.838 7.678,-114.463c17.319,-33.472 51.316,-33.49 62.51,-33.495l1.234,-0.004c1.142,-0.014 3.427,-0.027 4.57,-0l3.016,0.064c14.211,0.196 43.822,0.616 60.638,33.44c13.116,25.507 16.496,75.74 7.723,114.358c-9.231,40.72 -17.821,53.989 -22.757,58.271c0.183,21.317 0.868,54.455 1.783,59.848c2.468,1.846 8.041,4.094 13.892,6.461c5.529,2.226 11.79,4.752 17.821,7.786c2.329,1.18 5.667,3.053 9.596,5.251c11.652,6.493 29.2,16.309 39.846,18.822c14.668,3.473 43.319,14.737 45.787,16.199c1.006,0.617 2.24,1.102 3.657,1.673c7.492,2.997 19.922,8.01 34.546,37.022l1.553,2.993c7.265,14.161 15.491,30.214 11.834,73.908c-0.821,10.241 -3.472,45.522 -1.6,69.467c1.875,23.2 4.753,76.778 5.851,102.039c0.319,7.366 0.274,12.365 0.227,16.381c-0.044,9.309 -0.091,13.979 4.478,33.697c5.347,23.035 11.38,59.546 9.871,102.636c-0.959,27.523 1.645,63.284 3.383,86.945c0.638,8.66 1.142,15.834 1.37,20.605c0.502,11.652 0.319,24.136 0.136,35.163c-0.091,6.1 -0.183,11.757 -0.136,16.573c0.091,8.34 0.274,10.57 0.366,12.046c0.091,0.927 0.136,1.604 0.136,3.071c-0,8.275 -1.142,23.551 -2.102,37.027c-0.732,9.802 -1.417,19.064 -1.325,21.358c0.274,5.511 -2.055,19.42 -3.153,21.696c-0.457,0.905 -1.966,2.783 -7.22,9.254c-3.472,4.282 -7.814,9.609 -8.818,11.245c-5.074,8.13 -8.956,15.614 -11.837,21.084c-2.559,4.935 -4.112,7.915 -5.39,9.35c-2.468,2.755 -20.153,16.765 -25.088,19.375c-0.868,0.466 -17.364,6.685 -25.042,6.685Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M709.877,698.57c-13.526,0 -22.529,-10.281 -22.665,-10.419c-0.549,-0.68 -0.504,-1.699 0.183,-2.279c0.685,-0.581 1.736,-0.508 2.285,0.178c0.593,0.694 14.759,16.783 34.271,5.058c0.777,-0.457 1.781,-0.224 2.238,0.553c0.458,0.768 0.183,1.764 -0.549,2.221c-5.712,3.422 -11.011,4.688 -15.763,4.688Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M1108.39,703.505c-4.752,0 -10.053,-1.261 -15.765,-4.683c-0.777,-0.462 -1.004,-1.458 -0.549,-2.226c0.457,-0.772 1.463,-1.014 2.24,-0.548c19.512,11.73 33.678,-4.374 34.272,-5.059c0.548,-0.695 1.599,-0.768 2.284,-0.182c0.641,0.58 0.732,1.603 0.136,2.28c-0.091,0.142 -9.092,10.418 -22.618,10.418Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M886.764,913.504c1.736,10.871 6.58,44.704 4.249,69.928c-1.689,18.206 -5.848,44.714 -9.458,68.105c-2.33,14.883 -4.34,27.737 -5.255,35.625c-0.868,7.338 -2.423,17.159 -4.251,28.537c-3.061,19.562 -6.945,43.913 -8.454,64.156c-0.912,12.018 -0.18,23.264 0.549,35.168c1.234,19.21 2.468,39.079 -2.97,64.225c-2.329,10.807 -1.416,27.056 -0.64,41.396c0.413,7.407 0.823,14.399 0.687,19.667c-0.138,5.84 0.228,15.655 0.73,28.08c0.776,19.599 1.736,43.978 1.281,68.411c-0.641,30.333 -0.322,77.852 -0.139,106.242c0.092,9.149 0.139,16.346 0.139,20.404c-0,10.322 0.912,16.61 2.193,25.32c0.776,5.168 1.644,11.154 2.559,19.269c1.279,11.918 5.665,23.196 9.231,30.74c-0,-50.306 2.238,-157.051 4.065,-186.699c0.504,-8.654 1.234,-18.904 1.966,-29.528c2.01,-29.259 4.34,-62.425 3.197,-71.245c-1.278,-9.984 -6.488,-64.7 -3.563,-80.278c2.925,-15.472 19.146,-122.67 21.431,-141.606c2.332,-19.352 4.844,-87.42 3.291,-120.317c-3.108,-64.495 5.848,-87.361 8.773,-94.868c0.045,-0.046 0.045,-0.096 0.045,-0.138c-1.781,-0.141 -4.797,-0.1 -7.767,-0.068c-5.667,0.064 -13.115,0.16 -21.889,-0.526Zm-6.809,738.826c-0.868,0 -1.736,-0.461 -2.238,-1.256c-0.549,-0.814 -12.705,-20.243 -15.126,-42.456c-0.868,-8.024 -1.736,-13.946 -2.512,-19.064c-1.281,-8.934 -2.24,-15.386 -2.24,-26.106c-0,-4.054 -0.045,-11.237 -0.136,-20.367c-0.183,-28.422 -0.505,-75.978 0.136,-106.38c0.457,-24.278 -0.502,-48.574 -1.279,-68.095c-0.504,-12.53 -0.87,-22.418 -0.732,-28.437c0.136,-5.044 -0.274,-11.931 -0.64,-19.215c-0.868,-14.682 -1.783,-31.328 0.732,-42.839c5.254,-24.42 4.021,-43.909 2.834,-62.75c-0.732,-12.095 -1.464,-23.519 -0.549,-35.916c1.553,-20.463 5.437,-44.933 8.545,-64.6c1.781,-11.314 3.336,-21.089 4.204,-28.314c0.912,-7.987 2.923,-20.887 5.254,-35.825c3.611,-23.318 7.723,-49.74 9.414,-67.776c2.742,-29.081 -4.661,-71.536 -4.752,-71.961c-0.139,-0.836 0.136,-1.686 0.685,-2.303c0.593,-0.613 1.416,-0.878 2.284,-0.855c9.963,1.001 18.508,0.896 24.722,0.823c7.906,-0.074 11.194,-0.137 12.933,1.796c0.685,0.772 1.004,1.759 0.868,2.791c-0.092,0.773 -0.413,1.6 -0.96,2.98c-2.834,7.247 -11.471,29.295 -8.454,92.643c1.6,33.116 -0.959,101.696 -3.291,121.213c-2.285,18.982 -18.506,126.453 -21.476,141.971c-2.697,14.184 2.055,66.684 3.61,78.579c1.187,9.354 -1.006,41.364 -3.199,72.313c-0.732,10.606 -1.417,20.838 -1.966,29.479c-1.919,31.941 -4.34,153.583 -3.929,197.204c-0,1.201 -0.823,2.271 -1.966,2.609c-0.227,0.078 -0.502,0.114 -0.776,0.114Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M874.29,1938.56c-2.787,0 -5.529,-0.365 -8.18,-1.188c-21.797,-6.489 -27.281,-20.243 -29.475,-29.976c-2.604,-11.607 0.275,-35.871 4.478,-51.682c4.251,-16.131 7.77,-41.766 7.814,-41.994c0.183,-1.508 1.555,-2.468 3.017,-2.33c1.461,0.182 2.512,1.553 2.331,3.015c-0.183,1.097 -3.61,26.275 -7.952,42.726c-4.569,17.136 -6.58,39.572 -4.433,49.077c1.921,8.408 6.673,20.289 25.773,26.001c17.319,5.163 39.573,-12.246 51.546,-21.614l1.187,-0.96c8.316,-6.489 5.759,-28.697 4.525,-39.344c-0.322,-2.833 -0.596,-5.027 -0.596,-6.169c0,-2.513 -3.061,-19.192 -5.757,-33.906c-4.661,-25.315 -7.447,-40.898 -7.128,-43.868c0.41,-3.518 2.376,-5.575 4.478,-7.768c1.783,-1.874 3.793,-4.021 5.484,-7.722c2.559,-5.667 -1.919,-14.075 -3.884,-16.817c-0.366,-0.457 -0.549,-1.051 -0.502,-1.69c0.044,-0.823 0.044,-1.966 0.044,-3.336c0.138,-10.876 0.502,-39.756 17.136,-91.081c4.797,-14.81 39.618,-126.618 44.004,-158.011c10.373,-74.868 3.794,-132.147 1.007,-156.603c-0.685,-6.252 -1.143,-10.021 -1.051,-11.941c0.457,-10.35 3.289,-52.317 8.454,-68.607c5.254,-16.574 42.953,-158.477 48.391,-186.763c5.665,-29.428 19.421,-137.695 19.421,-156.773c-0,-11.424 -1.783,-31.338 -3.519,-50.594c-1.234,-13.933 -2.421,-27.08 -2.834,-36.259c-0.549,-11.434 -10.007,-64.756 -13.16,-82.281l-1.097,-6.351c-1.828,-10.542 -5.255,-19.334 -8.544,-27.838c-3.199,-8.129 -6.443,-16.533 -8.135,-26.17l-0.729,-4.126c-3.336,-18.881 -3.702,-20.851 -3.702,-71.802c-0,-19.735 8.363,-55.063 13.343,-76.175c1.051,-4.569 1.965,-8.476 2.604,-11.387c3.61,-16.281 22.345,-66.542 23.169,-68.676c0.502,-1.398 2.055,-2.111 3.472,-1.581c1.37,0.526 2.101,2.075 1.553,3.473c-0.183,0.517 -19.421,52.034 -22.893,67.945c-0.685,2.929 -1.6,6.855 -2.695,11.465c-4.891,20.883 -13.115,55.826 -13.162,74.936c-0,50.476 0.321,52.404 3.61,70.865l0.732,4.136c1.599,9.107 4.614,16.889 7.86,25.142c3.381,8.755 6.944,17.803 8.818,28.875l1.143,6.328c3.427,19.467 12.657,71.19 13.206,82.966c0.411,9.061 1.6,22.166 2.834,36.031c1.736,19.375 3.519,39.412 3.519,51.078c-0,19.841 -13.665,127.372 -19.513,157.792c-5.437,28.386 -43.274,170.751 -48.529,187.366c-4.935,15.582 -7.769,57.65 -8.227,67.232c-0.044,1.49 0.413,5.515 1.054,11.081c2.786,24.662 9.411,82.412 -1.098,157.956c-4.706,34.195 -43.777,157.742 -44.188,158.93c-16.359,50.581 -16.725,78.82 -16.861,89.468c0,1.051 0,1.918 -0.047,2.65c1.874,2.924 7.678,13.023 3.932,21.34c-2.058,4.569 -4.525,7.174 -6.536,9.276c-1.874,1.965 -2.786,3.016 -2.969,4.615c-0.23,2.742 3.973,25.59 7.037,42.268c3.655,19.787 5.848,32.079 5.848,34.912c-0,1.052 0.274,3.016 0.549,5.53c1.461,12.566 4.157,35.871 -6.535,44.233l-1.187,0.96c-11.058,8.636 -30.343,23.67 -48.255,23.715Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M743.691,928.383c-1.461,-0 -2.651,-1.161 -2.695,-2.623c-1.143,-41.249 1.963,-62.064 4.705,-80.424c0.685,-4.465 1.326,-8.829 1.919,-13.362c1.372,-11.058 8.773,-51.645 12.749,-73.451c1.19,-6.763 2.102,-11.739 2.424,-13.499c1.918,-11.067 5.437,-20.119 8.817,-28.87c3.245,-8.253 6.261,-16.039 7.861,-25.147l0.73,-4.14c3.291,-18.456 3.61,-20.389 3.61,-70.864c-0,-19.11 -8.269,-54.063 -13.205,-74.946c-1.051,-4.601 -2.01,-8.522 -2.65,-11.451c-3.474,-15.916 -22.712,-67.433 -22.895,-67.949c-0.547,-1.399 0.183,-2.948 1.555,-3.469c1.417,-0.535 2.97,0.183 3.472,1.576c0.823,2.135 19.559,52.4 23.169,68.681c0.638,2.911 1.553,6.804 2.604,11.374c4.98,21.111 13.298,56.443 13.343,76.184c-0,50.951 -0.366,52.925 -3.702,71.806l-0.732,4.126c-1.689,9.642 -4.933,18.046 -8.133,26.179c-3.291,8.499 -6.718,17.292 -8.545,27.829c-0.275,1.759 -1.187,6.759 -2.421,13.544c-3.976,21.76 -11.333,62.256 -12.705,73.168c-0.593,4.57 -1.234,8.966 -1.919,13.476c-2.695,18.136 -5.756,38.704 -4.661,79.478c0.047,1.49 -1.142,2.732 -2.604,2.774l-0.091,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M745.976,1053.86c-0.868,-0 -1.6,-0.708 -1.645,-1.59l-2.193,-124.53c-0.047,-0.891 0.685,-1.631 1.598,-1.649c0.823,0.173 1.599,0.698 1.646,1.594l2.194,124.53c0.044,0.891 -0.685,1.627 -1.6,1.645Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M845.272,1817.24c-9.596,0 -26.915,-2.833 -36.007,-21.659c-8.271,-17.045 -4.525,-34.638 1.187,-55.886l2.285,-8.362c5.073,-18.781 12.064,-44.508 11.745,-48.94c-0.092,-1.052 -0.824,-1.92 -2.194,-3.427c-2.742,-3.062 -6.809,-7.604 -6.169,-18.38c0.458,-7.759 3.563,-13.238 4.753,-15.074c0.366,-3.967 1.689,-26.257 -7.542,-55.978c-0.364,-1.142 -1.506,-4.267 -3.289,-8.951c-9.277,-24.855 -33.906,-90.871 -42.909,-141.173c-10.783,-60.464 -5.482,-87.484 -0.319,-113.608c2.377,-12.251 4.661,-23.826 5.072,-38.462c0.41,-13.243 -4.797,-43.014 -8.59,-64.755c-1.919,-10.976 -3.566,-20.449 -4.068,-25.435c-1.6,-14.824 -15.902,-142.968 -15.902,-142.968l5.346,-0.603c0,0 14.305,128.167 15.902,142.991c0.504,4.812 2.149,14.207 4.023,25.091c4.065,23.186 9.092,52.048 8.682,65.83c-0.413,15.088 -2.742,26.869 -5.21,39.352c-5.027,25.636 -10.235,52.148 0.41,111.617c8.865,49.827 33.404,115.505 42.635,140.235c1.783,4.84 3.016,8.065 3.382,9.235c10.465,33.861 7.814,57.842 7.676,58.843c-0.045,0.466 -0.228,0.914 -0.502,1.293c-0.045,0.05 -3.702,5.095 -4.159,12.845c-0.502,8.522 2.285,11.657 4.799,14.444c1.645,1.828 3.336,3.747 3.519,6.672c0.366,4.981 -4.478,23.305 -11.928,50.722l-2.238,8.317c-6.489,24.127 -8.408,38.064 -1.553,52.139c11.102,22.984 35.916,18.415 36.967,18.232c1.461,-0.32 2.878,0.64 3.153,2.102c0.274,1.462 -0.641,2.879 -2.102,3.153c-0.092,0.046 -2.787,0.548 -6.855,0.548Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M800.17,522.921c-0.549,-0 -0.959,-0.023 -1.187,-0.073c-0.868,-0.192 -1.417,-1.056 -1.189,-1.933c0.183,-0.864 1.006,-1.44 1.919,-1.225c7.22,1.576 70.692,-9.656 74.577,-13.256c1.233,-2.482 3.152,-20.828 4.067,-31.768c0.089,-0.882 0.685,-1.595 1.736,-1.476c0.913,0.073 1.553,0.859 1.508,1.746c-0.274,2.956 -2.467,29.021 -4.525,33.156c-2.925,5.785 -66.577,14.829 -76.906,14.829Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M996.753,522.921c-10.326,-0 -73.981,-9.044 -76.859,-14.829c-2.102,-4.135 -4.295,-30.2 -4.57,-33.156c-0.047,-0.887 0.594,-1.673 1.509,-1.746c1.05,-0.105 1.644,0.594 1.735,1.476c0.915,10.94 2.879,29.286 4.204,31.978c3.746,3.381 67.265,14.636 74.439,13.046c0.914,-0.224 1.735,0.347 1.965,1.225c0.183,0.877 -0.366,1.741 -1.234,1.933c-0.229,0.05 -0.64,0.073 -1.189,0.073Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M962.803,920.999c-30.16,-0 -57.258,-15.747 -62.468,-18.946c-45.056,25.85 -77.819,19.197 -97.376,8.998c-21.341,-11.123 -31.714,-28.258 -32.125,-28.985c-0.457,-0.772 -0.228,-1.764 0.549,-2.216c0.776,-0.462 1.736,-0.211 2.238,0.557c0.091,0.174 10.373,17.168 30.983,27.838c27.143,14.111 59.998,10.816 94.954,-9.482c0.505,-0.316 1.19,-0.297 1.692,0.041c0.41,0.251 41.034,26.11 79.008,16.953c18.323,-4.423 33.22,-16.313 44.234,-35.332c0.41,-0.777 1.414,-1.046 2.193,-0.584c0.777,0.447 1.051,1.43 0.594,2.206c-11.471,19.823 -27.052,32.229 -46.29,36.863c-6.077,1.467 -12.202,2.089 -18.186,2.089Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M900.382,901.779c-0.915,-0 -1.645,-0.722 -1.645,-1.613l-0.366,-81.412c-0.047,-0.895 0.685,-1.617 1.6,-1.622c0.868,0 1.598,0.718 1.598,1.608l0.412,81.412c0,0.896 -0.731,1.622 -1.599,1.627Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M874.473,212.167c-0.047,0 -0.092,-0.004 -0.183,-0.009c-0.502,-0.059 -12.201,-1.431 -20.198,-5.067c-0.823,-0.371 -1.189,-1.326 -0.823,-2.144c0.366,-0.813 1.326,-1.165 2.149,-0.799c7.539,3.418 19.146,4.784 19.238,4.798c0.912,0.096 1.552,0.9 1.416,1.791c-0.091,0.822 -0.778,1.43 -1.599,1.43Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M928.622,211.44c-0.778,0 -1.463,-0.571 -1.599,-1.37c-0.139,-0.882 0.502,-1.714 1.37,-1.847c4.386,-0.667 16.587,-2.791 19.969,-4.528c0.777,-0.439 1.736,-0.114 2.147,0.686c0.457,0.79 0.138,1.768 -0.685,2.179c-4.479,2.349 -20.289,4.762 -20.974,4.867c-0.047,0.009 -0.138,0.013 -0.228,0.013Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M896.04,195.264c-34.638,0 -57.073,-16.418 -58.032,-17.135c-0.732,-0.535 -0.868,-1.549 -0.366,-2.262c0.548,-0.727 1.553,-0.873 2.284,-0.339c0.228,0.174 23.991,17.579 59.175,16.46c36.42,-1.033 63.014,-12.653 63.289,-12.767c0.823,-0.348 1.783,0.004 2.149,0.822c0.365,0.818 -0,1.768 -0.824,2.134c-0.274,0.123 -27.417,11.991 -64.523,13.046c-1.05,0.028 -2.101,0.041 -3.152,0.041Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M953.434,1317.62c-0.275,0 -0.594,-0.087 -0.868,-0.274c-14.532,-9.665 -30.251,-2.335 -30.387,-2.271c-0.777,0.384 -1.783,0.055 -2.149,-0.759c-0.411,-0.804 -0.045,-1.768 0.732,-2.157c0.732,-0.333 17.502,-8.225 33.587,2.495c0.729,0.494 0.959,1.504 0.457,2.244c-0.321,0.466 -0.823,0.722 -1.372,0.722Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M795.465,1300.88c-0.549,-0 -1.098,-0.288 -1.373,-0.809c-0.455,-0.777 -0.183,-1.76 0.549,-2.207c0.685,-0.393 16.862,-9.523 33.678,-0.037c0.777,0.444 1.051,1.431 0.641,2.208c-0.458,0.781 -1.464,1.032 -2.24,0.611c-15.217,-8.581 -30.296,-0.063 -30.434,0.014c-0.273,0.147 -0.547,0.22 -0.821,0.22Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M851.578,1815.69c-0.821,-0 -1.553,-0.64 -1.6,-1.508c-0.091,-0.869 0.596,-1.645 1.464,-1.736c11.698,-0.915 21.112,-5.575 28.058,-13.846c12.976,-15.491 13.708,-40.03 13.159,-45.285c-0.046,-0.685 -1.006,-4.249 -2.101,-8.362c-5.074,-19.101 -15.583,-58.81 -10.695,-71.011c6.033,-15.125 -0.776,-22.889 -1.095,-23.214c-0.594,-0.658 -0.549,-1.681 0.136,-2.284c0.64,-0.594 1.646,-0.567 2.24,0.087c0.366,0.379 8.59,9.477 1.736,26.599c-4.523,11.241 6.214,51.728 10.783,69c1.509,5.484 2.149,7.952 2.241,8.865c-0,0.274 1.782,28.971 -13.939,47.706c-7.492,8.957 -17.682,13.984 -30.249,14.989l-0.138,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M852.95,1751.35l-0.183,0c-10.922,-0.045 -16.132,-4.569 -18.553,-8.317c-2.695,-4.112 -2.742,-8.27 -2.742,-8.407c0.047,-0.914 0.732,-1.6 1.645,-1.6c0.868,0 1.599,0.686 1.599,1.6c0,0.548 0.275,13.434 18.051,13.48l0.183,-0c15.672,-0 17.547,-5.255 19.282,-13.8c0.183,-0.868 1.051,-1.463 1.919,-1.28c0.868,0.183 1.417,1.051 1.234,1.92c-2.238,11.104 -6.167,16.404 -22.435,16.404Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M894.853,1879.85c-16.224,-0 -20.197,-5.301 -22.438,-16.405c-0.183,-0.868 0.411,-1.736 1.281,-1.874c0.868,-0.228 1.736,0.366 1.919,1.234c1.736,8.545 3.563,13.8 19.282,13.8l0.139,0c17.82,-0.045 18.048,-12.932 18.048,-13.48c0,-0.868 0.732,-1.599 1.647,-1.599c0.868,-0 1.597,0.731 1.597,1.599c0,0.183 0,4.296 -2.695,8.408c-2.468,3.793 -7.678,8.271 -18.553,8.317l-0.227,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M1107.15,998.306c-0.502,0 -1.007,-0.242 -1.326,-0.69c-0.136,-0.155 -3.244,-3.769 -16.129,-3.769c-0.915,-0 -1.647,-0.727 -1.647,-1.618c0,-0.896 0.732,-1.618 1.647,-1.618c14.987,0 18.459,4.661 18.78,5.191c0.502,0.745 0.319,1.75 -0.457,2.239c-0.275,0.179 -0.549,0.265 -0.868,0.265Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M1062.92,1070.59c-0.776,0 -1.461,-0.571 -1.599,-1.366c-0.137,-0.891 0.504,-1.713 1.372,-1.855c10.417,-1.604 25.451,-7.846 35.14,-12.694c7.22,-3.615 30.661,-19.969 30.889,-20.138c0.732,-0.517 1.738,-0.329 2.284,0.401c0.505,0.736 0.322,1.746 -0.41,2.258c-0.959,0.676 -23.899,16.652 -31.302,20.367c-3.61,1.8 -22.208,10.857 -36.099,13.009c-0.092,0.014 -0.183,0.018 -0.275,0.018Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M1065.34,1082.77c-0.732,0 -1.417,-0.493 -1.6,-1.229c-0.23,-0.873 0.319,-1.746 1.187,-1.965c11.653,-2.865 22.939,-6.726 31.712,-10.88c8.912,-4.195 26.003,-22.341 26.186,-22.519c0.638,-0.658 1.644,-0.685 2.285,-0.068c0.638,0.607 0.685,1.635 0.089,2.285c-0.73,0.767 -17.729,18.771 -27.143,23.227c-9.001,4.245 -20.516,8.183 -32.351,11.103c-0.138,0.028 -0.274,0.046 -0.365,0.046Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M1104.55,1028.68c-0.596,0 -1.143,-0.324 -1.464,-0.886c-0.41,-0.795 -0.045,-1.769 0.732,-2.175c0.136,-0.064 13.115,-6.818 20.333,-22.359c0.366,-0.805 1.325,-1.17 2.149,-0.786c0.823,0.375 1.187,1.339 0.776,2.143c-7.675,16.601 -21.248,23.602 -21.797,23.89c-0.227,0.114 -0.502,0.173 -0.729,0.173Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M745.793,1042.91c-0.228,-0 -0.458,-0.05 -0.685,-0.151c-5.621,-2.618 -9.871,-4.679 -9.871,-4.679c-0.777,-0.389 -1.143,-1.362 -0.732,-2.157c0.366,-0.813 1.325,-1.133 2.149,-0.754c-0,0 4.25,2.043 9.824,4.657c0.776,0.383 1.142,1.347 0.776,2.152c-0.272,0.589 -0.868,0.932 -1.461,0.932Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M745.291,1017.44c-0.366,-0 -0.732,-0.124 -1.006,-0.366c-4.157,-3.395 -7.767,-7.334 -10.739,-11.707c-0.456,-0.745 -0.273,-1.746 0.457,-2.248c0.732,-0.503 1.736,-0.307 2.24,0.439c2.787,4.112 6.17,7.813 10.099,11.007c0.685,0.563 0.776,1.586 0.227,2.276c-0.319,0.393 -0.776,0.599 -1.278,0.599Z"
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M175.656,111.35c-0.87,-0 -1.798,0.144 -2.558,0.585c-1.126,0.656 -1.845,1.903 -2.205,3.818c-1.038,5.499 1.236,10.274 3.649,15.332c1.16,2.442 2.367,4.971 3.138,7.553l0.36,1.293c1.12,4.044 2.071,6.266 2.825,6.602c0.105,0.012 0.198,0.023 0.285,0.023c-0.685,-2.355 -1.758,-6.862 -3.29,-15.419c-1.16,-6.521 -1.363,-15.604 -1.392,-19.747c-0.261,-0.029 -0.534,-0.04 -0.812,-0.04Zm5.662,40.601c-0.377,0 -0.778,-0.028 -1.201,-0.08c-4.536,-0.593 -6.184,-6.556 -7.275,-10.507l-0.33,-1.183c-0.65,-2.187 -1.717,-4.414 -2.843,-6.776c-2.546,-5.354 -5.441,-11.422 -4.078,-18.649c0.83,-4.387 3.092,-6.504 4.844,-7.508c4.2,-2.413 9.096,-0.771 9.641,-0.58c1.079,0.39 1.799,1.422 1.787,2.57c-0,0.128 -0.122,12.936 1.311,20.948c2.396,13.447 3.58,16.225 3.631,16.336c0.285,0.649 0.337,1.455 0.082,2.123c-0.505,1.305 -2.211,3.306 -5.569,3.306Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M254.771,5.394c-0.552,-0 -1.068,0.005 -1.445,0.017l-3.144,0.059c-14.166,0.208 -40.538,0.591 -55.91,30.512c-12.386,24.128 -15.634,73.79 -7.246,110.708c8.858,38.983 19.41,54.767 23.755,57.662c3.348,2.234 38.403,16.765 45.533,16.765l0.388,-0.035c0.094,-0.011 0.192,-0.011 0.285,-0.011c10.923,0.301 39.267,-14.114 43.165,-16.719c6.596,-4.391 14.596,-23.83 23.785,-57.767c10.256,-37.881 4.525,-87.77 -7.269,-110.597c-15.773,-30.537 -47.331,-30.566 -57.703,-30.577l-2.112,-0.005c-0.632,-0.007 -1.386,-0.012 -2.082,-0.012Zm1.746,221.107c-8.812,-0 -44.871,-15.088 -48.729,-17.659c-6.619,-4.419 -17.403,-23.036 -26.018,-60.956c-8.777,-38.619 -5.395,-88.856 7.704,-114.363c16.852,-32.804 46.42,-33.24 60.627,-33.444l3.051,-0.063c0.917,-0.024 2.535,-0.017 3.748,-0.005l2.071,0.011c11.184,0.011 45.207,0.041 62.489,33.495c12.205,23.627 18.609,74.115 7.686,114.472c-12.745,47.07 -20.588,57.246 -26,60.853c-3.116,2.077 -32.643,17.629 -45.858,17.629c-0.104,0 -0.203,0 -0.301,-0.005l-0.464,0.035l-0.006,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M335.028,111.39c-0.092,4.148 -0.44,13.221 -1.705,19.724c-1.659,8.528 -2.802,13.018 -3.522,15.367c0.105,-0.006 0.215,-0.011 0.343,-0.029c0.702,-0.314 1.688,-2.523 2.865,-6.56l0.378,-1.271c0.812,-2.576 2.059,-5.082 3.26,-7.502c2.488,-5.017 4.838,-9.757 3.886,-15.279c-0.33,-1.932 -1.038,-3.191 -2.157,-3.858c-1.033,-0.615 -2.315,-0.667 -3.348,-0.592Zm-5.336,40.481c-3.446,-0 -5.169,-2.06 -5.663,-3.389c-0.272,-0.731 -0.209,-1.543 0.163,-2.226c-0,-0.013 1.23,-2.768 3.84,-16.175c1.555,-7.994 1.636,-20.797 1.636,-20.923c0.006,-1.15 0.743,-2.171 1.827,-2.542c0.552,-0.186 5.453,-1.764 9.636,0.731c1.735,1.027 3.962,3.18 4.716,7.576c1.253,7.257 -1.734,13.278 -4.368,18.592c-1.166,2.338 -2.262,4.554 -2.947,6.724l-0.342,1.166c-1.149,3.933 -2.883,9.879 -7.437,10.407c-0.371,0.04 -0.725,0.059 -1.061,0.059Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M90.085,1091.82c-7.663,0 -24.121,-6.21 -25.003,-6.68c-4.612,-2.44 -22.346,-16.32 -25.101,-19.38c-1.294,-1.43 -2.843,-4.42 -5.413,-9.36c-2.848,-5.46 -6.74,-12.95 -11.811,-21.07c-1.021,-1.629 -5.354,-6.96 -8.84,-11.249c-5.256,-6.461 -6.741,-8.341 -7.182,-9.241c-1.148,-2.35 -3.458,-16.06 -3.185,-21.71c0.087,-1.85 -0.493,-8.47 -1.16,-16.14c-1.218,-13.9 -2.883,-32.95 -2.251,-42.429l0.157,-1.951c0.15,-1.679 0.25,-2.799 0.336,-12.99c0.041,-4.78 -0.046,-10.4 -0.139,-16.46c-0.174,-11.05 -0.371,-23.579 0.145,-35.256c0.209,-4.781 0.737,-11.957 1.369,-20.624c1.74,-23.662 4.362,-59.42 3.394,-86.935c-1.52,-43.049 4.524,-79.578 9.861,-102.643c4.566,-19.713 4.525,-24.381 4.456,-33.693c-0.035,-4.014 -0.076,-9.015 0.249,-16.388c1.097,-25.258 3.986,-78.83 5.83,-102.039c1.903,-23.925 -0.736,-59.219 -1.589,-69.463c-3.887,-46.635 5.256,-62.64 13.319,-76.766c15.611,-27.339 24.997,-32.091 35.862,-37.595l2.576,-1.317c2.842,-1.474 30.989,-12.659 45.631,-16.117c10.639,-2.517 28.24,-12.344 39.888,-18.847c3.916,-2.187 7.246,-4.049 9.578,-5.233c5.934,-3.005 12.454,-5.61 18.203,-7.901c5.268,-2.105 11.741,-4.687 13.395,-6.12c0.801,-5.076 1.589,-39.928 1.908,-61.422c0.023,-1.484 0.975,-2.667 2.738,-2.656c1.491,0.023 2.68,1.247 2.658,2.739c-0.917,61.896 -2.089,63.458 -2.715,64.292c-1.828,2.442 -6.736,4.484 -15.988,8.174c-5.645,2.257 -12.043,4.81 -17.763,7.709c-2.286,1.155 -5.546,2.982 -9.386,5.122c-12.617,7.049 -29.904,16.703 -41.274,19.388c-14.463,3.417 -42.337,14.596 -44.391,15.664l-2.622,1.339c-10.505,5.319 -18.806,9.52 -33.466,35.195c-8.203,14.357 -16.527,28.941 -12.779,73.899c0.864,10.349 3.532,46.009 1.589,70.344c-1.839,23.146 -4.716,76.626 -5.818,101.843c-0.314,7.234 -0.273,12.159 -0.244,16.115c0.081,9.735 0.116,14.619 -4.589,34.952c-5.267,22.746 -11.225,58.771 -9.722,101.24c0.974,27.805 -1.665,63.736 -3.406,87.515c-0.632,8.604 -1.16,15.721 -1.368,20.46c-0.505,11.525 -0.314,23.965 -0.14,34.946c0.099,6.1 0.186,11.769 0.145,16.589c-0.093,10.401 -0.191,11.54 -0.359,13.42l-0.145,1.83c-0.609,9.07 1.038,27.87 2.239,41.6c0.818,9.36 1.276,14.75 1.172,16.87c-0.244,5.1 2.042,17.58 2.668,19.13c0.401,0.65 3.782,4.82 6.503,8.161c3.945,4.849 8.023,9.88 9.224,11.799c5.186,8.29 9.136,15.89 12.02,21.43c2.041,3.93 3.805,7.31 4.64,8.24c2.065,2.29 19.358,15.97 23.622,18.22c3.806,2.02 18.019,5.8 22.195,6.22c0.284,-1.03 0.023,-2.49 -0.783,-4.35c-0.308,-0.72 -0.336,-2.04 -0.006,-2.74c0.633,-1.34 1.885,-1.7 2.64,-1.92c0.887,-0.25 1.38,-0.39 1.757,-1.67c0.819,-2.8 -1.293,-4.88 -1.38,-4.96c-0.586,-0.57 -0.894,-1.38 -0.824,-2.19c0.069,-0.81 0.493,-1.56 1.166,-2.01c0.162,-0.12 1.943,-1.52 1.299,-4.3c-0.847,-3.69 -4.008,-6.11 -4.043,-6.13c-0.789,-0.59 -1.201,-1.57 -1.056,-2.55c0.139,-0.97 0.801,-1.79 1.723,-2.14l-0.005,0c-0.059,0 1.624,-1.2 0.916,-6.37c-0.528,-3.91 -3.086,-9.23 -5.558,-14.38c-3.109,-6.48 -6.329,-13.179 -6.642,-18.939c-0.522,-9.641 -5.998,-41.781 -8.028,-47.11c-0.731,-1.911 -3.934,-7.701 -17.218,-25.071c-3.637,-4.77 -4.948,-7.699 -5.842,-10.199c-4.82,-13.421 -5.615,-20.471 -1.728,-53.911c2.419,-20.793 11.039,-52.206 18.65,-79.923c4.937,-17.989 9.206,-33.531 10.761,-42.551c1.363,-7.896 3.26,-14.438 5.274,-21.365c3.834,-13.187 8.179,-28.13 9.519,-56.682c0.435,-9.3 0.725,-16.598 0.957,-22.532c0.83,-20.867 0.998,-25.212 4.676,-40.463c5.748,-23.848 23.297,-97.643 23.297,-97.643l5.244,1.253c-0,0 -17.548,73.807 -23.297,97.655c-3.55,14.735 -3.701,18.5 -4.531,39.407c-0.232,5.953 -0.522,13.261 -0.963,22.578c-1.369,29.19 -5.807,44.459 -9.722,57.929c-1.967,6.781 -3.829,13.18 -5.14,20.779c-1.601,9.282 -5.9,24.938 -10.877,43.062c-7.553,27.532 -16.121,58.735 -18.488,79.116c-3.98,34.2 -2.82,39.59 1.444,51.47c0.749,2.091 1.857,4.571 4.897,8.55c10.749,14.05 16.625,22.69 18.122,26.62c2.193,5.75 7.825,38.541 8.377,48.74c0.255,4.681 3.237,10.89 6.12,16.9c2.779,5.771 5.395,11.23 6.045,15.98c0.655,4.83 -0.267,7.8 -1.439,9.6c1.415,1.59 3.103,4.01 3.811,7.11c0.795,3.42 -0.191,6.13 -1.485,7.94c1.218,2.02 2.112,4.94 1.143,8.25c-0.83,2.81 -2.477,4.11 -3.846,4.76c1.044,3.47 0.661,6.36 -1.137,8.61c-0.58,0.72 -1.839,1.02 -3.521,1.02Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M91.5,1082.79c-0.244,0 -0.493,-0.06 -0.725,-0.17c-0.383,-0.19 -9.444,-4.75 -14.897,-9.51c-8.597,-7.48 -15.187,-14.33 -17.525,-17.12c-1.451,-1.72 -3.202,-9.05 -5.714,-20.04c-1.108,-4.83 -2.147,-9.389 -2.704,-10.879c-0.087,-0.24 -8.133,-24.661 -1.212,-29.681c1.572,-1.13 3.301,-1.459 4.966,-0.959c4.641,1.39 7.976,8.849 10.366,15.179c0.522,1.38 1.132,3.701 1.972,6.9c2.298,8.71 6.567,24.92 11.058,29.95c8.515,9.54 13.133,6.44 13.173,6.41c0.714,-0.52 1.724,-0.38 2.251,0.32c0.534,0.71 0.424,1.69 -0.261,2.23c-0.278,0.23 -6.845,5.24 -17.577,-6.8c-5.006,-5.61 -9.241,-21.689 -11.77,-31.289c-0.789,-2.991 -1.41,-5.351 -1.775,-6.321c-3.127,-8.3 -5.912,-12.74 -8.366,-13.48c-0.458,-0.14 -1.16,-0.23 -2.134,0.48c-3.521,2.551 -0.058,19.47 2.343,25.931c0.627,1.689 1.648,6.14 2.82,11.279c1.479,6.48 3.956,17.31 5.047,18.69c2.181,2.6 8.771,9.45 17.165,16.77c5.14,4.48 14.131,9 14.224,9.04c0.795,0.4 1.12,1.37 0.725,2.17c-0.284,0.56 -0.858,0.9 -1.45,0.9Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M93.884,1070.6c-0.261,0 -0.527,-0.06 -0.771,-0.19c-0.621,-0.34 -15.286,-8.28 -18.848,-10.35c-3.66,-2.14 -18.708,-15.13 -19.346,-15.68c-0.679,-0.59 -0.754,-1.61 -0.169,-2.28c0.586,-0.68 1.619,-0.76 2.28,-0.17c4.293,3.71 16.04,13.68 18.865,15.33c3.522,2.05 18.61,10.22 18.761,10.3c0.783,0.43 1.079,1.41 0.649,2.2c-0.29,0.54 -0.846,0.84 -1.421,0.84Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M75.878,1049.16c-0.325,0 -0.656,-0.1 -0.94,-0.3c-0.435,-0.31 -10.622,-7.6 -14.085,-10.27c-3.579,-2.77 -9.577,-10.18 -9.833,-10.5c-0.562,-0.69 -0.452,-1.71 0.244,-2.269c0.684,-0.561 1.711,-0.451 2.274,0.24c0.058,0.079 6.01,7.429 9.293,9.959c3.417,2.64 13.882,10.13 13.987,10.2c0.73,0.52 0.893,1.53 0.376,2.26c-0.318,0.44 -0.812,0.68 -1.316,0.68Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M188.117,525.278c-10.778,0 -23.158,-0.824 -32.73,-2.802c-19.781,-4.078 -30.827,-24.183 -31.285,-25.042c-0.43,-0.784 -0.134,-1.764 0.65,-2.188c0.8,-0.422 1.769,-0.139 2.192,0.651c0.111,0.196 10.813,19.641 29.093,23.412c19.306,3.979 48.363,3.011 53.897,0.87c5.848,-2.261 18.1,-12.35 18.221,-12.449c0.685,-0.569 1.712,-0.469 2.28,0.215c0.569,0.691 0.47,1.712 -0.214,2.28c-0.522,0.429 -12.792,10.522 -19.115,12.971c-3.307,1.282 -12.373,2.082 -22.989,2.082Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M258.025,673.263c-0.151,0 -0.302,-0.006 -0.458,-0.017c-2.674,-0.169 -5.83,-1.984 -5.923,-6.537c-0.052,-2.623 0.684,-4.572 2.193,-5.796c2.198,-1.781 5.035,-1.183 5.354,-1.114c0.87,0.203 1.416,1.073 1.212,1.943c-0.203,0.865 -1.061,1.405 -1.937,1.213c-0.435,-0.093 -1.775,-0.192 -2.599,0.481c-0.684,0.57 -1.021,1.643 -0.986,3.202c0.058,2.785 1.833,3.312 2.889,3.376c1.317,0.071 2.645,-0.539 2.761,-1.328c0.134,-0.876 0.905,-1.513 1.839,-1.362c0.882,0.132 1.491,0.95 1.364,1.839c-0.349,2.36 -2.814,4.1 -5.709,4.1Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M77.206,665.89c-0.667,0 -1.287,-0.412 -1.525,-1.073c-7.634,-21.446 -28.826,-17.966 -29.702,-17.815c-0.922,0.093 -1.717,-0.435 -1.873,-1.311c-0.157,-0.882 0.423,-1.718 1.305,-1.88c0.249,-0.028 24.759,-4.119 33.321,19.915c0.296,0.841 -0.139,1.77 -0.98,2.072c-0.18,0.063 -0.366,0.092 -0.546,0.092Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M410.39,1056.83c-0.54,0 -1.079,-0.17 -1.555,-0.5c-1.218,-0.86 -1.508,-2.54 -0.649,-3.76l1.183,-1.68c3.585,-5.1 8.498,-12.1 14.717,-19.62c1.444,-1.74 6.144,-6.17 10.691,-10.459c3.139,-2.961 7.049,-6.651 7.617,-7.37c0.743,-1.311 4.647,-13.38 5.088,-18.49c0.464,-5.51 7.251,-43.551 11.184,-58.031c0.685,-2.51 1.613,-5.479 2.628,-8.739c3.214,-10.331 7.217,-23.191 7.129,-32.85c-0.063,-7.221 0.586,-12.871 1.77,-23.121c1.085,-9.47 2.582,-22.441 4.409,-44.137c1.241,-14.757 3.393,-31.802 6.648,-57.593l2.366,-18.772c4.845,-38.641 7.264,-60.203 5.013,-90.149c-1.369,-18.347 -1.491,-24.503 -1.642,-32.294c-0.093,-4.715 -0.197,-10.1 -0.592,-19.225c-1.108,-25.443 -4.032,-79.416 -5.818,-101.843c-1.938,-24.376 0.725,-60 1.589,-70.344c3.185,-38.199 -4.008,-54.141 -9.786,-66.949c-1.125,-2.489 -2.199,-4.874 -3.156,-7.291c-6.59,-16.627 -21.818,-32.104 -35.421,-36.003c-0.702,-0.197 -3.179,-1.159 -6.723,-2.547c-9.636,-3.776 -27.579,-10.801 -38.172,-13.307c-17.217,-4.073 -49.541,-23.912 -50.909,-24.752c-3.661,-2.264 -8.557,-4.532 -13.743,-6.933c-7.182,-3.325 -14.607,-6.765 -19.045,-10.437c-1.149,-0.945 -2.576,-2.123 -4.16,-64.722c-0.034,-1.491 1.143,-2.726 2.628,-2.767c1.364,-0.011 2.727,1.142 2.767,2.629c0.534,21.242 1.741,55.683 2.779,61.165c4.003,3.08 10.756,6.213 17.299,9.242c5.331,2.47 10.372,4.802 14.305,7.227c12.165,7.496 36.245,21.007 49.321,24.103c10.964,2.588 29.139,9.706 38.902,13.529c3.283,1.287 5.58,2.198 6.23,2.385c17.346,4.97 32.724,23.481 38.954,39.203c0.929,2.337 1.973,4.652 3.058,7.059c6.032,13.372 13.545,30.021 10.244,69.619c-0.853,10.234 -3.492,45.497 -1.589,69.461c1.792,22.481 4.727,76.557 5.829,102.041c0.401,9.183 0.511,14.607 0.598,19.352c0.151,7.71 0.273,13.796 1.636,31.994c2.285,30.46 -0.156,52.232 -5.047,91.227l-2.361,18.773c-3.248,25.727 -5.395,42.725 -6.63,57.371c-1.834,21.777 -3.33,34.801 -4.427,44.306c-1.154,10.029 -1.787,15.559 -1.729,22.449c0.093,10.51 -4.048,23.81 -7.378,34.5c-0.992,3.19 -1.897,6.1 -2.564,8.56c-3.847,14.13 -10.599,52.06 -11.022,57.07c-0.488,5.671 -4.583,18.95 -6.028,21.1c-0.557,0.83 -2.279,2.5 -8.353,8.22c-4.009,3.79 -9.004,8.5 -10.233,9.98c-6.08,7.35 -10.923,14.25 -14.457,19.28l-1.189,1.69c-0.527,0.75 -1.357,1.15 -2.204,1.15Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M356.521,1080.91c-2.552,0 -4.414,-0.32 -4.908,-1.13c-1.415,-2.35 -1.247,-5.23 0.499,-8.57c-1.218,-0.59 -3.039,-1.79 -3.532,-4.95c-0.569,-3.69 1.195,-6.34 2.506,-7.75c-1.004,-1.52 -2.101,-4.23 -0.76,-7.8c1.137,-3.03 3.248,-5.18 4.821,-6.44c-0.036,-0.05 -0.07,-0.1 -0.105,-0.15c-1.334,-2.03 -1.375,-5.31 -0.122,-9.76c1.242,-4.419 4.484,-9.38 7.919,-14.63c3.724,-5.69 7.57,-11.58 8.487,-16.44c1.885,-9.969 11.729,-41.53 14.63,-46.89c1.943,-3.589 8.835,-11.28 21.064,-23.53c1.664,-1.669 2.86,-3.08 3.99,-4.679c0.517,-0.74 1.544,-0.901 2.251,-0.401c0.731,0.51 0.911,1.521 0.395,2.25c-1.236,1.771 -2.547,3.32 -4.125,4.891c-14.966,14.989 -19.514,20.77 -20.733,23.02c-2.738,5.059 -12.489,36.409 -14.293,45.949c-1.033,5.48 -5.065,11.65 -8.958,17.6c-3.294,5.04 -6.404,9.8 -7.518,13.74c-1.577,5.61 -0.377,7.34 0.163,7.51c0.696,0.09 1.195,0.61 1.323,1.29c0.133,0.69 -0.244,1.37 -0.853,1.71c-0.041,0.02 -3.835,2.16 -5.308,6.09c-1.288,3.44 0.934,5.55 1.032,5.65c0.354,0.33 0.552,0.81 0.517,1.3c-0.035,0.48 -0.279,0.94 -0.679,1.21c-0.116,0.09 -2.993,2.22 -2.442,5.77c0.296,1.9 1.201,2.3 2.158,2.72c0.615,0.27 1.461,0.63 1.763,1.59c0.134,0.4 0.192,1.05 -0.266,1.82c-1.439,2.4 -1.863,4.35 -1.265,5.79c3.156,0.46 19.468,-1.55 24.04,-3.25c4.756,-1.75 23.691,-13.04 26.139,-15.13c0.917,-0.78 2.709,-3.27 4.31,-5.54c0.528,-0.73 1.537,-0.89 2.257,-0.39c0.731,0.52 0.905,1.53 0.388,2.26c-2.302,3.26 -3.759,5.2 -4.855,6.13c-2.697,2.3 -22.091,13.85 -27.114,15.71c-1.973,0.73 -15.344,3.43 -22.816,3.43Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M354.05,1072.69c-0.673,0 -1.299,-0.43 -1.531,-1.09c-0.29,-0.85 0.162,-1.77 1.003,-2.06c0.099,-0.03 9.601,-3.32 15.292,-7.09c9.287,-6.13 16.724,-12.06 19.23,-14.35c1.259,-1.23 5.134,-11.62 7.455,-17.83c1.85,-4.959 3.451,-9.24 4.298,-10.839c3.226,-6.091 8.887,-22.411 5.749,-25.401c-0.876,-0.829 -1.595,-0.839 -2.054,-0.75c-2.534,0.411 -5.882,4.45 -9.948,12.031c-0.615,1.14 -1.549,3.409 -2.727,6.289c-3.776,9.17 -10.094,24.53 -15.791,29.43c-12.228,10.49 -18.075,4.66 -18.313,4.42c-0.621,-0.64 -0.598,-1.67 0.046,-2.29c0.632,-0.6 1.642,-0.61 2.263,0.03c0.139,0.11 4.31,3.63 13.893,-4.62c5.111,-4.389 11.486,-19.889 14.909,-28.21c1.265,-3.08 2.175,-5.299 2.744,-6.35c3.33,-6.199 7.622,-13.16 12.408,-13.929c1.7,-0.281 3.394,0.279 4.798,1.61c6.178,5.87 -5.001,29.029 -5.123,29.26c-0.742,1.409 -2.384,5.799 -4.119,10.449c-3.939,10.55 -6.642,17.57 -8.307,19.09c-2.679,2.45 -10.116,8.38 -19.624,14.67c-6.039,3.99 -15.623,7.3 -16.023,7.44c-0.174,0.06 -0.354,0.09 -0.528,0.09Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M353.296,1060.3c-0.65,0 -1.265,-0.39 -1.514,-1.04c-0.314,-0.84 0.104,-1.77 0.94,-2.09c0.162,-0.06 16.196,-6.17 19.944,-7.73c3.022,-1.27 15.993,-9.61 20.733,-12.71c0.748,-0.49 1.757,-0.29 2.239,0.46c0.493,0.75 0.284,1.75 -0.465,2.24c-0.707,0.46 -17.344,11.36 -21.254,12.99c-3.8,1.59 -19.388,7.52 -20.049,7.78c-0.185,0.07 -0.383,0.1 -0.574,0.1Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M373.971,1041.42c-0.58,0 -1.137,-0.31 -1.427,-0.86c-0.424,-0.79 -0.122,-1.77 0.667,-2.19c0.116,-0.06 11.48,-6.1 15.21,-8.26c3.591,-2.08 10.465,-8.59 10.535,-8.65c0.65,-0.62 1.671,-0.6 2.286,0.06c0.615,0.64 0.591,1.671 -0.058,2.28c-0.29,0.281 -7.223,6.84 -11.138,9.11c-3.783,2.19 -14.845,8.07 -15.315,8.32c-0.244,0.12 -0.505,0.19 -0.76,0.19Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M323.624,527.46c-10.611,-0 -19.672,-0.796 -22.984,-2.077c-6.323,-2.449 -18.593,-12.542 -19.115,-12.972c-0.684,-0.568 -0.783,-1.589 -0.214,-2.279c0.574,-0.685 1.595,-0.777 2.279,-0.214c0.122,0.097 12.38,10.187 18.222,12.448c5.54,2.141 34.591,3.104 53.897,-0.87c18.279,-3.771 28.982,-23.222 29.092,-23.419c0.424,-0.783 1.41,-1.079 2.187,-0.649c0.789,0.423 1.085,1.403 0.656,2.186c-0.458,0.859 -11.504,20.971 -31.285,25.049c-9.572,1.974 -21.951,2.797 -32.735,2.797Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M434.546,668.077c-0.181,0 -0.366,-0.029 -0.546,-0.092c-0.841,-0.302 -1.276,-1.231 -0.98,-2.072c8.568,-24.045 33.071,-19.932 33.315,-19.915c0.882,0.162 1.462,0.998 1.305,1.88c-0.156,0.883 -0.963,1.438 -1.873,1.311c-0.882,-0.151 -22.062,-3.62 -29.696,17.815c-0.238,0.661 -0.858,1.073 -1.525,1.073Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M220.231,1323.38c-4.188,0 -8.342,-0.92 -11.677,-2.75c-7.35,-4.03 -11.15,-13 -11.306,-13.38c-0.348,-0.82 0.04,-1.77 0.87,-2.11c0.824,-0.34 1.775,0.05 2.111,0.86c0.035,0.09 3.539,8.31 9.88,11.79c4.431,2.43 12.378,3.62 19.329,0.5c3.526,-1.58 8.069,-4.96 9.687,-12.02c0.197,-0.86 1.027,-1.43 1.938,-1.22c0.87,0.21 1.415,1.07 1.218,1.94c-1.914,8.37 -7.321,12.37 -11.515,14.25c-3.185,1.43 -6.874,2.14 -10.535,2.14Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M344.687,1305.98c-4.188,0 -8.348,-0.93 -11.683,-2.76c-7.35,-4.03 -11.144,-12.99 -11.307,-13.38c-0.342,-0.82 0.053,-1.77 0.876,-2.11c0.824,-0.36 1.77,0.05 2.112,0.87c0.035,0.08 3.533,8.31 9.873,11.78c4.444,2.43 12.391,3.62 19.335,0.51c3.528,-1.59 8.07,-4.96 9.688,-12.03c0.203,-0.86 1.033,-1.46 1.938,-1.22c0.87,0.2 1.415,1.07 1.218,1.94c-1.915,8.37 -7.321,12.37 -11.521,14.25c-3.179,1.44 -6.862,2.15 -10.529,2.15Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M240.819,915.223c3.272,8.44 11.405,31.981 8.423,93.89c-1.583,32.94 0.957,101 3.278,120.33c2.494,20.78 18.79,127.73 21.418,141.61c2.946,15.56 -2.263,70.28 -3.551,80.28c-1.137,8.81 1.172,41.96 3.208,71.21c0.737,10.64 1.451,20.89 1.973,29.56c1.786,29.57 4.02,136.31 4.02,186.69c3.579,-7.56 7.976,-18.84 9.275,-30.73c0.888,-8.12 1.77,-14.1 2.536,-19.27c1.288,-8.72 2.216,-15 2.216,-25.32c-0,-4.06 0.046,-11.26 0.11,-20.41c0.179,-28.39 0.493,-75.91 -0.11,-106.24c-0.482,-24.46 0.481,-48.86 1.258,-68.47c0.493,-12.4 0.882,-22.2 0.726,-28.03c-0.134,-5.26 0.26,-12.25 0.678,-19.66c0.807,-14.34 1.723,-30.59 -0.615,-41.4c-5.447,-25.14 -4.194,-45 -2.981,-64.21c0.754,-11.91 1.462,-23.15 0.556,-35.18c-1.514,-20.28 -5.389,-44.66 -8.498,-64.26c-1.798,-11.33 -3.353,-21.12 -4.217,-28.44c-0.923,-7.89 -2.93,-20.76 -5.245,-35.66c-3.637,-23.38 -7.755,-49.87 -9.455,-68.059c-2.275,-24.37 2.169,-56.781 4.037,-68.75c-11.381,3.61 -21.934,1.759 -27.92,0.719c-0.36,-0.06 -0.743,-0.13 -1.12,-0.2Zm36.031,737.13c-0.256,0 -0.511,-0.03 -0.761,-0.11c-1.16,-0.34 -1.949,-1.41 -1.937,-2.61c0.4,-43.71 -2.048,-165.35 -3.968,-197.21c-0.522,-8.65 -1.236,-18.89 -1.972,-29.5c-2.152,-30.94 -4.38,-62.94 -3.173,-72.29c1.537,-11.9 6.282,-64.41 3.596,-78.58c-2.947,-15.59 -19.201,-123.06 -21.475,-141.97c-2.338,-19.48 -4.902,-88.06 -3.301,-121.22c3.051,-63.38 -5.604,-85.409 -8.446,-92.659c-0.534,-1.37 -0.859,-2.191 -0.957,-2.971c-0.111,-0.84 0.33,-2.159 0.951,-2.75c1.496,-1.419 3.492,-1.08 7.46,-0.37c6.642,1.16 17.768,3.1 29.307,-2.049c0.916,-0.431 1.978,-0.281 2.761,0.329c0.783,0.61 1.172,1.61 0.998,2.6c-0.075,0.42 -7.454,42.88 -4.74,71.961c1.683,18.019 5.79,44.429 9.41,67.729c2.332,14.96 4.339,27.87 5.279,35.86c0.847,7.21 2.39,16.95 4.183,28.23c3.126,19.69 7.019,44.2 8.556,64.69c0.928,12.4 0.209,23.83 -0.557,35.93c-1.189,18.84 -2.419,38.32 2.866,62.73c2.494,11.53 1.56,28.17 0.731,42.85c-0.412,7.29 -0.801,14.17 -0.667,19.21c0.156,6.01 -0.238,15.88 -0.731,28.38c-0.772,19.54 -1.735,43.85 -1.254,68.15c0.604,30.41 0.29,77.96 0.105,106.38c-0.058,9.14 -0.105,16.33 -0.105,20.38c-0,10.71 -0.957,17.17 -2.274,26.11c-0.759,5.11 -1.635,11.04 -2.511,19.06c-2.425,22.21 -14.578,41.64 -15.094,42.45c-0.505,0.8 -1.375,1.26 -2.28,1.26Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M389.407,527.32c-0.214,0.83 -0.4,1.595 -0.551,2.297c-0.638,2.913 -1.56,6.806 -2.633,11.371c-4.931,20.9 -13.186,55.888 -13.192,75.03c-0.017,50.47 0.325,52.401 3.597,70.86l0.731,4.136c1.595,9.114 4.635,16.911 7.849,25.16c3.41,8.749 6.938,17.797 8.835,28.86c0.324,1.902 1.328,7.495 2.668,14.996c4.014,22.456 10.738,60.035 12.304,70.732c0.064,0.313 7.478,40.291 6.932,88.761c0.087,-0.1 0.174,-0.209 0.261,-0.31c5.86,-7.029 8.534,-10.25 8.87,-67.892c0.198,-33.919 -6.358,-77.218 -10.285,-100.005c-0.517,-2.981 -1.016,-5.72 -1.497,-8.336c-3.266,-17.843 -5.43,-29.637 -2.709,-67.78c0.685,-9.583 1.276,-16.979 1.746,-22.838c1.746,-21.864 1.746,-21.864 -1.514,-35.363l-0.342,-1.409c-4.49,-18.604 -16.156,-67.618 -21.07,-88.27Zm23.802,403.193c-0.539,0 -1.067,-0.16 -1.52,-0.47c-0.76,-0.52 -1.328,-1.479 -1.305,-2.4c1.56,-51.5 -6.608,-95.553 -6.689,-95.994c-1.572,-10.72 -8.283,-48.247 -12.292,-70.668c-1.346,-7.524 -2.349,-13.128 -2.674,-15.031c-1.81,-10.527 -5.233,-19.317 -8.545,-27.816c-3.174,-8.133 -6.451,-16.544 -8.139,-26.19l-0.725,-4.125c-3.347,-18.884 -3.701,-20.856 -3.684,-71.801c0.006,-19.77 8.348,-55.139 13.337,-76.272c1.067,-4.53 1.978,-8.394 2.616,-11.289c3.573,-16.283 22.346,-66.544 23.146,-68.678c0.517,-1.398 2.065,-2.111 3.469,-1.579c1.392,0.522 2.1,2.072 1.578,3.47c-0.156,0.417 -12.634,33.826 -19.329,55.162c0.876,3.683 17.664,74.271 23.268,97.493l0.337,1.41c3.468,14.334 3.434,14.757 1.653,37.056c-0.47,5.847 -1.062,13.227 -1.741,22.794c-2.674,37.463 -0.562,48.984 2.634,66.427c0.482,2.627 0.986,5.39 1.503,8.388c4.832,28.054 10.552,68.336 10.366,100.956c-0.348,59.578 -3.411,63.257 -10.123,71.307c-1.003,1.21 -2.1,2.521 -3.283,4.2c-0.36,0.5 -0.696,1.03 -1.056,1.591l-0.545,0.839c-0.4,0.6 -1.021,1.031 -1.735,1.17c-0.174,0.03 -0.348,0.05 -0.522,0.05Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M282.546,1938.56c-17.937,0 -37.219,-15.08 -48.259,-23.72l-1.195,-0.93c-10.704,-8.34 -7.994,-31.68 -6.538,-44.22c0.295,-2.54 0.534,-4.5 0.534,-5.57c-0,-2.82 2.232,-15.09 5.871,-34.88c3.068,-16.67 7.269,-39.51 7.054,-42.26c-0.186,-1.63 -1.108,-2.67 -3.005,-4.66c-1.984,-2.08 -4.449,-4.68 -6.503,-9.23c-3.776,-8.34 2.03,-18.45 3.898,-21.34c-0.023,-0.75 -0.035,-1.62 -0.046,-2.64c-0.128,-10.64 -0.476,-38.91 -16.87,-89.49c-4.832,-14.92 -39.83,-127.46 -44.186,-158.93c-10.477,-75.55 -3.876,-133.3 -1.056,-157.96c0.638,-5.57 1.096,-9.6 1.032,-11.09c-0.44,-9.58 -3.283,-51.65 -8.22,-67.23c-5.267,-16.61 -43.09,-158.98 -48.537,-187.37c-5.83,-30.42 -19.509,-137.95 -19.509,-157.79c-0,-11.679 1.792,-31.75 3.527,-51.161c1.236,-13.835 2.407,-26.9 2.837,-35.944c0.557,-11.787 9.751,-63.527 13.214,-83.006l1.114,-6.289c1.903,-11.069 5.425,-20.117 8.835,-28.866c3.214,-8.255 6.254,-16.046 7.849,-25.16l0.731,-4.136c3.272,-18.459 3.614,-20.39 3.597,-70.86c-0.006,-19.142 -8.261,-54.13 -13.192,-75.03c-1.073,-4.565 -1.996,-8.458 -2.634,-11.371c-3.492,-15.912 -22.734,-67.431 -22.925,-67.947c-0.522,-1.398 0.186,-2.948 1.578,-3.47c1.403,-0.527 2.952,0.181 3.469,1.579c0.8,2.134 19.573,52.395 23.146,68.678c0.638,2.895 1.549,6.759 2.616,11.289c4.989,21.133 13.331,56.502 13.337,76.272c0.017,50.946 -0.336,52.917 -3.684,71.801l-0.725,4.125c-1.688,9.646 -4.966,18.052 -8.139,26.185c-3.312,8.504 -6.735,17.294 -8.545,27.827l-1.114,6.317c-3.121,17.531 -12.6,70.879 -13.145,82.318c-0.435,9.154 -1.607,22.275 -2.848,36.17c-1.723,19.289 -3.504,39.24 -3.504,50.679c-0,19.081 13.772,127.34 19.416,156.78c5.424,28.28 43.12,170.18 48.375,186.76c5.163,16.29 7.994,58.26 8.464,68.61c0.087,1.92 -0.343,5.69 -1.056,11.93c-2.796,24.47 -9.346,81.75 1.033,156.62c4.31,31.09 39.168,143.15 43.977,158.01c16.65,51.36 17.003,80.22 17.137,91.08c0.017,1.39 0.029,2.5 0.069,3.34c0.035,0.6 -0.145,1.2 -0.493,1.7c-1.954,2.75 -6.468,11.14 -3.909,16.79c1.676,3.71 3.706,5.85 5.499,7.74c2.082,2.19 4.049,4.26 4.455,7.76c0.342,2.99 -2.454,18.56 -7.106,43.85c-2.715,14.73 -5.784,31.43 -5.784,33.9c-0,1.19 -0.244,3.37 -0.568,6.19c-1.242,10.67 -3.819,32.87 4.495,39.35l1.196,0.94c11.99,9.36 34.295,26.781 51.577,21.64c19.091,-5.71 23.836,-17.58 25.751,-26.02c2.14,-9.48 0.121,-31.96 -4.415,-49.08c-4.363,-16.46 -7.803,-41.63 -7.948,-42.7c-0.197,-1.47 0.836,-2.83 2.315,-3.03c1.462,-0.12 2.831,0.83 3.034,2.31c0.035,0.26 3.539,25.91 7.808,42.04c4.189,15.8 7.089,40.04 4.461,51.65c-2.204,9.76 -7.663,23.481 -29.463,29.991c-2.669,0.799 -5.407,1.159 -8.18,1.159Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M311.551,1817.25c-4.066,0 -6.746,-0.5 -6.833,-0.52c-1.462,-0.3 -2.402,-1.71 -2.118,-3.17c0.291,-1.46 1.7,-2.39 3.174,-2.12c1.038,0.21 25.855,4.78 36.964,-18.19c6.816,-14.1 4.925,-28.05 -1.572,-52.14l-2.321,-8.58c-7.396,-27.28 -12.216,-45.53 -11.863,-50.5c0.209,-2.92 1.909,-4.82 3.556,-6.66c2.483,-2.77 5.302,-5.91 4.786,-14.43c-0.476,-7.75 -4.13,-12.81 -4.165,-12.86c-0.279,-0.38 -0.458,-0.82 -0.516,-1.29c-0.117,-1 -2.796,-24.98 7.709,-58.84c0.366,-1.17 1.578,-4.44 3.405,-9.34c9.224,-24.71 33.722,-90.38 42.609,-140.13c10.628,-59.47 5.418,-85.98 0.377,-111.62c-2.453,-12.48 -4.774,-24.27 -5.209,-39.36c-0.4,-13.78 4.635,-42.64 8.679,-65.84c1.896,-10.87 3.532,-20.27 4.048,-25.08c1.59,-14.82 15.89,-142.99 15.89,-142.99l5.36,0.61c-0,0 -14.3,128.14 -15.889,142.96c-0.534,4.98 -2.187,14.46 -4.096,25.43c-3.793,21.74 -8.986,51.51 -8.597,64.76c0.424,14.64 2.698,26.22 5.105,38.47c5.134,26.13 10.448,53.14 -0.354,113.61c-8.98,50.23 -33.6,116.23 -42.87,141.07c-1.769,4.74 -2.952,7.91 -3.306,9.05c-9.253,29.8 -7.907,52.02 -7.565,55.98c1.19,1.84 4.293,7.32 4.769,15.08c0.649,10.77 -3.446,15.34 -6.155,18.36c-1.387,1.55 -2.118,2.41 -2.187,3.44c-0.319,4.43 6.618,30.02 11.683,48.71l2.326,8.58c5.726,21.25 9.45,38.86 1.218,55.9c-9.101,18.82 -26.435,21.65 -36.042,21.65Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M305.246,1815.7c-0.563,0 -1.108,-0.29 -1.404,-0.82c-0.348,-0.6 -8.371,-15.08 -4.531,-41.93c2.889,-20.16 -2.97,-24.6 -6.839,-27.54c-1.178,-0.9 -2.193,-1.67 -2.883,-2.73c-2.947,-4.54 -9.624,-37.38 -10.187,-47.86c-0.551,-10.33 -3.626,-40.73 -4.159,-44.96c-0.111,-0.89 0.516,-1.7 1.404,-1.81c0.962,-0.13 1.693,0.52 1.81,1.4c0.533,4.25 3.625,34.82 4.182,45.2c0.603,11.4 7.449,42.85 9.664,46.27c0.384,0.58 1.19,1.2 2.124,1.9c4.205,3.2 11.242,8.54 8.086,30.59c-3.666,25.65 4.061,39.74 4.142,39.88c0.435,0.78 0.163,1.76 -0.614,2.2c-0.25,0.14 -0.523,0.21 -0.795,0.21Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M237.89,913.843c-0.36,0 -0.725,-0.13 -1.027,-0.38c-7.762,-6.37 -13.459,-21.73 -13.696,-22.379c-0.308,-0.841 0.121,-1.77 0.963,-2.071c0.847,-0.29 1.763,0.12 2.076,0.96c0.052,0.15 5.628,15.18 12.711,21c0.69,0.56 0.788,1.58 0.22,2.27c-0.319,0.39 -0.783,0.6 -1.247,0.6Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M271.797,913.843c-0.464,0 -0.928,-0.21 -1.248,-0.6c-0.568,-0.69 -0.469,-1.71 0.221,-2.27c7.077,-5.82 12.658,-20.85 12.71,-21c0.314,-0.84 1.23,-1.25 2.077,-0.96c0.841,0.301 1.27,1.24 0.963,2.071c-0.238,0.649 -5.94,16.009 -13.696,22.379c-0.302,0.25 -0.668,0.38 -1.027,0.38Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M179.705,108.461c-0.151,0 -0.302,-0.024 -0.452,-0.064c-0.853,-0.25 -1.352,-1.149 -1.102,-2.008c0.655,-2.25 16.341,-55.346 47.562,-65.818c0.685,-0.231 1.474,0.035 1.88,0.661c0.399,0.621 0.325,1.439 -0.187,1.978c-2.737,2.912 -6.287,7.263 -8.027,10.361c8.388,-3.353 30.977,-12.059 47.052,-15.245l6.839,-1.329c13.267,-2.563 14.062,-2.72 20.513,-7.511c0.592,-0.453 1.427,-0.43 2.007,0.063c0.812,0.686 19.921,17.101 26.534,42.127c6.445,24.417 10.233,34.493 10.274,34.592c0.313,0.835 -0.105,1.77 -0.94,2.088c-0.847,0.314 -1.769,-0.11 -2.089,-0.94c-0.15,-0.404 -3.875,-10.29 -10.377,-34.915c-5.523,-20.914 -20.618,-35.984 -24.551,-39.634c-6.155,4.484 -8.074,4.855 -20.761,7.304l-6.823,1.335c-19.665,3.891 -49.437,16.266 -49.738,16.387c-0.493,0.214 -1.067,0.151 -1.52,-0.145c-0.446,-0.302 -0.719,-0.806 -0.719,-1.346c-0,-2.552 2.581,-6.497 5.151,-9.791c-25.403,14.745 -38.826,60.185 -38.971,60.684c-0.203,0.707 -0.853,1.166 -1.555,1.166Z"
                  />
                </g>
              </g>
              <Tippy
                content="Nausnice (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Nausnice"
                  className={
                    services[14].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 14) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="257.196"
                  cy="171.367"
                  r="23.898"
                />
              </Tippy>
              {/* <circle
                id="Izmedju-obrva"
                className={
                  services[15].selected
                    ? styles.active__elem__2nd
                    : styles.service__elem__2nd
                }
                onClick={() =>
                  setServices((current) =>
                    current.map((obj) => {
                      if (obj.id === 15) {
                        return {
                          ...obj,
                          selected: !obj.selected,
                          sidebar: !obj.sidebar,
                        };
                      }
                      return obj;
                    })
                  )
                }
                style={{ fill: "#bbb", stroke: "#636363", strokeWidth: "4px" }}
                cx="257.196"
                cy="97.441"
                r="23.898"
              /> */}
              <Tippy
                content="Pazusi (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Pazusi"
                  className={
                    services[16].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 16) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="104.006"
                  cy="461.196"
                  r="30.247"
                />
              </Tippy>
              <Tippy
                content="Pazusi (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Pazusi1"
                  className={
                    services[16].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 16) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="410.336"
                  cy="461.196"
                  r="30.247"
                />
              </Tippy>
              <Tippy
                content="Oko bradavica (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Oko-bradavica"
                  className={
                    services[17].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 17) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="193.686"
                  cy="491.443"
                  r="23.898"
                />
              </Tippy>
              <Tippy
                content="Oko bradavica (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Oko-bradavica1"
                  className={
                    services[17].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 17) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="320.656"
                  cy="491.443"
                  r="23.898"
                />
              </Tippy>
              <Tippy
                content="Između grudi (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <ellipse
                  id="Izmedju-grudi"
                  className={
                    services[18].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 18) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="256.113"
                  cy="553.468"
                  rx="23.898"
                  ry="58.127"
                />
              </Tippy>
              <Tippy
                content="Trbušna linija (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <ellipse
                  id="Trbusna-linija"
                  className={
                    services[19].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 19) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="256.113"
                  cy="755.603"
                  rx="23.898"
                  ry="58.127"
                />
              </Tippy>
              <Tippy
                content="Između stražnjice (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Izmedju-straznjice"
                  className={
                    services[20].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 20) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="900.019"
                  cy="906.012"
                  r="30.247"
                />
              </Tippy>
            </g>
          </svg>
        ) : (
          <svg
            height="100%"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            }}
            width="100%"
            version="1.1"
            viewBox="0 0 1026 1939"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
          >
            <g>
              <Tippy
                content="Lice + Nausnice (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Lice"
                  className={
                    services[0].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 0) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        if (obj.id === 14) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        if (obj.id === 15) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M145.45,76.122l3.417,-28.257c-0,-0 5.893,-34.6 53.718,-43.976c47.825,-9.377 82.373,27.475 81.518,69.058c-0.856,41.583 -10.74,93.062 -17.051,108.027c-6.31,14.966 -32.314,39.714 -32.314,39.714l-16.016,4.443l-21.533,-4.28l-18.233,-13.494c-0,0 -18.38,-25.321 -25.387,-51.131c-7.006,-25.809 -8.119,-80.104 -8.119,-80.104Z"
                />
              </Tippy>
              <Tippy
                content="Vrat (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Vrat"
                  className={
                    services[1].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 1) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M175.518,202.977l0.032,60.932l-3.582,9.026c0,0 47.501,0.723 62.733,-0.269c15.232,-0.993 21.379,-4.351 21.379,-4.351l-0.915,-25.631l-0.105,-41.262l-18.713,18.343l-15.994,5.366l-14.636,0l-13.777,-8.509l-16.422,-13.645Z"
                />
              </Tippy>
              <Tippy
                content="Grudi + Između grudi + Trbušna linija (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Grudi"
                  className={
                    services[2].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 2) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        if (obj.id === 18) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        if (obj.id === 19) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M87.995,303.122l0.436,122.653c-0,0 -1.755,23.881 2.751,34.083c4.505,10.202 14.99,50.806 14.99,50.806c0,0 112.799,7.049 148.298,7.577c35.499,0.528 70.763,-2.116 70.763,-2.116l8.706,-39.628l1.383,-6.178l6.461,-18.138l1.343,-21.569l0.314,-9.152l8.536,-116.643l-42.802,-11.536l-39.433,-13.056l-14.877,-12.906l-82.407,3.729l-50.24,22.419l-34.222,9.655Z"
                />
              </Tippy>
              <Tippy
                content="Ramena (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ramena"
                  className={
                    services[7].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 7) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M89.641,301.485c-0,-0 -29.454,6.728 -39.195,23.735c-9.741,17.008 -16.633,97.343 -16.633,97.343l54.76,2.127l1.068,-123.205Zm261.072,3.277l-8.122,117.894l55.082,-1.703l-7.708,-63.309l-9.146,-31.154l-17.195,-17.409l-12.911,-4.319Z"
                />
              </Tippy>
              <Tippy
                content="Ruke (98 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ruke"
                  className={
                    services[8].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 8) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M342.443,420.577l1.463,15.907l-5.697,26.882l-5.014,14.268l4.858,37.598l4.448,43.461l11.943,60.573l5.423,30.886l-0.232,38.867l2.068,50.685l7.705,35.721l7.266,37.97l7.779,55.997l5.46,37.249l29.773,6.065l4.482,-50.761l3.604,-62.73l-0.059,-60.861l-3.235,-34.835l-17.402,-69.471l-4.152,-75.888l-3.095,-79.304l-4.038,-60.805l-53.348,2.526Zm-308.571,1.285l-4.865,94.922l-2.013,89.576l-2.643,34.118l-9.031,32.638l-9.885,40.325l-1.279,44.263l-1.099,42.383l4.534,62.186l3.197,42.825l29.808,6.488l7.036,-51.847l13.115,-83.713l7.919,-33.695l5.082,-74.357l-1.445,-24.129l15.858,-85.146l3.991,-25.865l6.761,-57.643l-6.775,-11.718l-4.311,-22.572l0.726,-17.773l-54.681,-1.266Z"
                />
              </Tippy>
              <Tippy
                content="Stomak (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Stomak"
                  className={
                    services[3].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 3) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M105.242,509.085l24.096,114.187l0.475,11.46l-35.935,82.109l-8.045,21.421l257.81,-5.332l-11.083,-25.862l-17.218,-39.816l-14.131,-31.827l0,-13.035l19.774,-92.738l3.145,-14.858c-65.391,3.953 -140.614,0.301 -218.888,-5.709Z"
                />
              </Tippy>
              <Tippy
                content="Bikini zona (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Bikini-zona"
                  className={
                    services[4].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 4) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M86.283,736.249l-13.643,65.114c52.456,16.392 96.731,41.383 134.983,72.705l16.326,-0.184c39.871,-28.815 84.596,-49.497 132.87,-64.234l-6.082,-40.307l-8.211,-39.88l-256.243,6.786Z"
                />
              </Tippy>
              <Tippy
                content="Šake (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Sake"
                  className={
                    services[9].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 9) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M10.084,903.618l-1.462,34.392l-3.67,45.285l-2.57,26.666l15.833,31.758l9.351,19.322l19.302,10.794l8.173,-2.778l-13.74,-11.612l-5.164,-5.293l0.781,-3.507l7.287,3.03l17.205,-4.776l5.52,-4.239l-2.529,-2.739l-20.349,2.832l-3.486,-3.339l17.208,-6.139l4.158,-3.708l-11.421,-1.742l-9.963,1.957l-11.981,-8.337l-0.474,-17.062l4.109,-33.62l4.093,0.395l13.351,35.961l7.089,4.212l-1.896,-23.657l1.18,-25.36l-4.495,-21.447l-11.657,-17.424l-0.079,-13.491l-29.704,-6.334Zm380.533,1.487l0.81,10.179l-5.388,15.23l-9.154,17.143l-1.41,26.981l-2.341,32.749l2.048,3.519l12.68,-17.153l6.503,-22.171l4.078,-0.064l5.52,28.369l-0.338,19.376l-9.683,7.937l-5.564,2.372l-16.179,-1.798l-2.772,2.137l20.914,9.501l-3.211,3.557l-20.801,-2.953l-1.949,3.079l11.145,6.364l10.257,1.877l9.46,-2.444l-18.718,17.016l0.655,5.225l15.798,-4.39l12.209,-7.65l23.219,-51.126l-6.592,-70.986l-2.055,-26.145l-29.141,-5.731Z"
                />
              </Tippy>
              <Tippy
                content="Noge (110 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Noge"
                  className={
                    services[5].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 5) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M72.149,800.093l-6.128,56.553l3.418,62.848l46.501,252.555l17.982,94.269l6.591,65.166l-0.846,33.435l10.941,60.413l35.473,152.649l36.712,152.091l43.553,-6.305l-8.836,-53.59l-6.891,-56.981l-3.389,-80.322l-2.878,-56.233l30.2,-11.465l3.279,-47.129l5.434,-48.148l-3.898,-49.796l-6.382,-39.259l-9.596,-36.941l-2.664,-45.353l12.677,-43.635l43.272,-117.54l17.029,-58.788l17.817,-81.554l5.767,-42.407l1.502,-31.452l-1.907,-16.158c-48.717,15.955 -93.388,36.782 -132.47,64.342l-10.005,56.564l-8.443,-55.676c-41.712,-33.445 -86.429,-57.134 -133.815,-72.153Z"
                />
              </Tippy>
              <Tippy
                content="Stopala (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Stopala"
                  className={
                    services[6].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 6) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M222.838,1728.4l2.494,14.501l-1.279,11.293l2.831,12.421l6.681,8.426l-13.622,84.298l2.217,30.539l14.379,24.848l18.865,16.928l13.312,3.558l12.984,-3.675l16.197,-24.828l0.512,-22.66l-2.322,-37.489l-12.293,-54.971l-8.059,-24.693l3.956,-12.747l-8.559,-10.676l-6.027,-22.416l-42.267,7.343Zm37.698,-36.004l17.282,-19.093l9.885,-26.838l-3.409,-27.197l-3.609,-30.628l3.489,-23.086l-11.923,-26.618l1.226,-18.534l2.664,-9.182l-4.984,-11.945l2.608,-35.193l-29.054,11.448l3.296,73.444l2.785,70.574l7.297,57.649l2.447,15.199Z"
                />
              </Tippy>
              <Tippy
                content="Potiljak (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Potiljak"
                  className={
                    services[10].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 10) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M771.037,201.124l-0.677,63.019l-8.774,13.886l95.523,-2.233l-6.581,-12.979l1.27,-59.548c-25.581,-18.775 -52.557,-18.73 -80.761,-2.145Z"
                />
              </Tippy>
              <Tippy
                content="Gornji dio leđa (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Gornji-dio-ledja"
                  className={
                    services[11].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 11) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M684.615,302.081l0.489,117.552l11.965,65.588l7.75,35.237l9.346,43.66l194.406,-1.007l18.749,-84.905l10.45,-61.074l8.64,-114.721l-58.069,-14.937l-33.025,-13.772l-92.193,2.548l-47.226,17.387l-31.282,8.444Z"
                />
              </Tippy>
              <Tippy
                content="Donji dio leđa (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Donji-dio-ledja"
                  className={
                    services[12].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 12) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M712.797,562.208l9.971,48.622l3.241,16.448l-12.604,32.47l-17.678,41.957l-8.218,18.95l251.11,6.24l-30.515,-65.17l-12.55,-28.455l4.689,-24.377l8.98,-47.551l-196.426,0.866Z"
                />
              </Tippy>
              <Tippy
                content="Zadnjica + Između stražnjice (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Zadnjica"
                  className={
                    services[13].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 13) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        if (obj.id === 20) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M687.688,718.306l-15.086,50.075l-4.621,32.892l-0.804,42.118l5.009,40.922l139.024,10.785l-5.162,-22.487l17.56,0.057l-1.334,22.415l136.928,-4.355l0.552,-47.574l-3.728,-42.102l-18.837,-75.894l-249.501,-6.852Z"
                />
              </Tippy>
              <Tippy
                content="Noge (110 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Noge1"
                  className={
                    services[5].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 5) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M671.787,882.979l16.637,82.885l17.333,62.014l35.227,93.279l21.267,65.88l2.029,22.069l-1.281,26.973l-5.193,31.438l-10.708,54.873l-4.435,24.562l2.665,50.69l6.202,61.342l2.012,34.339l42.872,7.961l1.534,7.369l2.766,6.705l-4.763,10.955l-2.326,17.563l-0.433,16.721l0.756,15.097l3.005,22.674l4.205,11.41l5.91,19.968l3.551,9.592l2.41,14.23l-0.795,18.36l-4.952,11.389l-16.332,19.175l-7.806,4.229l-14.14,-2.429l-6.13,-3.716l-3.518,23.013l43.838,7.823l8.889,-39.259l8.969,-31.163l17.626,-72.904l14.537,-59.459l22.577,-102.548l10.863,-57.789l-1.418,-41.634l11.901,-87.97l34.37,-174.077l21.733,-132.182l5.59,-44.216l-135.435,4.283l-3.541,24.677l-4.576,-0.371l-5.188,-23.335l-138.304,-10.486Z"
                />
              </Tippy>
              <Tippy
                content="Stopala (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Stopala1"
                  className={
                    services[6].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 6) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M761.034,1720.57l-5.171,19.348l-6.533,8.383l2.185,14.561l-15.501,57.898l-16.437,55.655l4.672,29.072l16.162,21.731l12.732,8.527l18.195,-2.249l23.773,-22.36l9.941,-18.606l-0.455,-24.691l-1.64,-40.866l-2.191,-58.633l7.017,-10.473l-6.428,-13.608l1.98,-14.558l-42.301,-9.131Zm-8.032,-229.135l1.479,14.51l-4.488,7.778l3.131,9.767l0.446,17.911l-11.281,21.685l3.509,22.377l-4.391,40.607l-0.383,37.101l8.197,20.392l14.274,17.564l13.601,5.853l14.823,-5.113l11.498,-13.371l6.654,-10.629l3.951,-16.693l-1.619,-16.241l-7.669,-23.134l-8.221,-27.806l-2.436,-14.653l-0.181,-26.219l0.255,-17.507l3.094,-11.951l3.677,-10.228l-4.487,-8.06l-0.116,-5.139l-43.317,-8.801Z"
                />
              </Tippy>
              <Tippy
                content="Ruke (98 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ruke1"
                  className={
                    services[8].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 8) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M685.698,416.586l-55.565,-3.073l-2.449,49.328l-2.264,53.246l-1.727,72.31l-2.788,35.194l-4.559,25.292l-8.925,33.545l-5.801,28.537l-1.791,29.637l-0.649,50.369l2.654,54.675l4.303,49.832l31.237,7.727l11.529,-79.537l13.945,-72.893l3.992,-39.097l1.873,-46.829l-1.056,-20.76l12.21,-66.731l6.133,-33.538l8.705,-68.713l-6.213,-31.06l-2.794,-27.461Zm252.139,-0.128l-10.383,63.91l8.58,66.036l15.12,74.406l2.866,28.703l0.882,64.342l5.01,37.451l10.085,50.848l10.52,68.079l4.953,31.264l31.908,-5.592l4.615,-107.669l0.116,-76.169l-15.098,-60.949l-5.19,-22.02l-4.068,-45.545l-1.769,-83.109l-4.062,-88.426l-54.085,4.44Z"
                />
              </Tippy>
              <Tippy
                content="Ramena (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Ramena1"
                  className={
                    services[7].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 7) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M685.932,301.446l-28.544,12.615l-15.53,19.364l-7.484,30.129l-3.347,51.628l54.65,1.752l0.255,-115.488Zm259.242,2.573l-7.962,112.904l54.132,-4.081l-5.525,-61.887l-11.378,-28.231l-21.786,-17.077l-7.481,-1.628Z"
                />
              </Tippy>
              <Tippy
                content="Šake (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <path
                  id="Sake1"
                  className={
                    services[9].selected
                      ? styles.active__elem
                      : styles.service__elem
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 9) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{ fill: "#fff" }}
                  d="M605.621,893.587l-0,21.094l-3.656,43.204l-1.747,44.62l9.818,30.932l8.285,18.023l9.119,9.928l19.258,8.025l3.967,-3.899l-19.227,-16.669l15.134,0.296l16.387,-8.626l-6.56,-2.414l-16.211,1.134l14.876,-7.8l0.63,-4.628l-18.614,1.247l-14.101,-10.453l5.002,-48.578l4.484,1.708l8.366,25.486l8.176,13.195l4.988,-2.845l-3.27,-23.32l-0.811,-37.141l-6.598,-13.461l-8.849,-15.827l2.16,-15.132l-31.006,-8.099Zm379.498,7.207l2.218,13.309l-5.742,12.626l-9.639,15.869l-1.946,15.129l1.188,26.218l-2.749,21.928l3.726,1.159l10.521,-14.495l7.964,-27.157l3.274,3.916l3.909,47.569l-14.407,9.889l-17.296,-1.326l2.578,4.313l12.671,6.611l-21.283,1.554l3.005,6.735l25.971,3.424l-14.271,11.682l-3.845,6.79l10.497,1.006l20.034,-12.985l20.834,-52.362l-4.348,-48.109l-2.701,-59.048l-30.163,5.755Z"
                />
              </Tippy>
              <g id="Blank-body">
                <g>
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M215.549,2.826l0.051,-0l-0.051,-0Zm2.67,2.631c-1.498,0 -2.364,0.076 -2.405,0.081c-0.061,0.005 -0.112,0.01 -0.174,0.01c-12.241,0.406 -24.901,0.826 -42.728,13.405c-16.38,11.552 -24.198,28.679 -25.36,55.538c-0.877,20.404 1.417,38.236 5.953,64.004c5.453,30.966 13.495,47.047 23.912,61.663c2.681,3.767 17.134,22.551 38.407,22.551l0.041,-0c16.482,-0.012 26.297,-11.179 35.777,-21.971c12.354,-14.06 18.877,-38.557 22.016,-50.331l0.571,-2.116c3.507,-12.994 7.003,-54.702 6.34,-75.637c-0.754,-23.641 -10.315,-43.359 -26.94,-55.533c-14.412,-10.547 -29.63,-11.664 -35.41,-11.664Zm-2.395,222.705c-18.551,-0 -34.299,-12.829 -42.851,-24.842c-10.835,-15.221 -19.203,-31.907 -24.84,-63.884c-4.597,-26.144 -6.921,-44.276 -6.024,-65.181c1.244,-28.71 9.775,-47.138 27.663,-59.756c19.112,-13.489 33.189,-13.979 45.614,-14.395c1.753,-0.145 22.098,-1.555 41.464,12.624c18.001,13.179 28.357,34.404 29.162,59.757c0.693,21.739 -2.844,63.603 -6.523,77.227l-0.571,2.102c-3.241,12.173 -9.989,37.501 -23.179,52.516c-9.805,11.163 -20.916,23.811 -39.874,23.832l-0.041,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M284.392,113.388l-3.456,30.245c0.469,-0.18 1.009,-0.46 1.57,-0.891c2.833,-2.951 7.706,-26.313 6.126,-29.695c-0.204,-0.31 -0.428,-0.421 -0.704,-0.481c-0.978,-0.239 -2.446,0.296 -3.536,0.822Zm-5.005,36.004c-1.335,0 -2.243,-0.295 -2.436,-0.365c-1.193,-0.426 -1.937,-1.616 -1.794,-2.877l3.985,-34.774c0.092,-0.805 0.53,-1.526 1.213,-1.972c0.469,-0.304 4.77,-3.001 8.715,-2.166c1.753,0.376 3.201,1.391 4.189,2.932c3.456,5.42 -3.088,33.608 -7.461,36.916c-2.456,1.861 -4.76,2.306 -6.411,2.306Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M141.039,112.517c-0.174,0 -0.347,0.015 -0.5,0.049c-0.275,0.06 -0.509,0.171 -0.734,0.537c-1.488,3.657 5.505,26.988 8.277,29.655c0.316,0.245 0.622,0.44 0.917,0.605l-4.862,-29.94c-0.917,-0.456 -2.14,-0.906 -3.098,-0.906Zm10.244,36.98c-1.539,0 -3.894,-0.43 -6.544,-2.441c-4.23,-3.198 -13.251,-31.062 -9.531,-36.886c0.979,-1.541 2.437,-2.556 4.19,-2.932c3.955,-0.835 8.236,1.862 8.715,2.166c0.642,0.42 1.07,1.091 1.192,1.846l5.678,34.98c0.214,1.33 -0.581,2.622 -1.866,3.032c-0.163,0.051 -0.815,0.235 -1.834,0.235Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M154.055,126.606c-0.632,-0 -1.386,-0.334 -1.875,-1.676c-2.243,-6.159 -6.412,-13.659 -6.453,-13.734c-0.448,-0.785 -0.163,-1.781 0.622,-2.222c0.795,-0.435 1.794,-0.155 2.233,0.631c0.122,0.23 2.436,4.387 4.576,9.131c0.021,-0.445 0.041,-0.891 0.061,-1.34c0.622,-13.2 1.764,-37.777 11.172,-47.849c18.153,-19.443 34.839,-20.134 49.547,-20.739c16.248,-0.756 40.415,6.789 47.897,14.795c7.094,7.585 15.37,20.689 15.37,32.642c0,3.938 0.113,7.636 0.215,11.058c0.112,3.513 0.214,6.755 0.173,9.706c0.927,-2.245 1.926,-4.802 2.823,-7.189c0.316,-0.841 1.264,-1.255 2.1,-0.956c0.846,0.315 1.274,1.261 0.958,2.106c-5.891,15.752 -6.737,15.522 -8.246,15.151c-1.651,-0.415 -1.396,-2.367 -1.284,-3.202c0.56,-4.162 0.397,-9.422 0.214,-15.511c-0.112,-3.457 -0.224,-7.184 -0.224,-11.163c-0,-11.002 -7.808,-23.261 -14.484,-30.41c-6.85,-7.321 -30.171,-14.456 -45.369,-13.765c-14.78,0.615 -30.059,1.246 -47.305,19.709c-8.583,9.197 -9.734,33.898 -10.285,45.772c-0.367,7.77 -0.408,8.771 -2.14,9.036c-0.092,0.01 -0.194,0.019 -0.296,0.019Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M222.796,1749.12m48.365,189.445c-12.578,-0 -19.285,-5.82 -23.311,-9.317c-0.846,-0.723 -1.549,-1.355 -2.161,-1.743c-12.129,-7.705 -23.953,-29.365 -25.849,-35.471c-4.526,-14.545 -3.017,-26.919 -1.549,-38.876c0.489,-4.026 0.999,-8.195 1.264,-12.353c0.937,-15.025 8.46,-57.529 10.05,-66.376c-2.345,-2.019 -5.871,-5.331 -6.615,-7.584c-3.109,-9.408 -3.16,-14.668 -0.133,-17.929c1.264,-5.79 -9,-45.308 -13.414,-62.309c-1.182,-4.536 -2.212,-8.511 -2.976,-11.58c-0.479,-1.885 -47.682,-190.81 -51.77,-214.825c-1.753,-10.284 -4.271,-21.242 -6.941,-32.841c-6.126,-26.665 -12.466,-54.247 -10.845,-78.975c2.14,-32.79 -6.626,-87.516 -10.193,-105.843c-1.234,-6.35 -5.851,-29.661 -11.569,-58.588c-10.978,-55.501 -26.023,-131.509 -29.152,-148.134c-4.23,-22.383 -26.44,-152.291 -23.138,-188.786c4.373,-48.319 15.646,-99.344 24.045,-122.825c3.588,-10.042 13.251,-31.112 22.608,-51.48c8.226,-17.933 16.003,-34.87 17.267,-39.288c1.661,-5.834 -2.813,-24.601 -6.075,-38.306c-1.753,-7.386 -3.272,-13.764 -3.955,-18.173c-1.549,-10.042 -12.079,-58.905 -17.888,-83.973c-0.5,4.113 -1.101,8.787 -1.743,13.84c-1.662,12.939 -3.537,27.61 -4.638,40.272c-0.184,2.057 -1.611,9.242 -4.342,22.822c-5.555,27.669 -14.851,73.981 -13.689,83.497c1.845,15.096 -1.183,83.012 -7.614,107.729c-6.463,24.847 -24.076,143.785 -24.8,154.171c-0.479,7.003 4.383,13.964 8.674,20.101c1.132,1.62 2.212,3.17 3.14,4.637c4.515,7.125 4.668,22.007 3.506,42.148c-0.978,16.859 2.467,25.564 2.497,25.655c0.133,0.327 0.204,0.673 0.204,1.02c0.01,0.397 -0.071,2.446 -1.783,3.842c-0.867,0.714 -2.396,1.438 -4.832,0.938c-7.033,-1.457 -11.059,-11.875 -16.92,-33.208c-1.111,-4.047 -1.977,-6.432 -2.599,-7.828l-0.255,0.632c-1.131,3.098 -4.149,37.265 -4.149,42.494c0,1.926 2.926,13.23 4.852,20.712c2.436,9.408 3.507,13.668 3.7,15.483c0.795,0.876 3.71,2.599 5.871,3.873c3.527,2.079 7.523,4.434 10.173,7.074c2.823,2.823 3.73,5.422 2.691,7.726c-1.101,2.446 -4.2,3.68 -8.552,3.445c-5.514,-0.316 -21.874,-10.56 -23.892,-12.986c-1.03,-1.223 -2.63,-4.637 -5.596,-11.059c-2.426,-5.229 -5.168,-11.171 -7.38,-15.075c-8.103,-14.341 -11.905,-24.025 -11.314,-28.795c0.744,-5.902 7.196,-74.296 7.533,-91.328c0.244,-12.476 -2.416,-45.226 -4.546,-71.535c-0.816,-10.057 -1.539,-19.013 -1.968,-25.243c-1.946,-28.024 -1.151,-92.433 1.315,-107.678c2.915,-18.003 9.419,-41.619 13.72,-57.251c1.478,-5.358 2.732,-9.926 3.567,-13.238c5.8,-22.966 5.413,-88.386 5.413,-89.041c0.183,-7.001 4.576,-169.653 14.158,-205.572c8.847,-33.188 29.151,-39.823 35.828,-42.005c0.723,-0.235 1.284,-0.4 1.61,-0.565c1.804,-0.901 11.437,-3.652 32.984,-9.706c15.249,-4.289 32.526,-9.141 41.781,-12.074c18.388,-5.819 19.57,-11.293 21.069,-18.223c1.712,-7.87 0.703,-43.234 -0.061,-60.832c-0.072,-1.505 1.1,-2.777 2.599,-2.842c1.498,0.005 2.772,1.101 2.844,2.602c0.091,2.107 2.222,51.711 -0.051,62.224c-1.968,9.071 -4.893,15.98 -24.749,22.264c-9.346,2.958 -26.664,7.831 -41.954,12.124c-14.208,3.992 -30.303,8.521 -32.026,9.341c-0.479,0.236 -1.284,0.521 -2.354,0.871c-6.615,2.157 -24.168,7.895 -32.261,38.221c-9.408,35.31 -13.933,202.54 -13.974,204.221c0.02,2.628 0.387,66.692 -5.565,90.323c-0.847,3.342 -2.121,7.951 -3.609,13.354c-4.27,15.515 -10.723,38.967 -13.587,56.674c-2.375,14.651 -3.139,79.305 -1.264,106.428c0.428,6.215 1.152,15.151 1.967,25.183c2.141,26.433 4.812,59.325 4.557,72.087c-0.347,17.736 -6.819,85.906 -7.563,91.899c-0.164,1.264 0.142,6.829 10.641,25.431c2.324,4.098 5.117,10.132 7.583,15.473c1.856,4.006 4.169,9.01 4.842,9.867c1.723,1.875 16.553,10.814 20.019,11.018c1.437,0.092 2.456,-0.092 3.007,-0.265c-0.194,-0.336 -0.571,-0.856 -1.315,-1.61c-2.161,-2.151 -5.841,-4.322 -9.082,-6.228c-5.137,-3.027 -8.531,-5.025 -8.531,-8.042c-0.082,-1.203 -2.008,-8.654 -3.547,-14.648c-3.13,-12.109 -5.026,-19.631 -5.026,-22.077c0,-3.313 2.865,-40.497 4.557,-44.584l0.234,-0.581c0.764,-1.947 1.998,-5.229 5.096,-5.025c3.089,0.173 5.138,3.69 7.818,13.444c2.651,9.684 7.553,27.531 12.456,29.244c-1.07,-3.496 -3.129,-12.303 -2.324,-26.359c0.907,-15.728 1.305,-32.648 -2.67,-38.916c-0.887,-1.407 -1.917,-2.885 -3.007,-4.434c-4.567,-6.534 -10.244,-14.668 -9.633,-23.587c0.724,-10.468 18.45,-130.168 24.963,-155.174c6.656,-25.588 9.072,-92.579 7.481,-105.698c-1.172,-9.587 6.147,-47.363 13.751,-85.229c2.191,-10.933 4.087,-20.374 4.25,-22.221c1.121,-12.778 2.997,-27.503 4.668,-40.497c1.723,-13.475 3.211,-25.113 3.048,-28.621c-0.071,-1.446 1.05,-3.091 2.487,-3.237c3.18,-0.38 3.191,-0.33 13.557,47.033c4.841,22.15 10.294,48.093 11.324,54.823c0.652,4.193 2.212,10.772 3.873,17.742c4.73,19.829 7.92,34.379 6.004,41.068c-1.366,4.814 -8.868,21.145 -17.552,40.057c-8.868,19.324 -18.918,41.225 -22.425,51.041c-8.399,23.492 -19.57,75.352 -23.749,121.484c-3.027,33.456 17.104,155.679 23.066,187.287c3.13,16.594 18.164,92.593 29.142,148.083c5.728,28.927 10.346,52.248 11.579,58.609c4.475,23.025 12.384,75.06 10.274,107.239c-1.569,23.933 4.679,51.107 10.723,77.395c2.691,11.681 5.219,22.72 7.003,33.147c4.057,23.821 51.209,212.532 51.678,214.428c0.764,3.047 1.794,7.002 2.966,11.518c14.137,54.44 15.187,64.419 12.252,67.273c-1.866,1.804 -0.377,7.858 1.203,12.629c0.377,0.876 3.241,3.761 6.125,6.126c0.765,0.631 1.132,1.62 0.948,2.589c-0.091,0.509 -9.245,51.168 -10.254,67.293c-0.265,4.322 -0.785,8.572 -1.284,12.68c-1.457,11.915 -2.834,23.168 1.335,36.603c1.957,6.289 13.475,26.063 23.566,32.474c0.805,0.51 1.723,1.295 2.814,2.244c3.71,3.209 9.224,7.969 20.069,7.98c1.947,-0.021 7.003,-1.468 12.211,-6.789c5.953,-6.105 12.996,-18.317 12.68,-41.852c-0.652,-48.1 -23.78,-115.893 -24.014,-116.576c-0.296,-0.846 -0.143,-1.794 0.397,-2.518c0.041,-0.061 4.027,-5.483 2.905,-10.702c-0.601,-2.732 -2.589,-5.056 -5.932,-6.901c-0.51,-0.275 -0.907,-0.703 -1.152,-1.223c-3.465,-7.339 -7.869,-32.464 -10.835,-53.543c-0.214,-1.488 0.826,-2.864 2.314,-3.078c1.478,-0.204 2.874,0.825 3.078,2.313c3.456,24.545 7.431,44.768 10.04,51.24c4.312,2.579 6.942,5.973 7.818,10.081c1.254,5.871 -1.559,11.436 -3.047,13.842c3.21,9.673 23.27,71.717 23.871,116.994c0.347,25.411 -7.553,38.896 -14.229,45.725c-6.024,6.167 -12.415,8.389 -16.054,8.43l-0.377,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M260.438,1694.27c-0.805,-0 -1.498,-0.592 -1.61,-1.417c-3.415,-24.922 -9.051,-69.454 -9.235,-73.491l-0.367,-8.623c-4.913,-115.7 -8.735,-183.044 -11.365,-200.158c-5.005,-32.515 -12.711,-57.946 -18.898,-78.393c-5.127,-16.941 -9.183,-30.324 -9.183,-40.282c-0,-25.941 -0.724,-34.677 -1.57,-44.798c-0.795,-9.602 -1.692,-20.478 -2.283,-47.774c-0.806,-38.02 0.632,-69.872 1.906,-97.984c0.897,-19.795 1.743,-38.479 1.682,-56.612l-0.021,-5.3c-0.081,-21.762 -0.224,-62.268 0.184,-95.283c0.01,-0.897 0.744,-1.621 1.63,-1.621l0.021,0c0.907,0.021 1.631,0.765 1.621,1.662c-0.408,32.994 -0.265,73.48 -0.184,95.232l0.02,5.3c0.062,18.205 -0.784,36.939 -1.681,56.774c-1.274,28.051 -2.722,59.853 -1.906,97.76c0.581,27.195 1.477,38.03 2.273,47.571c0.846,10.193 1.58,18.989 1.58,45.073c-0,9.469 3.985,22.648 9.041,39.334c6.217,20.539 13.964,46.102 18.999,78.842c2.65,17.236 6.483,84.703 11.396,200.514l0.367,8.613c0.163,3.609 5.585,46.704 9.204,73.206c0.122,0.897 -0.5,1.722 -1.397,1.844c-0.071,0.011 -0.152,0.011 -0.224,0.011Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M209.392,875.894c1.091,7.084 2.722,19.774 3.741,35.431c3.15,-18.399 5.718,-29.223 7.339,-35.757c-1.723,0.652 -3.69,1.111 -5.678,1.029c-1.957,0.174 -3.812,-0.163 -5.402,-0.703Zm1.916,71.004l-0.03,-0c-1.498,-0.01 -2.711,-1.254 -2.691,-2.762c0.448,-36.99 -4.709,-69.18 -5.504,-72.757c-0.255,-1.152 0.255,-2.345 1.274,-2.936c1.009,-0.601 2.293,-0.489 3.18,0.296c0.021,0.01 3.272,2.731 7.135,2.426c3.354,-0.123 7.156,-2.324 8.226,-3.181c0.907,-0.733 2.171,-0.815 3.149,-0.203c0.989,0.611 1.478,1.773 1.224,2.905c-0.255,1.141 -0.602,2.527 -1.03,4.26c-2.161,8.664 -6.666,26.675 -12.18,66.06c-0,1.06 -0.011,2.131 -0.021,3.201c-0.02,1.498 -1.233,2.691 -2.732,2.691Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M260.438,1695.36c-1.162,0 -2.242,-0.754 -2.599,-1.926c-0.438,-1.448 0.367,-2.966 1.804,-3.405c7.166,-2.181 21.303,-24.35 24.504,-41.383c1.804,-9.54 -0.489,-20.385 -2.915,-31.873c-1.723,-8.215 -3.517,-16.706 -3.904,-25.227c-0.112,-2.61 -0,-3.405 0.693,-4.72c0.418,-0.805 1.407,-2.701 3.027,-13.729c1.172,-8.043 -4.709,-20.835 -10.611,-30.131c-3.771,-5.952 -1.253,-19.366 -0.947,-20.875c0.132,-0.693 0.53,-1.294 1.1,-1.702c0,0 0.999,-0.764 1.346,-2.018c1.947,-6.962 0.03,-8.45 -1.376,-9.53c-0.887,-0.693 -2.243,-1.733 -2.243,-3.629c0,-2.579 0.877,-13.159 1.703,-22.2c0.285,-3.16 0.529,-8.379 0.825,-14.77c0.754,-16.237 1.896,-40.781 5.066,-57.559c9.265,-48.987 -0.724,-111.49 -9.194,-139.398c-9.286,-30.599 -10.611,-64.826 -7.115,-82.817c2.345,-12.038 22.843,-67.64 39.314,-112.315c9.368,-25.391 17.451,-47.326 20.325,-56.122c10.692,-32.77 35.094,-139.918 36.154,-175.295c1.142,-38.466 -10.713,-101.681 -17.083,-118.657c-3.476,-9.266 -12.456,-28.915 -21.13,-47.923c-9.347,-20.464 -17.42,-38.142 -18.867,-43.215c-1.916,-6.689 1.284,-21.239 6.004,-41.068c1.661,-6.97 3.231,-13.549 3.873,-17.742c1.029,-6.73 6.483,-32.673 11.334,-54.823c10.356,-47.353 10.367,-47.413 13.547,-47.033c1.437,0.146 2.558,1.791 2.497,3.237c-0.173,3.508 1.315,15.146 3.048,28.621c1.661,12.994 3.547,27.719 4.658,40.497c0.163,1.847 2.059,11.288 4.25,22.221c7.604,37.866 14.923,75.642 13.761,85.229c-1.601,13.119 0.815,80.11 7.481,105.698c6.503,25.006 24.239,144.706 24.952,155.174c0.622,8.919 -5.065,17.053 -9.632,23.587c-1.08,1.549 -2.12,3.027 -3.007,4.434c-3.965,6.268 -3.578,23.188 -2.67,38.916c0.815,14.056 -1.254,22.863 -2.314,26.359c4.892,-1.713 9.795,-19.56 12.456,-29.244c2.68,-9.754 4.719,-13.271 7.807,-13.444c3.058,-0.235 4.332,3.078 5.097,5.025l0.234,0.591c1.702,4.077 4.567,41.261 4.567,44.574c-0,2.446 -1.906,9.968 -5.025,22.077c-1.55,5.994 -3.476,13.445 -3.558,14.699c0,2.966 -3.394,4.964 -8.531,7.991c-3.242,1.906 -6.921,4.077 -9.082,6.228c-0.744,0.754 -1.121,1.274 -1.305,1.61c0.54,0.173 1.55,0.337 2.997,0.265c3.465,-0.204 18.296,-9.143 20.039,-11.049c0.652,-0.836 2.966,-5.83 4.821,-9.836c2.467,-5.341 5.27,-11.375 7.584,-15.473c10.509,-18.602 10.804,-24.167 10.651,-25.431c-0.754,-5.993 -7.226,-74.163 -7.573,-91.899c-0.244,-12.762 2.416,-45.654 4.556,-72.087c0.816,-10.032 1.539,-18.968 1.968,-25.183c1.875,-27.128 1.111,-91.783 -1.254,-106.428c-2.864,-17.702 -9.327,-41.138 -13.587,-56.649c-1.499,-5.418 -2.763,-10.033 -3.609,-13.379c-5.962,-23.631 -5.595,-87.695 -5.575,-90.413c-0.041,-1.591 -4.556,-168.821 -13.974,-204.131c-8.094,-30.331 -25.646,-36.064 -32.251,-38.221c-1.08,-0.35 -1.885,-0.635 -2.364,-0.876c-1.723,-0.815 -17.828,-5.344 -32.027,-9.336c-15.289,-4.298 -32.607,-9.166 -41.943,-12.124c-19.866,-6.284 -22.792,-13.193 -24.759,-22.264c-2.273,-10.513 -0.142,-60.117 -0.051,-62.224c0.072,-1.501 1.376,-2.631 2.844,-2.602c1.509,0.065 2.671,1.337 2.599,2.842c-0.764,17.598 -1.763,52.962 -0.061,60.832c1.498,6.93 2.691,12.404 21.069,18.223c9.255,2.933 26.532,7.785 41.77,12.074c21.558,6.054 31.19,8.805 32.994,9.706c0.327,0.165 0.887,0.33 1.621,0.565c6.666,2.182 26.971,8.817 35.818,42.005c9.581,35.919 13.985,198.571 14.168,205.481c-0.01,0.746 -0.387,66.171 5.402,89.132c0.836,3.317 2.1,7.895 3.578,13.264c4.556,16.556 10.805,39.232 13.709,57.225c2.477,15.24 3.262,79.649 1.326,107.678c-0.439,6.23 -1.162,15.186 -1.978,25.243c-2.13,26.309 -4.791,59.059 -4.536,71.535c0.327,17.032 6.789,85.426 7.523,91.328c0.601,4.77 -3.211,14.454 -11.314,28.795c-2.202,3.904 -4.954,9.846 -7.37,15.075c-2.976,6.422 -4.576,9.836 -5.606,11.059c-2.018,2.426 -18.378,12.67 -23.892,12.986c-4.322,0.204 -7.451,-1.009 -8.552,-3.445c-1.029,-2.304 -0.122,-4.903 2.691,-7.726c2.65,-2.64 6.646,-4.995 10.172,-7.074c2.161,-1.274 5.077,-2.997 5.882,-3.873c0.193,-1.815 1.264,-6.075 3.69,-15.483c1.936,-7.482 4.851,-18.786 4.851,-20.712c0,-5.229 -3.006,-39.396 -4.148,-42.515l-0.245,-0.611c-0.621,1.396 -1.498,3.781 -2.609,7.828c-5.861,21.333 -9.877,31.751 -16.91,33.208c-2.446,0.51 -3.975,-0.224 -4.831,-0.938c-1.723,-1.396 -1.794,-3.445 -1.794,-3.842c-0,-0.347 0.071,-0.704 0.203,-1.03c0.031,-0.081 3.476,-8.786 2.508,-25.645c-1.162,-20.141 -1.019,-35.023 3.506,-42.148c0.918,-1.467 2.008,-3.017 3.14,-4.637c4.281,-6.137 9.143,-13.098 8.664,-20.091c-0.714,-10.396 -18.327,-129.334 -24.8,-154.181c-6.431,-24.721 -9.449,-92.633 -7.614,-107.729c1.162,-9.516 -8.134,-55.828 -13.689,-83.497c-2.721,-13.58 -4.159,-20.765 -4.332,-22.822c-1.111,-12.662 -2.986,-27.333 -4.648,-40.272c-0.642,-5.053 -1.243,-9.727 -1.733,-13.84c-5.82,25.068 -16.349,73.931 -17.898,83.973c-0.673,4.409 -2.192,10.787 -3.955,18.173c-3.262,13.705 -7.736,32.472 -6.065,38.306c1.335,4.684 10.101,23.887 18.582,42.454c8.715,19.089 17.725,38.827 21.272,48.274c6.503,17.306 18.602,81.656 17.43,120.729c-1.07,35.766 -25.645,143.821 -36.419,176.826c-2.905,8.888 -11.008,30.864 -20.386,56.315c-16.41,44.492 -36.816,99.86 -39.079,111.48c-3.282,16.9 -1.957,50.75 6.982,80.187c8.959,29.529 18.836,91.696 9.336,141.987c-3.098,16.401 -4.23,40.721 -4.984,56.805c-0.306,6.493 -0.55,11.793 -0.846,15.004c-1.029,11.324 -1.549,18.378 -1.651,20.947c0.03,0.03 0.071,0.051 0.102,0.081c3.078,2.375 5.871,6.055 3.292,15.3c-0.55,1.987 -1.692,3.404 -2.518,4.219c-0.886,5.005 -1.488,13.068 0.378,15.993c3.108,4.913 13.148,21.874 11.395,33.841c-1.753,11.946 -2.905,14.147 -3.588,15.462c-0.112,0.255 -0.142,0.632 -0.081,1.947c0.367,8.083 2.11,16.36 3.802,24.361c2.538,12.028 4.933,23.393 2.935,34.003c-3.16,16.768 -17.715,42.372 -28.275,45.583c-0.265,0.082 -0.53,0.122 -0.795,0.122Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M214.244,330.883c-3.527,-0 -6.829,-3.177 -10.305,-6.525c-4.138,-3.978 -8.786,-8.535 -14.25,-8.246c-10.009,0.446 -52.962,13.185 -53.4,13.314c-0.856,0.261 -1.774,-0.234 -2.029,-1.1c-0.254,-0.865 0.235,-1.776 1.101,-2.031c1.784,-0.531 43.769,-12.99 54.175,-13.445c6.86,-0.255 12.059,4.718 16.666,9.152c3.241,3.116 6.33,6.068 8.603,5.548c2.242,-0.5 4.434,-2.812 6.758,-5.258c3.883,-4.093 8.715,-9.172 16.359,-8.311c4.903,0.56 13.811,3.077 23.25,5.738c11.406,3.222 25.594,7.291 28.887,6.31c0.856,-0.24 1.763,0.266 2.008,1.136c0.244,0.871 -0.265,1.771 -1.132,2.016c-3.883,1.091 -14.657,-1.796 -30.66,-6.314c-9.296,-2.627 -18.092,-5.109 -22.72,-5.634c-6.014,-0.71 -9.887,3.382 -13.618,7.31c-2.68,2.817 -5.208,5.479 -8.419,6.199c-0.428,0.096 -0.856,0.141 -1.274,0.141Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M145.157,502.516c-11.141,-0 -22.007,-2.177 -29.488,-6.754c-35.033,-21.44 -29.967,-71.15 -28.602,-74.192c0.337,-0.756 1.356,-1.321 2.141,-1.086c0.866,0.265 1.345,1.176 1.091,2.042c-0.072,0.22 -0.174,0.415 -0.316,0.576c-1.274,4.378 -4.536,50.329 27.398,69.868c16.686,10.216 51.148,7.839 64.705,-4.448c15.635,-14.191 16.92,-28.461 17.684,-36.986l0.051,-0.556c0.082,-0.901 0.887,-1.565 1.774,-1.476c0.907,0.081 1.569,0.876 1.488,1.777l-0.051,0.55c-0.765,8.411 -2.171,24.067 -18.755,39.111c-8.297,7.531 -23.963,11.574 -39.12,11.574Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M285.666,502.516c-15.167,-0 -30.824,-4.043 -39.121,-11.574c-16.594,-15.044 -18,-30.706 -18.755,-39.116l-0.051,-0.545c-0.081,-0.901 0.581,-1.696 1.478,-1.777c0.887,-0.085 1.692,0.575 1.774,1.476l0.051,0.551c0.775,8.53 2.059,22.8 17.695,36.991c13.546,12.292 48.008,14.669 64.704,4.448c31.934,-19.539 28.673,-65.486 27.399,-69.864c-0.143,-0.165 -0.255,-0.36 -0.316,-0.58c-0.265,-0.866 0.224,-1.777 1.09,-2.042c0.785,-0.22 1.805,0.336 2.141,1.091c1.366,3.037 6.431,52.747 -28.612,74.187c-7.481,4.572 -18.347,6.754 -29.477,6.754Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M215.161,645.525c-3.455,-0 -6.268,-2.812 -6.268,-6.27c-0,-0.9 0.734,-1.636 1.641,-1.636c0.897,0 1.631,0.736 1.631,1.636c-0,1.651 1.345,2.998 2.996,2.998c1.652,-0 2.997,-1.347 2.997,-2.998c0,-0.9 0.734,-1.636 1.641,-1.636c0.897,0 1.631,0.736 1.631,1.636c0,3.458 -2.813,6.27 -6.269,6.27Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M215.182,875.517c-4.506,-0 -8.216,-1.957 -9.724,-2.895c-1.886,-1.162 -7.788,-9.51 -10.244,-13.047c-0.51,-0.734 -0.326,-1.763 0.418,-2.273c0.744,-0.509 1.763,-0.336 2.273,0.418c3.669,5.29 8.266,11.437 9.286,12.13c2.691,1.661 9.693,4.903 16.339,-0.969c7.685,-6.829 12.384,-14.372 12.435,-14.443c0.469,-0.764 1.478,-1.009 2.242,-0.53c0.775,0.479 1.01,1.478 0.531,2.242c-0.194,0.327 -4.975,8.012 -13.037,15.168c-3.578,3.169 -7.258,4.199 -10.519,4.199Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M174.808,1292.96c-10.499,0 -22.18,-11.986 -22.71,-12.537c-0.622,-0.652 -0.601,-1.692 0.041,-2.314c0.652,-0.621 1.692,-0.601 2.314,0.041c0.132,0.133 12.863,13.169 22.179,11.375c9.582,-1.916 15.493,-8.664 15.555,-8.725c0.591,-0.693 1.62,-0.764 2.303,-0.173c0.683,0.581 0.765,1.621 0.174,2.304c-0.266,0.305 -6.667,7.654 -17.389,9.795c-0.816,0.163 -1.642,0.234 -2.467,0.234Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M233.305,1227.23c-9.969,-0 -17.247,-11.304 -17.573,-11.824c-0.489,-0.765 -0.255,-1.774 0.5,-2.263c0.764,-0.469 1.773,-0.255 2.262,0.51c0.072,0.122 7.686,11.874 16.758,10.121c9.622,-1.936 15.493,-8.664 15.544,-8.735c0.591,-0.683 1.62,-0.764 2.313,-0.173c0.683,0.581 0.765,1.62 0.174,2.303c-0.265,0.316 -6.666,7.655 -17.389,9.806c-0.877,0.173 -1.743,0.255 -2.589,0.255Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M44.471,1053.6c-0.234,-0 -0.458,-0.051 -0.672,-0.143l-10.132,-4.556c-0.816,-0.367 -1.182,-1.335 -0.816,-2.161c0.367,-0.826 1.336,-1.193 2.161,-0.826l9.622,4.332c4.913,-1.141 16.554,-4.148 19.448,-6.289c0.969,-0.713 1.02,-1.111 1.03,-1.121c-0.082,-0.316 -1.244,-0.999 -2.253,-1.08c-1.202,-0.225 -10.682,1.396 -19.132,2.895c-0.571,0.091 -1.121,-0.102 -1.498,-0.52l-12.874,-14.24c-0.601,-0.672 -0.55,-1.702 0.123,-2.303c0.662,-0.612 1.702,-0.551 2.303,0.112l12.262,13.566c4.302,-0.744 17.094,-2.915 19.091,-2.772c1.631,0.133 4.475,1.193 5.117,3.455c0.327,1.132 0.194,2.844 -2.222,4.638c-4.107,3.027 -19.458,6.575 -21.201,6.972c-0.112,0.02 -0.234,0.041 -0.357,0.041Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M40.272,1041.17c-0.683,-0 -1.315,-0.428 -1.549,-1.111c-0.286,-0.856 0.173,-1.784 1.029,-2.069l12.945,-4.394c2.905,-0.988 5.83,-2.497 6.656,-3.384c-2.946,-1.457 -11.987,0.021 -17.725,1.54c-0.459,0.112 -0.948,0.03 -1.346,-0.235l-13.526,-9.296c-0.744,-0.509 -0.927,-1.529 -0.418,-2.273c0.51,-0.734 1.529,-0.938 2.273,-0.418l12.915,8.868c3.751,-0.948 15.432,-3.608 19.59,-0.989c1.631,1.02 1.743,2.304 1.662,2.977c-0.347,2.935 -5.81,5.208 -9.031,6.299l-12.945,4.393c-0.173,0.061 -0.357,0.092 -0.53,0.092Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M385.974,1053.6c-0.122,-0 -0.235,-0.021 -0.357,-0.041c-1.733,-0.397 -17.093,-3.945 -21.201,-6.972c-2.416,-1.794 -2.538,-3.506 -2.222,-4.638c0.642,-2.262 3.486,-3.322 5.117,-3.455c2.028,-0.051 14.8,2.028 19.091,2.772l12.262,-13.566c0.601,-0.663 1.641,-0.724 2.304,-0.112c0.672,0.601 0.723,1.631 0.122,2.303l-12.874,14.24c-0.367,0.418 -0.927,0.621 -1.488,0.52c-8.45,-1.499 -17.848,-3.069 -19.142,-2.895c-1.009,0.081 -2.171,0.764 -2.243,1.09c0,0 0.062,0.398 1.02,1.111c2.894,2.141 14.545,5.148 19.448,6.289l9.622,-4.332c0.825,-0.367 1.794,0 2.161,0.826c0.377,0.826 -0,1.794 -0.816,2.161l-10.132,4.556c-0.214,0.092 -0.438,0.143 -0.672,0.143Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M390.173,1041.17c-0.173,-0 -0.357,-0.031 -0.53,-0.092l-12.945,-4.393c-3.221,-1.091 -8.684,-3.364 -9.031,-6.299c-0.081,-0.673 0.031,-1.957 1.662,-2.977c4.169,-2.589 15.84,0.051 19.601,0.989l12.904,-8.868c0.744,-0.52 1.763,-0.316 2.273,0.418c0.51,0.744 0.326,1.764 -0.418,2.273l-13.526,9.296c-0.397,0.265 -0.887,0.347 -1.345,0.235c-5.912,-1.57 -15.32,-3.099 -17.756,-1.57c0.784,0.887 3.751,2.416 6.686,3.414l12.945,4.394c0.856,0.285 1.315,1.213 1.03,2.069c-0.235,0.683 -0.867,1.111 -1.55,1.111Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M369.93,656.302c-0.499,-0 -0.989,-0.225 -1.304,-0.656c-0.551,-0.719 -0.398,-1.746 0.326,-2.286c16.094,-12.093 27.47,0.08 27.582,0.205c0.601,0.665 0.55,1.696 -0.112,2.307c-0.663,0.605 -1.693,0.56 -2.304,-0.1c-0.387,-0.416 -9.531,-10.047 -23.209,0.199c-0.296,0.221 -0.632,0.331 -0.979,0.331Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M31.893,656.302c-0.489,-0 -0.988,-0.225 -1.304,-0.656c-0.541,-0.719 -0.398,-1.746 0.326,-2.286c16.105,-12.093 27.47,0.08 27.582,0.205c0.601,0.665 0.56,1.696 -0.112,2.307c-0.663,0.605 -1.692,0.56 -2.304,-0.1c-0.377,-0.416 -9.53,-10.047 -23.209,0.199c-0.286,0.221 -0.632,0.331 -0.979,0.331Z"
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M879.838,113.188l-3.44,30.174c0.465,-0.186 1.023,-0.465 1.581,-0.884c2.835,-2.929 7.671,-26.268 6.091,-29.662c-0.186,-0.279 -0.419,-0.418 -0.698,-0.465c-0.976,-0.186 -2.418,0.279 -3.534,0.837Zm-4.974,35.939c-1.348,-0 -2.232,-0.326 -2.464,-0.372c-1.162,-0.419 -1.907,-1.628 -1.767,-2.883l3.952,-34.683c0.093,-0.837 0.558,-1.534 1.256,-1.999c0.464,-0.279 4.742,-2.976 8.693,-2.139c1.721,0.372 3.162,1.395 4.138,2.929c3.487,5.393 -3.069,33.521 -7.439,36.822c-2.417,1.86 -4.742,2.325 -6.369,2.325Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M736.782,112.305c-0.185,-0 -0.371,-0 -0.511,0.046c-0.279,0.047 -0.512,0.186 -0.745,0.558c-1.487,3.627 5.487,26.919 8.276,29.569c0.326,0.279 0.605,0.465 0.884,0.605l-4.835,-29.848c-0.93,-0.465 -2.138,-0.93 -3.069,-0.93Zm10.182,36.915c-1.534,-0 -3.859,-0.419 -6.509,-2.418c-4.231,-3.208 -13.203,-31.01 -9.531,-36.822c0.977,-1.534 2.464,-2.557 4.185,-2.929c3.951,-0.837 8.229,1.86 8.693,2.139c0.652,0.418 1.069,1.116 1.209,1.86l5.672,34.915c0.233,1.302 -0.604,2.604 -1.859,3.022c-0.186,0.047 -0.837,0.233 -1.86,0.233Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M640.357,1052.75c-0.186,0 -0.371,0 -0.604,-0.046l-10.74,-2.418c-13.389,-2.138 -19.48,-13.111 -19.712,-13.575c-0.744,-1.302 -0.233,-2.976 1.069,-3.673c1.348,-0.744 2.976,-0.233 3.719,1.069c0.187,0.372 5.115,9.112 15.947,10.833l10.321,2.324c6.277,-1.487 16.505,-4.277 18.923,-6.09c0.046,-0.047 0.046,-0.047 0.093,-0.047c-0.233,-0.093 -0.512,-0.186 -0.744,-0.186c-1.348,-0.093 -10.647,1.395 -18.829,2.883c-0.791,0.139 -1.581,-0.093 -2.232,-0.605l-4.509,-3.858c-1.163,-0.93 -1.302,-2.65 -0.326,-3.813c0.976,-1.162 2.697,-1.302 3.813,-0.325l3.58,3.022c5.856,-1.023 16.969,-2.79 18.968,-2.743c1.998,0.186 5.254,1.441 6.044,4.23c0.372,1.209 0.465,3.534 -2.604,5.812c-4.184,3.069 -18.69,6.509 -21.572,7.16c-0.186,0.046 -0.419,0.046 -0.605,0.046Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M977.379,655.101c-8.183,-0 -13.296,-5.486 -13.343,-5.579c-0.605,-0.651 -0.558,-1.674 0.093,-2.278c0.651,-0.605 1.673,-0.558 2.325,0.093c0.371,0.418 9.484,10.042 23.153,-0.186c0.697,-0.558 1.719,-0.419 2.278,0.325c0.557,0.697 0.372,1.72 -0.326,2.278c-5.346,3.999 -10.135,5.347 -14.18,5.347Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M639.939,655.101c-8.136,-0 -13.25,-5.486 -13.343,-5.579c-0.604,-0.651 -0.558,-1.674 0.139,-2.278c0.651,-0.605 1.674,-0.558 2.278,0.093c0.373,0.418 9.531,10.042 23.153,-0.186c0.745,-0.558 1.768,-0.419 2.325,0.325c0.512,0.697 0.372,1.72 -0.372,2.278c-5.3,3.999 -10.089,5.347 -14.18,5.347Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M681.27,825.495l0.047,-0l-0.047,-0Zm81.222,51.513c-5.16,-0 -10.971,-0.186 -17.528,-0.558c-58.812,-3.347 -66.948,-50.444 -66.948,-50.955c0,-0.884 0.697,-1.628 1.628,-1.628c0.883,0 1.58,0.698 1.626,1.535c0.14,1.022 8.88,44.679 63.881,47.794c43.424,2.51 52.117,-3.766 65.228,-13.204l1.209,-0.884c0.744,-0.511 1.766,-0.325 2.278,0.372c0.512,0.744 0.326,1.767 -0.372,2.278l-1.209,0.884c-11.67,8.415 -19.991,14.366 -49.793,14.366Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M862.59,877.008c-29.848,-0 -38.123,-5.951 -49.84,-14.366l-1.162,-0.884c-0.419,-0.278 -0.697,-0.79 -0.697,-1.301l0,-49.514c0,-0.884 0.744,-1.628 1.627,-1.628c0.929,0 1.627,0.744 1.627,1.628l0,48.677l0.511,0.372c13.158,9.438 21.852,15.714 65.275,13.204c55.373,-3.162 63.834,-47.376 63.881,-47.794c-0,-0.884 0.698,-1.581 1.627,-1.581c0.883,-0 1.627,0.79 1.627,1.674c-0,0.511 -8.183,47.608 -66.948,50.955c-6.602,0.372 -12.367,0.558 -17.528,0.558Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M770.861,203.011c-0.419,0 -0.883,-0.186 -1.162,-0.511c-0.651,-0.651 -0.651,-1.674 -0,-2.278c0.325,-0.326 8.182,-7.811 22.873,-11.205c0.885,-0.233 1.721,0.325 1.954,1.209c0.186,0.883 -0.372,1.766 -1.256,1.952c-13.715,3.208 -21.2,10.275 -21.293,10.368c-0.326,0.326 -0.697,0.465 -1.116,0.465Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M850.177,203.011c-0.419,0 -0.837,-0.139 -1.162,-0.465c-0.047,-0.093 -7.579,-7.16 -21.294,-10.368c-0.883,-0.186 -1.442,-1.069 -1.209,-1.952c0.186,-0.884 1.069,-1.442 1.952,-1.209c14.646,3.394 22.503,10.879 22.829,11.205c0.65,0.604 0.65,1.627 0.046,2.278c-0.326,0.325 -0.744,0.511 -1.162,0.511Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M808.241,170.931l-0.512,0c-50.583,-0.139 -60.811,-22.92 -61.23,-23.896c-0.372,-0.837 0.047,-1.767 0.837,-2.139c0.837,-0.326 1.813,0.046 2.138,0.837c0.093,0.232 10.043,21.804 58.255,21.898l0.512,-0c33.381,-0 53.047,-6.881 63.74,-22.363c0.512,-0.744 1.535,-0.93 2.278,-0.419c0.744,0.512 0.93,1.535 0.419,2.278c-11.345,16.459 -31.847,23.804 -66.437,23.804Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M694.985,483.312c-0.79,0 -1.487,-0.558 -1.626,-1.348c-0.372,-2.092 -9.717,-51.653 -10.228,-64.996c-0,-0.883 0.697,-1.674 1.58,-1.674l0.046,0c0.883,0 1.628,0.651 1.675,1.535c0.464,13.11 10.041,64.019 10.135,64.531c0.186,0.883 -0.419,1.72 -1.302,1.906c-0.093,-0 -0.187,0.046 -0.28,0.046Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M927.26,483.312c-0.092,0 -0.185,-0.046 -0.278,-0.046c-0.884,-0.186 -1.488,-1.023 -1.302,-1.906c0.093,-0.512 9.624,-51.421 10.135,-64.531c0.047,-0.884 0.743,-1.535 1.628,-1.535l0.046,0c0.93,0 1.627,0.791 1.58,1.674c-0.511,13.343 -9.809,62.904 -10.181,64.996c-0.186,0.79 -0.837,1.348 -1.628,1.348Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M627.572,968.923l-0.278,0c-0.885,-0.139 -1.488,-0.976 -1.349,-1.86c0,-0.139 2.464,-16.226 4.138,-25.059c0.186,-0.883 1.022,-1.488 1.906,-1.302c0.883,0.186 1.487,1.023 1.301,1.906c-1.673,8.787 -4.091,24.781 -4.137,24.92c-0.093,0.837 -0.79,1.395 -1.581,1.395Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M981.145,1050.89c-0.233,-0 -0.419,-0 -0.604,-0.047c-2.883,-0.651 -17.388,-4.045 -21.573,-7.16c-3.068,-2.278 -2.975,-4.602 -2.65,-5.765c0.837,-2.836 4.092,-4.091 6.09,-4.277c2,-0.093 13.112,1.72 18.97,2.743l3.58,-3.022c1.115,-0.93 2.835,-0.79 3.812,0.326c0.976,1.162 0.837,2.882 -0.326,3.858l-4.509,3.813c-0.652,0.511 -1.442,0.744 -2.232,0.604c-8.182,-1.441 -17.481,-3.115 -18.876,-2.882c-0.186,0.046 -0.465,0.093 -0.698,0.186l0.047,0.046c2.464,1.813 12.693,4.649 18.969,6.091l10.135,-2.279c11.019,-1.72 15.947,-10.46 16.134,-10.832c0.743,-1.348 2.37,-1.813 3.718,-1.116c1.302,0.744 1.767,2.371 1.069,3.673c-0.231,0.511 -6.322,11.483 -19.897,13.622l-10.601,2.371c-0.186,0.047 -0.372,0.047 -0.558,0.047Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M992.908,1048.7m-347.716,23.432c-0.325,-0 -0.696,-0 -1.022,-0.047c-5.533,-0.325 -21.851,-10.554 -23.85,-12.971c-1.071,-1.209 -2.651,-4.603 -5.627,-11.019c-2.417,-5.207 -5.16,-11.158 -7.345,-15.063c-8.089,-14.32 -11.902,-23.944 -11.298,-28.733c0.745,-5.904 7.206,-74.154 7.532,-91.171c0.233,-12.46 -2.417,-45.144 -4.556,-71.412c-0.79,-9.995 -1.535,-18.968 -1.952,-25.152c-1.954,-27.988 -1.163,-92.287 1.301,-107.49c2.929,-17.992 9.159,-40.634 13.669,-57.139c1.487,-5.346 2.742,-9.949 3.58,-13.25c5.812,-22.921 5.393,-88.195 5.393,-88.846c0.186,-7.021 4.602,-169.371 14.134,-205.217c8.833,-33.149 29.104,-39.751 35.798,-41.936c0.697,-0.232 1.256,-0.372 1.581,-0.558c1.813,-0.883 11.437,-3.673 33.009,-9.716c15.203,-4.278 32.405,-9.113 41.61,-11.995c18.366,-5.812 19.575,-11.298 21.062,-18.225c1.674,-7.718 0.744,-42.076 -0.047,-59.929c-10.6,-15.017 -18.782,-31.661 -24.315,-63.09c-4.603,-26.082 -6.928,-44.214 -5.998,-65.042c1.209,-28.686 9.717,-47.05 27.571,-59.65c19.154,-13.482 33.195,-13.994 45.608,-14.366c0.698,-0.093 21.526,-1.906 41.332,12.6c17.945,13.157 28.314,34.311 29.104,59.649c0.697,21.665 -2.837,63.462 -6.51,77.084c-0.371,1.348 -0.79,2.976 -1.254,4.835c-3.209,12.832 -8.555,34.172 -20.364,48.12c-0.79,17.899 -1.72,52.071 -0.047,59.789c1.489,6.927 2.697,12.413 21.015,18.225c9.252,2.882 26.454,7.717 41.657,11.995c21.526,6.043 31.196,8.833 33.01,9.716c0.325,0.186 0.883,0.326 1.58,0.558c6.695,2.185 26.919,8.787 35.753,41.936c9.577,35.846 13.948,198.196 14.134,205.124c-0,0.744 -0.372,66.018 5.439,88.939c0.79,3.301 2.092,7.857 3.533,13.204c4.324,15.621 10.787,39.193 13.715,57.185c2.465,15.203 3.255,79.502 1.302,107.49c-0.418,6.184 -1.162,15.157 -1.952,25.152c-2.046,24.92 -4.511,55.605 -4.557,69.32l-0,0.279c0.326,16.97 6.789,85.267 7.532,91.125c0.604,4.789 -3.208,14.459 -11.297,28.778c-2.232,3.906 -4.975,9.81 -7.393,15.064c-2.928,6.369 -4.556,9.763 -5.579,11.019c-1.999,2.417 -18.317,12.645 -23.851,12.971c-4.323,0.186 -7.438,-1.023 -8.507,-3.44c-1.023,-2.325 -0.14,-4.929 2.696,-7.718c2.604,-2.65 6.602,-5.021 10.136,-7.067c2.185,-1.302 5.113,-3.022 5.858,-3.905c0.185,-1.023 0.929,-1.674 1.209,-1.953c0.185,-0.186 0.324,-0.326 0.51,-1.023c0.373,-1.488 1.814,-2.418 3.301,-1.999c1.442,0.325 2.325,1.813 2,3.254c-0.419,1.721 -1.116,2.697 -1.767,3.394c-0.744,2.418 -3.906,4.278 -8.369,6.928c-3.208,1.906 -6.881,4.044 -9.066,6.183c-0.743,0.744 -1.115,1.302 -1.302,1.627c0.559,0.186 1.582,0.372 2.977,0.279c3.486,-0.232 18.271,-9.159 20.037,-11.065c0.651,-0.79 2.929,-5.765 4.789,-9.81c2.464,-5.3 5.254,-11.344 7.578,-15.435c10.508,-18.55 10.787,-24.13 10.647,-25.385c-0.744,-5.718 -6.695,-68.529 -7.485,-89.311c-0.047,-0.186 -0.093,-0.372 -0.093,-0.558c-0.233,-12.739 2.417,-45.563 4.556,-71.97c0.837,-9.996 1.534,-18.922 1.953,-25.152c1.906,-27.059 1.116,-91.59 -1.255,-106.235c-2.837,-17.667 -9.299,-41.052 -13.577,-56.581c-1.487,-5.393 -2.742,-9.949 -3.58,-13.297c-5.95,-23.618 -5.579,-87.544 -5.532,-90.241c-0.047,-1.627 -4.556,-168.534 -13.994,-203.775c-8.043,-30.266 -25.571,-35.985 -32.172,-38.124c-1.07,-0.372 -1.861,-0.65 -2.372,-0.883c-1.72,-0.837 -17.806,-5.347 -32.033,-9.345c-15.249,-4.277 -32.498,-9.159 -41.797,-12.088c-19.805,-6.276 -22.734,-13.157 -24.686,-22.223c-2.278,-10.507 -0.14,-60.021 -0.047,-62.114c0,-0.604 0.233,-1.208 0.651,-1.673c11.39,-12.972 16.691,-34.033 19.852,-46.632c0.465,-1.86 0.883,-3.487 1.255,-4.928c3.487,-12.971 6.974,-54.582 6.324,-75.504c-0.745,-23.571 -10.276,-43.284 -26.873,-55.418c-18.132,-13.297 -37.566,-11.577 -37.752,-11.577c-12.413,0.419 -25.012,0.837 -42.819,13.39c-16.365,11.53 -24.176,28.639 -25.338,55.465c-0.837,20.364 1.441,38.17 5.951,63.88c5.439,30.918 13.482,46.958 23.85,61.556c0.326,0.419 0.512,0.93 0.512,1.441c0.093,2.093 2.231,51.607 -0.047,62.114c-1.953,9.066 -4.882,15.947 -24.687,22.223c-9.299,2.929 -26.594,7.811 -41.797,12.088c-14.227,3.998 -30.313,8.508 -32.032,9.345c-0.512,0.233 -1.302,0.511 -2.371,0.883c-6.603,2.139 -24.131,7.858 -32.22,38.124c-9.392,35.241 -13.901,202.148 -13.948,203.868c0.047,2.604 0.419,66.53 -5.532,90.148c-0.837,3.348 -2.139,7.951 -3.627,13.344c-4.23,15.482 -10.693,38.867 -13.529,56.534c-2.371,14.645 -3.161,79.176 -1.255,106.235c0.419,6.23 1.116,15.156 1.952,25.152c2.139,26.407 4.789,59.231 4.556,71.97c-0.371,17.667 -6.834,85.731 -7.577,91.729c-0.14,1.255 0.139,6.788 10.647,25.385c2.278,4.091 5.113,10.088 7.577,15.435c1.814,3.998 4.139,8.973 4.789,9.856c1.721,1.86 16.552,10.786 19.992,10.972c1.442,0.093 2.464,-0.092 3.022,-0.278c-0.187,-0.326 -0.558,-0.837 -1.302,-1.581c-2.185,-2.139 -5.858,-4.324 -9.113,-6.23c-4.463,-2.604 -7.577,-4.463 -8.322,-6.881c-0.697,-0.744 -1.348,-1.72 -1.766,-3.394c-0.326,-1.488 0.557,-2.929 1.999,-3.301c1.488,-0.372 2.929,0.558 3.301,1.999c0.186,0.744 0.325,0.884 0.511,1.07c0.28,0.232 0.977,0.883 1.163,1.952c0.79,0.884 3.719,2.604 5.904,3.859c3.534,2.092 7.485,4.417 10.135,7.067c2.837,2.836 3.72,5.393 2.697,7.718c-0.976,2.231 -3.673,3.487 -7.486,3.487Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M636.173,1040.34c-0.186,-0 -0.372,-0 -0.558,-0.047c-1.116,-0.232 -6.741,-1.534 -9.67,-3.626c-3.626,-1.534 -11.345,-6.23 -13.715,-8.461c-0.744,-0.651 -1.209,-1.023 -1.627,-1.349c-1.628,-1.348 -1.906,-1.674 -6.974,-8.601c-6.974,-9.577 -6.277,-26.407 -6.231,-27.105c0.047,-1.488 1.302,-2.603 2.837,-2.603c1.488,0.093 2.65,1.348 2.557,2.882c0,0.14 -0.605,15.575 5.253,23.618c4.789,6.556 4.929,6.695 6.044,7.625c0.419,0.325 0.977,0.79 1.813,1.581c1.721,1.58 8.555,5.858 11.856,7.299c0.326,0.046 0.605,0.186 0.883,0.325c0.186,0.14 0.419,0.279 0.605,0.465c1.348,0.93 4.51,1.906 6.788,2.464l12.181,-4.137c1.58,-0.512 3.161,-1.209 4.37,-1.86c-3.394,-0.279 -9.717,0.744 -14.784,2.092c-0.745,0.232 -1.581,0.093 -2.233,-0.372l-13.482,-9.298c-0.326,-0.186 -0.557,-0.465 -0.79,-0.744c-0.233,-0.465 -0.652,-1.302 -0.652,-1.813c0,-2.046 2.092,-44.912 3.906,-49.282l0.233,-0.558c0.79,-1.953 2.138,-5.161 5.113,-5.021c3.07,0.139 5.115,3.673 7.765,13.39c2.696,9.67 7.578,27.477 12.46,29.197c-1.069,-3.487 -3.115,-12.274 -2.325,-26.315c0.883,-15.668 1.302,-32.591 -2.65,-38.867c-0.883,-1.395 -1.952,-2.836 -3.022,-4.417c-4.556,-6.509 -10.228,-14.599 -9.624,-23.525c0.744,-10.461 18.457,-129.946 24.92,-154.865c6.649,-25.571 9.066,-92.427 7.485,-105.538c-1.162,-9.577 6.137,-47.282 13.715,-85.08c2.186,-10.88 4.092,-20.318 4.232,-22.177c1.115,-12.739 3.021,-27.431 4.649,-40.402c1.766,-13.483 3.207,-25.059 3.068,-28.593c-0.047,-1.441 1.069,-3.068 2.464,-3.208c3.208,-0.325 3.208,-0.325 13.529,46.958c4.835,22.083 10.276,47.98 11.345,54.721c0.65,4.184 2.185,10.739 3.858,17.713c4.696,19.759 7.903,34.312 5.998,40.96c-1.395,4.835 -8.88,21.154 -17.528,40.03c-8.88,19.248 -18.876,41.099 -22.41,50.909c-9.948,27.941 -21.153,71.784 -17.619,121.949c0.093,1.487 -1.023,2.789 -2.511,2.882c-1.535,0.093 -2.79,-1.023 -2.93,-2.51c-3.58,-51.095 7.812,-95.728 17.947,-124.135c3.58,-10.042 13.25,-31.056 22.548,-51.373c8.229,-17.9 15.994,-34.823 17.25,-39.24c1.673,-5.811 -2.79,-24.548 -6.045,-38.216c-1.767,-7.393 -3.254,-13.762 -3.952,-18.179c-1.533,-9.996 -12.041,-58.766 -17.852,-83.779c-0.512,4.092 -1.116,8.741 -1.721,13.809c-1.673,12.924 -3.533,27.523 -4.649,40.169c-0.186,2.092 -1.628,9.252 -4.324,22.781c-5.532,27.616 -14.83,73.876 -13.668,83.36c1.813,15.064 -1.162,82.849 -7.625,107.537c-6.416,24.78 -24.037,143.521 -24.735,153.889c-0.464,6.974 4.372,13.947 8.648,20.038c1.116,1.627 2.232,3.208 3.162,4.649c4.509,7.113 4.649,21.991 3.487,42.076c-0.977,16.83 2.464,25.524 2.51,25.617c0.093,0.325 0.186,0.651 0.186,1.023c0,0.372 -0.093,2.417 -1.813,3.812c-0.837,0.697 -2.37,1.441 -4.788,0.93c-7.02,-1.441 -11.066,-11.856 -16.877,-33.149c-1.116,-3.999 -1.999,-6.416 -2.604,-7.811l-0.278,0.651c-1.116,3.347 -3.209,37.891 -3.441,45.934l11.484,7.904c4.789,-1.162 15.621,-3.394 19.945,-0.697c2.232,1.348 2.232,3.254 2.185,3.998c-0.326,2.696 -3.626,5.114 -9.764,7.206l-12.925,4.37c-0.279,0.093 -0.604,0.14 -0.883,0.14Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M985.33,1038.52c-0.326,-0 -0.605,-0.047 -0.884,-0.14l-12.925,-4.416c-6.136,-2.046 -9.437,-4.51 -9.763,-7.16c-0.093,-0.791 -0.047,-2.65 2.185,-4.045c4.323,-2.697 15.157,-0.419 19.899,0.744l11.53,-7.904c-0.233,-8.09 -2.325,-42.633 -3.487,-46.027l-0.233,-0.558c-0.604,1.395 -1.488,3.766 -2.604,7.811c-5.811,21.293 -9.855,31.661 -16.876,33.149c-2.417,0.464 -3.952,-0.233 -4.835,-0.93c-1.674,-1.395 -1.766,-3.441 -1.766,-3.859c-0,-0.326 0.045,-0.698 0.185,-1.023c0.046,-0.093 3.487,-8.787 2.51,-25.617c-1.162,-20.085 -1.022,-34.916 3.487,-42.076c0.93,-1.441 1.999,-2.975 3.162,-4.602c3.859,-5.579 8.229,-11.809 8.648,-18.179l-0,-0.046c-0.744,-10.368 -18.318,-129.109 -24.735,-153.889c-6.461,-24.688 -9.484,-92.473 -7.624,-107.537c1.163,-9.484 -8.136,-55.697 -13.668,-83.314c-2.697,-13.575 -4.139,-20.735 -4.325,-22.827c-1.116,-12.6 -2.975,-27.245 -4.649,-40.169c-0.65,-5.068 -1.209,-9.717 -1.72,-13.809c-5.811,25.013 -16.318,73.783 -17.853,83.779c-0.697,4.417 -2.185,10.786 -3.951,18.179c-3.256,13.668 -7.719,32.405 -6.044,38.216c1.302,4.696 10.041,23.851 18.55,42.355c8.693,19.061 17.667,38.774 21.201,48.212c6.508,17.249 24.64,87.591 23.477,126.505c-0.046,1.534 -1.301,2.697 -2.789,2.65c-1.534,-0.046 -2.697,-1.302 -2.65,-2.789c1.162,-38.217 -16.738,-107.444 -23.106,-124.46c-3.487,-9.252 -12.46,-28.872 -21.108,-47.84c-9.345,-20.41 -17.388,-38.077 -18.83,-43.145c-1.905,-6.648 1.302,-21.201 5.998,-40.96c1.674,-6.974 3.208,-13.529 3.859,-17.713c1.023,-6.741 6.462,-32.638 11.298,-54.721c10.367,-47.283 10.367,-47.283 13.528,-46.958c1.442,0.14 2.558,1.767 2.511,3.208c-0.186,3.534 1.302,15.157 3.023,28.593c1.673,12.971 3.533,27.663 4.696,40.402c0.139,1.859 2.045,11.297 4.23,22.223c7.579,37.798 14.877,75.457 13.715,85.034c-1.58,13.111 0.838,79.967 7.486,105.538c6.09,23.478 22.176,130.828 24.594,151.982c0.185,0.326 0.278,0.651 0.325,1.023c0.605,8.927 -5.067,17.063 -9.623,23.572c-1.116,1.534 -2.14,3.022 -3.023,4.416c-3.951,6.277 -3.58,23.153 -2.649,38.868c0.79,13.994 -1.256,22.781 -2.325,26.268c4.881,-1.674 9.763,-19.48 12.413,-29.151c2.697,-9.763 4.743,-13.25 7.811,-13.436c3.068,-0.139 4.323,3.069 5.114,5.021l0.233,0.558c1.813,4.37 3.905,47.283 3.905,49.282c-0.047,0.511 -0.187,1.023 -0.465,1.488c-0.186,0.279 -0.698,0.883 -0.977,1.115l-13.482,9.252c-0.651,0.465 -1.488,0.605 -2.232,0.419c-5.207,-1.395 -11.483,-2.371 -14.831,-2.139c1.209,0.651 2.836,1.348 4.417,1.86l12.18,4.184c2.278,-0.558 5.394,-1.581 6.789,-2.51c0.185,-0.186 0.418,-0.326 0.651,-0.465c0.232,-0.14 0.511,-0.233 0.79,-0.326c3.347,-1.441 10.136,-5.672 11.902,-7.299c0.836,-0.744 1.348,-1.209 1.814,-1.581c1.115,-0.93 1.254,-1.023 6.043,-7.624c5.858,-7.997 5.254,-23.479 5.207,-23.618c-0.046,-1.488 1.116,-2.79 2.604,-2.837c1.487,0.047 2.789,1.07 2.836,2.604c0.046,0.697 0.744,17.481 -6.23,27.058c-5.068,6.928 -5.393,7.253 -7.02,8.602c-0.372,0.325 -0.838,0.743 -1.581,1.394c-2.371,2.185 -10.089,6.928 -13.715,8.462c-2.93,2.092 -8.555,3.347 -9.671,3.58c-0.186,0.046 -0.372,0.093 -0.557,0.093Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M993.93,967.11c-0.79,-0 -1.488,-0.605 -1.581,-1.395c-0.045,-0.139 -2.463,-16.179 -4.137,-24.92c-0.186,-0.93 0.419,-1.767 1.302,-1.952c0.883,-0.14 1.719,0.418 1.905,1.301c1.675,8.834 4.139,24.92 4.139,25.06c0.14,0.929 -0.465,1.72 -1.349,1.859c-0.093,0.047 -0.186,0.047 -0.279,0.047Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M804.01,1744.83m-49.375,193.733l-0.743,-0c-4.929,-0.047 -16.784,-8.969 -25.246,-20.875c-8.136,-11.479 -16.319,-29.802 -8.88,-51.793c15.389,-45.376 26.733,-95.82 28.499,-103.77c-2.928,-5.068 -5.113,-15.017 4.325,-22.781c2.928,-6.649 5.718,-19.295 8.6,-39.705c0.233,-1.487 1.581,-2.557 3.069,-2.278c1.487,0.186 2.511,1.581 2.325,3.069c-3.116,21.804 -5.998,34.729 -9.345,41.796c-0.186,0.372 -0.465,0.744 -0.791,0.976c-9.205,7.16 -3.672,15.901 -3.022,16.877c0.419,0.651 0.559,1.395 0.419,2.139c-0.139,0.558 -12.181,55.976 -28.918,105.444c-6.463,18.973 0.278,35.106 7.021,45.237c8.6,12.878 19.712,20.089 22.037,20.229c13.994,0.134 18.735,-3.627 25.291,-8.885c9.809,-7.811 19.015,-21.665 20.829,-27.43c4.37,-14.041 2.743,-29.802 1.348,-43.657c-0.419,-4.137 -0.838,-8.089 -1.069,-11.85c-1.023,-16.277 -2.232,-73.602 -2.278,-74.16c-0,-1.116 0.65,-2.092 1.626,-2.557c1.395,-0.651 2.883,-1.767 3.07,-2.325c2.975,-8.275 -1.395,-12.553 -2.883,-13.947c-3.022,-2.976 -2.092,-12.6 11.297,-64.903c0.931,-3.487 1.721,-6.649 2.371,-9.206c0.465,-1.906 47.561,-190.246 51.607,-214.05c1.766,-10.414 4.277,-21.433 6.974,-33.102c6.044,-26.222 12.273,-53.327 10.693,-77.224c-2.093,-32.126 5.811,-84.058 10.275,-107.071c1.208,-6.323 5.811,-29.616 11.53,-58.487c10.971,-55.372 25.989,-131.248 29.104,-147.799c5.951,-31.568 26.035,-153.563 23.013,-186.945c-0.14,-1.488 0.976,-2.836 2.464,-2.975c1.488,-0.14 2.837,0.976 2.975,2.464c3.302,36.403 -18.875,166.116 -23.106,188.432c-3.115,16.598 -18.132,92.473 -29.104,147.892c-5.719,28.872 -10.321,52.118 -11.53,58.487c-3.58,18.272 -12.32,72.9 -10.182,105.63c1.628,24.688 -4.696,52.211 -10.833,78.851c-2.649,11.577 -5.16,22.502 -6.927,32.777c-4.091,23.943 -51.188,212.562 -51.699,214.422c-0.651,2.603 -1.441,5.765 -2.324,9.252c-4.185,16.319 -13.948,54.256 -12.553,59.882c6.648,6.695 5.858,14.226 3.951,19.433c-0.743,2.093 -2.789,3.673 -4.323,4.603c0.232,9.578 1.302,57.65 2.231,72.295c0.186,3.678 0.604,7.579 1.023,11.624c1.488,14.412 3.114,30.684 -1.581,45.841c-2.046,6.653 -11.67,21.34 -22.595,30.038c-6.741,5.389 -12.646,10.085 -28.035,10.085Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M780.439,1708.29c-10.368,-0 -17.388,-6.788 -17.714,-7.067c-0.651,-0.651 -0.651,-1.674 -0,-2.325c0.605,-0.65 1.627,-0.65 2.278,-0.046c0.093,0.093 6.694,6.416 15.946,6.183c10.368,-0.279 20.922,-16.411 26.594,-25.059l0.837,-1.302c7.764,-11.809 2.325,-36.775 -2.185,-46.864c-1.72,-3.859 -15.156,-44.167 -14.04,-52.815c0.557,-4.51 0.093,-12.041 -0.326,-19.294c-0.326,-5.207 -0.604,-10.089 -0.512,-13.576c0.279,-7.904 2.047,-19.062 3.533,-22.037c0.373,-0.79 0.931,-1.534 1.489,-2.278c1.348,-1.674 2.603,-3.301 2.185,-6.974c-0.558,-5.068 -3.394,-7.439 -3.534,-7.578c-0.371,-0.279 -0.604,-0.744 -0.604,-1.209c-0.232,-15.668 6.462,-51.932 9.67,-69.366c0.791,-4.185 1.441,-7.765 1.488,-8.369c0.233,-2.836 1.814,-8.601 3.952,-16.551c6.788,-24.827 19.341,-70.994 15.064,-114.138c-3.07,-30.871 1.441,-47.329 4.695,-59.371c1.488,-5.44 2.789,-10.135 3.022,-14.877c1.116,-23.247 0.279,-42.308 -0.557,-62.532c-0.559,-13.39 -1.116,-27.245 -1.256,-43.471c-0.279,-48.212 -2.185,-73.411 -4.416,-102.654l-0.466,-5.905c-0.558,-7.531 -1.767,-15.203 -3.068,-23.385c-1.721,-10.972 -3.719,-23.432 -4.602,-38.542c-0.047,-0.884 0.65,-1.674 1.533,-1.721c0.883,-0.092 1.674,0.651 1.721,1.535c0.883,14.97 2.835,27.337 4.556,38.216c1.302,8.229 2.511,15.994 3.115,23.665l0.465,5.904c2.231,29.244 4.137,54.536 4.463,102.887c0.093,16.18 0.65,29.988 1.209,43.331c0.883,20.271 1.673,39.425 0.557,62.858c-0.278,5.067 -1.58,9.902 -3.115,15.528c-3.207,11.809 -7.624,27.942 -4.602,58.208c4.323,43.749 -8.322,90.288 -15.157,115.301c-2.138,7.81 -3.673,13.436 -3.859,15.993c-0.046,0.697 -0.511,3.161 -1.533,8.694c-2.883,15.761 -9.671,52.257 -9.625,68.018c1.163,1.162 3.58,4.184 4.138,9.206c0.512,4.974 -1.441,7.485 -2.836,9.298c-0.465,0.558 -0.883,1.116 -1.208,1.72c-1.023,2.139 -2.884,12.274 -3.162,20.689c-0.093,3.348 0.185,8.183 0.511,13.297c0.466,7.392 0.93,15.063 0.279,19.899c-0.929,7.299 11.53,45.934 13.808,51.048c3.767,8.462 11.158,35.985 1.953,50.026l-0.837,1.255c-5.997,9.159 -17.202,26.268 -29.29,26.547l-0.557,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M808.752,875.381c-0,0.093 0.046,0.232 0.093,0.372c1.813,6.648 4.975,18.318 8.555,37.844c0.79,-16.969 2.092,-31.01 2.928,-38.03c-1.766,0.372 -3.951,0.604 -6.322,0.372c-1.814,0.139 -3.673,-0.186 -5.254,-0.558Zm10.786,74.155c-1.488,-0 -2.697,-1.209 -2.697,-2.697c-0.045,-0.93 -0.045,-1.86 -0.045,-2.789c-5.301,-37.891 -10.647,-57.465 -13.204,-66.903c-0.652,-2.324 -1.116,-4.137 -1.442,-5.486c-0.233,-1.022 0.186,-2.092 1.023,-2.743c0.791,-0.651 1.953,-0.744 2.883,-0.279c0.046,0.047 4.137,2.092 8.089,1.907c4.65,0.418 8.369,-1.256 8.369,-1.256c0.976,-0.418 2.046,-0.279 2.836,0.372c0.79,0.651 1.162,1.674 0.976,2.697c-0.697,2.975 -4.51,36.45 -4.044,74.434c-0,1.487 -1.209,2.696 -2.697,2.743l-0.047,-0Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M763.887,1702.76c-0.372,0 -0.743,-0.093 -1.116,-0.232c-8.043,-3.627 -20.921,-21.573 -24.501,-37.38c-2.975,-13.018 -0.651,-30.313 1.628,-47.096c1.115,-8.23 2.185,-15.994 2.649,-23.247c0.651,-10.739 0.419,-11.716 -0.697,-16.504c-0.466,-1.953 -1.069,-4.464 -1.813,-8.415c-1.86,-10.043 4.324,-19.667 9.299,-27.384l1.069,-1.72c1.766,-2.79 1.302,-10.694 0.371,-15.947c-0.79,-0.837 -1.952,-2.232 -2.511,-4.231c-2.556,-9.205 0.233,-12.878 3.302,-15.249c0,-0.047 0.047,-0.093 0.093,-0.093c-0.093,-2.558 -0.605,-9.624 -1.674,-20.922c-0.279,-3.208 -0.512,-8.508 -0.837,-14.97c-0.744,-16.087 -1.86,-40.356 -4.975,-56.721c-9.484,-50.165 0.373,-112.232 9.345,-141.708c8.927,-29.383 10.228,-63.183 6.974,-80.059c-2.278,-11.577 -22.642,-66.856 -39.006,-111.256c-9.392,-25.431 -17.481,-47.329 -20.364,-56.209c-10.74,-32.963 -35.288,-140.825 -36.358,-176.485c-0.046,-1.534 1.163,-2.789 2.651,-2.835c1.441,0.092 2.743,1.162 2.79,2.65c1.069,35.334 25.431,142.266 36.078,174.996c2.882,8.741 10.971,30.638 20.27,55.977c16.458,44.586 36.914,100.097 39.285,112.139c3.487,17.946 2.14,52.117 -7.113,82.663c-8.461,27.849 -18.411,90.241 -9.205,139.151c3.162,16.737 4.324,41.238 5.068,57.418c0.325,6.369 0.558,11.623 0.836,14.738c0.838,9.066 1.721,19.619 1.721,22.176c-0,1.907 -1.348,2.929 -2.278,3.627c-1.395,1.069 -3.301,2.557 -1.349,9.531c0.326,1.255 1.349,1.999 1.349,2.045c0.557,0.372 0.976,0.977 1.069,1.674c0.326,1.488 2.836,14.878 -0.929,20.829l-1.116,1.72c-4.418,6.927 -9.95,15.528 -8.509,23.478c0.744,3.813 1.302,6.23 1.766,8.136c1.256,5.44 1.535,6.974 0.792,18.132c-0.466,7.439 -1.582,15.668 -2.651,23.618c-2.185,16.273 -4.463,33.103 -1.719,45.144c3.347,14.738 15.341,30.918 21.432,33.614c1.348,0.605 1.952,2.232 1.348,3.58c-0.465,1.023 -1.441,1.627 -2.464,1.627Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M831.859,1294.14c-0.372,-0 -0.791,-0.14 -1.116,-0.419c-0.651,-0.651 -0.651,-1.673 -0.046,-2.324c0.557,-0.605 14.133,-14.552 25.152,-12.274c10.693,2.138 17.062,9.438 17.341,9.763c0.604,0.697 0.512,1.72 -0.186,2.278c-0.65,0.605 -1.72,0.512 -2.278,-0.139c-0.047,-0.093 -5.951,-6.788 -15.529,-8.741c-9.298,-1.813 -22.037,11.251 -22.129,11.391c-0.326,0.325 -0.745,0.465 -1.209,0.465Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M773.372,1228.54c-0.326,0 -0.605,-0.093 -0.883,-0.232c-0.745,-0.512 -0.978,-1.488 -0.512,-2.278c0.372,-0.558 8.879,-13.855 20.131,-11.53c10.694,2.138 17.109,9.437 17.388,9.763c0.557,0.697 0.464,1.72 -0.186,2.278c-0.697,0.604 -1.721,0.558 -2.325,-0.14c-0.046,-0.092 -5.951,-6.787 -15.528,-8.694c-9.02,-1.766 -16.644,9.95 -16.69,10.089c-0.326,0.465 -0.838,0.744 -1.395,0.744Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M770.675,1593.36c-10.135,0 -18.644,-6.23 -18.783,-6.323c-0.697,-0.511 -0.837,-1.534 -0.325,-2.278c0.557,-0.697 1.58,-0.883 2.278,-0.325c0.697,0.511 17.249,12.553 30.452,0.139c0.651,-0.651 1.72,-0.604 2.324,0.047c0.605,0.651 0.559,1.72 -0.092,2.324c-5.114,4.835 -10.693,6.416 -15.854,6.416Z"
                  />
                  <path
                    style={{ fill: "#636363", fillRule: "nonzero" }}
                    d="M770.675,1829.49c-10.135,-0 -18.644,-6.23 -18.783,-6.323c-0.697,-0.511 -0.837,-1.534 -0.325,-2.278c0.557,-0.698 1.58,-0.884 2.278,-0.326c0.697,0.512 17.249,12.553 30.452,0.14c0.651,-0.651 1.72,-0.605 2.324,0.046c0.605,0.651 0.559,1.674 -0.092,2.325c-5.114,4.789 -10.693,6.416 -15.854,6.416Z"
                  />
                </g>
              </g>
              <Tippy
                content="Između stražnjice (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Između-stražnjice"
                  className={
                    services[20].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 20) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="814.022"
                  cy="882.979"
                  r="30.247"
                />
              </Tippy>
              <Tippy
                content="Nausnice (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Nausnice"
                  className={
                    services[14].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 14) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="215.935"
                  cy="173.194"
                  r="23.898"
                />
              </Tippy>
              {/* <circle
                id="Izmedju-obrva"
                className={
                  services[15].selected
                    ? styles.active__elem__2nd
                    : styles.service__elem__2nd
                }
                onClick={() =>
                  setServices((current) =>
                    current.map((obj) => {
                      if (obj.id === 15) {
                        return {
                          ...obj,
                          selected: !obj.selected,
                          sidebar: !obj.sidebar,
                        };
                      }
                      return obj;
                    })
                  )
                }
                style={{ fill: "#bbb", stroke: "#636363", strokeWidth: "4px" }}
                cx="215.935"
                cy="99.268"
                r="23.898"
              /> */}
              <Tippy
                content="Pazusi (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Pazusi"
                  className={
                    services[16].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 16) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="87.652"
                  cy="424.654"
                  r="30.247"
                />
              </Tippy>
              <Tippy
                content="Pazusi (49 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Pazusi1"
                  className={
                    services[16].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 16) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="343.643"
                  cy="424.654"
                  r="30.247"
                />
              </Tippy>
              <Tippy
                content="Oko bradavica (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Oko-bradavica"
                  className={
                    services[17].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 17) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="152.426"
                  cy="463.083"
                  r="23.898"
                />
              </Tippy>
              <Tippy
                content="Oko bradavica (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <circle
                  id="Oko-bradavica1"
                  className={
                    services[17].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 17) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="279.395"
                  cy="463.083"
                  r="23.898"
                />
              </Tippy>
              <Tippy
                content="Između grudi (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <ellipse
                  id="Izmedju-grudi"
                  className={
                    services[18].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 18) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="214.852"
                  cy="525.108"
                  rx="23.898"
                  ry="58.127"
                />
              </Tippy>
              <Tippy
                content="Trbušna linija (25 KM)"
                followCursor={true}
                plugins={[followCursor]}
              >
                <ellipse
                  id="Trbusna-linija"
                  className={
                    services[19].selected
                      ? styles.active__elem__2nd
                      : styles.service__elem__2nd
                  }
                  onClick={() =>
                    setServices((current) =>
                      current.map((obj) => {
                        if (obj.id === 19) {
                          return {
                            ...obj,
                            selected: !obj.selected,
                            sidebar: !obj.sidebar,
                          };
                        }
                        return obj;
                      })
                    )
                  }
                  style={{
                    fill: "#bbb",
                    stroke: "#636363",
                    strokeWidth: "4px",
                  }}
                  cx="214.852"
                  cy="727.243"
                  rx="23.898"
                  ry="58.127"
                />
              </Tippy>
            </g>
          </svg>
        )}
      </div>
    </section>
  );
}
