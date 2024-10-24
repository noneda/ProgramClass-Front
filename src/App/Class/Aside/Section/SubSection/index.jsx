import "./base.css";
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
          }}
        >
          <h4>{item} </h4>
        </li>
      ))}
    </>
  );
};

export default SubSection;
