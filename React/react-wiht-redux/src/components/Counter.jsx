import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Features/counterSlice";
// task 1
const Counter = () => {
  const count = useSelector((state) => state.count.count);
  // console.log(count)
  const dispatch = useDispatch();
  return (
    <div className="p-5">
      <h1>Redux counter</h1>
      <button
        className="btn btn-primary"
        onClick={()=>dispatch(increment())}
      >
        +
      </button>
      <span className="fs-3 mx-4">{count}</span>
      <button className="btn btn-primary" onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
