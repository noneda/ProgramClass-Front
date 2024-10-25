import { useState, useEffect } from "react";
import "./base.css";
import ThemeToggler from "./Header";
import Aside from "./Aside";
import Article from "./Article";
import Status from "./Status";

const ClassRoom = () => {
  const [MenuDataTemporal, setMenuDataTemporal] = useState([]);
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
      <ThemeToggler>Class Name</ThemeToggler>
      <section className="Container-Class">
        <Aside Send={MenuDataTemporal} />
        <Article />
        <Status />
      </section>
    </>
  );
};

export default ClassRoom;
