const Time = ({ cuenta, start, succesWords }) => {
  return (
    <>
      <div className="time_input_container">
        <div className={`time ${start && "show"}`}>
          <div className="time-after">
            <p>{succesWords}</p>
          </div>
          <p ref={cuenta}>300</p>
        </div>
      </div>
    </>
  );
};

export default Time;
