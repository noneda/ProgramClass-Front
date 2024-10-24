import SubSection from "./SubSection";
import "./base.css";
import { useState } from "react";

const Section = (props) => {
  const [isSelect, setSelect] = useState(0);
  return (
    <>
      {props.Send.map((item, index) => (
        <ul
          key={index}
          className="Section"
          onClick={() => {
            props.Changes(index);
          }}
          id={index === props.Select ? "Select-Section" : ""}
        >
          <h3
            onClick={() => {
              setSelect(0);
            }}
          >
            {item.Section}
          </h3>
          <SubSection
            Send={item.Class}
            Select={isSelect}
            Changes={setSelect}
          ></SubSection>
        </ul>
      ))}
    </>
  );
};

export default Section;
