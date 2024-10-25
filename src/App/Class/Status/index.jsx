import "./base.css";

const Status = (props) => {
  const data = "85%";

  return (
    <>
      <div className="Status">
        <div className="Progress">
          <div className="Current" style={{ width: data }}></div>
        </div>
        {data}
      </div>
    </>
  );
};

export default Status;
