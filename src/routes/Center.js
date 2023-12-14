import { withRouter } from 'dva/router'
import React, { useEffect } from 'react'
import request from '../utils/request'

export default function Center() {
  return (
    <div>
      Center
      <WithChild />
    </div>
  )
}

function Child(props) {
  useEffect(() => {
    request('/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4').then(res => {
      console.log(res.data)
    })

    request('/users').then(res => {
      console.log(res.data)
    })
  }, [])
  return <div>
    <button onClick={() => {
      // console.log(props)
      localStorage.removeItem('token')
      props.history.push('/login')
    }}>退出登录</button>
  </div>
}

const WithChild = withRouter(Child)
