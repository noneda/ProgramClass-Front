import "./base.css";
const SubSection = (props) => {
  return (
    <>
      <li className="SubSection">
        <h4>{props.children} </h4>
      </li>
    </>
  );
};

export default SubSection;
