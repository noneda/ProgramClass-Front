import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./base.css";
import ThemeToggler from "./Header";
import Aside from "./Aside";
import Article from "./Article";
import Status from "./Status";

const ClassRoom = () => {
  const [MenuDataTemporal, setMenuDataTemporal] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    setMenuDataTemporal([
      {
        Section: "Section 1",
        Class: ["Class One", "Class Two", "Class Three"],
        See: [false, false, false],
      },
      {
        Section: "Section 2",
        Class: ["Class One", "Class Two", "Class Three"],
        See: [false, false, false],
      },
      {
        Section: "Section 3",
        Class: ["Class One", "Class Two", "Class Three"],
        See: [false, false, false],
      },
      {
        Section: "Section 4",
        Class: ["Class One", "Class Two", "Class Three"],
        See: [false, false, false],
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
      <ThemeToggler>Class Tittle {id}</ThemeToggler>
      <section className="Container-Class">
        <Aside Send={MenuDataTemporal} />
        <Article />
        <Status />
      </section>
    </>
  );
};

export default ClassRoom;
