// Book.jsx
import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, sellBook } from '../../js/action/action';

const Bookhook = () => {
  const [number, setNumber] = useState(1);
  const books = useSelector((state) => state.book.count);
  const dispatch = useDispatch();

  const memoizedAddBook = useCallback(
    (quantity) => {
      dispatch(addBook(quantity));
    },
    [dispatch]
  );

  const memoizedSellBook = useCallback(
    (quantity) => {
      dispatch(sellBook(quantity));
    },
    [dispatch]
  );

  return (
    <>
      <h1> Number of books - {books} </h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      ></input>
      <button onClick={() => memoizedAddBook(number)}> buy {number} book </button>
      <button onClick={() => memoizedSellBook(number)}> sell {number} book </button>
    </>
  );
};

export default Bookhook;
