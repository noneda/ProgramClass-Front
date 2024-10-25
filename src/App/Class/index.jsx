import { useState } from "react";
import { useParams } from "react-router-dom";
import "./base.css";
import ThemeToggler from "./Header";
import Aside from "./Aside";
import Article from "./Article";
import Status from "./Status";

const ClassRoom = () => {
  const [isMenuDataTemporal, setMenuDataTemporal] = useState([
    {
      Section: "Section 1",
      Class: ["Class One", "Class Two", "Class Three"],
      See: [true, true, true],
    },
    {
      Section: "Section 2",
      Class: ["Class One", "Class Two", "Class Three"],
      See: [true, true, true],
    },
    {
      Section: "Section 3",
      Class: ["Class One", "Class Two", "Class Three"],
      See: [true, true, true],
    },
    {
      Section: "Section 4",
      Class: ["Class One", "Class Two", "Class Three"],
      See: [false, false, false],
    },
    {
      Section: "Section 5",
      Class: ["Class One", "Class Two", "Class Three"],
      See: [false, false, false],
    },
    {
      Section: "Section 6",
      Class: ["Class One", "Class Two", "Class Three"],
      See: [false, false, false],
    },
  ]);
  const { id } = useParams();

  return (
    <>
      <ThemeToggler>Class Tittle {id}</ThemeToggler>
      <section className="Container-Class">
        <Aside Send={isMenuDataTemporal} />
        <Article />
        <Status Send={isMenuDataTemporal} />
      </section>
    </>
  );
};

export default ClassRoom;
