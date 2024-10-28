import "./base.css";
import Complete from "../../../../../Components/Complete";

const SubSection = (props) => {
  return (
    <>
      {props.Send.map((item, index) => (
        <li
          key={index}
          className="SubSection"
          id={index === props.slcSub ? "Select-SubSection" : ""}
          onClick={() => {
            if (index === props.slcSub) {
              props.setSlcSub(null);
              props.setIdSlc(null);
              props.setTypeSlc(null);
            } else {
              props.setSlcSub(index);
              props.setIdSlc(item[3]);
              props.setTypeSlc(item[2]);
            }
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
