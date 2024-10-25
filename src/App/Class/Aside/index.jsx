import { useState, useEffect } from "react";

import Section from "./Section";
import "./base.css";

const Aside = (props) => {
  const [isSelect, setSelect] = useState();
  return (
    <>
      <aside className="menu">
        <Section
          Send={props.Send}
          Select={isSelect}
          Changes={setSelect}
          Father={props.Changes}
        />
      </aside>
    </>
  );
};

export default Aside;
