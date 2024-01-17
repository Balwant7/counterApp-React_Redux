import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const refs = useRef();

  const handleIncremrnt = () => {
    dispatch({ type: "INCREMNET" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleCustomAdd = () => {
    let inputvalue = refs.current.value;
    dispatch({ type: "CUSTOMADD", payload: { number: refs.current.value } });
    refs.current.value = "";
  };
  const handleCustomSubs = () => {
    let inputvalue = refs.current.value;
    dispatch({ type: "CUSTOMSUBS", payload: { number: refs.current.value } });
    refs.current.value = "";
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-lg px-4 gap-3 increment text-white"
        style={{ backgroundColor: "rgb(119, 67, 219)" }}
        onClick={handleIncremrnt}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg px-4"
        onClick={handleDecrement}
      >
        -1
      </button>
      <br />
      <div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Number"
            ref={refs}
          />
          <button
            type="button"
            className="btn btn-lg px-4 my-3 increment btn-success text-white"
            onClick={handleCustomAdd}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-lg px-4 mx-3  increment btn-danger text-white"
            onClick={handleCustomSubs}
          >
            Substract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
