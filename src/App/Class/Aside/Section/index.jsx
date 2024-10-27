import Complete from "../../../../Components/Complete";
import SubSection from "./SubSection";
import "./base.css";

const Section = (props) => {
  return (
    <>
      {props.Send.map((item, index) => (
        <ul
          key={index}
          className="Section"
          id={index === props.slcSec ? "Select-Section" : ""}
        >
          <h3
            onClick={() => {
              props.setSlcSub(null);
              props.slcSec === index
                ? props.setSlcSec(null)
                : props.setSlcSec(index);
            }}
          >
            {item.Section}

            {/*
            item.See.every((currentValue) => currentValue) ? <Complete /> : ""
            */}
          </h3>
          <SubSection
            Send={item.Class}
            slcSub={props.slcSub}
            setSlcSub={props.setSlcSub}
            See={item.See}
          />
        </ul>
      ))}
    </>
  );
};

export default Section;
