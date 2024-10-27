import Section from "./Section";
import "./base.css";

const Aside = (props) => {
  return (
    <>
      <aside className="menu">
        <Section
          Send={props.Send}
          slcSec={props.slcSec}
          setSlcSec={props.setSlcSec}
          slcSub={props.slcSub}
          setSlcSub={props.setSlcSub}
        />
      </aside>
    </>
  );
};

export default Aside;
