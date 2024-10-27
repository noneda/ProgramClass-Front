import "./base.css";
import Complete from "../../../../../Components/Complete";

const SubSection = (props) => {
  return (
    <>
      {props.Send.map((item, index) => (
        <li
          key={index}
          className="SubSection"
          id={props.slcSub == index ? "Select-SubSection" : ""}
          onClick={() => {
            props.setSlcSub(index);
          }}
        >
          <h4>
            {item[0]}
            {/*
            props.See[index] ? <Complete /> : ""}{" "
            */}
          </h4>
        </li>
      ))}
    </>
  );
};

export default SubSection;
