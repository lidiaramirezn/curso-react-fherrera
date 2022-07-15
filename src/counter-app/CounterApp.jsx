import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1 )
  }

  const handleSubtract = () => {
    setCounter( counter - 1 );
  }

  const handleReset = () => {
    setCounter( value )
  }

  return (
    <>
      {/* <h3>Contador</h3> */}
      <p>{ counter }</p>

      <button onClick= { handleAdd }> +1 </button>
      <button onClick= { handleSubtract }> -1 </button>
      <button aria-label="btn-reset" onClick= { handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
