import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPen, removePen } from '../../js/toolkitSlicer';

const PenHook = () => {
  const pens = useSelector((state) => state.pen.penCount);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);


  const handleRemovePen = () => {
    dispatch(removePen(number));
  };

  return (
    <>
      <h1> Number of pens - {pens} </h1>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={dispatch(addPen(number))}> buy {number} pen </button>
      <button onClick={handleRemovePen}> sell {number} pen </button>
    </>
  );
};

export default PenHook;
