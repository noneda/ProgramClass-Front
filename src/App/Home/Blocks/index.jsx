import { useNavigate } from "react-router-dom";
import "./base.css";

const Blocks = (props) => {
  const nav = useNavigate();
  return (
    <>
      <div className="Blocks">
        <div
          className="title"
          onClick={() => {
            nav("/Class");
          }}
        >
          <h1>{props.title}</h1>
        </div>
        <picture></picture>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Blocks;