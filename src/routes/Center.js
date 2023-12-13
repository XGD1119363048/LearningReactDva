import { withRouter } from 'dva/router'
import React from 'react'

export default function Center() {
  return (
    <div>
      Center
      <WithChild />
    </div>
  )
}

function Child(props) {
  return <div>
    <button onClick={() => {
      // console.log(props)
      localStorage.removeItem('token')
      props.history.push('/login')
    }}>退出登录</button>
  </div>
}

const WithChild = withRouter(Child)
