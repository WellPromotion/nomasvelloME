import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="accordion"
      style={{
        width: "659px",
        marginBottom: "15px",
        lineHeight: "15px",
          border: "1px solid rgba(209, 213, 219, 0.1)",
          margin: "auto auto 15px auto"
        
      }}
    >
      <button 
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "16px",
          border: "none",
          background: "#FFFFFF",
          outline: "none",
          cursor: "pointer"
        }}
        onClick={toggle}
        type="button"
      >
              <p><span className="inner innerLed">{props.title}</span> </p>
          </button>
          <hr className="hrAccordion" style={{ display: isShowing ? "block" : "none" }} />
      <div className="subText"
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
          
    </div>
  );
}
