import { connect } from 'dva'
import React from 'react'
import Tabbar from '../components/Tabbar'

function App(props) {
  // console.log(props)
  return (
    <div>
      {props.children}
      {props.isShow && <Tabbar />}
    </div>
  )
}

export default connect((state) => {
  // console.log(state)
  return {
    a: 1,
    isShow: state.maizuo.isShow
  }
})(App)
