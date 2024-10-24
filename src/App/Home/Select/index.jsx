import "./base.css";

const Select = (props) => {
  return (
    <>
      <section className="Select">
        {[...Array(props.Length)].map((_, index) => (
          <button
            key={index}
            className="button"
            id={props.Select == index ? "Button-Select" : ""}
            onClick={() => {
              props.Changes(index);
            }}
          >
            {index}
          </button>
        ))}
      </section>
    </>
  );
};

export default Select;
