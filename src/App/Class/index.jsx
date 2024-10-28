import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThemeToggler from "./Header";
import Aside from "./Aside";
import Article from "./Article";
import Status from "./Status";
import { UniqueClass } from "../../Utils/Api";
import "./base.css";

const ClassRoom = () => {
  const [isDataAside, setDataAside] = useState([]);
  const [isTitle, setTittle] = useState("");
  const [slcSec, setSlcSec] = useState(null);
  const [slcSub, setSlcSub] = useState(null);
  const [idSlc, setIdSlc] = useState(0);
  const [typeSlc, setTypeSlc] = useState("");

  const { id } = useParams();

  const fetchData = async () => {
    const { Class, set } = await UniqueClass(id);
    setDataAside(set || []);
    setTittle(Class);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ThemeToggler> {isTitle}</ThemeToggler>
      <section className="Container-Class">
        <Aside
          Send={isDataAside}
          slcSec={slcSec}
          setSlcSec={setSlcSec}
          slcSub={slcSub}
          setSlcSub={setSlcSub}
          setIdSlc={setIdSlc}
          setTypeSlc={setTypeSlc}
        />
        <Article id={idSlc} type={typeSlc} />
        <Status Send={50} />
      </section>
    </>
  );
};

export default ClassRoom;
