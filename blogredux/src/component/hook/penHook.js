// Pen.jsx
import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPen, removePen } from '../../js/action/penAction';

const PenHook = () => {
  const [number, setNumber] = useState(1);
  const pens = useSelector((state) => state.pen.count);
  const dispatch = useDispatch();

  const memoizedAddPen = useCallback(
    (quantity) => {
      dispatch(addPen(quantity));
    },
    [dispatch]
  );

  const memoizedRemovePen = useCallback(
    (quantity) => {
      dispatch(removePen(quantity));
    },
    [dispatch]
  );

  return (
    <>
      <h1> Number of pens Hook - {pens} </h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      ></input>
      <button onClick={() => memoizedAddPen(number)}> buy {number} pen </button>
      <button onClick={() => memoizedRemovePen(number)}> sell {number} pen </button>
    </>
  );
};

export default PenHook;
