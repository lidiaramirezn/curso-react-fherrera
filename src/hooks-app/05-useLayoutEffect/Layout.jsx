import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples/components'

export const Layout = () => {

  const { counter, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  return (
    <div className="container-fluid">
      <h1>Breaking Bad Quote</h1>
      <hr />
      {
        isLoading ? <LoadingQuote /> : <Quote author = {author} quote={quote}/>
      }
      
      <button 
        className="btn btn-primary" 
        disabled={ isLoading}
        onClick={ () => increment()}>Next quote
      </button>
      
    </div>
  )
}
