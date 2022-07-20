import { memo } from "react"

export const Small = memo(({ value }) => {
  console.log('componente Small')
  return (
    <small>{ value }</small>
  )
})
