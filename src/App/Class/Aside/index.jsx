import { useState, useEffect } from "react";

import Section from "./Section";
import "./base.css";

const Aside = (props) => {
  const [isSelect, setSelect] = useState(0);
  return (
    <>
      <aside className="menu">
        <Section
          Send={props.Send}
          Select={isSelect}
          Changes={setSelect}
        />
      </aside>
    </>
  );
};

export default Aside;
