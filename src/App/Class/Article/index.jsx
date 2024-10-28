import "./base.css";

import { useState, useEffect } from "react";
import SubSection from "./SubSection";
import Question from "./Questions/Question";
import Loader from "./Loader";

const Article = (props) => {
  useEffect(() => {}, []);
  return (
    <>
      <section className="Article">
        {props.type === "Section" ? (
          <SubSection id={props.id} />
        ) : props.type === "Question" ? (
          <Question id={props.id} />
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default Article;
