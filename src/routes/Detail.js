import React, { useEffect } from 'react'

export default function Detail(props) {
  useEffect(() => {
    console.log(props.match.params.id)
  }, [])
  
  return (
    <div>Detail</div>
  )
}
