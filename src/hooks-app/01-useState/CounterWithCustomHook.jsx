import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();
  const valueIncrement = 2;
  const valueDecrement = 2;

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>
      <hr />
      <button onClick={ () => increment(valueIncrement) } className='btn btn-primary mx-1'>+{valueIncrement}</button>
      <button onClick={ reset } className='btn btn-primary mx-1'>Reset</button>
      <button onClick={ () => decrement(valueDecrement) } className='btn btn-primary'>-{valueDecrement}</button>
    </>
  )
}
