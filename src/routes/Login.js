import React, { useRef } from 'react'
import request from '../utils/request'

export default function Login(props) {
  const username = useRef()
  const password = useRef()
  return (
    <div>
      用户名：
      <input type='text' ref={username} />
      密码：
      <input type='password' ref={password} />

      <button onClick={() => {
        console.log(username.current.value, password.current.value)
        request('/users/login', {
          method: 'POST',
          body: JSON.stringify({
            username: username.current.value,
            password: password.current.value
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          console.log(res.data)

          if (res.data.ok === 1) {
            localStorage.setItem('token', 'mytoken')
            props.history.push('/center')
          } else {
            alert('用户名密码不匹配')
          }
        })
      }}>登录</button>
    </div>
  )
}
