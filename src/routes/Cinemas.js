import { connect } from 'dva'
import React, { useEffect } from 'react'

function Cinemas(props) {
  useEffect(() => {
    if(props.list.length === 0) {
      // dispatch
      props.dispatch({
        type: 'maizuo/getCinemaList'
      })
    } else {
      console.log('缓存', props.list)
    }
  }, [])
  
  return (
    <div>
      <ul>
        {
          props.list.map(item => <li key={item.cinemaId}>
            {item.name}
          </li>)
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.maizuo.list
})

export default connect(mapStateToProps)(Cinemas)
