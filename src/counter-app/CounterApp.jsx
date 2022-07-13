import PropTypes from 'prop-types';
import './counter.css';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1 )
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{ counter }</p>

      <button onClick= { handleAdd }>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
