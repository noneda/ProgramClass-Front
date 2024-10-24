import { useState, useEffect } from "react";

import Section from "./Section";
import "./base.css";

const Aside = (props) => {
  const [MenuDataTemporal, setMenuDataTemporal] = useState([]);
  const [isSelect, setSelect] = useState(0);

  useEffect(() => {
    setMenuDataTemporal([
      {
        Section: "Section 1",
        Class: ["Class One", "Class Two", "Class Three"],
      },
      {
        Section: "Section 2",
        Class: ["Class One", "Class Two", "Class Three"],
      },
      {
        Section: "Section 3",
        Class: ["Class One", "Class Two", "Class Three"],
      },
      {
        Section: "Section 4",
        Class: ["Class One", "Class Two", "Class Three"],
      },
      {
        Section: "Section 5",
        Class: ["Class One", "Class Two", "Class Three"],
      },
      {
        Section: "Section 6",
        Class: ["Class One", "Class Two", "Class Three"],
      },
    ]);
  }, []);
  return (
    <>
      <aside className="menu">
        <Section
          Send={MenuDataTemporal}
          Select={isSelect}
          Changes={setSelect}
        />
      </aside>
    </>
  );
};

export default Aside;
