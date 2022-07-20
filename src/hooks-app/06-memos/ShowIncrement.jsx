import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('En ShowIncrement')

  return (
    <button 
      className="btn btn-primary" 
      onClick={() => { increment(5); }}>Incrementar</button>
  )
})
