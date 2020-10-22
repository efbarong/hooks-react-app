import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(200);

  return (
    <>
      <h1>Counter with custom hook: {state}</h1>

      <button className="btn btn-primary" onClick={() => decrement(1)}> - 1 </button>
      <button className="btn btn-warning" onClick={reset}> Reset </button>
      <button className="btn btn-success" onClick={() => increment(1)}> + 1 </button>
    </>
  )
}
