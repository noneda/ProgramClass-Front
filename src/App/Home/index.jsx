import { useState, useEffect } from "react";
import Header from "./Header";
import Blocks from "./Blocks";
import "./base.css";
import Select from "./Select";

const Home = () => {
  const [isBox, setIsBox] = useState([]);
  const [isShow, setIsShow] = useState(0);

  useEffect(() => {
    setIsBox([
      [],
      [
        {
          title: "Class Tittle",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, aperiam itaque blanditiis eaque velit eligendi aliquam quasi, nihil optio consequatur qui in perferendis temporibus reiciendis praesentium? Voluptatibus, voluptate exercitationem?",
        },
      ],
      [
        {
          title: "Class Tittle",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, aperiam itaque blanditiis eaque velit eligendi aliquam quasi, nihil optio consequatur qui in perferendis temporibus reiciendis praesentium? Voluptatibus, voluptate exercitationem?",
        },
        {
          title: "Class Tittle 1",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, aperiam itaque blanditiis eaque velit eligendi aliquam quasi, nihil optio consequatur qui in perferendis temporibus reiciendis praesentium? Voluptatibus, voluptate exercitationem?",
        },
      ],
      [
        {
          title: "Class Tittle",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, aperiam itaque blanditiis eaque velit eligendi aliquam quasi, nihil optio consequatur qui in perferendis temporibus reiciendis praesentium? Voluptatibus, voluptate exercitationem?",
        },
        {
          title: "Class Tittle 1",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, aperiam itaque blanditiis eaque velit eligendi aliquam quasi, nihil optio consequatur qui in perferendis temporibus reiciendis praesentium? Voluptatibus, voluptate exercitationem?",
        },
        {
          title: "Class Tittle 2",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, aperiam itaque blanditiis eaque velit eligendi aliquam quasi, nihil optio consequatur qui in perferendis temporibus reiciendis praesentium? Voluptatibus, voluptate exercitationem?",
        },
      ],
    ]);
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
              <Blocks key={i} title={element.title} text={element.text} />
            ))}
          </section>
        ))}
      </section>
      <Select Select={isShow} Length={isBox.length} Changes={setIsShow} />
    </>
  );
};

export default Home;
