import Complete from "../../../../Components/Complete";
import SubSection from "./SubSection";
import "./base.css";
import { useState } from "react";

const Section = (props) => {
  const [isSelect, setSelect] = useState();
  return (
    <>
      {props.Send.map((item, index) => (
        <ul
          key={index}
          className="Section"
          id={index === props.Select ? "Select-Section" : ""}
        >
          <h3
            onClick={() => {
              setSelect(null);
              props.Select === index ? props.Changes(null) : props.Changes(index);
            }}
          >
            {item.Section}

            {item.See.every((currentValue) => currentValue) ? <Complete /> : ""}
          </h3>
          <SubSection
            Send={item.Class}
            Select={isSelect}
            Changes={setSelect}
            See={item.See}
            SeeChanges={props.Father}
          />
        </ul>
      ))}
    </>
  );
};

export default Section;
