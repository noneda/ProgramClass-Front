import { useState, useEffect } from "react";
import "./base.css";
import ThemeToggler from "./Header";
import Aside from "./Aside";

const ClassRoom = () => {
  return (
    <>
      <ThemeToggler>Class Name</ThemeToggler>
      <section className="Container-Class">
        <Aside />
      </section>
    </>
  );
};

export default ClassRoom;
