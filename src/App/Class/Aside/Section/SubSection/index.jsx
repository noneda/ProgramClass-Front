import "./base.css";
import Complete from "../../../../../Components/Complete";

const SubSection = (props) => {
  return (
    <>
      {props.Send.map((item, index) => (
        <li
          key={index}
          className="SubSection"
          id={props.Select == index ? "Select-SubSection" : ""}
          onClick={() => {
            props.Changes(index);
            props.SeeChanges((props.See[index] = true));
          }}
        >
          <h4>
            {item}
            {props.See[index] ? <Complete /> : ""}{" "}
          </h4>
        </li>
      ))}
    </>
  );
};

export default SubSection;
