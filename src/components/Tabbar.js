import React from 'react'
import style from './Tabbar.css'
import { NavLink } from 'dva/router'

export default function Tabbar() {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to='/films' activeClassName={style.active}>Films</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' activeClassName={style.active}>Cinemas</NavLink>
        </li>
        <li>
          <NavLink to='/center' activeClassName={style.active}>Center</NavLink>
        </li>
      </ul>
    </footer>
  )
}
