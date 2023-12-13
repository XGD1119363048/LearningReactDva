import { connect } from 'dva'
import React, { useEffect } from 'react'

function Detail(props) {
  useEffect(() => {
    console.log(props.match.params.id)
    // console.log(props)

    props.dispatch({
      type: 'maizuo/hide'
    })

    return () => {
      props.dispatch({
        type: 'maizuo/show'
      })
    }
  }, [])
  
  
  return (
    <div>Detail</div>
  )
}

export default connect()(Detail)
