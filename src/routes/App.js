import React from 'react'
import Tabbar from '../components/Tabbar'

export default function App(props) {
  return (
    <div>
      {props.children}
      <Tabbar />
    </div>
  )
}
