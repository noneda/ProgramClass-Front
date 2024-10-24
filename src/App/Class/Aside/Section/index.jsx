import SubSection from "./SubSection";
import "./base.css";

const Section = (props) => {
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
          <h3>{item.Section}</h3>
          {item.Class.map((item, index) => (
            <SubSection key={index}>{item}</SubSection>
          ))}
        </ul>
      ))}
    </>
  );
};

export default Section;
