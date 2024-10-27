import { useState, useEffect } from "react";
import Header from "./Header";
import Blocks from "./Blocks";
import "./base.css";
import Select from "./Select";
import { allClass } from "../../Utils/Api";

const Home = () => {
  const [isBox, setIsBox] = useState([]);
  const [isShow, setIsShow] = useState(0);

  const fetchData = async () => {
    const result = await allClass();
    setIsBox(result || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="Container">
        {isBox.map((item, index) => (
          <section
            key={index}
            className="Carousel-Container"
            id={isShow === index ? "Show" : ""}
          >
            {item.map((element, i) => (
              <Blocks
                key={i}
                index={i}
                title={element.title}
                Complete={element.Complete}
                text={element.text}
              />
            ))}
          </section>
        ))}
      </section>
      <Select Select={isShow} Length={isBox.length} Changes={setIsShow} />
    </>
  );
};

export default Home;
