import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

  const [counter, setCounter] = useState(5);

  const incrementFather= useCallback(
    (value) => {
      setCounter((c) => c + value  );
    },
    [],
  )
  
  
  

  /* const incrementMain = () => {
    setCounter(counter+1)
  } */

  return (
    <>
      <h1>CallBackHook { counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather}/>
    </>
  )
}
