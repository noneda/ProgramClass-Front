import "./base.css";

const Status = ({ Send }) => {
  const Percentage = () => {
    let x = 0;
    let y = 0;
    Send.map((item) => {
      item.See.map((i) => {
        x++;
        i ? y++ : y;
      });
    });
    return (100 / x) * y;
  };

  return (
    <>
      <div className="Status">
        <div className="Progress">
          <div className="Current" style={{ width: Percentage() + "%" }}></div>
        </div>
        {Percentage().toFixed(2)} %
      </div>
    </>
  );
};

export default Status;
